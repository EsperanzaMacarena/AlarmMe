package com.escacena.alarmme.ui.alarms;

import android.app.PendingIntent;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

import com.escacena.alarmme.R;
import com.escacena.alarmme.common.Constants;
import com.escacena.alarmme.common.MyApp;
import com.escacena.alarmme.model.Place;
import com.escacena.alarmme.receiver.GeofenceBroadcastReceiver;
import com.escacena.alarmme.receiver.GeofenceErrorMessages;
import com.escacena.alarmme.response.ResponseAllAlarm;
import com.escacena.alarmme.response.ResponseGooglePlaces;
import com.escacena.alarmme.ui.AlarmCreateActivity;
import com.escacena.alarmme.viewmodel.AlarmViewModel;
import com.escacena.alarmme.viewmodel.GooglePlacesViewModel;
import com.google.android.gms.location.Geofence;
import com.google.android.gms.location.GeofencingClient;
import com.google.android.gms.location.GeofencingRequest;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.android.gms.tasks.Task;

import java.util.ArrayList;
import java.util.List;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProvider;
import androidx.recyclerview.widget.RecyclerView;


public class AlarmFragment extends Fragment implements OnCompleteListener<Void> {

    // TODO: Customize parameter argument names
    private static final String ARG_COLUMN_COUNT = "column-count";
    // TODO: Customize parameters
    private int mColumnCount = 1;
    private AlarmViewModel alarmViewModel;
    private MyAlarmRecyclerViewAdapter myAlarmRecyclerViewAdapter;
    RecyclerView recyclerView;
    Context context;
    String alarmId;
    View view;
    List alarmList;
    private ProgressDialog myProgress;

    private GooglePlacesViewModel googlePlacesViewModel;


    //GEOFENCING VARS
    private static final String TAG = AlarmCreateActivity.class.getSimpleName();


    private enum PendingGeofenceTask {
        ADD, REMOVE, NONE
    }

    private GeofencingClient geofencingClient;
    private List<Geofence> geofences;
    private PendingIntent geofencePendingIntent;
    private PendingGeofenceTask mPendingGeofenceTask = PendingGeofenceTask.NONE;


    /**
     * Mandatory empty constructor for the fragment manager to instantiate the
     * fragment (e.g. upon screen orientation changes).
     */
    public AlarmFragment() {
    }

    // TODO: Customize parameter initialization
    @SuppressWarnings("unused")
    public static AlarmFragment newInstance(int columnCount) {
        AlarmFragment fragment = new AlarmFragment();
        Bundle args = new Bundle();
        args.putInt(ARG_COLUMN_COUNT, columnCount);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        if (getArguments() != null) {
            mColumnCount = getArguments().getInt(ARG_COLUMN_COUNT);
        }
        alarmViewModel = new ViewModelProvider(getActivity()).get(AlarmViewModel.class);
        googlePlacesViewModel = new ViewModelProvider(this).get(GooglePlacesViewModel.class);

        geofencingClient = LocationServices.getGeofencingClient(getActivity());
        geofences = new ArrayList<>();
        geofencePendingIntent = null;

        myProgress = new ProgressDialog(getActivity());
        myProgress.setTitle("Cargando alarmas");
        myProgress.setMessage("Por favor, espere...");
        myProgress.setCancelable(false);
        myProgress.setIndeterminate(true);
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        view = inflater.inflate(R.layout.fragment_alarm_list, container, false);

        context = view.getContext();
        recyclerView = view.findViewById(R.id.listAlarm);
        removeGeofences();
        loadAlarms();

        return view;
    }


    public void loadAlarms() {
        myProgress.show();
        alarmList = new ArrayList();
        myAlarmRecyclerViewAdapter = new MyAlarmRecyclerViewAdapter(getActivity(), alarmList, alarmViewModel, getActivity());
        recyclerView.setAdapter(myAlarmRecyclerViewAdapter);
        alarmViewModel.getAllAlarms().observe(getActivity(), new Observer<List<ResponseAllAlarm>>() {
            @Override
            public void onChanged(List<ResponseAllAlarm> responseAllAlarms) {
                myProgress.dismiss();
                myAlarmRecyclerViewAdapter.setData(responseAllAlarms);

                myAlarmRecyclerViewAdapter.notifyDataSetChanged();
                if (!responseAllAlarms.isEmpty()) setGeofences(responseAllAlarms);
            }
        });
    }

    public void setGeofences(List<ResponseAllAlarm> resp) {
        Log.d("SIZE ALARMS", String.valueOf(resp.size()));
        for (int i = 0; i < resp.size(); i++) {
            if (!resp.get(i).getUbication().isEmpty()) {
                if (!resp.get(i).getType().getPlaces().equals(Constants.TRANSPORT) && !resp.get(i).getType().getPlaces().equals(Constants.GO_TO)) {
                    String location = resp.get(i).getUbication().get(0) + "," + resp.get(i).getUbication().get(1);
                    getPlacesGoogle1000(location, resp.get(i).getType().getPlaces().toLowerCase());
                } else if (resp.get(i).getType().getPlaces().equals(Constants.TRANSPORT)) {
                    String chain = resp.get(i).getName() + "#" + " esta próximo a tu localización " + "#" + resp.get(i).getType().getPlaces().toLowerCase();
                    Double lat = Double.parseDouble(resp.get(i).getUbication().get(0));
                    Double lng = Double.parseDouble(resp.get(i).getUbication().get(1));
                    populateGeofenceList(chain, lat, lng);
                }
            }
        }

    }

    public void getPlacesGoogle1000(final String location, final String type) {
        googlePlacesViewModel.getPlaces1000(location, type).observe(this, new Observer<ResponseGooglePlaces>() {
            @Override
            public void onChanged(ResponseGooglePlaces responseGooglePlaces) {
                if (responseGooglePlaces.getStatus().equals(Constants.GOOGLE_PLACES_NO_RESULTS))
                    getPlacesGoogle2000(location, type);
                else {
                    Place p = responseGooglePlaces.getResults().get(0);
                    String chain = p.getName() + "#" + p.getVicinity() + "#" + type;
                    Double lat = Double.parseDouble(p.getGeometry().getLocation().getLat());
                    Double lng = Double.parseDouble(p.getGeometry().getLocation().getLng());
                    populateGeofenceList(chain, lat, lng);
                }

            }
        });
    }


    public void getPlacesGoogle2000(String location, final String type) {
        googlePlacesViewModel.getPlaces2000(location, type).observe(this, new Observer<ResponseGooglePlaces>() {
            @Override
            public void onChanged(ResponseGooglePlaces responseGooglePlaces) {
                if (responseGooglePlaces.equals(Constants.GOOGLE_PLACES_NO_RESULTS))
                    Toast.makeText(MyApp.getContext(), "No hay ningún " + type + "cercano a tu ubicación", Toast.LENGTH_SHORT).show();
                else {
                    Place p = responseGooglePlaces.getResults().get(0);
                    String chain = p.getName() + "#" + p.getVicinity() + "#" + type;
                    Double lat = Double.parseDouble(p.getGeometry().getLocation().getLat());
                    Double lng = Double.parseDouble(p.getGeometry().getLocation().getLng());
                    populateGeofenceList(chain, lat, lng);
                }
            }
        });
    }

    public void populateGeofenceList(String chain, Double lat, Double lng) {
        geofences.add(new Geofence.Builder()
                .setRequestId(chain)
                .setCircularRegion(
                        lat,
                        lng,
                        Constants.GEOFENCING_RADIUS
                ).setExpirationDuration(Constants.GEOFENCE_EXPIRATION)
                .setTransitionTypes(Geofence.GEOFENCE_TRANSITION_ENTER | Geofence.GEOFENCE_TRANSITION_EXIT)
                .build());

        Log.d("LIST OF GEOFENCES", geofences.toString());
        addGeofences();
    }


    public void addGeofences() {
        GeofencingRequest req = new GeofencingRequest.Builder()
                .setInitialTrigger(GeofencingRequest.INITIAL_TRIGGER_ENTER)
                .addGeofences(geofences)
                .build();

        geofencingClient.addGeofences(req, getGeofencePendingIntent())
                .addOnSuccessListener(getActivity(), new OnSuccessListener<Void>() {
                    @Override
                    public void onSuccess(Void aVoid) {
                        Log.d("GEOFENCE ADDED", "TRUE");
                    }
                })
                .addOnFailureListener(getActivity(), new OnFailureListener() {
                    @Override
                    public void onFailure(Exception e) {
                        Log.d("GEOFENCE ADDED", e.getMessage());
                    }
                });

    }

    private void removeGeofences() {
        geofencingClient.removeGeofences(getGeofencePendingIntent()).addOnCompleteListener(this);
    }

    @Override
    public void onComplete(@NonNull Task<Void> task) {
        mPendingGeofenceTask = PendingGeofenceTask.NONE;
        if (task.isSuccessful()) {
            updateGeofencesAdded(!getGeofencesAdded());
        } else {
            String errorMessage = GeofenceErrorMessages.getErrorString(getActivity(), task.getException());
            Log.w(TAG, errorMessage);
        }
    }

    private PendingIntent getGeofencePendingIntent() {
        // Reuse the PendingIntent if we already have it.
        if (geofencePendingIntent != null) {
            return geofencePendingIntent;
        }
        Intent intent = new Intent(getActivity(), GeofenceBroadcastReceiver.class);
        // We use FLAG_UPDATE_CURRENT so that we get the same pending intent back when calling
        // addGeofences() and removeGeofences().
        geofencePendingIntent = PendingIntent.getBroadcast(getActivity(), 0, intent, PendingIntent.FLAG_UPDATE_CURRENT);
        return geofencePendingIntent;
    }


    private boolean getGeofencesAdded() {
        return PreferenceManager.getDefaultSharedPreferences(getActivity()).getBoolean(
                Constants.GEOFENCES_ADDED_KEY, false);
    }


    private void updateGeofencesAdded(boolean added) {
        PreferenceManager.getDefaultSharedPreferences(getActivity())
                .edit()
                .putBoolean(Constants.GEOFENCES_ADDED_KEY, added)
                .apply();
    }


}

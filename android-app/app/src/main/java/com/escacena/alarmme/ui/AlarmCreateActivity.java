package com.escacena.alarmme.ui;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.core.app.ActivityCompat;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProvider;

import android.Manifest;
import android.app.Activity;
import android.app.PendingIntent;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.location.Location;
import android.location.LocationManager;
import android.net.Uri;
import android.os.Bundle;
import android.os.Looper;
import android.preference.PreferenceManager;
import android.provider.Settings;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.escacena.alarmme.MainActivity;
import com.escacena.alarmme.R;
import com.escacena.alarmme.common.Constants;
import com.escacena.alarmme.common.MyApp;
import com.escacena.alarmme.model.Place;
import com.escacena.alarmme.receiver.GeofenceBroadcastReceiver;
import com.escacena.alarmme.receiver.GeofenceErrorMessages;
import com.escacena.alarmme.request.RequestAlarmCreate;
import com.escacena.alarmme.response.Consorcio;
import com.escacena.alarmme.response.Linea;
import com.escacena.alarmme.response.Parada;
import com.escacena.alarmme.response.ResponseAllAlarm;
import com.escacena.alarmme.response.ResponseConsorcios;
import com.escacena.alarmme.response.ResponseGooglePlaces;
import com.escacena.alarmme.response.ResponseLineas;
import com.escacena.alarmme.response.ResponseParadas;
import com.escacena.alarmme.response.ResponseType;
import com.escacena.alarmme.viewmodel.AlarmViewModel;
import com.escacena.alarmme.viewmodel.CtanViewModel;
import com.escacena.alarmme.viewmodel.GooglePlacesViewModel;
import com.escacena.alarmme.viewmodel.TypeViewModel;
import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.Geofence;
import com.google.android.gms.location.GeofencingClient;
import com.google.android.gms.location.GeofencingRequest;
import com.google.android.gms.location.LocationCallback;
import com.google.android.gms.location.LocationRequest;
import com.google.android.gms.location.LocationResult;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.android.gms.tasks.Task;
import com.google.android.material.snackbar.Snackbar;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import butterknife.BindView;
import butterknife.ButterKnife;

public class AlarmCreateActivity extends AppCompatActivity {
    @BindView(R.id.create_alarm_type)
    EditText type;
    @BindView(R.id.create_alarm_title)
    EditText title;
    @BindView(R.id.create_alarm_consorcio)
    EditText consorcio;
    @BindView(R.id.create_alarm_linea)
    EditText linea;
    @BindView(R.id.create_alarm_parada)
    EditText parada;
    @BindView(R.id.type_transport)
    ConstraintLayout transport;
    @BindView(R.id.create_btn)
    Button create;


    //LOCATION VARS
    FusedLocationProviderClient mFusedLocationClient;
    private String ubication[];
    private ResponseType choosen;
    private Consorcio consorcioElegido;
    private Linea lineaElegida;
    private Parada paradaElegida;

    //VIEWMODEL
    private TypeViewModel typeViewModel;
    private AlarmViewModel alarmViewModel;
    private GooglePlacesViewModel googlePlacesViewModel;
    private CtanViewModel ctanViewModel;

    //
    HashMap<String, Double[]> geoValues = new HashMap<>();

    Activity activity;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_alarm_create);

        ButterKnife.bind(this);

        typeViewModel = new ViewModelProvider(this).get(TypeViewModel.class);
        alarmViewModel = new ViewModelProvider(this).get(AlarmViewModel.class);
        googlePlacesViewModel = new ViewModelProvider(this).get(GooglePlacesViewModel.class);
        ctanViewModel = new ViewModelProvider(this).get(CtanViewModel.class);

        mFusedLocationClient = LocationServices.getFusedLocationProviderClient(this);
        ubication = new String[2];


        create.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(MyApp.getContext(), "Debes indicar un tipo de alarma", Toast.LENGTH_SHORT).show();
            }
        });

        loadTypes();

    }


    //Método para obtener tipos de alarma (alarmas predefinidas, la de transporte o la de ir a un sitio)
    void loadTypes() {
        typeViewModel.getTypes().observe(this, new Observer<List<ResponseType>>() {
            @Override
            public void onChanged(final List<ResponseType> responseTypes) {
                setDialogTypes(responseTypes);
            }
        });
    }

    //Diálogo que lista los tipos de alarma
    void setDialogTypes(final List<ResponseType> responseTypes) {
        type.setOnFocusChangeListener(new View.OnFocusChangeListener() {
            @Override
            public void onFocusChange(View v, boolean hasFocus) {
                if (hasFocus) {
                    AlertDialog.Builder dialog = new AlertDialog.Builder(AlarmCreateActivity.this);
                    dialog.setTitle("Selecciona el tipo de alarma");
                    final String[] titles = new String[responseTypes.size()];

                    for (int i = 0; i < titles.length; i++) {
                        titles[i] = responseTypes.get(i).getDescription();
                    }

                    dialog.setItems(titles, new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            choosen = responseTypes.get(which);
                            type.setText(choosen.getDescription());
                            if (choosen.getPlaces().equals(Constants.TRANSPORT)) {
                                //OPCIÓN DE TRANSPORTE (PONER transport EN VISIBLE)
                                transport.setVisibility(View.VISIBLE);
                                //Boton de elegir consorcio
                                elegirConsorcio();
                            } else if (choosen.getPlaces().equals(Constants.GO_TO)) {
                                //TODO: OPCIÓN DE SEÑALAR EN MAPA, ABRIR MAPA Y DEMÁS.
                            } else {
                                getLastLocation();
                                title.setText(choosen.getDescription());
                                setCreateButton();
                            }

                            dialog.dismiss();

                        }
                    });
                    AlertDialog alert = dialog.create();
                    alert.show();
                }
            }
        });
    }

    //Botón de crear
    void setCreateButton() {
        create.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                RequestAlarmCreate request = RequestAlarmCreate.builder()
                        .name(title.getText().toString().isEmpty() ? choosen.getDescription() : title.getText().toString())
                        .type(choosen.get_id())
                        .ubication(ubication)
                        .build();

                alarmViewModel.createAlarm(request).observe(AlarmCreateActivity.this, new Observer<ResponseAllAlarm>() {
                    @Override
                    public void onChanged(ResponseAllAlarm alarm) {

                            finish();

                    }
                });
            }
        });
    }


    private boolean isLocationEnabled() {
        LocationManager locationManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);
        return locationManager.isProviderEnabled(LocationManager.GPS_PROVIDER) || locationManager.isProviderEnabled(
                LocationManager.NETWORK_PROVIDER
        );
    }

    private void getLastLocation() {
        if (isLocationEnabled()) {
            mFusedLocationClient.getLastLocation().addOnCompleteListener(
                    new OnCompleteListener<Location>() {
                        @Override
                        public void onComplete(Task<Location> task) {
                            Location location = task.getResult();
                            if (location == null) {
                                requestNewLocationData();
                            } else {
                                ubication[0] = String.valueOf(location.getLatitude());
                                ubication[1] = String.valueOf(location.getLongitude());
                            }
                        }
                    }
            );
        } else {
            Toast.makeText(this, "Turn on location", Toast.LENGTH_LONG).show();
            Intent intent = new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS);
            startActivity(intent);
        }

    }

    private void requestNewLocationData() {

        LocationRequest mLocationRequest = new LocationRequest();
        mLocationRequest.setPriority(LocationRequest.PRIORITY_HIGH_ACCURACY);
        mLocationRequest.setInterval(0);
        mLocationRequest.setFastestInterval(0);
        mLocationRequest.setNumUpdates(1);

        mFusedLocationClient = LocationServices.getFusedLocationProviderClient(this);
        mFusedLocationClient.requestLocationUpdates(
                mLocationRequest, mLocationCallback,
                Looper.myLooper()
        );

    }

    private LocationCallback mLocationCallback = new LocationCallback() {
        @Override
        public void onLocationResult(LocationResult locationResult) {
            Location location = locationResult.getLastLocation();
            ubication[0] = String.valueOf(location.getLatitude());
            ubication[1] = String.valueOf(location.getLongitude());
        }
    };

    public void elegirConsorcio() {
        consorcio.setOnFocusChangeListener(new View.OnFocusChangeListener() {
            @Override
            public void onFocusChange(View view, boolean b) {
                if (b) {
                    final AlertDialog.Builder dialogConsorcio = new AlertDialog.Builder(AlarmCreateActivity.this);
                    dialogConsorcio.setTitle("Selecciona el consorcio");
                    ctanViewModel.getResponseConsorciosMutableLiveData().observe(AlarmCreateActivity.this, new Observer<ResponseConsorcios>() {
                        @Override
                        public void onChanged(final ResponseConsorcios responseConsorcios) {
                            final String[] titles = new String[responseConsorcios.getConsorcios().size()];
                            for (int i = 0; i < titles.length; i++) {
                                titles[i] = responseConsorcios.getConsorcios().get(i).getNombre();
                            }
                            dialogConsorcio.setItems(titles, new DialogInterface.OnClickListener() {
                                @Override
                                public void onClick(DialogInterface dialogInterface, int i) {
                                    consorcioElegido = responseConsorcios.getConsorcios().get(i);
                                    consorcio.setText(consorcioElegido.getNombre());
                                    linea.setVisibility(View.VISIBLE);
                                    dialogInterface.dismiss();
                                    elegirLinea();
                                }
                            });

                            AlertDialog alertConsorcio = dialogConsorcio.create();
                            alertConsorcio.show();


                        }
                    });

                }
            }
        });

    }

    public void elegirLinea() {
        linea.setOnFocusChangeListener(new View.OnFocusChangeListener() {
            @Override
            public void onFocusChange(View view, boolean b) {
                if (b) {
                    final AlertDialog.Builder dialogLinea = new AlertDialog.Builder(AlarmCreateActivity.this);
                    dialogLinea.setTitle("Seleccione la linea");
                    ctanViewModel.getResponseLineasMutableLiveData(consorcioElegido.getIdConsorcio()).observe(AlarmCreateActivity.this, new Observer<ResponseLineas>() {
                        @Override
                        public void onChanged(final ResponseLineas responseLineas) {
                            final String[] titles = new String[responseLineas.getLineas().size()];
                            for (int i = 0; i < titles.length; i++) {
                                titles[i] = responseLineas.getLineas().get(i).getNombre();
                            }
                            dialogLinea.setItems(titles, new DialogInterface.OnClickListener() {
                                @Override
                                public void onClick(DialogInterface dialogInterface, int i) {
                                    lineaElegida = responseLineas.getLineas().get(i);
                                    linea.setText(lineaElegida.getNombre());
                                    parada.setVisibility(View.VISIBLE);
                                    dialogInterface.dismiss();
                                    elegirParada();
                                }
                            });

                            AlertDialog alertLinea = dialogLinea.create();
                            alertLinea.show();

                        }
                    });
                }
            }
        });
    }

    public void elegirParada() {
        parada.setOnFocusChangeListener(new View.OnFocusChangeListener() {
            @Override
            public void onFocusChange(View view, boolean b) {
                if (b) {
                    final AlertDialog.Builder dialogParada = new AlertDialog.Builder(AlarmCreateActivity.this);
                    dialogParada.setTitle("Seleccione parada");
                    ctanViewModel.getResponseParadasMutableLiveData(consorcioElegido.getIdConsorcio(), lineaElegida.getIdLinea()).observe(AlarmCreateActivity.this, new Observer<ResponseParadas>() {
                        @Override
                        public void onChanged(final ResponseParadas responseParadas) {
                            final String[] titles = new String[responseParadas.getParadas().size()];
                            for (int i = 0; i < titles.length; i++) {
                                titles[i] = responseParadas.getParadas().get(i).getNombre();
                            }
                            dialogParada.setItems(titles, new DialogInterface.OnClickListener() {
                                @Override
                                public void onClick(DialogInterface dialogInterface, int i) {
                                    paradaElegida = responseParadas.getParadas().get(i);
                                    parada.setText(paradaElegida.getNombre());
                                    ubication[0] = paradaElegida.getLatitud();
                                    ubication[1] = paradaElegida.getLongitud();
                                    dialogInterface.dismiss();
                                    setCreateButton();
                                }
                            });
                            AlertDialog alertParada = dialogParada.create();
                            alertParada.show();
                        }
                    });
                }
            }
        });
    }


}

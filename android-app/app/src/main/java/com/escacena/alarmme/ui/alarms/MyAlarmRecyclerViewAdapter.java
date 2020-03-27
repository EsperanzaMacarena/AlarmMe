package com.escacena.alarmme.ui.alarms;

import android.app.Activity;
import android.content.Context;
import android.content.DialogInterface;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.CompoundButton;
import android.widget.ImageView;
import android.widget.Switch;
import android.widget.TextView;

import com.escacena.alarmme.R;
import com.escacena.alarmme.common.Constants;
import com.escacena.alarmme.response.ResponseAllAlarm;
import com.escacena.alarmme.viewmodel.AlarmViewModel;

import java.util.ArrayList;
import java.util.List;

import androidx.appcompat.app.AlertDialog;
import androidx.recyclerview.widget.RecyclerView;


public class MyAlarmRecyclerViewAdapter extends RecyclerView.Adapter<MyAlarmRecyclerViewAdapter.ViewHolder> {
    private Activity activity;
    private List<ResponseAllAlarm> mValues;
    private AlarmViewModel alarmViewModel;
    Context context;
    RecyclerView recyclerView;


    public MyAlarmRecyclerViewAdapter(Activity activity, List<ResponseAllAlarm> mValues, AlarmViewModel alarmViewModel, Context context) {
        this.activity = activity;
        this.mValues = mValues;
        this.alarmViewModel = alarmViewModel;
        this.context = context;
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.fragment_alarm, parent, false);
        return new ViewHolder(view);
    }


    @Override
    public void onBindViewHolder(final ViewHolder holder, int position) {
        holder.mItem = mValues.get(position);
        holder.alarmTitle.setText(holder.mItem.getName());
        holder.activatedSwitch.setChecked(holder.mItem.getActivated());
        holder.activatedSwitch.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton compoundButton, boolean b) {
                alarmViewModel.activateOrDeactivateAlarm(holder.mItem.getId());
            }
        });

        holder.mView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                alarmViewModel.setIdAlarmSeleccionado(holder.mItem.getId());
                // Intent success = new Intent(MyApp.getContext(), CLASE DE MODIFICAR O MAS INFO);
                // context.startActivity(success);
            }
        });

        holder.mView.setOnLongClickListener(new View.OnLongClickListener() {
            @Override
            public boolean onLongClick(View view) {
                AlertDialog.Builder builder = new AlertDialog.Builder(activity);
                builder.setPositiveButton("Borrar", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        alarmViewModel.deleteAlarm(holder.mItem.getId());

                    }
                });
                builder.setNegativeButton("No", null);
                builder.setMessage("¿Está seguro que desea borrar el alarma?");
                builder.setTitle(R.string.app_name);
                builder.show();

                return false;
            }
        });

        holder.imageViewIcon.setImageResource(setIcon(holder.mItem));
    }

    @Override
    public int getItemCount() {
        if (mValues != null) {
            return mValues.size();
        } else {
            return 0;
        }
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        public final View mView;
        public final TextView alarmTitle;
        public final Switch activatedSwitch;
        public final ImageView imageViewIcon;

        public ResponseAllAlarm mItem;

        public ViewHolder(View view) {
            super(view);
            mView = view;
            alarmTitle = (TextView) view.findViewById(R.id.textView_alarm_title);
            activatedSwitch = (Switch) view.findViewById(R.id.switchAlarmActivaded);
            imageViewIcon = (ImageView) view.findViewById(R.id.imageViewIcon);

        }


    }

    public void setData(List<ResponseAllAlarm> list) {
        if (this.mValues != null) {
            this.mValues.clear();
        } else {
            this.mValues = new ArrayList<>();
        }
        this.mValues.addAll(list);
        notifyDataSetChanged();
    }


    public int setIcon(ResponseAllAlarm mItem){
        int icon = 0;

        switch (mItem.getType().getPlaces()){
            case Constants.TRANSPORT:
                icon= R.drawable.ic_directions_bus_primary_24dp;
                break;
            case Constants.GO_TO:
                icon= R.drawable.ic_map_primary_24dp;
                break;
            case "ATM":
                icon= R.drawable.ic_local_atm_primary_24dp;
                break;
            case "BANK":
                icon= R.drawable.ic_local_atm_primary_24dp;
                break;
            case "PHARMACY":
                icon= R.drawable.ic_local_hospital_primary_24dp;
                break;
            case "BICYCLE_STORE":
                icon= R.drawable.ic_directions_bike_priamry_24dp;
                break;
            case "PET_STORE":
                icon= R.drawable.ic_pets_primary_24dp;
                break;
            default:
                icon= R.drawable.ic_store_primary_24dp;
                break;
        }
        return icon;
    }

}

package com.escacena.alarmme.ui.alarms;

import androidx.appcompat.app.AlertDialog;
import androidx.fragment.app.DialogFragment;
import androidx.fragment.app.FragmentManager;
import androidx.recyclerview.widget.RecyclerView;

import android.app.Activity;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Switch;
import android.widget.TextView;


import com.escacena.alarmme.BoardActivity;
import com.escacena.alarmme.MainActivity;
import com.escacena.alarmme.R;
import com.escacena.alarmme.RegisterActivity;
import com.escacena.alarmme.common.MyApp;
import com.escacena.alarmme.response.ResponseAllAlarm;
import com.escacena.alarmme.viewmodel.AlarmViewModel;

import java.util.ArrayList;
import java.util.List;


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

        public ResponseAllAlarm mItem;

        public ViewHolder(View view) {
            super(view);
            mView = view;
            alarmTitle = (TextView) view.findViewById(R.id.textView_alarm_title);
            activatedSwitch = (Switch) view.findViewById(R.id.switchAlarmActivaded);

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


}

package com.escacena.alarmme;

import androidx.recyclerview.widget.RecyclerView;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Switch;
import android.widget.TextView;


import com.escacena.alarmme.dummy.DummyContent.DummyItem;
import com.escacena.alarmme.response.ResponseAllAlarm;
import com.escacena.alarmme.viewmodel.AlarmViewModel;

import java.util.ArrayList;
import java.util.List;


public class MyAlarmRecyclerViewAdapter extends RecyclerView.Adapter<MyAlarmRecyclerViewAdapter.ViewHolder> {

    private List<ResponseAllAlarm> mValues;
    private AlarmViewModel alarmViewModel;
    Context context;
    RecyclerView recyclerView;

    public MyAlarmRecyclerViewAdapter(List<ResponseAllAlarm> mValues, AlarmViewModel alarmViewModel, Context context) {
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
    }

    @Override
    public int getItemCount() {
        if(mValues != null){
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
            alarmTitle  = (TextView) view.findViewById(R.id.textView_alarm_title);
            activatedSwitch = (Switch) view.findViewById(R.id.switchAlarmActivaded);

        }


    }

    public void setData(List<ResponseAllAlarm> list){
        if(this.mValues != null) {
            this.mValues.clear();
        } else {
            this.mValues =  new ArrayList<>();
        }
        this.mValues.addAll(list);
        notifyDataSetChanged();
    }
}

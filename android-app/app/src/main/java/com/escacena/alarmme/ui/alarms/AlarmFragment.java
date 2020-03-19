package com.escacena.alarmme.ui.alarms;

import android.content.Context;
import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProvider;
import androidx.recyclerview.widget.RecyclerView;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.escacena.alarmme.R;
import com.escacena.alarmme.response.ResponseAllAlarm;
import com.escacena.alarmme.viewmodel.AlarmViewModel;

import java.util.ArrayList;
import java.util.List;


public class AlarmFragment extends Fragment {

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
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        view = inflater.inflate(R.layout.fragment_alarm_list, container, false);

        context = view.getContext();
        recyclerView = view.findViewById(R.id.listAlarm);

        loadAlarms();

        return view;
    }


    public void loadAlarms(){
        alarmList = new ArrayList();
        myAlarmRecyclerViewAdapter = new MyAlarmRecyclerViewAdapter(alarmList, alarmViewModel, getActivity());
        recyclerView.setAdapter(myAlarmRecyclerViewAdapter);
        alarmViewModel.getAllAlarms().observe(getActivity(), new Observer<List<ResponseAllAlarm>>() {
            @Override
            public void onChanged(List<ResponseAllAlarm> responseAllAlarms) {
                myAlarmRecyclerViewAdapter.setData(responseAllAlarms);

                myAlarmRecyclerViewAdapter.notifyDataSetChanged();
            }
        });
    }

}

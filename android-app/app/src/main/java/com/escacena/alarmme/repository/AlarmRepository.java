package com.escacena.alarmme.repository;

import android.util.Log;
import android.widget.Toast;

import com.escacena.alarmme.client.AlarmMeAPI;
import com.escacena.alarmme.common.MyApp;
import com.escacena.alarmme.response.ResponseAllAlarm;
import com.escacena.alarmme.response.ResponseLogin;
import com.escacena.alarmme.response.ResponseNewAlarm;
import com.escacena.alarmme.service.ServiceAlarmMeAPI;
import com.google.gson.Gson;

import java.io.IOException;
import java.util.List;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class AlarmRepository {
    private ServiceAlarmMeAPI service;
    private MutableLiveData<List<ResponseAllAlarm>> listAlarms = new MutableLiveData<>();

    public AlarmRepository() {
        this.service = AlarmMeAPI.getInstance(false).getService();
    }

    public LiveData<List<ResponseAllAlarm>> getAllAlarms() {
        Call<List<ResponseAllAlarm>> call = service.getAllAlarms();
        call.enqueue(new Callback<List<ResponseAllAlarm>>() {
            @Override
            public void onResponse(Call<List<ResponseAllAlarm>> call, Response<List<ResponseAllAlarm>> response) {
                if (response.isSuccessful()) {
                    listAlarms.setValue(response.body());
                } else {
                    try {
                        Gson gson = new Gson();
                        Log.d("ERROR", response.toString());
                        Error error = gson.fromJson(response.errorBody().string(), Error.class);
                        Toast.makeText(MyApp.getContext(), error.getMessage(), Toast.LENGTH_SHORT).show();
                    } catch (IOException ex) {
                        Log.d("EX", ex.getMessage());
                    }
                }
            }

            @Override
            public void onFailure(Call<List<ResponseAllAlarm>> call, Throwable t) {
                Toast.makeText(MyApp.getContext(), t.getMessage(), Toast.LENGTH_SHORT).show();

            }
        });
        return listAlarms;
    }
}

package com.escacena.alarmme.repository;

import android.widget.Toast;

import androidx.lifecycle.MutableLiveData;

import com.escacena.alarmme.client.AlarmMeAPI;
import com.escacena.alarmme.common.MyApp;
import com.escacena.alarmme.response.ResponseType;
import com.escacena.alarmme.service.ServiceAlarmMeAPI;
import com.google.gson.Gson;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class TypeRepository {
    private ServiceAlarmMeAPI service;
    private MutableLiveData<List<ResponseType>> types = new MutableLiveData<>();

    public TypeRepository() {
        this.service = AlarmMeAPI.getInstance(true).getService();
    }

    public MutableLiveData<List<ResponseType>> getTypes() {
        Call<List<ResponseType>> call = service.getTypes();
        call.enqueue(new Callback<List<ResponseType>>() {
            @Override
            public void onResponse(Call<List<ResponseType>> call, Response<List<ResponseType>> response) {
                if (response.isSuccessful()) {
                    types.setValue(response.body());
                } else {
                    Gson gson = new Gson();
                    Error error = gson.fromJson(response.errorBody().charStream(), Error.class);
                    Toast.makeText(MyApp.getContext(), error.getMessage(), Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<List<ResponseType>> call, Throwable t) {
                Toast.makeText(MyApp.getContext(), t.getMessage(), Toast.LENGTH_SHORT).show();
            }
        });
        return types;
    }
}

package com.escacena.alarmme.repository;

import android.util.Log;
import android.widget.Toast;

import androidx.lifecycle.MutableLiveData;

import com.escacena.alarmme.client.AlarmMeAPI;
import com.escacena.alarmme.client.GoogleAPI;
import com.escacena.alarmme.common.Constants;
import com.escacena.alarmme.common.MyApp;
import com.escacena.alarmme.response.ResponseAllAlarm;
import com.escacena.alarmme.response.ResponseGooglePlaces;
import com.escacena.alarmme.service.ServiceAlarmMeAPI;
import com.escacena.alarmme.service.ServiceGoogleAPI;
import com.google.gson.Gson;

import java.io.IOException;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class GooglePlacesRepository {
    ServiceGoogleAPI service;
    private MutableLiveData<ResponseGooglePlaces> places1000 = new MutableLiveData<>();
    private MutableLiveData<ResponseGooglePlaces> places2000 = new MutableLiveData<>();

    public GooglePlacesRepository() {
        this.service = GoogleAPI.getInstance().getService();
    }

    public MutableLiveData<ResponseGooglePlaces> getPlaces1000(String location, String type, String radius) {
        Call<ResponseGooglePlaces> call = service.getPlaces(location, type, radius);
        call.enqueue(new Callback<ResponseGooglePlaces>() {
            @Override
            public void onResponse(Call<ResponseGooglePlaces> call, Response<ResponseGooglePlaces> response) {
                if (response.isSuccessful()) {
                    Log.d("RESPONSE GOOGLE PLACES REPO", response.body().toString());
                    places1000.setValue(response.body());
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
            public void onFailure(Call<ResponseGooglePlaces> call, Throwable t) {
                Toast.makeText(MyApp.getContext(), t.getMessage(), Toast.LENGTH_SHORT).show();

            }
        });
        return places1000;
    }

    public MutableLiveData<ResponseGooglePlaces> getPlaces2000(String location, String type, String radius) {
        Call<ResponseGooglePlaces> call = service.getPlaces(location, type, radius);
        call.enqueue(new Callback<ResponseGooglePlaces>() {
            @Override
            public void onResponse(Call<ResponseGooglePlaces> call, Response<ResponseGooglePlaces> response) {
                if (response.isSuccessful()) {
                    Log.d("RESPONSE GOOGLE PLACES REPO", response.body().toString());
                    places2000.setValue(response.body());
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
            public void onFailure(Call<ResponseGooglePlaces> call, Throwable t) {
                Toast.makeText(MyApp.getContext(), t.getMessage(), Toast.LENGTH_SHORT).show();

            }
        });
        return places2000;
    }
}

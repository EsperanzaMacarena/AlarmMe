package com.escacena.alarmme.repository;

import android.util.Log;
import android.widget.Toast;

import com.escacena.alarmme.client.GoogleAPI;
import com.escacena.alarmme.common.MyApp;
import com.escacena.alarmme.response.ResponseGooglePlaces;
import com.escacena.alarmme.service.ServiceGoogleAPI;
import com.google.gson.Gson;

import java.io.IOException;

import androidx.lifecycle.MutableLiveData;
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
                    places1000.setValue(response.body());
                } else {
                    try {
                        Gson gson = new Gson();
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
                    places2000.setValue(response.body());
                } else {
                    try {
                        Gson gson = new Gson();
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

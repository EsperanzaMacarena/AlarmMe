package com.escacena.alarmme.repository;

import android.util.Log;
import android.widget.Toast;

import com.escacena.alarmme.client.AlarmMeAPI;
import com.escacena.alarmme.common.MyApp;
import com.escacena.alarmme.request.RequestLogin;
import com.escacena.alarmme.request.RequestRegister;
import com.escacena.alarmme.response.ResponseLogin;
import com.escacena.alarmme.service.ServiceAlarmMeAPI;
import com.google.gson.Gson;

import java.io.IOException;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class LoginRegisterRepository {
    private ServiceAlarmMeAPI service;
    private MutableLiveData<ResponseLogin> login = new MutableLiveData<>();

    public LoginRegisterRepository() {
        this.service = AlarmMeAPI.getInstance(false).getService();
    }

    public LiveData<ResponseLogin> login(final RequestLogin req) {
        Call<ResponseLogin> call = service.login(req);
        call.enqueue(new Callback<ResponseLogin>() {
            @Override
            public void onResponse(Call<ResponseLogin> call, Response<ResponseLogin> response) {
                if (response.isSuccessful()) {
                    login.setValue(response.body());

                } else {
                    try {
                        Gson gson = new Gson();
                        Log.d("ERROR", response.toString());
                        Error error = gson.fromJson(response.errorBody().string(), Error.class);
                        Toast.makeText(MyApp.getContext(), error.getMessage(), Toast.LENGTH_SHORT).show();
                    }catch(IOException ex){
                        Log.d("EX",ex.getMessage());
                    }
                }
            }

            @Override
            public void onFailure(Call<ResponseLogin> call, Throwable t) {
                Toast.makeText(MyApp.getContext(), t.getMessage(), Toast.LENGTH_SHORT).show();
            }
        });

        return login;
    }

    public LiveData<ResponseLogin> register(RequestRegister req) {
        Call<ResponseLogin> call = service.register(req);
        call.enqueue(new Callback<ResponseLogin>() {
            @Override
            public void onResponse(Call<ResponseLogin> call, Response<ResponseLogin> response) {
                if (response.isSuccessful()) {
                    login.setValue(response.body());

                } else {
                    try {
                        Gson gson = new Gson();
                        Log.d("ERROR", response.toString());
                        Error error = gson.fromJson(response.errorBody().string(), Error.class);
                        Toast.makeText(MyApp.getContext(), error.getMessage(), Toast.LENGTH_SHORT).show();
                    }catch(IOException ex){
                        Log.d("EX",ex.getMessage());
                    }
                }
            }

            @Override
            public void onFailure(Call<ResponseLogin> call, Throwable t) {
                Toast.makeText(MyApp.getContext(), t.getMessage(), Toast.LENGTH_SHORT).show();
            }
        });

        return login;
    }
}

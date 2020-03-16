package com.escacena.alarmme.repository;

import android.util.Log;
import android.widget.Toast;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;

import com.escacena.alarmme.client.AlarmMeAPI;
import com.escacena.alarmme.common.MyApp;
import com.escacena.alarmme.request.RequestLogin;
import com.escacena.alarmme.response.ResponseLogin;
import com.escacena.alarmme.service.ServiceAlarmMeAPI;
import com.google.android.material.snackbar.Snackbar;
import com.google.gson.Gson;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class UserRepository {
    private ServiceAlarmMeAPI service;
    private MutableLiveData<ResponseLogin> login = new MutableLiveData<>();

    public UserRepository(){
        this.service = AlarmMeAPI.getInstance(false).getService();
    }

    public LiveData<ResponseLogin> login(RequestLogin req){
        Call<ResponseLogin> call = service.login(req);
        call.enqueue(new Callback<ResponseLogin>() {
            @Override
            public void onResponse(Call<ResponseLogin> call, Response<ResponseLogin> response) {
                if(response.isSuccessful()){
                    login.setValue(response.body());

                }else{
                    Gson gson = new Gson();
                    Error error = gson.fromJson(response.errorBody().charStream(),Error.class);
                    Toast.makeText(MyApp.getContext(), error.getMessage(),Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<ResponseLogin> call, Throwable t) {
                Toast.makeText(MyApp.getContext(), t.getMessage(),Toast.LENGTH_SHORT).show();
            }
        });

        return login;
    }

}

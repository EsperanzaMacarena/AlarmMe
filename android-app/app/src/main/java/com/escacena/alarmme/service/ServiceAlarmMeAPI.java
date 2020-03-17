package com.escacena.alarmme.service;

import com.escacena.alarmme.request.RequestLogin;
import com.escacena.alarmme.request.RequestRegister;
import com.escacena.alarmme.response.ResponseLogin;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface ServiceAlarmMeAPI {
    @POST("login")
    Call<ResponseLogin> login(@Body RequestLogin request);

    @POST("register")
    Call<ResponseLogin> register(@Body RequestRegister request);
}

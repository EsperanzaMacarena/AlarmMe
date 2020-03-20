package com.escacena.alarmme.service;

import com.escacena.alarmme.request.RequestAlarmCreate;
import com.escacena.alarmme.request.RequestDeleteAlarm;
import com.escacena.alarmme.request.RequestLogin;
import com.escacena.alarmme.request.RequestRegister;
import com.escacena.alarmme.response.ResponseAllAlarm;
import com.escacena.alarmme.response.ResponseDeletePicture;
import com.escacena.alarmme.response.ResponsePicture;
import com.escacena.alarmme.response.ResponseType;
import com.escacena.alarmme.response.ResponseLogin;
import com.escacena.alarmme.response.ResponseUser;

import java.util.List;

import okhttp3.MultipartBody;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.DELETE;
import retrofit2.http.GET;
import retrofit2.http.Multipart;
import retrofit2.http.POST;

import retrofit2.http.PUT;
import retrofit2.http.Part;

import retrofit2.http.Path;


public interface ServiceAlarmMeAPI {
    @POST("login")
    Call<ResponseLogin> login(@Body RequestLogin request);

    @POST("register")
    Call<ResponseLogin> register(@Body RequestRegister request);

    @GET("alarms/myalarms")
    Call<List<ResponseAllAlarm>> getAllAlarms ();

    @GET("type")
    Call<List<ResponseType>> getTypes();

    @POST("alarms")
    Call<ResponseAllAlarm> createAlarm(@Body RequestAlarmCreate req);

    @DELETE("alarms/{id}")
    Call<Void> deleteAlarm(@Path("id") String id);

    @GET("user/me")
    Call<ResponseUser> getCurrentUser();

    @GET("img")
    Call<ResponsePicture> getCurrentUserPicture();

    @DELETE("user/img")
    Call<ResponseDeletePicture> deletePicture();

    @Multipart
    @PUT("user/img")
    Call<ResponseUser> updatePicture(@Part MultipartBody.Part avatar );

}

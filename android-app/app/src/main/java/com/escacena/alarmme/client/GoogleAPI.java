package com.escacena.alarmme.client;

import com.escacena.alarmme.common.Constants;
import com.escacena.alarmme.service.ServiceGoogleAPI;

import okhttp3.OkHttpClient;
import okhttp3.logging.HttpLoggingInterceptor;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class GoogleAPI {
    private static GoogleAPI instance = null;
    private ServiceGoogleAPI service;
    private Retrofit retrofit;
    private HttpLoggingInterceptor loggingInterceptor;
    private OkHttpClient.Builder httpClient;


    public GoogleAPI(){
        loggingInterceptor = new HttpLoggingInterceptor().setLevel(HttpLoggingInterceptor.Level.BODY);

        httpClient = new OkHttpClient.Builder().addInterceptor(loggingInterceptor);
        httpClient.addInterceptor(new InterceptorGoogleQueryToken());
        retrofit = new Retrofit
                .Builder()
                .baseUrl(Constants.BASE_URL_GOOGLE)
                .client(httpClient.build())
                .addConverterFactory(GsonConverterFactory.create())
                .build();
        service = retrofit.create(ServiceGoogleAPI.class);

    }

    public static GoogleAPI getInstance() {
        instance = new GoogleAPI();
        return instance;
    }

    public ServiceGoogleAPI getService() {
        return service;
    }

}

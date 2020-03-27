package com.escacena.alarmme.client;

import com.escacena.alarmme.common.Constants;
import com.escacena.alarmme.service.ServiceCTAN;

import okhttp3.OkHttpClient;
import okhttp3.logging.HttpLoggingInterceptor;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class CtanAPI {

    private static CtanAPI instance = null;
    private ServiceCTAN service;
    private Retrofit retrofit;
    private HttpLoggingInterceptor loggingInterceptor;
    private OkHttpClient.Builder httpClient;


    public CtanAPI() {
       create();
    }

    public static CtanAPI getInstance() {
        instance = new CtanAPI();
        return instance;
    }

    public ServiceCTAN getService() {
        return service;
    }

    public void create() {
        loggingInterceptor = new HttpLoggingInterceptor().setLevel(HttpLoggingInterceptor.Level.BODY);

        httpClient = new OkHttpClient.Builder().addInterceptor(loggingInterceptor);

        retrofit = new Retrofit
                .Builder()
                .baseUrl(Constants.BASE_URL_CTAN_API)
                .client(httpClient.build())
                .addConverterFactory(GsonConverterFactory.create())
                .build();
        service = retrofit.create(ServiceCTAN.class);
    }


}

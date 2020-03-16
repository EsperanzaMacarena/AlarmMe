package com.escacena.alarmme.client;

import com.escacena.alarmme.common.Constants;
import com.escacena.alarmme.service.ServiceAlarmMeAPI;

import okhttp3.OkHttpClient;
import okhttp3.logging.HttpLoggingInterceptor;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class AlarmMeAPI {
    private static AlarmMeAPI instance = null;
    private ServiceAlarmMeAPI service;
    private Retrofit retrofit;
    private HttpLoggingInterceptor loggingInterceptor;
    private OkHttpClient.Builder httpClient;


    public AlarmMeAPI(boolean withToken) {
        loggingInterceptor = new HttpLoggingInterceptor().setLevel(HttpLoggingInterceptor.Level.BODY);
        httpClient = new OkHttpClient.Builder().addInterceptor(loggingInterceptor);
        if (withToken) {
            //TODO: AÑADIR INTERCEPTOR CON TOKEN
        } else {
            //TODO: ELIMINAR INTERCEPTOR CON TOKEN EN EL HTTPCLIENT
        }

        retrofit = new Retrofit
                .Builder()
                .baseUrl(Constants.BASE_URL_ALARMME_API)
                .client(httpClient.build())
                .addConverterFactory(GsonConverterFactory.create())
                .build();
        service = retrofit.create(ServiceAlarmMeAPI.class);
    }

    public static AlarmMeAPI getInstance(boolean withToken) {
        if (instance == null)
            instance = new AlarmMeAPI(withToken);
        return instance;
    }

    public ServiceAlarmMeAPI getService() {
        return service;
    }

}

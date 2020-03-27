package com.escacena.alarmme.client;

import com.escacena.alarmme.common.Constants;
import com.escacena.alarmme.common.SharedPreferencesManager;
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
        if(withToken){
            createWithToken();
        }else{
            createWithoutToken();
        }
    }

    public static AlarmMeAPI getInstance(boolean withToken) {
            instance = new AlarmMeAPI(withToken);
        return instance;
    }

    public ServiceAlarmMeAPI getService() {
        return service;
    }

    public void createWithToken() {
        loggingInterceptor = new HttpLoggingInterceptor().setLevel(HttpLoggingInterceptor.Level.BODY);

        httpClient = new OkHttpClient.Builder().addInterceptor(loggingInterceptor);

        String token = SharedPreferencesManager.getSharedPreferencesManager().getString("token", null);

        if (token != null) {
            httpClient.addInterceptor(new InterceptorToken(token));
        }

        retrofit = new Retrofit
                .Builder()
                .baseUrl(Constants.BASE_URL_ALARMME_API)
                .client(httpClient.build())
                .addConverterFactory(GsonConverterFactory.create())
                .build();
        service = retrofit.create(ServiceAlarmMeAPI.class);
    }

    public void createWithoutToken() {
        loggingInterceptor = new HttpLoggingInterceptor().setLevel(HttpLoggingInterceptor.Level.BODY);

        httpClient = new OkHttpClient.Builder().addInterceptor(loggingInterceptor);

        retrofit = new Retrofit
                .Builder()
                .baseUrl(Constants.BASE_URL_ALARMME_API)
                .client(httpClient.build())
                .addConverterFactory(GsonConverterFactory.create())
                .build();
        service = retrofit.create(ServiceAlarmMeAPI.class);
    }

}

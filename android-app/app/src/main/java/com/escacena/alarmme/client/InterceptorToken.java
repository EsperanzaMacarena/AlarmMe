package com.escacena.alarmme.client;

import org.jetbrains.annotations.NotNull;

import java.io.IOException;

import okhttp3.Interceptor;
import okhttp3.Request;
import okhttp3.Response;

public class InterceptorToken implements Interceptor {
    private String token;

    public InterceptorToken(String token){
        this.token=token;
    }
    @NotNull
    @Override
    public Response intercept(@NotNull Chain chain) throws IOException {
        Request original = chain.request();

        Request.Builder requestBuilder = original.newBuilder().header("Authorization", "Bearer " + token);

        Request request = requestBuilder.build();

        return chain.proceed(request);
    }

}

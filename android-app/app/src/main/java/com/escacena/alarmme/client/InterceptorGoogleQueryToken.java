package com.escacena.alarmme.client;




import com.escacena.alarmme.BuildConfig;

import org.jetbrains.annotations.NotNull;

import java.io.IOException;

import okhttp3.HttpUrl;
import okhttp3.Interceptor;
import okhttp3.Request;
import okhttp3.Response;

public class InterceptorGoogleQueryToken implements Interceptor {
    @NotNull
    @Override
    public Response intercept(@NotNull Chain chain) throws IOException {
        Request original = chain.request();

        HttpUrl originalHttpUrl = original.url();

        HttpUrl url = originalHttpUrl.newBuilder()
                .addQueryParameter("key", BuildConfig.MIGUEL_GRACIAS_KEY)
                .build();
        Request.Builder builder = original.newBuilder().url(url);

        Request req = builder.build();

        return  chain.proceed(req);
    }
}

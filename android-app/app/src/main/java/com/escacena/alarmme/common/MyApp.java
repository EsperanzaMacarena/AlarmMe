package com.escacena.alarmme.common;

import android.app.Application;
import android.content.Context;

public class MyApp extends Application {
    private static Context context;

    public static Context getContext() {
        return MyApp.context;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        MyApp.context=getApplicationContext();
    }
}

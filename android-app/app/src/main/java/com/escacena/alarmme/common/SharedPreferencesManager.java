package com.escacena.alarmme.common;

import android.content.Context;
import android.content.SharedPreferences;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class SharedPreferencesManager {
    private static final String APP_SETTINGS_FILE = "APP_SETTINGS";

    public static SharedPreferences getSharedPreferencesManager(){
        return MyApp.getContext().getSharedPreferences(APP_SETTINGS_FILE, Context.MODE_PRIVATE);
    }

    public static void setSomeStringValue(String label, String value){
        SharedPreferences.Editor editor = getSharedPreferencesManager().edit();
        editor.putString(label, value);
        editor.commit();
    }
}

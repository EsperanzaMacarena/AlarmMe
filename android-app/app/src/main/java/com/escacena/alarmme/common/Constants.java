package com.escacena.alarmme.common;

public class Constants {
    public static final String BASE_URL_ALARMME_API="https://alarm-me-api.herokuapp.com/api/";
    public static final String ROUTE_ALARMME_IMG_CURRENT_USER="img";

    public static final String BASE_URL_CTAN_API="http://api.ctan.es/v1/Consorcios/";
    public static final String BASE_URL_GOOGLE="https://maps.googleapis.com/maps/api/";

    public static final String TRANSPORT = "TRANSPORT";
    public static final String GO_TO="GO_TO";

    public static final int GOOGLE_SIGN_IN = 123;

    public static final String GOOGLE_PLACES_RADIUS_1000 = "1000";
    public static final String GOOGLE_PLACES_RADIUS_2000 = "2000";
    public static final String GOOGLE_PLACES_NO_RESULTS="ZERO_RESULTS";

    public static final float GEOFENCING_RADIUS =100;
    public static final long GEOFENCE_EXPIRATION = 12 * 60 * 60 * 1000;
    public static final String PACKAGE_NAME = "com.google.android.gms.location.Geofence";
    public  static final String GEOFENCES_ADDED_KEY = PACKAGE_NAME + ".GEOFENCES_ADDED_KEY";

}

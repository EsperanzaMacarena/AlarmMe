package com.escacena.alarmme.receiver;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;


public class GeofenceBroadcastReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        // Enqueues a JobIntentService passing the context and intent as parameters
        GeofenceTransitionsIntentService.enqueueWork(context, intent);
    }
    /*GeofenceTransitionsIntentService service = new GeofenceTransitionsIntentService();
    public void onReceive(Context context, Intent intent) {
        GeofencingEvent geofencingEvent = GeofencingEvent.fromIntent(intent);
        if (geofencingEvent.hasError()) {
            Log.d("GEOFENCE ERROR",String.valueOf(geofencingEvent.getErrorCode()));
            return;
        }

        // Get the transition type.
        int geofenceTransition = geofencingEvent.getGeofenceTransition();

        // Test that the reported transition was of interest.
        if (geofenceTransition == Geofence.GEOFENCE_TRANSITION_ENTER ||
                geofenceTransition == Geofence.GEOFENCE_TRANSITION_EXIT) {

            // Get the geofences that were triggered. A single event can trigger
            // multiple geofences.
            List<Geofence> triggeringGeofences = geofencingEvent.getTriggeringGeofences();

            // Get the transition details as a String.
            String geofenceTransitionDetails = service.getGeofenceTransitionDetails( geofencingEvent);

            // Send notification and log the transition details.
            service.sendNotification(geofenceTransitionDetails);
            Log.i("GEOFENCE TRANSITION DETAILS", geofenceTransitionDetails);
        } else {
            // Log the error.
            Log.e("ERROR GEOFENCE RECEIVER", String.valueOf(geofenceTransition));
        }
    }*/
}
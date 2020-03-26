package com.escacena.alarmme.viewmodel;

import android.app.Application;

import androidx.annotation.NonNull;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.LiveData;

import com.escacena.alarmme.common.Constants;
import com.escacena.alarmme.repository.GooglePlacesRepository;
import com.escacena.alarmme.response.ResponseGooglePlaces;

import java.util.List;

public class GooglePlacesViewModel extends AndroidViewModel {
    private GooglePlacesRepository repository;

    public GooglePlacesViewModel(@NonNull Application application) {
        super(application);
        repository = new GooglePlacesRepository();
    }

    public LiveData<ResponseGooglePlaces> getPlaces1000(String location, String type){return repository.getPlaces1000(location, type, Constants.GOOGLE_PLACES_RADIUS_1000);}
    public LiveData<ResponseGooglePlaces> getPlaces2000(String location, String type){return repository.getPlaces2000(location, type, Constants.GOOGLE_PLACES_RADIUS_2000);}

}

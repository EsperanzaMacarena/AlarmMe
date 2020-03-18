package com.escacena.alarmme.viewmodel;

import android.app.Application;

import com.escacena.alarmme.repository.AlarmRepository;

import androidx.annotation.NonNull;
import androidx.lifecycle.AndroidViewModel;

public class AlarmViewModel extends AndroidViewModel {
    private AlarmRepository repository;
    public AlarmViewModel(@NonNull Application application) {
        super(application);
        repository = new AlarmRepository();
    }
}

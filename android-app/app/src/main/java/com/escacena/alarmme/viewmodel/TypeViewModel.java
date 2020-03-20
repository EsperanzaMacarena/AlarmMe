package com.escacena.alarmme.viewmodel;

import android.app.Application;

import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.LiveData;

import com.escacena.alarmme.repository.TypeRepository;
import com.escacena.alarmme.response.ResponseType;

import java.util.List;

import lombok.NonNull;

public class TypeViewModel extends AndroidViewModel {
    private TypeRepository repository;

    public TypeViewModel (@NonNull Application application) {
        super(application);
        repository = new TypeRepository();
    }

    public LiveData<List<ResponseType>> getTypes (){return repository.getTypes();}
}

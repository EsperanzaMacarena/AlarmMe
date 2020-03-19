package com.escacena.alarmme.viewmodel;

import android.app.Application;

import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.LiveData;

import com.escacena.alarmme.repository.UserRepository;

import com.escacena.alarmme.response.ResponsePicture;
import com.escacena.alarmme.response.ResponseUser;

import lombok.NonNull;

public class UserViewModel extends AndroidViewModel {
    private UserRepository repository;

    public UserViewModel(@NonNull Application application) {
        super(application);
        repository = new UserRepository();
    }

    public LiveData<ResponseUser> getCurrentUser(){return repository.getCurrentUser();}
    public LiveData<ResponsePicture> getCurrentUserPicture(){return repository.getCurrentUserPicture();}
}

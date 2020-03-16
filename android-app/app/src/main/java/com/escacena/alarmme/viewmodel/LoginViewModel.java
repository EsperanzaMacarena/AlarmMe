package com.escacena.alarmme.viewmodel;

import android.app.Application;

import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.LiveData;

import com.escacena.alarmme.repository.UserRepository;
import com.escacena.alarmme.request.RequestLogin;
import com.escacena.alarmme.response.ResponseLogin;

import lombok.NonNull;

public class LoginViewModel extends AndroidViewModel {
    private UserRepository repository;

    public LoginViewModel(@NonNull Application application) {
        super(application);
        repository = new UserRepository();
    }

    public LiveData<ResponseLogin> login(RequestLogin req){return repository.login(req);}

}

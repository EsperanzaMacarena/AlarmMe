package com.escacena.alarmme.viewmodel;

import android.app.Application;

import com.escacena.alarmme.repository.LoginRegisterRepository;
import com.escacena.alarmme.request.RequestLogin;
import com.escacena.alarmme.request.RequestRegister;
import com.escacena.alarmme.response.ResponseLogin;

import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.LiveData;
import lombok.NonNull;

public class LoginViewModel extends AndroidViewModel {
    private LoginRegisterRepository repository;

    public LoginViewModel(@NonNull Application application) {
        super(application);
        repository = new LoginRegisterRepository();
    }

    public LiveData<ResponseLogin> login(RequestLogin req){return repository.login(req);}
    public LiveData<ResponseLogin> register (RequestRegister req) {return repository.register(req);}

}

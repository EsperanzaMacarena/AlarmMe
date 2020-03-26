package com.escacena.alarmme.viewmodel;

import android.app.Application;

import com.escacena.alarmme.repository.AlarmRepository;
import com.escacena.alarmme.repository.CtanRepository;
import com.escacena.alarmme.response.ResponseAllAlarm;
import com.escacena.alarmme.response.ResponseConsorcios;
import com.escacena.alarmme.response.ResponseLineas;
import com.escacena.alarmme.response.ResponseParadas;

import java.util.List;

import androidx.annotation.NonNull;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.MutableLiveData;

public class CtanViewModel extends AndroidViewModel {
    private CtanRepository repository;
    private MutableLiveData<ResponseConsorcios> responseConsorciosMutableLiveData;
    private MutableLiveData<ResponseLineas> responseLineasMutableLiveData;
    private MutableLiveData<ResponseParadas> responseParadasMutableLiveData;

    public CtanViewModel(@NonNull Application application) {
        super(application);
        repository = new CtanRepository();
        responseConsorciosMutableLiveData = new MutableLiveData<>();
        responseLineasMutableLiveData = new MutableLiveData<>();
        responseParadasMutableLiveData = new MutableLiveData<>();
    }

    public MutableLiveData<ResponseConsorcios> getResponseConsorciosMutableLiveData() {
        responseConsorciosMutableLiveData = repository.getResponseConsorcios();
        return responseConsorciosMutableLiveData;
    }

    public MutableLiveData<ResponseLineas> getResponseLineasMutableLiveData(String consorcio) {
        responseLineasMutableLiveData = repository.getResponseLineas(consorcio);
        return responseLineasMutableLiveData;
    }

    public MutableLiveData<ResponseParadas> getResponseParadasMutableLiveData(String consorcio, String linea) {
        responseParadasMutableLiveData = repository.getResponseParadas(consorcio, linea);
        return responseParadasMutableLiveData;
    }

}

package com.escacena.alarmme.viewmodel;

import android.app.Application;

import com.escacena.alarmme.repository.AlarmRepository;
import com.escacena.alarmme.request.RequestAlarmCreate;
import com.escacena.alarmme.request.RequestLogin;
import com.escacena.alarmme.response.ResponseAllAlarm;
import com.escacena.alarmme.response.ResponseLogin;

import java.util.List;

import androidx.annotation.NonNull;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;

public class AlarmViewModel extends AndroidViewModel {
    private AlarmRepository repository;
    private MutableLiveData<List<ResponseAllAlarm>> responseAllAlarmList;
    private MutableLiveData<String> idAlarmSeleccionado;

    public AlarmViewModel(@NonNull Application application) {
        super(application);
        repository = new AlarmRepository();
        responseAllAlarmList = new MutableLiveData<>();

        this.idAlarmSeleccionado = new MutableLiveData<>();
        this.idAlarmSeleccionado.setValue(null);

    }

    public LiveData<List<ResponseAllAlarm>> getAllAlarms(){
        responseAllAlarmList = repository.getAllAlarms();
        return responseAllAlarmList;
    }

    public LiveData<ResponseAllAlarm> createAlarm(RequestAlarmCreate req){return repository.createAlarm(req);}

    public MutableLiveData<String> getIdAlarmSeleccionado() {
        return idAlarmSeleccionado;
    }

    public void setIdAlarmSeleccionado(String idAlarmSeleccionado) {
        this.idAlarmSeleccionado.setValue(idAlarmSeleccionado);
    }

    public void deleteAlarm (String id){
        repository.deleteAlarm(id);
    }
}

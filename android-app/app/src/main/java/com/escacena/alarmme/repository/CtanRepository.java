package com.escacena.alarmme.repository;

import android.widget.Toast;

import com.escacena.alarmme.client.CtanAPI;
import com.escacena.alarmme.common.MyApp;
import com.escacena.alarmme.response.ResponseConsorcios;
import com.escacena.alarmme.response.ResponseLineas;
import com.escacena.alarmme.response.ResponseParadas;
import com.escacena.alarmme.service.ServiceCTAN;

import java.util.List;

import androidx.lifecycle.MutableLiveData;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class CtanRepository {

    private ServiceCTAN service;
    private MutableLiveData<ResponseConsorcios> responseConsorcios;
    private MutableLiveData<ResponseLineas> responseLineas;
    private MutableLiveData<ResponseParadas> responseParadas;

    public CtanRepository() {
        this.service = CtanAPI.getInstance().getService();
    }

    public MutableLiveData<ResponseConsorcios> getResponseConsorcios() {
        Call<ResponseConsorcios> call = service.getConsorcios();
        call.enqueue(new Callback<ResponseConsorcios>() {
            @Override
            public void onResponse(Call<ResponseConsorcios> call, Response<ResponseConsorcios> response) {
                if (response.isSuccessful()) {
                    responseConsorcios.setValue(response.body());
                } else {

                }
            }

            @Override
            public void onFailure(Call<ResponseConsorcios> call, Throwable t) {
                Toast.makeText(MyApp.getContext(), t.getMessage(), Toast.LENGTH_SHORT).show();
            }
        });

        return responseConsorcios;
    }

    public MutableLiveData<ResponseLineas> getResponseLineas(String consorcio) {
        Call<ResponseLineas> call = service.getLineasOfConsorcio(consorcio);
        call.enqueue(new Callback<ResponseLineas>() {
            @Override
            public void onResponse(Call<ResponseLineas> call, Response<ResponseLineas> response) {
                if (response.isSuccessful()) {
                    responseLineas.setValue(response.body());
                } else {

                }

            }

            @Override
            public void onFailure(Call<ResponseLineas> call, Throwable t) {
                Toast.makeText(MyApp.getContext(), t.getMessage(), Toast.LENGTH_SHORT).show();
            }
        });
        return responseLineas;
    }

    public MutableLiveData<ResponseParadas> getResponseParadas(String consorcio, String linea) {
        Call<ResponseParadas> call = service.getParadasOfLinea(consorcio, linea);
        call.enqueue(new Callback<ResponseParadas>() {
            @Override
            public void onResponse(Call<ResponseParadas> call, Response<ResponseParadas> response) {
                if (response.isSuccessful()) {
                    responseParadas.setValue(response.body());
                } else {

                }
            }

            @Override
            public void onFailure(Call<ResponseParadas> call, Throwable t) {

            }
        });
        return responseParadas;
    }

}

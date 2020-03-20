package com.escacena.alarmme.service;

import com.escacena.alarmme.request.RequestLogin;
import com.escacena.alarmme.response.ResponseConsorcios;
import com.escacena.alarmme.response.ResponseLogin;
import com.escacena.alarmme.response.ResponseParadas;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.Path;

public interface ServiceCTAN {

    // LISTA DE PARADAS DEL CONSORCIO http://api.ctan.es/v1/Consorcios/:idConsorcio/paradas/
    // LISTA DE CONSORCIOS http://api.ctan.es/v1/Consorcios/consorcios

    @GET("consorcios")
    Call<ResponseConsorcios> getConsorcios();

    @GET("{id}/paradas")
    Call<ResponseParadas> getParadasOfConsorcio(@Path("id") String id);

}

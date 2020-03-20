package com.escacena.alarmme.service;

import com.escacena.alarmme.response.ResponseConsorcios;
import com.escacena.alarmme.response.ResponseLineas;
import com.escacena.alarmme.response.ResponseParadas;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;

public interface ServiceCTAN {

    // LISTA DE PARADAS DEL CONSORCIO http://api.ctan.es/v1/Consorcios/:idConsorcio/paradas/
    // LISTA DE CONSORCIOS http://api.ctan.es/v1/Consorcios/consorcios

    @GET("consorcios")
    Call<ResponseConsorcios> getConsorcios();

    @GET("{id}/lineas")
    Call<ResponseLineas> getLineasOfConsorcio(@Path("id") String id);

    @GET("{idConsorcio}/lineas/{idLinea}/paradas")
    Call<ResponseParadas> getParadasOfLinea(@Path("idConsorcio") String idConsorcio, @Path("idLinea") String idLinea);

}

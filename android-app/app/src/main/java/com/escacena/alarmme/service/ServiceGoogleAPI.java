package com.escacena.alarmme.service;

import com.escacena.alarmme.response.ResponseGooglePlaces;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Query;

public interface ServiceGoogleAPI {

    @GET("place/nearbysearch/json")
    Call<ResponseGooglePlaces> getPlaces(@Query("location") String location, @Query("type")String type,@Query("radius")String radius);
}

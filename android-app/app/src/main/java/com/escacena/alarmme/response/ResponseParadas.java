
package com.escacena.alarmme.response;

import java.util.List;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class ResponseParadas {

    @SerializedName("paradas")
    @Expose
    private List<Parada> paradas = null;

    public List<Parada> getParadas() {
        return paradas;
    }

    public void setParadas(List<Parada> paradas) {
        this.paradas = paradas;
    }

}

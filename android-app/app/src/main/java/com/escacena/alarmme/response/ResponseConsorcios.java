
package com.escacena.alarmme.response;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.util.List;

public class ResponseConsorcios {

    @SerializedName("consorcios")
    @Expose
    private List<Consorcio> consorcios = null;

    public List<Consorcio> getConsorcios() {
        return consorcios;
    }

    public void setConsorcios(List<Consorcio> consorcios) {
        this.consorcios = consorcios;
    }

}

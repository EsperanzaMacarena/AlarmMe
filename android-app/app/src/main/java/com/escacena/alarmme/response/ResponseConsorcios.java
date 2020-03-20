
package com.escacena.alarmme.response;

import java.util.List;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

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

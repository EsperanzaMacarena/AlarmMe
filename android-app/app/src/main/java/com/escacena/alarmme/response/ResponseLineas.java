
package com.escacena.alarmme.response;

import java.util.List;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class ResponseLineas {

    @SerializedName("lineas")
    @Expose
    private List<Linea> lineas = null;

    public List<Linea> getLineas() {
        return lineas;
    }

    public void setLineas(List<Linea> lineas) {
        this.lineas = lineas;
    }

}

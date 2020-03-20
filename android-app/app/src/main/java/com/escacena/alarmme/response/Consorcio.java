
package com.escacena.alarmme.response;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class Consorcio {

    @SerializedName("idConsorcio")
    @Expose
    private String idConsorcio;
    @SerializedName("nombre")
    @Expose
    private String nombre;
    @SerializedName("nombreCorto")
    @Expose
    private String nombreCorto;

    public String getIdConsorcio() {
        return idConsorcio;
    }

    public void setIdConsorcio(String idConsorcio) {
        this.idConsorcio = idConsorcio;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getNombreCorto() {
        return nombreCorto;
    }

    public void setNombreCorto(String nombreCorto) {
        this.nombreCorto = nombreCorto;
    }

}

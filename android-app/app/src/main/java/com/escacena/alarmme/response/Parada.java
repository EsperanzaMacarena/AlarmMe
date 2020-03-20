
package com.escacena.alarmme.response;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class Parada {

    @SerializedName("idParada")
    @Expose
    private String idParada;
    @SerializedName("idNucleo")
    @Expose
    private String idNucleo;
    @SerializedName("idZona")
    @Expose
    private String idZona;
    @SerializedName("nombre")
    @Expose
    private String nombre;
    @SerializedName("latitud")
    @Expose
    private String latitud;
    @SerializedName("longitud")
    @Expose
    private String longitud;
    @SerializedName("idMunicipio")
    @Expose
    private String idMunicipio;
    @SerializedName("municipio")
    @Expose
    private String municipio;
    @SerializedName("nucleo")
    @Expose
    private String nucleo;

    public String getIdParada() {
        return idParada;
    }

    public void setIdParada(String idParada) {
        this.idParada = idParada;
    }

    public String getIdNucleo() {
        return idNucleo;
    }

    public void setIdNucleo(String idNucleo) {
        this.idNucleo = idNucleo;
    }

    public String getIdZona() {
        return idZona;
    }

    public void setIdZona(String idZona) {
        this.idZona = idZona;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getLatitud() {
        return latitud;
    }

    public void setLatitud(String latitud) {
        this.latitud = latitud;
    }

    public String getLongitud() {
        return longitud;
    }

    public void setLongitud(String longitud) {
        this.longitud = longitud;
    }

    public String getIdMunicipio() {
        return idMunicipio;
    }

    public void setIdMunicipio(String idMunicipio) {
        this.idMunicipio = idMunicipio;
    }

    public String getMunicipio() {
        return municipio;
    }

    public void setMunicipio(String municipio) {
        this.municipio = municipio;
    }

    public String getNucleo() {
        return nucleo;
    }

    public void setNucleo(String nucleo) {
        this.nucleo = nucleo;
    }

}

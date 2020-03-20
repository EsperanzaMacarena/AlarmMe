
package com.escacena.alarmme.response;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class Parada {

    @SerializedName("idParada")
    @Expose
    private String idParada;
    @SerializedName("idLinea")
    @Expose
    private String idLinea;
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
    @SerializedName("sentido")
    @Expose
    private String sentido;
    @SerializedName("orden")
    @Expose
    private Integer orden;
    @SerializedName("modos")
    @Expose
    private String modos;

    public String getIdParada() {
        return idParada;
    }

    public void setIdParada(String idParada) {
        this.idParada = idParada;
    }

    public String getIdLinea() {
        return idLinea;
    }

    public void setIdLinea(String idLinea) {
        this.idLinea = idLinea;
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

    public String getSentido() {
        return sentido;
    }

    public void setSentido(String sentido) {
        this.sentido = sentido;
    }

    public Integer getOrden() {
        return orden;
    }

    public void setOrden(Integer orden) {
        this.orden = orden;
    }

    public String getModos() {
        return modos;
    }

    public void setModos(String modos) {
        this.modos = modos;
    }

}

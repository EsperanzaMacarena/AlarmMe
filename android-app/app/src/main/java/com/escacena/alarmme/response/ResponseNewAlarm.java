
package com.escacena.alarmme.response;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.util.List;

public class ResponseNewAlarm {

    @SerializedName("activated")
    @Expose
    private Boolean activated;
    @SerializedName("ubication")
    @Expose
    private List<Object> ubication = null;
    @SerializedName("_id")
    @Expose
    private String id;
    @SerializedName("createdBy")
    @Expose
    private ResponseCreatedBy responseCreatedBy;
    @SerializedName("name")
    @Expose
    private String name;
    @SerializedName("done")
    @Expose
    private Boolean done;
    @SerializedName("__v")
    @Expose
    private Integer v;

    public Boolean getActivated() {
        return activated;
    }

    public void setActivated(Boolean activated) {
        this.activated = activated;
    }

    public List<Object> getUbication() {
        return ubication;
    }

    public void setUbication(List<Object> ubication) {
        this.ubication = ubication;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public ResponseCreatedBy getResponseCreatedBy() {
        return responseCreatedBy;
    }

    public void setResponseCreatedBy(ResponseCreatedBy responseCreatedBy) {
        this.responseCreatedBy = responseCreatedBy;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getDone() {
        return done;
    }

    public void setDone(Boolean done) {
        this.done = done;
    }

    public Integer getV() {
        return v;
    }

    public void setV(Integer v) {
        this.v = v;
    }

}

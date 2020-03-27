
package com.escacena.alarmme.response;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.util.List;


public class ResponseAllAlarm {

    @SerializedName("activated")
    @Expose
    private Boolean activated;
    @SerializedName("ubication")
    @Expose
    private List<String> ubication = null;
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
    @SerializedName("type")
    @Expose
    private ResponseType type;

    public Boolean getActivated() {
        return activated;
    }

    public void setActivated(Boolean activated) {
        this.activated = activated;
    }

    public List<String> getUbication() {
        return ubication;
    }

    public void setUbication(List<String> ubication) {
        this.ubication = ubication;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public ResponseCreatedBy getCreatedBy() {
        return responseCreatedBy;
    }

    public void setCreatedBy(ResponseCreatedBy createdBy) {
        this.responseCreatedBy = createdBy;
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

    public ResponseType getType() {
        return type;
    }

    public void setType(ResponseType type) {
        this.type = type;
    }
}

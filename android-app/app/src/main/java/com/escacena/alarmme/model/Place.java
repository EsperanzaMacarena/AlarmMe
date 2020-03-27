package com.escacena.alarmme.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Place {
    private String[] types;

    private String icon;

    private String rating;

    private Photos[] photos;

    private String reference;

    private String user_ratings_total;

    private String scope;

    private String name;

    private OpeningHours opening_hours;

    private Geometry geometry;

    private String vicinity;

    private String id;

    private String place_id;
}

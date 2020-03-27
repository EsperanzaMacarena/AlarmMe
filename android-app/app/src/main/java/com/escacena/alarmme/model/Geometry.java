package com.escacena.alarmme.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Geometry {
    private Viewport viewport;

    private LocationPlace location;
}

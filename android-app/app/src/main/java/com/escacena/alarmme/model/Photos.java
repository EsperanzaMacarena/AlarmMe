package com.escacena.alarmme.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Photos {
    private String photo_reference;

    private String width;

    private String[] html_attributions;

    private String height;
}

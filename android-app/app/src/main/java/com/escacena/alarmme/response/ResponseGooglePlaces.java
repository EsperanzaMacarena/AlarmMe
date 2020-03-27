package com.escacena.alarmme.response;

import com.escacena.alarmme.model.Place;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ResponseGooglePlaces {
    private String next_page_token;

    private String[] html_attributions;

    private List<Place> results;

    private String status;

}

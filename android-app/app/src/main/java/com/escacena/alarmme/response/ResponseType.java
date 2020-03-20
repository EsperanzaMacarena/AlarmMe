package com.escacena.alarmme.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ResponseType {
    private String _id;
    private String description;
    private String places;

}

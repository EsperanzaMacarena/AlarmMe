package com.escacena.alarmme.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class RequestAlarmCreate {
    private String name;
    private String type;
    private String[] ubication;

}

package com.escacena.alarmme.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class ResponseLogin {
    private String email;
    private String rol;
    private String token;
}

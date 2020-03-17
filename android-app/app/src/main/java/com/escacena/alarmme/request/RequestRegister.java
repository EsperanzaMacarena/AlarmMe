package com.escacena.alarmme.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class RequestRegister {

    private String username;
    private String fullname;
    private String password;
}

package com.escacena.alarmme.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ResponseUser {
    private String role;
    private boolean enabled;
    private String _id;
    private String email;
    private String fullname;
    private String createdAt;
    private String updatedAt;
    private ResponsePicture picture;
}

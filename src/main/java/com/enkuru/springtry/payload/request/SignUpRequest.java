package com.enkuru.springtry.payload.request;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

/**
 * Create Info
 * User: ME99844
 * Date: 28/02/2019
 * Time: 16:50
 */
@Data
public class SignUpRequest {
    private String name;

    private String surname;

    @NotBlank
    private String username;

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String password;
}

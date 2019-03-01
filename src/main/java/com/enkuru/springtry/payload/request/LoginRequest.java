package com.enkuru.springtry.payload.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;

/**
 * Create Info
 * User: ME99844
 * Date: 28/02/2019
 * Time: 16:49
 */
@Data
public class LoginRequest {
    @NotBlank
    private String usernameOrEmail;

    @NotBlank
    private String password;
}

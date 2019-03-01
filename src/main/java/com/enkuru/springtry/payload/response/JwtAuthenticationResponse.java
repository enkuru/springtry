package com.enkuru.springtry.payload.response;

import lombok.Data;

/**
 * Create Info
 * User: ME99844
 * Date: 28/02/2019
 * Time: 16:51
 */
@Data
public class JwtAuthenticationResponse {
    private String accessToken;

    private String tokenType = "Bearer";

    public JwtAuthenticationResponse(String accessToken) {
        this.accessToken = accessToken;
    }
}

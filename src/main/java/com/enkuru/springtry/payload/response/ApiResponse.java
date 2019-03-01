package com.enkuru.springtry.payload.response;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * Create Info
 * User: ME99844
 * Date: 28/02/2019
 * Time: 16:53
 */
@Data
@AllArgsConstructor
public class ApiResponse {
    private Boolean success;

    private String message;
}

package com.enkuru.springtry.projection;

import com.enkuru.springtry.model.HashTag;
import org.springframework.data.rest.core.config.Projection;

/**
 * Create Info
 * User: ME99844
 * Date: 28/02/2019
 * Time: 11:27
 */
@Projection(name = "HashTagProjection", types = {HashTag.class})
public interface HashTagProjection {
    Long getId();

    String getName();
}

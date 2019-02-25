package com.enkuru.springtry.util;

import java.util.Date;

/**
 * Create Info
 * User: ME99844
 * Date: 25/02/2019
 * Time: 16:02
 */
public interface AuditableProjection<U> {

    U getCreatedBy();

    Date getCreationDate();

    U getLastModifiedBy();

    Date getLastModifiedDate();
}

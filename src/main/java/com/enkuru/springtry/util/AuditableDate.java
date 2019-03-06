package com.enkuru.springtry.util;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.JoinColumn;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import java.util.Date;

import static javax.persistence.TemporalType.TIMESTAMP;

/**
 * Create Info
 * User: ME99844
 * Date: 25/02/2019
 * Time: 11:55
 */
@Data
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class AuditableDate {

    @CreatedDate
    @Temporal(TIMESTAMP)
    @JoinColumn(name = "CREATED_DATE", nullable = false, updatable = false)
    Date creationDate = new Date();

    @LastModifiedDate
    @Temporal(TIMESTAMP)
    @JoinColumn(name = "UPDATED_DATE", nullable = false)
    Date lastModifiedDate = new Date();
}

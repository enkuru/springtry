package com.enkuru.springtry.util;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
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
public abstract class Auditable<U> {

    @ManyToOne
    @CreatedBy
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @JoinColumn(name = "CREATED_BY", updatable = false)
    U createdBy;

    @CreatedDate
    @Temporal(TIMESTAMP)
    @JoinColumn(name = "CREATED_DATE", nullable = false, updatable = false)
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    Date creationDate = new Date();

    @ManyToOne
    @LastModifiedBy
    @JoinColumn(name = "UPDATED_BY")
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    U lastModifiedBy;

    @LastModifiedDate
    @Temporal(TIMESTAMP)
    @JoinColumn(name = "UPDATED_DATE", nullable = false)
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    Date lastModifiedDate = new Date();
}

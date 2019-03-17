package com.enkuru.springtry.util;

import com.enkuru.springtry.model.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

import static javax.persistence.TemporalType.TIMESTAMP;

/**
 * Create Info
 * User: ME99844
 * Date: 25/02/2019
 * Time: 11:55
 */
@Data
@EqualsAndHashCode(callSuper = false)
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public abstract class Auditable extends AuditableDate implements Serializable {

    @ManyToOne
    @CreatedBy
    @JoinColumn(name = "CREATED_BY", updatable = false)
    User createdBy;

    @CreatedDate
    @Temporal(TIMESTAMP)
    @JoinColumn(name = "CREATED_DATE", nullable = false, updatable = false)
    Date creationDate = new Date();

    @ManyToOne
    @LastModifiedBy
    @JoinColumn(name = "UPDATED_BY")
    User lastModifiedBy;

    @LastModifiedDate
    @Temporal(TIMESTAMP)
    @JoinColumn(name = "UPDATED_DATE", nullable = false)
    Date main = new Date();
}

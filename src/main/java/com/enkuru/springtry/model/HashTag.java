package com.enkuru.springtry.model;

import com.enkuru.springtry.util.AuditableDate;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

/**
 * Create Info
 * User: ME99844
 * Date: 25/02/2019
 * Time: 11:49
 */
@Data
@Entity
@EqualsAndHashCode(callSuper = false, of = {"name"})
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class HashTag extends AuditableDate implements Serializable {

    @Id
    @Column(name = "TAG_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NaturalId
    @Column(name = "NAME", unique = true, nullable = false, length = 10)
    private String name;

    @JsonIgnore
    @ManyToMany(mappedBy = "tags")
    private Set<Post> posts;
}

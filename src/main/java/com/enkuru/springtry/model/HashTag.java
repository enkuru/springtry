package com.enkuru.springtry.model;

import com.enkuru.springtry.util.AuditableDate;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

/**
 * Create Info
 * User: ME99844
 * Date: 25/02/2019
 * Time: 11:49
 */
@Data
@Entity
public class HashTag extends AuditableDate<User> {

    @Id
    @Column(name = "TAG_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME", nullable = false, length = 10)
    private String name;

    @ManyToMany(mappedBy = "tags")
    private List<Post> posts;
}

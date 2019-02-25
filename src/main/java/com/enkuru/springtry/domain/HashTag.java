package com.enkuru.springtry.domain;

import com.enkuru.springtry.util.Auditable;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

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
@FieldDefaults(level = AccessLevel.PRIVATE)
public class HashTag extends Auditable<User> {

    @Id
    @Column(name = "ID")
    @GeneratedValue
    Integer id;

    @Column(name = "NAME", nullable = false, length = 10)
    String name;

    @ManyToMany(mappedBy = "tags")
    private List<Post> posts;
}

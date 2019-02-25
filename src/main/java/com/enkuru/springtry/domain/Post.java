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
 * Time: 11:48
 */
@Data
@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Post extends Auditable<User> {

    @Id
    @Column(name = "ID")
    @GeneratedValue
    Integer id;

    @Column(name = "SUBJECT", nullable = false)
    String subject;

    @Column(name = "CONTENT", nullable = false,length = 5000)
    String content;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "POST_TAG",
            joinColumns = @JoinColumn(name = "POST_ID", referencedColumnName = "ID"),
            inverseJoinColumns = @JoinColumn(name = "TAG_ID", referencedColumnName = "ID")
    )
    List<HashTag> tags;
}

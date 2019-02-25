package com.enkuru.springtry.model;

import com.enkuru.springtry.util.Auditable;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;

/**
 * Create Info
 * User: ME99844
 * Date: 25/02/2019
 * Time: 11:48
 */
@Data
@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Comment extends Auditable<User> {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Column(name = "CONTENT", nullable = false)
    String content;

    @ManyToOne
    @JoinColumn(name = "POST_ID", nullable = false)
    Post post;

    @ManyToOne
    @JoinColumn(name = "PARENT_ID")
    Comment parentComment;
}

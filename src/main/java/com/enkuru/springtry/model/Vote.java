package com.enkuru.springtry.model;

import com.enkuru.springtry.util.Auditable;
import com.enkuru.springtry.util.VoteType;
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
public class Vote extends Auditable<User> {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Column(name = "TYPE", nullable = false)
    @Enumerated(EnumType.STRING)
    VoteType type;

    @ManyToOne
    @JoinColumn(name = "POST_ID", nullable = false)
    Post post;

    @ManyToOne
    @JoinColumn(name = "COMMENT_ID", nullable = false)
    Comment comment;
}

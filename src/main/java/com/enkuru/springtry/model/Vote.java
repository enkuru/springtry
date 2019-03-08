package com.enkuru.springtry.model;

import com.enkuru.springtry.util.Auditable;
import com.enkuru.springtry.util.AuditableDate;
import com.enkuru.springtry.util.VoteType;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

/**
 * Create Info
 * User: ME99844
 * Date: 25/02/2019
 * Time: 11:48
 */
@Data
@Entity
@EqualsAndHashCode(callSuper = false, of = {"id"})
public class Vote extends Auditable {

    @Id
    @Column(name = "VOTE_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "TYPE", nullable = false)
    @Enumerated(EnumType.STRING)
    private VoteType type;

    @ManyToOne
    @JoinColumn(name = "POST_ID", nullable = false)
    private Post post;

    @ManyToOne
    @JoinColumn(name = "COMMENT_ID", nullable = false)
    private Comment comment;
}

package com.enkuru.springtry.model;

import com.enkuru.springtry.util.Auditable;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.Filter;

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
@EqualsAndHashCode(callSuper = false, of = {"id"})
public class Post extends Auditable {

    @Id
    @Column(name = "POST_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "SUBJECT", nullable = false)
    private String subject;

    @Column(name = "CONTENT", nullable = false, length = 5000)
    private String content;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "POST_TAG",
            joinColumns = @JoinColumn(name = "POST_ID", referencedColumnName = "POST_ID"),
            inverseJoinColumns = @JoinColumn(name = "TAG_ID", referencedColumnName = "TAG_ID")
    )
    private List<HashTag> tags;

    @OneToMany(mappedBy = "post")
    @Filter(name = "likeVote", condition = "TYPE = 'L'")
    private List<Vote> likeVotes;

    @OneToMany(mappedBy = "post")
    @Filter(name = "likeVote", condition = "TYPE = 'D'")
    private List<Vote> dislikeVotes;
}

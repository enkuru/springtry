package com.enkuru.springtry.projection;

import com.enkuru.springtry.model.Post;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;

import java.util.Set;

/**
 * Create Info
 * User: ME99844
 * Date: 25/02/2019
 * Time: 15:59
 */
@Projection(name = "PostProjection", types = {Post.class})
public interface PostProjection {
    Long getId();

    String getSubject();

    String getContent();

    @Value("#{target.getCategory().getId()}")
    Long getCategoryId();

    @Value("#{target.getCategory().getName()}")
    String getCategoryName();

    Set<HashTagProjection> getTags();

    @Value("#{target.getLikeVotes().size()}")
    int getLikeVoteCount();

    @Value("#{target.getDislikeVotes().size()}")
    int getDislikeVoteCount();
}

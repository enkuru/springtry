package com.enkuru.springtry.projection;

import com.enkuru.springtry.model.HashTag;
import com.enkuru.springtry.model.Post;
import com.enkuru.springtry.model.User;
import com.enkuru.springtry.util.AuditableProjection;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

/**
 * Create Info
 * User: ME99844
 * Date: 25/02/2019
 * Time: 15:59
 */
@Projection(name = "PostProjection", types = {Post.class})
public interface PostProjection extends AuditableProjection<User> {
    Integer getId();

    String getSubject();

    String getContent();

    List<HashTag> getTags();

    @Value("#{target.getLikeVotes().size()}")
    int getLikeVoteCount();

    @Value("#{target.getDislikeVotes().size()}")
    int getDislikeVoteCount();
}

package com.enkuru.springtry.repository;

import com.enkuru.springtry.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Create Info
 * User: ME99844
 * Date: 25/02/2019
 * Time: 15:26
 */
@RepositoryRestResource
public interface CommentRepository extends JpaRepository<Comment, Long> {
}

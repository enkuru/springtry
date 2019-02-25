package com.enkuru.springtry.repository;

import com.enkuru.springtry.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Create Info
 * User: ME99844
 * Date: 25/02/2019
 * Time: 15:26
 */
public interface CommentRepository extends JpaRepository<Comment, Integer> {
}

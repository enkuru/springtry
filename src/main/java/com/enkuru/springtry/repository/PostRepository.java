package com.enkuru.springtry.repository;

import com.enkuru.springtry.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Create Info
 * User: ME99844
 * Date: 25/02/2019
 * Time: 15:25
 */
public interface PostRepository extends JpaRepository<Post, Integer> {
}

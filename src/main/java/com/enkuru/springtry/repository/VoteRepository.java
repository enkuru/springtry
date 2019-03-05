package com.enkuru.springtry.repository;

import com.enkuru.springtry.model.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Create Info
 * User: ME99844
 * Date: 25/02/2019
 * Time: 15:25
 */
@RepositoryRestResource
public interface VoteRepository extends JpaRepository<Vote, Long> {
}

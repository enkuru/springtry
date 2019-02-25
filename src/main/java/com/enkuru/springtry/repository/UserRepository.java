package com.enkuru.springtry.repository;

import com.enkuru.springtry.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Create Info
 * User: ME99844
 * Date: 25/02/2019
 * Time: 15:23
 */
public interface UserRepository extends JpaRepository<User, Integer> {
}

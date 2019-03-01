package com.enkuru.springtry.repository;

import com.enkuru.springtry.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

/**
 * Create Info
 * User: ME99844
 * Date: 25/02/2019
 * Time: 15:24
 */
@RepositoryRestResource
public interface RoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByCode(String code);
}

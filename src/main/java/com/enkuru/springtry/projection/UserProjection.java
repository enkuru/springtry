package com.enkuru.springtry.projection;

import com.enkuru.springtry.model.Role;
import com.enkuru.springtry.model.User;
import com.enkuru.springtry.util.AuditableProjection;
import org.springframework.data.rest.core.config.Projection;

/**
 * Create Info
 * User: ME99844
 * Date: 28/02/2019
 * Time: 11:27
 */
@Projection(name = "UserProjection", types = {User.class})
public interface UserProjection extends AuditableProjection<User> {
    Integer getId();

    String getName();

    String getSurname();

    String getUsername();

    String getPassword();

    String getEmail();

    Role getRole();
}

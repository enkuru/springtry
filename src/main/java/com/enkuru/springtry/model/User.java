package com.enkuru.springtry.model;

import com.enkuru.springtry.util.Auditable;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

/**
 * Create Info
 * User: ME99844
 * Date: 25/02/2019
 * Time: 11:48
 */
@Data
@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User extends Auditable<User> {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Column(name = "NAME")
    String name;

    @Column(name = "SURNAME")
    String surname;

    @Column(name = "USERNAME", nullable = false)
    String username;

    @Column(name = "PASSWORD", nullable = false)
    String password;

    @Email
    @Column(name = "EMAIL", nullable = false)
    String email;

    @ManyToOne
    @JoinColumn(name = "ROLE_ID")
    Role role;
}

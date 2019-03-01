package com.enkuru.springtry.model;

import com.enkuru.springtry.util.Auditable;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import javax.validation.constraints.Email;

/**
 * Create Info
 * User: ME99844
 * Date: 25/02/2019
 * Time: 11:48
 */
@Data
@Entity
@NoArgsConstructor
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

    @Column(name = "USERNAME", nullable = false, unique = true)
    String username;

    @Column(name = "PASSWORD", nullable = false)
    String password;

    @Email
    @Column(name = "EMAIL", nullable = false, unique = true)
    String email;

    @ManyToOne
    @JoinColumn(name = "ROLE_ID")
    Role role;

    public User(String name, String surname, String username, String password, @Email String email) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.password = password;
        this.email = email;
    }
}

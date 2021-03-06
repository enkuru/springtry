package com.enkuru.springtry.model;

import com.enkuru.springtry.util.AuditableDate;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.io.Serializable;

/**
 * Create Info
 * User: ME99844
 * Date: 25/02/2019
 * Time: 11:48
 */
@Data
@Entity
@EqualsAndHashCode(callSuper = false, of = {"id"})
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class User extends AuditableDate implements Serializable {

    @Id
    @Column(name = "USER_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "SURNAME")
    private String surname;

    @Column(name = "USERNAME", nullable = false, unique = true)
    private String username;

    @Column(name = "PASSWORD", nullable = false)
    private String password;

    @Email
    @Column(name = "EMAIL", nullable = false, unique = true)
    private String email;

    @ManyToOne
    @JoinColumn(name = "ROLE_ID")
    private Role role;
}

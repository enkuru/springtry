package com.enkuru.springtry.model;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;

/**
 * Create Info
 * User: ME99844
 * Date: 25/02/2019
 * Time: 11:48
 */
@Data
@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Role {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Column(name = "CODE", nullable = false)
    String CODE;
}

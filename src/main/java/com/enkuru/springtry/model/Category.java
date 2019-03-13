package com.enkuru.springtry.model;

import com.enkuru.springtry.util.AuditableDate;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

/**
 * Create Info
 * User: ME99844
 * Date: 12/03/2019
 * Time: 15:18
 */
@Data
@Entity
@EqualsAndHashCode(callSuper = false, of = {"id"})
public class Category extends AuditableDate implements Serializable {

    @Id
    @Column(name = "CATEGORY_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME", nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "PARENT_ID")
    private Category parentCategory;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "parentCategory")
    private Set<Category> subCategories;
}

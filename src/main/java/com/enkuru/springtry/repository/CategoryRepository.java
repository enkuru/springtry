package com.enkuru.springtry.repository;

import com.enkuru.springtry.model.Category;
import com.enkuru.springtry.projection.CategoryProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

/**
 * Create Info
 * User: ME99844
 * Date: 25/02/2019
 * Time: 15:25
 */
@RepositoryRestResource(excerptProjection = CategoryProjection.class)
public interface CategoryRepository extends JpaRepository<Category, Long> {
    List<Category> findCategoriesByParentCategoryIsNull();
}

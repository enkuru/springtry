package com.enkuru.springtry.projection;

import com.enkuru.springtry.model.Category;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;

import java.util.Set;

/**
 * Create Info
 * User: ME99844
 * Date: 28/02/2019
 * Time: 11:27
 */
@Projection(name = "CategoryProjection", types = {Category.class})
public interface CategoryProjection {
    Long getId();

    String getName();

    @Value("#{target.getParentCategory()!=null ? target.getParentCategory().getId() : null}")
    Long getParentCategoryId();

    @Value("#{target.getParentCategory()!=null ? target.getParentCategory().getName() : null}")
    String getParentCategoryName();

    Set<CategoryProjection> getSubCategories();
}

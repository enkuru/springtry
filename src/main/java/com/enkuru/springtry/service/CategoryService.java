package com.enkuru.springtry.service;

import com.enkuru.springtry.model.Category;
import com.enkuru.springtry.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Create Info
 * User: ME99844
 * Date: 12/03/2019
 * Time: 14:15
 */
@Service
@RequiredArgsConstructor
public class CategoryService {

    final CategoryRepository categoryRepository;

    public List<Category> getMains() {
        return categoryRepository.findCategoriesByParentCategoryIsNull();
    }

    @Transactional
    public Category save(Long id, Category category) {
        return categoryRepository.save(category);
    }

    public void delete(Long id) {
        categoryRepository.deleteById(id);
    }
}

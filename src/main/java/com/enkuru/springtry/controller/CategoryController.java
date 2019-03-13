package com.enkuru.springtry.controller;

import com.enkuru.springtry.model.Category;
import com.enkuru.springtry.projection.CategoryProjection;
import com.enkuru.springtry.service.CategoryService;
import com.enkuru.springtry.util.Constants;
import lombok.RequiredArgsConstructor;
import org.springframework.data.projection.ProjectionFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Stream;

/**
 * Create Info
 * Category: ME99844
 * Date: 01/03/2019
 * Time: 13:36
 */

@RestController
@RequestMapping(Constants.API_BASE + "/categories")
@RequiredArgsConstructor
public class CategoryController {

    final ProjectionFactory projectionFactory;

    final CategoryService categoryService;

    @GetMapping("/mains")
    public Stream<CategoryProjection> getMains() {
        List<Category> categories = categoryService.getMains();

        return categories
                .stream()
                .map(category -> projectionFactory.createProjection(CategoryProjection.class, category));
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@Valid @RequestBody Category category) {
        Category result = categoryService.save(null, category);

        return ResponseEntity.ok(result);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @Valid @RequestBody Category category) {
        Category result = categoryService.save(id, category);

        return ResponseEntity.ok(result);
    }
}

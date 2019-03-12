package com.enkuru.springtry.controller;

import com.enkuru.springtry.model.Post;
import com.enkuru.springtry.projection.PostProjection;
import com.enkuru.springtry.service.PostService;
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
 * Post: ME99844
 * Date: 01/03/2019
 * Time: 13:36
 */

@RestController
@RequestMapping(Constants.API_BASE + "/posts")
@RequiredArgsConstructor
public class PostController {

    final ProjectionFactory projectionFactory;

    final PostService postService;

    @GetMapping
    public Stream<PostProjection> getAll() {
        List<Post> posts = postService.getAll();

        return posts
                .stream()
                .map(post -> projectionFactory.createProjection(PostProjection.class, post));
    }

    @PostMapping
    public ResponseEntity<?> save(@Valid @RequestBody Post post) {
        Post result = postService.save(null, post);

        return ResponseEntity.ok(result);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @Valid @RequestBody Post post) {
        Post result = postService.save(id, post);

        return ResponseEntity.ok(result);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        postService.delete(id);
    }
}

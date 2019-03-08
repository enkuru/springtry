package com.enkuru.springtry.controller;

import com.enkuru.springtry.model.HashTag;
import com.enkuru.springtry.model.Post;
import com.enkuru.springtry.repository.HashTagRepository;
import com.enkuru.springtry.repository.PostRepository;
import com.enkuru.springtry.util.Constants;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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
    final PostRepository postRepository;

    final HashTagRepository hashTagRepository;

    final PasswordEncoder passwordEncoder;

    @PostMapping("/save")
    public ResponseEntity<?> save(@Valid @RequestBody Post post) {
        List<HashTag> hashTags = post.getTags().stream().peek(ht -> {
            if (ht.getId() != null) {
                ht = hashTagRepository.getOne(ht.getId());
            } else {
                ht.setPosts(new ArrayList<>());
            }

            ht.getPosts().add(post);
        }).collect(Collectors.toList());

        post.setTags(hashTags);

        Post result = postRepository.save(post);

        return ResponseEntity.ok(result);
    }
}

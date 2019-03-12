package com.enkuru.springtry.service;

import com.enkuru.springtry.model.HashTag;
import com.enkuru.springtry.model.Post;
import com.enkuru.springtry.repository.HashTagRepository;
import com.enkuru.springtry.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * Create Info
 * User: ME99844
 * Date: 12/03/2019
 * Time: 14:15
 */
@Service
@RequiredArgsConstructor
public class PostService {

    final PostRepository postRepository;

    final HashTagRepository hashTagRepository;

    public List<Post> getAll() {
        return postRepository.findAll();
    }

    @Transactional
    public Post save(Long id, Post post) {
        Set<HashTag> hashTags = post.getTags().stream().map(tag -> {
            HashTag exists = hashTagRepository.findHashTagByName(tag.getName());

            if (exists != null) {
                exists.getPosts().add(post);
                return exists;
            } else {
                tag.setPosts(new HashSet<>());
                tag.getPosts().add(post);

                return tag;
            }
        }).collect(Collectors.toCollection(HashSet::new));

        post.setTags(hashTags);

        return postRepository.save(post);
    }

    public void delete(Long id) {
        postRepository.deleteById(id);
    }
}

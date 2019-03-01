package com.enkuru.springtry.controller;

import com.enkuru.springtry.model.User;
import com.enkuru.springtry.repository.UserRepository;
import com.enkuru.springtry.util.Constants;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Create Info
 * User: ME99844
 * Date: 01/03/2019
 * Time: 13:36
 */
@RestController
@RequiredArgsConstructor
@RequestMapping(Constants.API_BASE + "/users")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserController {
    final UserRepository userRepository;

    final PasswordEncoder passwordEncoder;

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        User savedUser = userRepository.save(user);

        return ResponseEntity.ok(savedUser);
    }
}

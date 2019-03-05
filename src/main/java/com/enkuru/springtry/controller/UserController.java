package com.enkuru.springtry.controller;

import com.enkuru.springtry.model.User;
import com.enkuru.springtry.payload.response.ApiResponse;
import com.enkuru.springtry.repository.UserRepository;
import com.enkuru.springtry.util.Constants;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

/**
 * Create Info
 * User: ME99844
 * Date: 01/03/2019
 * Time: 13:36
 */

@RestController
@RequestMapping(Constants.API_BASE + "/users")
@RequiredArgsConstructor
public class UserController {
    final UserRepository userRepository;

    final PasswordEncoder passwordEncoder;

    @PostMapping("/save")
    public ResponseEntity<?> save(@Valid @RequestBody User user) {
        boolean emailExists = (userRepository.existsByEmail(user.getEmail()));
        boolean usernameExists = userRepository.existsByUsername(user.getUsername());

        if (usernameExists || emailExists) {
            String message = (usernameExists ? "Username" : "Email") + " is already taken!";

            return ResponseEntity.badRequest().body(new ApiResponse(false, message));
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        User result = userRepository.save(user);

        return ResponseEntity.ok(result);
    }
}

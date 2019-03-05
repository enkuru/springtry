package com.enkuru.springtry.controller;

import com.enkuru.springtry.exception.AppException;
import com.enkuru.springtry.model.Role;
import com.enkuru.springtry.model.User;
import com.enkuru.springtry.payload.request.LoginRequest;
import com.enkuru.springtry.payload.request.SignUpRequest;
import com.enkuru.springtry.payload.response.ApiResponse;
import com.enkuru.springtry.payload.response.JwtAuthenticationResponse;
import com.enkuru.springtry.repository.RoleRepository;
import com.enkuru.springtry.repository.UserRepository;
import com.enkuru.springtry.security.JwtTokenProvider;
import com.enkuru.springtry.security.UserPrincipal;
import com.enkuru.springtry.util.Constants;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * Create Info
 * User: ME99844
 * Date: 28/02/2019
 * Time: 16:45
 */
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    final AuthenticationManager authenticationManager;

    final UserRepository userRepository;

    final RoleRepository roleRepository;

    final PasswordEncoder passwordEncoder;

    final JwtTokenProvider tokenProvider;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsernameOrEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = tokenProvider.generateToken(authentication);

        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
        boolean usernameExists = userRepository.existsByUsername(signUpRequest.getUsername());
        boolean emailExists = (userRepository.existsByEmail(signUpRequest.getEmail()));

        if (usernameExists || emailExists) {
            String message = (usernameExists ? "Username" : "Email") + " is already taken!";

            return ResponseEntity.badRequest().body(new ApiResponse(false, message));
        }

        User user = new User();
        user.setName(signUpRequest.getName());
        user.setSurname(signUpRequest.getSurname());
        user.setUsername(signUpRequest.getUsername());
        user.setEmail(signUpRequest.getEmail());

        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));

        Role userRole = roleRepository.findByCode(Constants.ROLE_USER)
                .orElseThrow(() -> new AppException("User Role not set."));

        user.setRole(userRole);

        User result = userRepository.save(user);

        return ResponseEntity.ok(result);
    }

    @GetMapping("/me")
    public ResponseEntity<?> getAuthenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !authentication.isAuthenticated() || authentication instanceof AnonymousAuthenticationToken) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();

        return ResponseEntity.ok(userRepository.findById(userPrincipal.getId()));
    }

}

package com.enkuru.springtry.config;

import com.enkuru.springtry.model.User;
import com.enkuru.springtry.repository.UserRepository;
import com.enkuru.springtry.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Optional;

/**
 * Create Info
 * User: ME99844
 * Date: 25/02/2019
 * Time: 11:56
 */
@Configuration
@RequiredArgsConstructor
@EnableJpaAuditing(auditorAwareRef = "auditorProvider")
public class JpaConfig {

    private final UserRepository userRepository;

    @Bean
    public AuditorAware<User> auditorProvider() {
        return new SpringSecurityAuditAwareImpl();
    }

    class SpringSecurityAuditAwareImpl implements AuditorAware<User> {

        @Override
        public Optional<User> getCurrentAuditor() {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            boolean noAuth = authentication == null || !authentication.isAuthenticated();

            if (noAuth || authentication instanceof AnonymousAuthenticationToken) {
                return Optional.empty();
            }

            UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();

            return Optional.of(userRepository.getOne(userPrincipal.getId()));
        }
    }
}

package com.enkuru.springtry.config;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.reflections.Reflections;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.Projection;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.Type;

@Configuration
@RequiredArgsConstructor
public class RestConfig implements RepositoryRestConfigurer {

    final EntityManager entityManager;

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {

        config.exposeIdsFor(
                entityManager.getMetamodel().getEntities()
                        .stream().map(Type::getJavaType)
                        .toArray(Class[]::new));

        Reflections ref = new Reflections("com.enkuru.springtry.projection");
        for (Class<?> cl : ref.getTypesAnnotatedWith(Projection.class)) {
            config.getProjectionConfiguration().addProjection(cl);
        }
    }
}

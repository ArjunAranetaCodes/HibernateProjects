// TodoRepository.java
package com.todo1;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
    Optional<Todo> findById(Long id);

    void deleteById(Long id);
}

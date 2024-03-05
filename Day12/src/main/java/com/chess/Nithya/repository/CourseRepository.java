package com.chess.Nithya.repository;

import com.chess.Nithya.model.Courses;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CourseRepository extends JpaRepository<Courses, Long> {
    Optional<Courses> findByCourseName(String courseName);
}

package com.chess.Nithya.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chess.Nithya.model.Institute;

@Repository
public interface InstituteRepository extends JpaRepository<Institute, Long> {
}

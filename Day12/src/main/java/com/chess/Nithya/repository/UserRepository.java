package com.chess.Nithya.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chess.Nithya.model.User;

public interface UserRepository extends JpaRepository<User,String>{
        Optional<User> findByEmail(String email);
}

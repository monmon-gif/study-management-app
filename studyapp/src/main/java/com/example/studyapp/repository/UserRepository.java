package com.example.studyapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.studyapp.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
  
}

package com.example.studyapp.service;

import org.springframework.stereotype.Service;

import com.example.studyapp.repository.UserRepository;

@Service
public class LoginService {

  private final UserRepository userRepository;

  public LoginService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public boolean login(String username, String password) {
    return userRepository.findAll().stream()
        .anyMatch(user -> user.getUsername().equals(username) && user.getPassword().equals(password));
  }
  
}

package com.example.studyapp.service;

import org.springframework.stereotype.Service;

import com.example.studyapp.model.User;
import com.example.studyapp.repository.UserRepository;

@Service
public class RegistService {

  private final UserRepository registRepository;

  public RegistService(UserRepository registRepository) {
    this.registRepository = registRepository;
  }

  public User register(User user) {
    return registRepository.save(user);
  }
  
}

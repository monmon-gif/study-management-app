package com.example.studyapp.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.studyapp.model.User;
import com.example.studyapp.service.RegistService;

@CrossOrigin(origins = {
    "http://localhost:3000",
    "https://playful-caramel-daefe7.netlify.app"
})
@RestController
public class RegistController {

  private final RegistService registService;

  public RegistController(RegistService registService) {
    this.registService = registService;
  }

  @PostMapping("/register")
  public User register(@RequestBody User user) {
    return registService.register(user);
  }
  
}

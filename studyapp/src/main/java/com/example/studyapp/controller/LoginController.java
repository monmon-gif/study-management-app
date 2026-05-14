package com.example.studyapp.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.studyapp.model.User;
import com.example.studyapp.service.LoginService;

@CrossOrigin(origins = {
    "http://localhost:3000",
    "https://playful-caramel-daefe7.netlify.app"
})
@RestController
public class LoginController {

  private final LoginService loginService;

  public LoginController(LoginService loginService) {
    this.loginService = loginService;
  }

  @PostMapping("/login")
  public boolean login(@RequestBody User user) {
      return loginService.login(user.getEmail(), user.getPassword());
  }

}

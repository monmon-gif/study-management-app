package com.example.studyapp.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.studyapp.model.Task;
import com.example.studyapp.service.TaskService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/tasks")
    public List<Task> getTasks() {
        return taskService.getTasks();
    }

    @PostMapping("/tasks")
    public void addTask(@RequestBody Task task) {
        taskService.addTask(task);
    }

    @PutMapping("/tasks/{id}")
    public void toggleTask(@PathVariable long id) {
        taskService.toggleTask(id);
    }

    @DeleteMapping("/tasks/{id}")
    public void deleteTask(@PathVariable long id) {
        taskService.deleteTask(id);
    }
}
package com.example.studyapp.service;

import com.example.studyapp.model.Task;
import com.example.studyapp.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getTasks() {
        return taskRepository.findAll();
    }

    public void addTask(Task task) {
        taskRepository.save(task);
    }

    public void toggleTask(long id) {
        Task task = taskRepository.findById(id).orElseThrow();

        task.setDone(!task.isDone());

        taskRepository.save(task);
    }

    public void deleteTask(long id) {
        taskRepository.deleteById(id);
    }
}
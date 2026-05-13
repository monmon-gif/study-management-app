package com.example.studyapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.studyapp.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
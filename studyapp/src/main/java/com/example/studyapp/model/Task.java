package com.example.studyapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;

    private boolean done;

    public Task() {
    }

    public Task(long id, String title, boolean done) {
        this.id = id;
        this.title = title;
        this.done = done;
    }
}
package com.sha.serverusermanagement.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sha.serverusermanagement.model.School;

@RestController
public class SchoolController {

    @PostMapping("/api/school/add")
    public ResponseEntity<?> add(@RequestBody School school){
        return new ResponseEntity<>(school, HttpStatus.CREATED);
    }

}

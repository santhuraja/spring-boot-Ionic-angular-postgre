package com.sha.serverusermanagement.controller;


import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sha.serverusermanagement.model.School;

@Slf4j
@RequestMapping("/api/school")
@RestController
public class SchoolController {

    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody School school){
    	log.info("Adding school name : {}", school.getSchoolname());
        return new ResponseEntity<>(school, HttpStatus.CREATED);
    }

}

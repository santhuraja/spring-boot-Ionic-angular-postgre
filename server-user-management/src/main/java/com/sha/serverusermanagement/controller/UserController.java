package com.sha.serverusermanagement.controller;

import java.security.Principal;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sha.serverusermanagement.jwt.JwtTokenProvider;
import com.sha.serverusermanagement.model.Role;
import com.sha.serverusermanagement.model.User;
import com.sha.serverusermanagement.service.UserService;

@Slf4j
@RequestMapping("/api/user")
@RestController
public class UserController {

    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    
    @Autowired
    private UserService userService;

    @PostMapping("/registration")
    public ResponseEntity<?> register(@RequestBody User user){
        if (null != userService.findByUsername(user.getUsername())) {
        	log.info("User tried to register again : {}", user.getUsername());
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        user.setRole(Role.USER);
        userService.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @GetMapping("/login")
    public ResponseEntity<?> auth(Principal principal){
        if(principal==null || principal.getName()==null){
        	//This should be ok http status because this will be used for logout path.
            return ResponseEntity.ok(principal);
        }
        
        UsernamePasswordAuthenticationToken authenticationToken = (UsernamePasswordAuthenticationToken) principal;
        User user = userService.findByUsername(authenticationToken.getName());
        user.setToken(jwtTokenProvider.generateToken(authenticationToken));
        log.info("User Logged in Successfully : {}", user.getUsername());
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllUsers(){
    	log.info("Retrieving Users");
        return ResponseEntity.ok(userService.findAllUsers());
    }

}

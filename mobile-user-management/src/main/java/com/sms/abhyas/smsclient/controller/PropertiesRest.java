package com.sms.abhyas.smsclient.controller;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sms.abhyas.smsclient.config.PropertyConfiguration;

@RestController
@CrossOrigin
@RequestMapping("/properties")
@Slf4j
public class PropertiesRest {
	
	@Autowired
	private PropertyConfiguration propertyConfiguration;
	
	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public PropertyConfiguration getProperties() {
		log.debug("REST call to retrieve Properties");
		return propertyConfiguration;
		
	}
}

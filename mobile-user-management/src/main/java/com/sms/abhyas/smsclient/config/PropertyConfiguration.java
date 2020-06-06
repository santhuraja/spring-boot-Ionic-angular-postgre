package com.sms.abhyas.smsclient.config;

import lombok.Data;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Service;

@Data
@Service
@EnableConfigurationProperties
@ConfigurationProperties
public class PropertyConfiguration {
	
	@Value("${environment}")
	private String environment;
	
	@Value("${appVersion}")
	private String appVersion;	
	
	@Value("${apiUrl}")
	private String apiUrl;

}

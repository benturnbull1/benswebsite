package com.example.benswebsiteAPI.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BensWebsiteController {
	
	@GetMapping("/api/test")
	public String testMessage() {
		return "Test message!";
	}
	
}

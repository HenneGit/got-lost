package com.hahrens.got_lost.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SimpleDTOController {

    @GetMapping("/greet")
    public String greet() {
        return "Hello, welcome to mydfg Spring Boot application!";
    }
}

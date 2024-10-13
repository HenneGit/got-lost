package com.hahrens.got_lost.model;

import lombok.Builder;

@Builder
public record SimpleDTO(String helloWorld, int number) {
}

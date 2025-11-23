package com.example.serviciojuego.Controller;

import com.example.serviciojuego.DTO.PreguntaDTO;
import com.example.serviciojuego.Service.TriviaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/trivia")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class TriviaController {

    private final TriviaService triviaService;

    @GetMapping
    public ResponseEntity<List<PreguntaDTO>> obtenerTrivia() {
        return ResponseEntity.ok(triviaService.obtenerTodasLasPreguntas());
    }
}
package com.example.serviciojuego.Service;

import com.example.serviciojuego.DTO.PreguntaDTO;
import com.example.serviciojuego.Model.Opcion;
import com.example.serviciojuego.Model.Pregunta;
import com.example.serviciojuego.Repository.PreguntaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TriviaService {

    private final PreguntaRepository preguntaRepository;

    public List<PreguntaDTO> obtenerTodasLasPreguntas() {
        return preguntaRepository.findAll().stream().map(pregunta ->
                PreguntaDTO.builder()
                        .id(pregunta.getId())
                        .pregunta(pregunta.getTextoPregunta())
                        .respuestaCorrecta(pregunta.getRespuestaCorrecta())
                        .opciones(pregunta.getOpciones().stream()
                                .map(Opcion::getTextoOpcion)
                                .collect(Collectors.toList()))
                        .build()
        ).collect(Collectors.toList());
    }

    public void guardarPregunta(String texto, String correcta, List<String> opcionesTexto) {
        List<Opcion> opciones = opcionesTexto.stream()
                .map(opt -> Opcion.builder().textoOpcion(opt).build())
                .collect(Collectors.toList());

        Pregunta pregunta = Pregunta.builder()
                .textoPregunta(texto)
                .respuestaCorrecta(correcta)
                .opciones(opciones)
                .build();

        preguntaRepository.save(pregunta);
    }
}
package com.example.serviciojuego.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PreguntaDTO {
    private Integer id;
    private String pregunta;
    private List<String> opciones;
    private String respuestaCorrecta;
}
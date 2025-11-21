package com.example.serviciojuego.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GuiaSeccionDTO {
    private String titulo;
    private String contenido;
    private Integer orden;
    private String imagenUrl;
}

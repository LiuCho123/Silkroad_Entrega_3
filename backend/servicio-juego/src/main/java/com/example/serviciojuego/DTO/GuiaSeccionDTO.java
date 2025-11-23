package com.example.serviciojuego.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GuiaSeccionDTO {
    private String seccionId;
    private String titulo;
    private String contenidoHtml;
}
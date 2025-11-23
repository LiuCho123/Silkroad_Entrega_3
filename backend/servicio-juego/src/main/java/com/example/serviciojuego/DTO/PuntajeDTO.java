package com.example.serviciojuego.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PuntajeDTO {
    private Integer idUsuario;
    private Long cantidadItems;
}

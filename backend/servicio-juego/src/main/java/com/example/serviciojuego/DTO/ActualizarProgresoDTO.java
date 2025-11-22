package com.example.serviciojuego.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ActualizarProgresoDTO {
    private Integer idUsuario;
    private String itemId;
    private boolean marcado;
}
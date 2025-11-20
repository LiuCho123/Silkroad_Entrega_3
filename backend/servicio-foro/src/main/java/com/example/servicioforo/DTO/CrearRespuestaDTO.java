package com.example.servicioforo.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CrearRespuestaDTO {
    private String mensaje;
    private Integer idHilo;
    private Integer idUsuario;
    private String nombreAutor;
}

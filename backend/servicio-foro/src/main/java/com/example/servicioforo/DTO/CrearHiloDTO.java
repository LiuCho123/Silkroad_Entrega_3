package com.example.servicioforo.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CrearHiloDTO {
    private String titulo;
    private String mensaje;
    private Integer idUsuario;
    private String nombreAutor;
}

package com.example.serviciocuentas.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CambioPasswordDTO {
    private String correo;
    private String nuevaContrasena;
}

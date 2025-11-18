package com.example.serviciocuentas.Model;

import jakarta.persistence.*;
import lombok.*;
import com.example.serviciocuentas.Model.Rol;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUsuario;

    @Column(nullable = false, unique = true)
    private String nombreUsuario;

    @Column(nullable = false, unique = true)
    private String correoUsuario;

    @Column(nullable = false)
    private String contrasenaUsuario;

    @Enumerated(EnumType.STRING)
    private Rol rol;

}

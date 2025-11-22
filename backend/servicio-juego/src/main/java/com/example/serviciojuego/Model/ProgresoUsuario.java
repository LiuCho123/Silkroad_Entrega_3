package com.example.serviciojuego.Model;

import jakarta.persistence.*;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "progreso_usuario", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"idUsuario", "itemId"})
})
public class ProgresoUsuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private Integer idUsuario;

    @Column(nullable = false)
    private String itemId;
}
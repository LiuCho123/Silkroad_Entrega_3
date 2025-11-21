package com.example.serviciojuego.Model;

import com.example.serviciocuentas.Model.Usuario;
import jakarta.persistence.*;
import lombok.*;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "progreso_usuario", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"usuarioId", "itemId"})
})
public class ProgresoUsuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer usuarioId;
    @ManyToOne
    @JoinColumn(name = "id_usuario_fk", referencedColumnName = "idUsuario")
    private Usuario usuario;

    @Column(nullable = false)
    private String itemId;
}
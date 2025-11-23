package com.example.servicioforo.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Formula;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "hilo")
public class Hilo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idHilo;

    @Column(nullable = false)
    private String tituloHilo;

    @Column(nullable = false, length = 1000)
    private String mensajeInicialHilo;

    @Column(nullable = false)
    private String autorHilo;

    @Column(name = "usuario_id_usuario")
    private Integer idUsuario;

    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaHilo;

    @Formula("(SELECT COUNT(r.id_respuesta) FROM respuesta r WHERE r.id_hilo = id_hilo)")
    private Integer cantidadRespuestas;

    @PrePersist
    public void onCreate(){
        fechaHilo = new Date();
    }
}

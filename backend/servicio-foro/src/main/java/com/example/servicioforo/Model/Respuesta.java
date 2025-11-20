package com.example.servicioforo.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "respuesta")
public class Respuesta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idRespuesta;

    @Column(nullable = false)
    private String mensajeRespuesta;

    @Column(nullable = false)
    private String autorRespuesta;

    @Column(name = "usuario_id_usuario")
    private Integer idUsuario;

    @Temporal(TemporalType.DATE)
    private Date fechaRespuesta;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_hilo", nullable = false)
    @JsonIgnore
    private Hilo hilo;

    @PrePersist
    protected void onCreate(){
        fechaRespuesta = new Date();
    }
}

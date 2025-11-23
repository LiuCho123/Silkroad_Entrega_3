package com.example.serviciojuego.Model;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "pregunta_trivia")
public class Pregunta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String textoPregunta;

    @Column(nullable = false)
    private String respuestaCorrecta;

    // Relación con las opciones
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "pregunta_id")
    private List<Opcion> opciones;
}
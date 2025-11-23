package com.example.serviciojuego.Repository;

import com.example.serviciojuego.Model.Pregunta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PreguntaRepository extends JpaRepository<Pregunta, Integer> {
}
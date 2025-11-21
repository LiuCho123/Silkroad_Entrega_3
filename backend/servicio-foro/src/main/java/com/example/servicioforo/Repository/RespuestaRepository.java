package com.example.servicioforo.Repository;

import com.example.servicioforo.Model.Respuesta;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RespuestaRepository extends JpaRepository<Respuesta, Integer> {

    List<Respuesta> findByHilo_idHilo(Integer idHilo);
}

package com.example.serviciojuego.Repository;
import com.example.serviciojuego.Model.GuiaSeccion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GuiaRepository extends JpaRepository<GuiaSeccion, Integer> {
    List<GuiaSeccion> findAllByOrderByOrdenAsc();
}

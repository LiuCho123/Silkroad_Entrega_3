package com.example.servicioforo.Repository;

import com.example.servicioforo.Model.Hilo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HiloRepository extends JpaRepository<Hilo, Integer> {

    List<Hilo> findAllByOrderByFechaHiloDesc();
}

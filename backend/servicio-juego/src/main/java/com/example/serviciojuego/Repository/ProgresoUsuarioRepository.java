package com.example.serviciojuego.Repository;

import com.example.serviciojuego.Model.ProgresoUsuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ProgresoUsuarioRepository extends JpaRepository<ProgresoUsuario, Integer> {
    List<ProgresoUsuario> findAllByUsuarioId(Integer usuarioId);
    boolean existsByUsuarioIdAndItemId(Integer usuarioId, String itemId);
    @Transactional // Importante para operaciones de borrado
    void deleteByUsuarioIdAndItemId(Integer usuarioId, String itemId);
}
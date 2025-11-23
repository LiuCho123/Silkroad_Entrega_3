package com.example.serviciocuentas.Repository;

import com.example.serviciocuentas.Model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    Optional<Usuario> findByCorreoUsuarioOrNombreUsuario(String correoUsuario, String nombreUsuario);

    boolean existsByNombreUsuario(String nombreUsuario);
    boolean existsByCorreoUsuario(String correoUsuario);
}

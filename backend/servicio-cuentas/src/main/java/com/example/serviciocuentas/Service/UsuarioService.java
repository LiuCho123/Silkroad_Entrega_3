package com.example.serviciocuentas.Service;

import com.example.serviciocuentas.DTO.LoginDTO;
import com.example.serviciocuentas.DTO.RegistroDTO;
import com.example.serviciocuentas.Model.Rol;
import com.example.serviciocuentas.Model.Usuario;
import com.example.serviciocuentas.Repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;

    public Usuario registrarUsuario(RegistroDTO datos){
        Usuario nuevoUsuario = Usuario.builder()
                .nombreUsuario(datos.getNombreUsuario())
                .correoUsuario(datos.getCorreoUsuario())
                .contrasenaUsuario(datos.getContrasena())
                .rol(Rol.USUARIO)
                .build();

        return usuarioRepository.save(nuevoUsuario);
    }

    public Usuario autenticarUsuario(LoginDTO datos){
        Optional<Usuario> usuarioOpt = usuarioRepository
                .findByCorreoUsuarioOrNombreUsuario(datos.getLogin(), datos.getLogin());

        if(usuarioOpt.isPresent()){
            Usuario usuarioEncontrado = usuarioOpt.get();
            if (usuarioEncontrado.getContrasenaUsuario().equals(datos.getContrasena())) {
                return usuarioEncontrado;
            }
        }
        return null;
    }

    public List<Usuario> obtenerUsuarios(){
        return usuarioRepository.findAll();
    }
}

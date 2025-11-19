package com.example.serviciocuentas.Controller;

import com.example.serviciocuentas.DTO.CambioPasswordDTO;
import com.example.serviciocuentas.Model.Usuario;
import com.example.serviciocuentas.Repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Random;

@RestController
@RequestMapping("/api/recuperacion")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class RecuperacionController {

    private final UsuarioRepository usuarioRepository;

    @PostMapping("/solicitar")
    public ResponseEntity<?> solicitarCodigo(@RequestBody String correo){
        String correoLimpio = correo.replace("\"", "");

        Optional<Usuario> usuarioOpt = usuarioRepository.findByCorreoUsuarioOrNombreUsuario(correoLimpio, correoLimpio);

        if (usuarioOpt.isPresent()){
            String codigo = String.valueOf(100000 + new Random().nextInt(900000));

            return ResponseEntity.ok(codigo);
        } else{
            return ResponseEntity.badRequest().body("El correo no se encuentra registrado");
        }
    }

    @PostMapping("/cambiar")
    public ResponseEntity<?> cambiarPassword(@RequestBody CambioPasswordDTO request){
        Optional<Usuario> usuarioOpt = usuarioRepository.findByCorreoUsuarioOrNombreUsuario(
                request.getCorreo(), request.getCorreo());

        if (usuarioOpt.isPresent()){
            Usuario usuario = usuarioOpt.get();
            usuario.setContrasenaUsuario(request.getNuevaContrasena());
            usuarioRepository.save(usuario);

            return ResponseEntity.ok("Contraseña actualizada correctamente");
        } else{
            return  ResponseEntity.badRequest().body("Error al encontrar el usuario");
        }
    }
}

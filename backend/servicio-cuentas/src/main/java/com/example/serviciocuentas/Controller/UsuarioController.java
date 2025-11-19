package com.example.serviciocuentas.Controller;

import com.example.serviciocuentas.DTO.LoginDTO;
import com.example.serviciocuentas.DTO.RegistroDTO;
import com.example.serviciocuentas.Model.Usuario;
import com.example.serviciocuentas.Service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuarios")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UsuarioController {
    private final UsuarioService usuarioService;

    @PostMapping("/registro")
    public ResponseEntity<?> registrar(@RequestBody RegistroDTO request){
        try{
            Usuario nuevoUsuario = usuarioService.registrarUsuario(request);
            return ResponseEntity.ok(nuevoUsuario);
        } catch(Exception e){
            return ResponseEntity.badRequest().body("Error al registrar usuario: El nombre de usuario o correo ya esta en uso");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO request){
        Usuario usuario = usuarioService.autenticarUsuario(request);
        if (usuario != null){
            return ResponseEntity.ok(usuario);
        } else{
            return ResponseEntity.status(401).body("Credenciales incorrectas");
        }
    }

    @GetMapping
    public ResponseEntity<?> obtenerUsuarios(){
        try{
            return ResponseEntity.ok(usuarioService.obtenerUsuarios());
        } catch(Exception e){
            return ResponseEntity.badRequest().body("Error al obtener usuarios: " + e.getMessage());
        }
    }
}

package com.example.serviciojuego.Controller;

import com.example.serviciojuego.DTO.GuiaSeccionDTO;
import com.example.serviciojuego.Model.GuiaSeccion;
import com.example.serviciojuego.Service.GuiaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/guia")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class GuiaController {

    private final GuiaService guiaService;

    @GetMapping
    public ResponseEntity<List<GuiaSeccion>> obtenerGuia() {
        return ResponseEntity.ok(guiaService.obtenerGuiaCompleta());
    }


    @PostMapping
    public ResponseEntity<?> crearSeccion(@RequestBody GuiaSeccionDTO request) {
        try {
            GuiaSeccion nuevaSeccion = guiaService.crearSeccion(request);
            return ResponseEntity.ok(nuevaSeccion);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al crear sección: " + e.getMessage());
        }
    }
}
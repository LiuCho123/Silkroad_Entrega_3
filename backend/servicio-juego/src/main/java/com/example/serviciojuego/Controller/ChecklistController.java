package com.example.serviciojuego.Controller;

import com.example.serviciojuego.DTO.ActualizarProgresoDTO;
import com.example.serviciojuego.DTO.ChecklistItemDTO;
import com.example.serviciojuego.Model.ChecklistItem;
import com.example.serviciojuego.Service.ChecklistService;
import com.example.serviciojuego.Service.ProgresoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/checklist")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ChecklistController {

    private final ChecklistService checklistService;
    private final ProgresoService progresoService;
    @GetMapping
    public ResponseEntity<List<ChecklistItem>> obtenerChecklist() {
        return ResponseEntity.ok(checklistService.obtenerTodosLosItems());
    }

    @PostMapping
    public ResponseEntity<?> crearItem(@RequestBody ChecklistItemDTO request) {
        try {
            ChecklistItem nuevoItem = checklistService.crearItem(request);
            return ResponseEntity.ok(nuevoItem);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al crear ítem: " + e.getMessage());
        }
    }
    @GetMapping("/progreso/{usuarioId}")
    public ResponseEntity<List<String>> obtenerProgresoUsuario(@PathVariable Integer usuarioId) {
        return ResponseEntity.ok(progresoService.obtenerItemsCompletados(usuarioId));
    }
    @PostMapping("/progreso")
    public ResponseEntity<?> actualizarProgreso(@RequestBody ActualizarProgresoDTO request) {
        try {
            progresoService.gestionarProgreso(
                    request.getUsuarioId(),
                    request.getItemId(),
                    request.isMarcado()
            );
            return ResponseEntity.ok("Progreso actualizado correctamente");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al actualizar progreso: " + e.getMessage());
        }
    }
}
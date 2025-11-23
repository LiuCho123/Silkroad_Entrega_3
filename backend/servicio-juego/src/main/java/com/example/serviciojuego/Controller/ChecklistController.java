package com.example.serviciojuego.Controller;

import com.example.serviciojuego.DTO.ActualizarProgresoDTO;
import com.example.serviciojuego.DTO.ChecklistItemDTO;
import com.example.serviciojuego.DTO.PuntajeDTO;
import com.example.serviciojuego.Model.ChecklistItem;
import com.example.serviciojuego.Repository.ProgresoUsuarioRepository;
import com.example.serviciojuego.Service.ChecklistService;
import com.example.serviciojuego.Service.ProgresoService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/checklist")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ChecklistController {
    private final ProgresoUsuarioRepository progresoUsuarioRepository;
    private final ChecklistService checklistService;
    private final ProgresoService progresoService;

    @GetMapping("/progreso/{idUsuario}")
    public ResponseEntity<List<String>> obtenerProgresoUsuario(@PathVariable Integer idUsuario) {
        return ResponseEntity.ok(progresoService.obtenerItemsCompletados(idUsuario));
    }

    @PostMapping("/progreso")
    public ResponseEntity<?> actualizarProgreso(@RequestBody ActualizarProgresoDTO request) {
        try {
            progresoService.gestionarProgreso(
                    request.getIdUsuario(),
                    request.getItemId(),
                    request.isMarcado()
            );
            return ResponseEntity.ok("Progreso actualizado correctamente");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al actualizar progreso: " + e.getMessage());
        }
    }

    @GetMapping("/ranking")
    public ResponseEntity<List<PuntajeDTO>> obtenerRanking(){
        return ResponseEntity.ok(progresoUsuarioRepository.obtenerRankingGlobal());
    }
}
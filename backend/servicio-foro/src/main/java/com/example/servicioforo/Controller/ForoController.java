package com.example.servicioforo.Controller;

import com.example.servicioforo.DTO.CrearHiloDTO;
import com.example.servicioforo.DTO.CrearRespuestaDTO;
import com.example.servicioforo.Model.Hilo;
import com.example.servicioforo.Model.Respuesta;
import com.example.servicioforo.Service.ForoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hilos")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ForoController {
    private final ForoService foroService;

    @GetMapping
    public ResponseEntity<List<Hilo>> obtenerTodos(){
        return ResponseEntity.ok(foroService.obtenerTodosLosHilos());
    }

    @PostMapping
    public ResponseEntity<?> crearHilo(@RequestBody CrearHiloDTO request){
        try{
            Hilo nuevoHilo = foroService.crearHilo(request);
            return ResponseEntity.ok(nuevoHilo);
        } catch (Exception e){
            return ResponseEntity.badRequest().body("Error al crear el hilo");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> obtenerHilo(@PathVariable Integer id){
        Hilo hilo = foroService.obtenerHiloPorId(id);
        if (hilo != null){
            return ResponseEntity.ok(hilo);
        } else{
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/respuestas")
    public ResponseEntity<List<Respuesta>> obtenerRespuestas(@PathVariable Integer id){
        return ResponseEntity.ok(foroService.obtenerRespuestasDelHilo(id));
    }

    @PostMapping("/{id}/respuestas")
    public ResponseEntity<?> crearRespuesta(@PathVariable Integer id, @RequestBody CrearRespuestaDTO request){
        try{
            request.setIdHilo(id);

            Respuesta nuevaRespuesta = foroService.crearRespuesta(request);
            return ResponseEntity.ok(nuevaRespuesta);
        } catch (Exception e){
            return ResponseEntity.badRequest().body("Error al crear el respuesta");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarHilo(@PathVariable Integer id){
        try{
            foroService.eliminarHilo(id);
            return ResponseEntity.ok("Hilo eliminado correctamente");
        } catch(Exception e){
            return  ResponseEntity.badRequest().body("Error al eliminar el hilo");
        }
    }
}

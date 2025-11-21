package com.example.servicioforo.Service;

import com.example.servicioforo.DTO.CrearHiloDTO;
import com.example.servicioforo.DTO.CrearRespuestaDTO;
import com.example.servicioforo.Model.Hilo;
import com.example.servicioforo.Model.Respuesta;
import com.example.servicioforo.Repository.HiloRepository;
import com.example.servicioforo.Repository.RespuestaRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ForoService {
    private final HiloRepository hiloRepository;
    private final RespuestaRepository respuestaRepository;

    public List<Hilo> obtenerTodosLosHilos(){
        return hiloRepository.findAllByOrderByFechaHiloDesc();
    }

    public Hilo obtenerHiloPorId(Integer id){
        return hiloRepository.findById(id).orElse(null);
    }

    public Hilo crearHilo(CrearHiloDTO dato){
        Hilo nuevoHilo = Hilo.builder()
                .tituloHilo(dato.getTitulo())
                .mensajeInicialHilo(dato.getMensaje())
                .idUsuario(dato.getIdUsuario())
                .autorHilo(dato.getNombreAutor())
                .build();

        return hiloRepository.save(nuevoHilo);
    }

    public List<Respuesta> obtenerRespuestasDelHilo(Integer idHilo){
        return respuestaRepository.findByHilo_idHilo(idHilo);
    }

    public Respuesta crearRespuesta(CrearRespuestaDTO dato){
        Hilo hiloPadre = hiloRepository.findById(dato.getIdHilo())
                .orElseThrow(() -> new RuntimeException("El hilo no existe"));

        Respuesta nuevaRespuesta = Respuesta.builder()
                .mensajeRespuesta(dato.getMensaje())
                .idUsuario(dato.getIdUsuario())
                .autorRespuesta(dato.getNombreAutor())
                .hilo(hiloPadre)
                .build();

        return respuestaRepository.save(nuevaRespuesta);
    }

    @Transactional
    public void eliminarHilo(Integer idHilo){
        List<Respuesta> respuestas = respuestaRepository.findByHilo_idHilo(idHilo);

        respuestaRepository.deleteAll(respuestas);
        hiloRepository.deleteById(idHilo);
    }
}

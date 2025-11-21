package com.example.serviciojuego.Service;

import com.example.serviciojuego.DTO.GuiaSeccionDTO;
import com.example.serviciojuego.Model.GuiaSeccion;
import com.example.serviciojuego.Repository.GuiaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GuiaService {

    private final GuiaRepository guiaRepository;

    public List<GuiaSeccion> obtenerGuiaCompleta() {
        return guiaRepository.findAllByOrderByOrdenAsc();
    }

    public GuiaSeccion crearSeccion(GuiaSeccionDTO request) {
        GuiaSeccion seccion = GuiaSeccion.builder()
                .titulo(request.getTitulo())
                .contenido(request.getContenido())
                .orden(request.getOrden())
                .imagenUrl(request.getImagenUrl())
                .build();
        return guiaRepository.save(seccion);
    }
}

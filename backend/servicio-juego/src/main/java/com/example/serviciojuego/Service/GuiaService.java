package com.example.serviciojuego.Service;

import com.example.serviciojuego.DTO.GuiaSeccionDTO;
import com.example.serviciojuego.Model.GuiaSeccion;
import com.example.serviciojuego.Repository.GuiaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class GuiaService {

    private final GuiaRepository guiaRepository;

    public List<GuiaSeccion> obtenerGuiaCompleta() {
        List<GuiaSeccion> secciones = guiaRepository.findAll();

        return secciones.stream()
                .sorted(Comparator.comparingInt(s -> Integer.parseInt(s.getSeccionId())))
                .collect(Collectors.toList());
    }

    public void crearSeccion(GuiaSeccionDTO dto) {
        if (guiaRepository.findBySeccionId(dto.getSeccionId()).isPresent()) {
            return;
        }

        GuiaSeccion seccion = GuiaSeccion.builder()
                .seccionId(dto.getSeccionId())
                .titulo(dto.getTitulo())
                .contenidoHtml(dto.getContenidoHtml())
                .build();

        guiaRepository.save(seccion);
    }
}
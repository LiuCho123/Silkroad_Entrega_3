package com.example.serviciojuego.Service;

import com.example.serviciojuego.Model.ProgresoUsuario;
import com.example.serviciojuego.Repository.ProgresoUsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProgresoService {

    private final ProgresoUsuarioRepository progresoRepository;

    public List<String> obtenerItemsCompletados(Integer usuarioId) {
        return progresoRepository.findAllByUsuarioId(usuarioId)
                .stream()
                .map(ProgresoUsuario::getItemId)
                .collect(Collectors.toList());
    }

    public void gestionarProgreso(Integer usuarioId, String itemId, boolean marcado) {
        if (marcado) {
            if (!progresoRepository.existsByUsuarioIdAndItemId(usuarioId, itemId)) {
                ProgresoUsuario nuevoProgreso = ProgresoUsuario.builder()
                        .usuarioId(usuarioId)
                        .itemId(itemId)
                        .build();
                progresoRepository.save(nuevoProgreso);
            }
        } else {
            progresoRepository.deleteByUsuarioIdAndItemId(usuarioId, itemId);
        }
    }
}
package com.example.serviciojuego.Service;

import com.example.serviciojuego.DTO.ChecklistItemDTO;
import com.example.serviciojuego.Model.ChecklistItem;
import com.example.serviciojuego.Repository.ChecklistRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ChecklistService {

    private final ChecklistRepository checklistRepository;

    public List<ChecklistItem> obtenerTodosLosItems() {
        return checklistRepository.findAll();
    }

    // Crear un nuevo ítem (para poblar la BD)
    public ChecklistItem crearItem(ChecklistItemDTO request) {
        if (checklistRepository.findByItemId(request.getItemId()).isPresent()) {
            throw new RuntimeException("El ítem con ID " + request.getItemId() + " ya existe.");
        }

        ChecklistItem item = ChecklistItem.builder()
                .itemId(request.getItemId())
                .label(request.getLabel())
                .category(request.getCategory())
                .percentageValue(request.getPercentageValue())
                .build();

        return checklistRepository.save(item);
    }
}
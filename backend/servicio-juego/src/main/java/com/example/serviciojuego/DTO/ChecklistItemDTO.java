package com.example.serviciojuego.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChecklistItemDTO {
    private String itemId;
    private String label;
    private String category;
    private Double percentageValue;
}
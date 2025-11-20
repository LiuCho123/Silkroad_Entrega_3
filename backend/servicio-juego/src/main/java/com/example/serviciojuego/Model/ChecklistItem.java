package com.example.serviciojuego.Model;

import jakarta.persistence.*;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "checklist_item")
public class ChecklistItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, unique = true)
    private String itemId;

    @Column(nullable = false)
    private String label;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private Double percentageValue;
}
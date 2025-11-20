package com.example.serviciojuego.Repository;

import com.example.serviciojuego.Model.ChecklistItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChecklistRepository extends JpaRepository<ChecklistItem, Integer> {
    Optional<ChecklistItem> findByItemId(String itemId);
    List<ChecklistItem> findAllByCategory(String category);
}
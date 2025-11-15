import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom'; 
import ChecklistPage from '../src/paginas/Checklist'; 

vi.mock('../src/data/ChecklistContext', async (importOriginal) => {
    const mod = await importOriginal();
    return {
        ...mod, 
        useChecklist: vi.fn(), 
    };
});
import { useChecklist } from '../src/data/ChecklistContext';

describe("Componente ChecklistPage", () => {

    beforeEach(() => {
        vi.clearAllMocks(); 
    });

    it("1. Muestra 'Cargando progreso...' inicialmente", () => {
        useChecklist.mockReturnValue({
            isLoading: true,
            checkedItems: new Set(),
            currentPercentage: 0,
            itemsRemaining: 0,
            checklistData: [],
            handleCheckboxChange: vi.fn(),
            handleReset: vi.fn(),
        });

        render(
            <BrowserRouter>
                <ChecklistPage />
            </BrowserRouter>
        );
        expect(screen.getByText(/Cargando progreso.../i)).toBeInTheDocument();
    });

    it('2. Muestra título y porcentaje 0% después de cargar (estado inicial)', () => {
        useChecklist.mockReturnValue({
            isLoading: false,
            checkedItems: new Set(), 
            currentPercentage: 0, 
            itemsRemaining: 123, 
            checklistData: [{ category: 'boss', title: 'Jefes', items: [{id: 'boss1', label:'Falso Caballero'}] }], 
            handleCheckboxChange: vi.fn(),
            handleReset: vi.fn(),
        });
        
        render(
            <BrowserRouter>
                <ChecklistPage />
            </BrowserRouter>
        );
        
        expect(screen.getByText(/Medidor Progreso 112%/i)).toBeInTheDocument();
        expect(screen.getByText(/0.00% Completado/i)).toBeInTheDocument();
        expect(screen.getByText(/Falso Caballero/i)).toBeInTheDocument();
    });
});
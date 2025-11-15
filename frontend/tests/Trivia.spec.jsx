import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Trivia from '../src/paginas/Trivia';

describe('Componente Trivia', () => {
    beforeEach(() =>{
        vi.spyOn(globalThis, 'fetch').mockRestore();
    });

    it("debe incrementar el puntaje al seleccionar la respuesta correcta", async() =>{
        const mockPreguntas = [{
            pregunta: '¿Cúal es el nombre del Caballero?',
            opciones: ['Hornet', 'El Caballero', 'Zote'],
            respuestaCorrecta: 'El Caballero'
        }];

        vi.spyOn(globalThis, 'fetch').mockResolvedValue({
            ok: true,
            json: async () => mockPreguntas,
        });

        render(<Trivia />)

        await screen.findByText("¿Cúal es el nombre del Caballero?")

        const botonCorrecto = screen.getByRole("button", {name: "El Caballero"});
        await userEvent.click(botonCorrecto);

        const puntajeFinal = await screen.findByText(/Obtuviste 1 de 1 respuestas correctas/i, {},
            {timeout: 2000}
        );
        expect(puntajeFinal).toBeInTheDocument();
    });
});
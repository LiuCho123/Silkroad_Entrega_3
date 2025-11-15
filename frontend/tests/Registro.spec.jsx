import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {describe, it, expect} from 'vitest';
import {BrowserRouter, useNavigate} from 'react-router-dom';
import Registro from '../src/paginas/Registro';

vi.mock('react-router-dom', async () =>{
    const actual = await vi.importActual('react-router-dom');
    return{
        ...actual,
        useNavigate: () => vi.fn(),
    };
});

describe('Componente Registro', () => {
    it("debe mostrar un error si las contraseñas no coinciden", async() =>{
        render(
            <BrowserRouter>
                <Registro/>
            </BrowserRouter>
        );

        const passwordInput = screen.getByLabelText(/^Contraseña$/i);
        const confirmPasswordInput = screen.getByLabelText(/Confirmar contraseña/i);
        const mandarFormulario = screen.getByRole('button', {name: /Registrarse/i});

        await userEvent.type(screen.getByLabelText(/Correo/i), 'l.cabello@duocuc.cl')
        await userEvent.type(screen.getByLabelText(/Usuario/i), "LiuCho")
        await userEvent.type(passwordInput, 'passwordValida123');
        await userEvent.type(confirmPasswordInput, 'passwordNOValida123');
        await userEvent.click(mandarFormulario);

        const errorMessage = await screen.findByText(/Las contraseñas no coinciden, inténtelo nuevamente/i);
        expect(errorMessage).toBeInTheDocument();
    });
});
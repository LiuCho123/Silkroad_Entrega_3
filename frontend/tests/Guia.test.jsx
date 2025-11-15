import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest'; 
import { BrowserRouter } from 'react-router-dom';
import GuiaPage from '../src/paginas/Guia.jsx'; 

describe('Componente GuiaPage', () => {
  it('3. Renderiza los títulos de las secciones del acordeón', () => {
    render(
      <BrowserRouter>
        <GuiaPage /> {}
      </BrowserRouter>
    );
    expect(screen.getByRole('button', { name: /El viaje a Bocasucia/i })).toBeInTheDocument();
  });
});
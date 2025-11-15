import React from "react";
import { Link } from "react-router-dom"

const logoUrl = '/img/Logo Silk Road.png';
const knightUrl = "/img/The_Knight.png";

function HomePage() {
    return (
        <div className="body-main">
            <header className="login-header">
                <img src={logoUrl} alt="Logo Hollow Knight Silk Road" />
            </header>

            <main className="login-main">
                <h1 className="login-title">Tu Hogar en el Corazón de Hallownest.</h1>
                <img src={knightUrl} alt="The Knight" />

                <div className="botones">
                    <Link to="/iniciosesion" className="btn btn-outline-light btn-lg boton-hollow">Iniciar Sesión </Link>
                    <Link to="/registro" className="btn btn-outline-light btn-lg boton-hollow">Registrarse</Link>
                </div>
            </main>
        </div>
    );
}

export default HomePage;
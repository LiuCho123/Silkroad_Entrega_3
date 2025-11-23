import React from "react";
import {Link, useNavigate} from "react-router-dom"
import {useAuth} from "../data/AuthContext.jsx";

const logoUrl = '/img/Logo Silk Road.png';
const knightUrl = "/img/The_Knight.png";

function HomePage() {
    const {usuario, logout} = useAuth();
    const navigate = useNavigate();

    const handleLoginClick = (e) => {
        e.preventDefault()

        if (usuario){
            console.log("Usuario ya logueado, redirigiendo al foro...");
            navigate("/foro");
        } else{
            navigate("/iniciosesion")
        }
    };

    const handleInvitadoClick = (e) => {
        e.preventDefault();

        if (usuario){
            console.log("Cerrando sesión para entrar como invitado");
            logout();
        }
        navigate("/foro")
    };

    return (
        <div className="body-main">
            <header className="login-header">
                <img src={logoUrl} alt="Logo Hollow Knight Silk Road" />
            </header>

            <main className="login-main">
                <h1 className="login-title">Tu Hogar en el Corazón de Hallownest.</h1>
                <img src={knightUrl} alt="The Knight" />

                <div className="botones">
                    <Link to="/iniciosesion" className="btn btn-outline-light btn-lg boton-hollow" onClick={handleLoginClick}>Iniciar Sesión </Link>
                    <Link to="/registro" className="btn btn-outline-light btn-lg boton-hollow">Registrarse</Link>
                </div>

                <Link to="/foro" className="btn btn-outline-light btn-lg boton-hollow" onClick={handleInvitadoClick}>Acceder como invitado</Link>

            </main>
        </div>
    );
}

export default HomePage;
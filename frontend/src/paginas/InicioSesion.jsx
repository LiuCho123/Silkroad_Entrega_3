import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useAuth} from "../data/AuthContext.jsx";

const API_URL = "http://localhost:8080/api/usuarios";

function InicioSesion() {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const {login} = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await fetch(`${API_URL}/login`,{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    login: identifier,
                    contrasena: password
                }),
            });

            if (response.ok){
                const usuarioData = await response.json();

                login(usuarioData);
                navigate("/foro");
            } else{
                const errorData = await response.text();
                setError(errorData || "Usuario o contraseña incorrectos");
            }
        } catch (err) {
            console.error(err);
            setError("No se pudo conectar con el servidor");
        } finally{
            setLoading(false);
        }
    };

    const handleShowPassword = () => {
        setShowPassword(true);
        setTimeout(() => {
            setShowPassword(false);
        }, 3000);
    };

    return (
        <div className="body-main">
            <header className="return-main">
                <Link to="/">
                    <img src="/img/volver.png" alt="Volver al inicio" width="180" />
                </Link>
            </header>

            <main className="inicioSesion">
                <h1>Iniciar sesión</h1>
                {error && <div className="mensaje-error">{error}</div>}

                <form id="loginForm" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="userInput" className="form-label">Nombre de Usuario o Correo</label>
                        <div className="inputIcon">
                            <input type="text" className="form-control" id="userInput" placeholder="Ingrese su nombre de usuario / correo"
                                value={identifier} onChange={(e) => setIdentifier(e.target.value)} required />
                            <img src="/img/icon.png" alt="Icono de usuario" />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="passwordInput" className="form-label">Contraseña</label>
                        <div className="inputIcon">
                            <input type={showPassword ? "text" : "password"} className="form-control" id="passwordInput"
                                placeholder="Ingrese su contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <img src="/img/ojo-cerrado.png" id="togglePasswordLogin" className="toggle-password-icon"
                                alt="Mostrar/Ocultar contraseña" onClick={handleShowPassword} />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-lg btn-outline-light w-100 mt-4 boton-hollow" disabled={loading}>
                        {loading ? 'Ingresando...' : 'Iniciar sesión'}</button>

                    <div className="text-center mt-3">
                        <Link to="/olvidepassword" className="link-blue">¿Olvidaste tu contraseña?</Link>
                    </div>
                    <div className="text-center mt-3">
                        <Link to="/registro" className="link-blue">¿No tienes cuenta? ¡Regístrate!</Link>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default InicioSesion;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Registro() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setError("");

        if (password.length < 8) {
            setError('La contraseña debe tener al menos 8 caracteres');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError("La contraseña debe tener al menos una mayúscula");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError('La contraseña debe tener al menos una minúscula');
            return;
        }
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden, inténtelo nuevamente');
            return;
        }

        alert(`Registro exitoso para el usuario: ${username}`);

        navigate("/iniciosesion")
    };

    const handleShowPassword = () => {
        setShowPassword(true);
        setTimeout(() => {
            setShowPassword(false);
        }, 3000);
    };

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(true);
        setTimeout(() => {
            setShowConfirmPassword(false);
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
                <h1>Registrarse</h1>
                {error && <div className="mensaje-error">{error}</div>}

                <form id="registroForm" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="correoRegister" className="form-label">Correo</label>
                        <div className="inputIcon">
                            <input type="email" className="form-control" id="correoRegister" placeholder="Ingrese su correo"
                                value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <img src="/img/icon.png" alt="Icono de correo" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="userRegister" className="form-label">Usuario</label>
                        <div className="inputIcon">
                            <input type="text" className="form-control" id="userRegister" placeholder="Ingrese su usuario"
                                value={username} onChange={(e) => setUsername(e.target.value)} required />
                            <img src="/img/icon.png" alt="Icono de usuario" />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="passwordRegister" className="form-label">Contraseña</label>
                        <div className="inputIcon">
                            <input type={showPassword ? "text" : "password"} className="form-control" id="passwordRegister" placeholder="Ingrese su contraseña"
                                value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <img src="/img/ojo-cerrado.png" id="togglePassword" className="toggle-password-icon" alt="Mostrar/Ocultar" onClick={handleShowPassword} />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="confirmPasswordRegister" className="form-label">Confirmar contraseña</label>
                        <div className="inputIcon">
                            <input type={showConfirmPassword ? "text" : "password"} className="form-control" id="confirmPasswordRegister" placeholder="Confirme su contraseña"
                                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                            <img src="/img/ojo-cerrado.png" id="toggleConfirmPassword" className="toggle-password-icon" alt="Mostrar/Ocultar" onClick={handleShowConfirmPassword} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-lg btn-outline-light w-100 mt-4 boton-hollow">
                        Registrarse
                    </button>
                    <div className="text-center mt-3">
                        <Link to="/iniciosesion" className="link-blue">¿Ya tienes una cuenta? Inicia sesión</Link>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default Registro;
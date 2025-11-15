import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RecuperarContraseña() {
    const [nuevaClave, setNuevaClave] = useState('');
    const [confirmarClave, setConfirmarClave] = useState('');
    const [error, setError] = useState('');
    const [mostrarClave, setMostrarClave] = useState(false);
    const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

    const navegar = useNavigate();

    useEffect(() => {
        const datosRecuperacion = localStorage.getItem('recuperacion');
        if (!datosRecuperacion) {
            navegar('/olvidepassword');
        }
    }, [navegar]);

    const manejarEnvio = (event) => {
        event.preventDefault();
        setError('');

        if (nuevaClave.length < 8) {
            setError('La contraseña debe tener al menos 8 caracteres');
            return;
        }
        if (!/[A-Z]/.test(nuevaClave)) {
            setError("La contraseña debe tener al menos una mayúscula");
            return;
        }
        if (nuevaClave !== confirmarClave) {
            setError('Las contraseñas no coinciden');
            return;
        }

        alert(`Se ha actualizado la contraseña (SIMULADO)`)

        localStorage.removeItem("recuperacion");

        navegar("/iniciosesion")
    };

    const manejarMostrarClave = () => {
        setMostrarClave(true);
        setTimeout(() => setMostrarClave(false), 3000);
    };

    const manejarMostrarConfirmacion = () => {
        setMostrarConfirmacion(true);
        setTimeout(() => setMostrarConfirmacion(false), 3000);
    };

    return (
        <div className="body-main">
            <main className="inicioSesion">
                <h1>Crear nueva contraseña</h1>
                {error && <div className="mensaje-error">{error}</div>}

                <form id="formCambiarPass" onSubmit={manejarEnvio}>
                    <div className="mb-3">
                        <label htmlFor="nuevaClaveInput" className="form-label">Nueva Contraseña</label>
                        <div className="inputIcon">
                            <input
                                type={mostrarClave ? "text" : "password"}
                                className="form-control"
                                id="nuevaClaveInput"
                                value={nuevaClave}
                                onChange={(e) => setNuevaClave(e.target.value)}
                                required
                            />
                            <img
                                src="/img/ojo-cerrado.png"
                                className="toggle-password-icon"
                                alt="Mostrar/Ocultar"
                                onClick={manejarMostrarClave}
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="confirmarClaveInput" className="form-label">Confirmar nueva contraseña</label>
                        <div className="inputIcon">
                            <input
                                type={mostrarConfirmacion ? "text" : "password"}
                                className="form-control"
                                id="confirmarClaveInput"
                                value={confirmarClave}
                                onChange={(e) => setConfirmarClave(e.target.value)}
                                required
                            />
                            <img
                                src="/img/ojo-cerrado.png"
                                className="toggle-password-icon"
                                alt="Mostrar/Ocultar"
                                onClick={manejarMostrarConfirmacion}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-lg btn-outline-light w-100 mt-3 boton-hollow">
                        Actualizar contraseña
                    </button>
                </form>
            </main>
        </div>
    );
}

export default RecuperarContraseña;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const api_url = "http://demo0658844.mockable.io";

function OlvidePassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await fetch(`${api_url}/usuarios`);
            if (!response.ok) {
                throw new Error("Error al conectar con el servidor")
            }
            const usuarios = await response.json();

            const usuarioExistente = usuarios.find(user => user.email === email);

            if (!usuarioExistente) {
                setError("El correo electrónico no se encuentra registrado")
                return;
            }

            const codigo = Math.floor(100000 + Math.random() * 900000).toString();
            localStorage.setItem("recuperacion", JSON.stringify({ email: email, codigo: codigo }));

            alert(`SIMULACIÓN: Se ha enviado un correo a ${email} con el código: ${codigo}`);
            navigate("/verificarcodigo");
        } catch (err){
            setError(err.message)
        } finally{
            setLoading(false);
        }



    };

    return (
        <div className="body-main">
            <header className="return-main">
                <Link to="/iniciosesion">
                    <img src="/img/volver.png" alt="Volver al inicio de sesión" width="180" />
                </Link>
            </header>

            <main className="inicioSesion">
                <h2>Recuperar Contraseña</h2>
                <p className="text-white-50 mb-4 text-center">Ingresa tu correo y te enviaremos un código de verificación.</p>
                {error && <div className="mensaje-error">{error}</div>}

                <form id="pedirCodigo" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="emailRecuperacion" className="form-label">Correo Electrónico</label>
                        <input type="email" className="form-control" id="emailRecuperacion" required
                            placeholder="Ingrese su correo" value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-lg btn-outline-light w-100 mt-3 boton-hollow" disabled={loading}>
                        {loading ? "Verificando..." : "Enviar código"}
                    </button>
                </form>
            </main>
        </div>
    )
}

export default OlvidePassword;
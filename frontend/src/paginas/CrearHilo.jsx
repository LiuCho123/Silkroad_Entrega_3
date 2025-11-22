import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useAuth} from "../data/AuthContext.jsx";

const API_URL = "http://44.205.150.156:8081/api/hilos";

function CrearHilo({onCrearHilo}) {
    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const {usuario} = useAuth();

    useEffect(() => {
        if (!usuario) {
            alert("Debes iniciar sesión para publicar un hilo")
            navigate("/iniciosesion")
        }
    }, [usuario, navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        setLoading(true);

        if (!usuario) return;

            const nuevoHiloDTO = {
                titulo: titulo,
                mensaje: contenido,
                idUsuario: usuario.idUsuario,
                nombreAutor: usuario.nombreUsuario
            };

            try{
                const response = await fetch(API_URL,{
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(nuevoHiloDTO)
                });

                if (response.ok) {
                    if (onCrearHilo) await onCrearHilo();
                    navigate("/foro")
                } else{
                    const textoError = await response.text();
                    setError("Error al crear hilo");
                }
            } catch (err) {
                setError("Error de conexión con el servidor");
            } finally{
                setLoading(false);
            }

    }
    return (
        <div className="body-main">
            <header className="return-main">
                <Link to="/foro">
                    <img src="/img/volver.png" alt="Volver al foro" />
                </Link>
            </header>

            <main className="container my-5">
                <div className="foro-container">
                    <h1>Crear un nuevo hilo</h1>
                    <hr className="my-4" style={{ borderColor: '#a19595' }} />

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="tituloHilo" className="form-label">Título del hilo</label>
                            <input
                                type="text"
                                className="form-control"
                                id="tituloHilo"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contenidoHilo" className="form-label">Mensaje</label>
                            <textarea
                                className="form-control"
                                id="contenidoHilo"
                                rows="8"
                                value={contenido}
                                onChange={(e) => setContenido(e.target.value)}
                                required>
                            </textarea>
                        </div>
                        <button type="submit" className="btn btn-lg btn-outline-light w-100 mt-3 boton-hollow">
                            Publicar Hilo
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default CrearHilo;
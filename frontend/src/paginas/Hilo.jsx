import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const API_URL = "http://demo0658844.mockable.io";

function Hilo() {
    const { hiloId } = useParams();
    const navigate = useNavigate();
    const [hilo, setHilo] = useState(null);
    const [contenidoRespuesta, setContenidoRespuesta] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHilo = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`${API_URL}/hilos`);
                if (!response.ok) throw new Error('No se pudo cargar la información del hilo.');
                
                const hilos = await response.json();
                const hiloActual = hilos.find(h => h.id === Number(hiloId));

                if (hiloActual) {
                    if (!hiloActual.mensajes) hiloActual.mensajes = [];
                    setHilo(hiloActual);
                } else {
                    throw new Error('Hilo no encontrado.');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchHilo();
    }, [hiloId]);

    const handleReplySubmit = (event) => {
        event.preventDefault();
        if (contenidoRespuesta.trim() === "") return;

        const nuevaRespuesta = {
            id: Date.now(),
            autor: "UsuarioResponde",
            contenido: contenidoRespuesta,
            fecha: new Date().toISOString()
        };

        const hiloActualizado = {
            ...hilo,
            mensajes: [...hilo.mensajes, nuevaRespuesta]
        };
        setHilo(hiloActualizado);
        setContenidoRespuesta('');
    };

    const handleDelete = () => { 
        if (window.confirm('¿Estás seguro que deseas eliminar este hilo?')) {
            alert("Hilo eliminado con exito (SIMULADO)");
            navigate("/foro");
        }
    };

    if (loading) return <div className='container my-5 text-white text-center'>Cargando hilo...</div>;
    if (error) return <div className='container my-5 text-danger text-center'>Error: {error}</div>;
    if (!hilo) return <div className='container my-5 text-white'>Hilo no encontrado.</div>;
    
    const mensajeOriginal = hilo.mensajes?.length > 0
        ? hilo.mensajes[0]
        : { autor: hilo.autor, contenido: "Este hilo aún no tiene un mensaje inicial.", fecha: new Date().toISOString() };
        
    const respuestas = hilo.mensajes?.length > 1 ? hilo.mensajes.slice(1) : [];

    return (
        <div className="body-main">
            <header className="return-main">
                <Link to="/foro">
                    <img src="/img/volver.png" alt="Volver al foro" />
                </Link>
            </header>
            <main className="container my-5">
                <div className="foro-container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className="mb-0">{hilo.titulo}</h1>
                        <button onClick={handleDelete} className="btn btn-outline-danger">Eliminar Hilo</button>
                    </div>
                    <hr className="my-4" />

                    <div className="post-original">
                        <div className="post-autor">{mensajeOriginal.autor}</div>
                        <div className="post-contenido">{mensajeOriginal.contenido}</div>
                        <div className="post-fecha">{new Date(mensajeOriginal.fecha).toLocaleString('es-ES')}</div>
                    </div>

                    {respuestas.map(respuesta => (
                        <div key={respuesta.id} className="post">
                            <div className="post-autor">{respuesta.autor}</div>
                            <div className="post-contenido">{respuesta.contenido}</div>
                            <div className="post-fecha">{new Date(respuesta.fecha).toLocaleString('es-ES')}</div>
                        </div>
                    ))}

                    <hr className="my-4" />

                    <form onSubmit={handleReplySubmit}>
                        <div className="mb-3">
                            <label htmlFor="contenidoRespuesta" className="form-label label-respuesta">Escribe una respuesta</label>
                            <textarea
                                className="form-control"
                                id="contenidoRespuesta"
                                rows="3"
                                value={contenidoRespuesta}
                                onChange={(e) => setContenidoRespuesta(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-lg btn-outline-light w-100 mt-3 boton-hollow">
                            Publicar respuesta
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Hilo;
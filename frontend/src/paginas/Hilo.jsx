import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {useAuth} from "../data/AuthContext.jsx";

const API_URL = "http://44.205.150.156:8081/api/hilos";

function Hilo({onUpdate}) {
    const { hiloId } = useParams();
    const navigate = useNavigate();

    const [hilo, setHilo] = useState(null);
    const [respuestas, setRespuestas] = useState([]);
    const [contenidoRespuesta, setContenidoRespuesta] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const {usuario} = useAuth();

    const cargarDatos = async () => {
        try{
            const resHilo = await fetch(`${API_URL}/${hiloId}`);
            if (!resHilo.ok)
                throw new Error("No se pudo cargar el hilo");
            const dataHilo = await resHilo.json();
            setHilo(dataHilo);

            const resResp = await fetch(`${API_URL}/${hiloId}/respuestas`);
            if (!resResp.ok)
                throw new Error("No se pudieron cargar las respuestas");
            const dataResp = await resResp.json();
            setRespuestas(dataResp);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        cargarDatos();
    }, [hiloId]);

    const handleReplySubmit = async (event) => {
        event.preventDefault();
        if (contenidoRespuesta.trim() === "") return;

        if (!usuario) {
            alert("Debes iniciar sesión para responder")
            navigate("/iniciosesion");
            return;
        }

        const nuevaRespuestaDTO = {
            mensaje: contenidoRespuesta,
            idHilo: hiloId,
            idUsuario: usuario.idUsuario,
            nombreAutor: usuario.nombreUsuario
        };

        try{
            const response = await fetch(`${API_URL}/${hiloId}/respuestas`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(nuevaRespuestaDTO)
            });

            if (response.ok){
                setContenidoRespuesta("");
                cargarDatos();

                if (onUpdate) await onUpdate();
            } else{
                alert("Error al enviar respuesta");
            }
        } catch (err){
            console.error(err);
            alert("Error de conexión")
        }
    };

    const handleDelete = async()  => {
        if (!window.confirm('¿Estás seguro que deseas eliminar este hilo?')) {
            return;
        }

        try{
            const response = await fetch(`${API_URL}/${hiloId}`, {
                method: "DELETE",
            });

            if (response.ok){
                alert("Hilo eliminado con éxito");
                if (onUpdate) await onUpdate();
                navigate("/foro")
            } else{
                alert("Error al eliminar")
            }
        } catch(error) {
            console.error(error);
            alert("Error de conexión al intentar eliminar");
        }
    };

    if (loading) return <div className='container my-5 text-white text-center'>Cargando hilo...</div>;
    if (error) return <div className='container my-5 text-danger text-center'>Error: {error}</div>;
    if (!hilo) return <div className='container my-5 text-white'>Hilo no encontrado.</div>;

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
                        <h1 className="mb-0">{hilo.tituloHilo}</h1>
                        {usuario && usuario.nombreUsuario === hilo.autorHilo && (
                            <button onClick={handleDelete} className="btn btn-outline-danger">Eliminar Hilo</button>
                        )}
                    </div>
                    <hr className="my-4" />

                    <div className="post-original">
                        <div className="post-autor">{hilo.autorHilo}</div>
                        <div className="post-contenido">{hilo.mensajeInicialHilo}</div>
                        <div className="post-fecha">{new Date(hilo.fechaHilo).toLocaleString('es-ES')}</div>
                    </div>

                    {respuestas.map(respuesta => (
                        <div key={respuesta.idRespuesta} className="post">
                            <div className="post-autor">{respuesta.autorRespuesta}</div>
                            <div className="post-contenido">{respuesta.mensajeRespuesta}</div>
                            <div className="post-fecha">{new Date(respuesta.fechaRespuesta).toLocaleString('es-ES')}</div>
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
import React, { useState, useEffect } from 'react';

const API_URL = "http://localhost:8082/api/trivia";

function Trivia() {
    const [preguntas, setPreguntas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [preguntaActualIndex, setPreguntaActualIndex] = useState(0);
    const [puntaje, setPuntaje] = useState(0);
    const [juegoTerminado, setJuegoTerminado] = useState(false);
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);

    useEffect(() => {
        const fetchPreguntas = async () => {
            try {
                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error('No se pudieron cargar las preguntas de la trivia.');
                }
                const data = await response.json();
                data.sort(() => Math.random() - 0.5);
                setPreguntas(data);
            } catch (err) {
                console.error(err);
                setError("Error de conexión con el servidor.");
            } finally {
                setLoading(false);
            }
        };

        fetchPreguntas();
    }, []);

    if (loading) {
        return (
            <main className="container my-5 text-center">
                <div className="trivia-container p-5">
                    <h2 className="text-white">Cargando trivia...</h2>
                </div>
            </main>
        );
    }

    if (error) {
        return (
            <main className="container my-5 text-center">
                <div className="trivia-container p-5">
                    <h2 className="text-danger">Error: {error}</h2>
                </div>
            </main>
        );
    }

    if (preguntas.length === 0) {
        return (
            <main className="container my-5 text-center">
                <div className="trivia-container p-5">
                    <h2 className="text-white">No hay preguntas disponibles.</h2>
                </div>
            </main>
        );
    }

    const preguntaActual = preguntas[preguntaActualIndex];

    const handleRespuestaClick = (opcion) => {
        setRespuestaSeleccionada(opcion);

        if (opcion === preguntaActual.respuestaCorrecta) {
            setPuntaje(puntaje + 1);
        }

        setTimeout(() => {
            const siguientePreguntaIndex = preguntaActualIndex + 1;
            if (siguientePreguntaIndex < preguntas.length) {
                setPreguntaActualIndex(siguientePreguntaIndex);
                setRespuestaSeleccionada(null);
            } else {
                setJuegoTerminado(true);
            }
        }, 1500);
    };

    const handleReiniciar = () => {
        setPreguntaActualIndex(0);
        setPuntaje(0);
        setJuegoTerminado(false);
        setRespuestaSeleccionada(null);
    };

    const obtenerClaseBoton = (opcion) => {
        if (respuestaSeleccionada) {
            if (opcion === preguntaActual.respuestaCorrecta) return "correcta"; // Clase CSS verde
            if (opcion === respuestaSeleccionada) return "incorrecta"; // Clase CSS roja
        }
        return "";
    };

    return (
        <main className="container my-5">
            <div className="trivia-container p-4 rounded">
                {juegoTerminado ? (
                    <div className="text-center text-white">
                        <h2 className="mb-4">¡Trivia completada!</h2>
                        <p className="display-4 mb-4">
                            Obtuviste {puntaje} de {preguntas.length} respuestas correctas.
                        </p>
                        <button onClick={handleReiniciar} className="btn btn-lg btn-outline-light boton-hollow">
                            Jugar de nuevo
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="text-white-50 mb-2">
                            Pregunta {preguntaActualIndex + 1} de {preguntas.length}
                        </div>

                        <h2 id="pregunta-trivia" className="my-4 text-white text-center">
                            {preguntaActual.pregunta}
                        </h2>

                        <div className="d-grid gap-3 col-lg-8 mx-auto">
                            {preguntaActual.opciones.map((opcion, index) => (
                                <button
                                    key={index}
                                    className={`btn btn-respuesta btn-lg text-start ${obtenerClaseBoton(opcion)}`}
                                    onClick={() => handleRespuestaClick(opcion)}
                                    disabled={respuestaSeleccionada !== null}
                                >
                                    {opcion}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

export default Trivia;
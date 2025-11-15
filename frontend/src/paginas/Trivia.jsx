import React, { useState, useEffect } from 'react';

const API_URL = "http://demo0658844.mockable.io";

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
                const response = await fetch(`${API_URL}/trivia`);
                if (!response.ok) {
                    throw new Error('No se pudieron cargar las preguntas de la trivia.');
                }
                const data = await response.json();
                setPreguntas(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPreguntas();
    }, []); 

    if (preguntas.length === 0) {
        return (
            <main className="container my-5">
                <div className="trivia-container">
                    {loading && <p className="text-white text-center">Cargando trivia...</p>}
                    {error && <p className="text-danger text-center">Error: {error}</p>}
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
            if (opcion === preguntaActual.respuestaCorrecta) return "correcta";
            if (opcion === respuestaSeleccionada) return "incorrecta";
        }
        return "";
    };

    return (
        <main className="container my-5">
            <div className="trivia-container">
                {juegoTerminado ? (
                    <div className="text-center">
                        <h2>¡Trivia completada!</h2>
                        <p className="display-4">
                            Obtuviste {puntaje} de {preguntas.length} respuestas correctas.
                        </p>
                        <button onClick={handleReiniciar} className="btn btn-lg btn-outline-light boton-hollow">
                            Jugar de nuevo
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="text-white-50">Pregunta {preguntaActualIndex + 1} de {preguntas.length}</div>
                        <h2 id="pregunta-trivia" className="my-4">{preguntaActual.pregunta}</h2>
                        <div className="d-grid gap-3">
                            {preguntaActual.opciones.map((opcion, index) => (
                                <button
                                    key={index}
                                    className={`btn btn-respuesta ${obtenerClaseBoton(opcion)}`}
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
import React, { useState, useEffect } from 'react';
import '/src/style.css';

const API_URL = "http://44.205.150.156:8082/api/guia";

function GuiaPage() {
    const [guiaSections, setGuiaSections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGuia = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error("No se pudo cargar la guía");
                }
                const data = await response.json();
                setGuiaSections(data);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchGuia();
    }, []);

    if (loading) {
        return (
            <div className="container guia-cont text-center mt-5">
                <h2 className="text-white">Cargando Guía...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container guia-cont text-center mt-5">
                <h2 className="text-danger">Error: {error}</h2>
            </div>
        );
    }

    return (
        <div className="container guia-cont">
            {guiaSections.map((seccion) => (
                <div key={seccion.seccionId} className="mb-3">
                    <p className="d-inline-flex gap-1 gap">
                        <button
                            className="btn btn-primary collapsed btn-guia"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapseGuia${seccion.seccionId}`}
                            aria-expanded="false"
                            aria-controls={`collapseGuia${seccion.seccionId}`}
                        >
                            <strong>{seccion.titulo}</strong>
                        </button>
                    </p>

                    <div className="collapse" id={`collapseGuia${seccion.seccionId}`}>
                        <div className="card card-body col-guia">

                            <div dangerouslySetInnerHTML={{ __html: seccion.contenidoHtml }} />
                        </div>
                    </div>
                    <br />
                </div>
            ))}
        </div>
    );
}

export default GuiaPage;
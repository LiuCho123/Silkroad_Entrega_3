import React from 'react';
import { Link } from 'react-router-dom';

function Foro({hilos, loading, error}) {

    const formatearFecha = (fechaISO) => {
        if (!fechaISO) return "Fecha desconocida";
        const fecha = new Date(fechaISO);
        return fecha.toLocaleDateString('es-ES', {
            day: 'numeric', month: 'long', year: 'numeric'
        });
    };

    return (
        <main className="container my-5">
            {loading && <p className="text-white text-center">Cargando hilos...</p>}
            {error && <p className="text-danger text-center">{error}</p>}

            {!loading && !error && (
                <div className="foro-container">
                    <div className="foro-header">
                        <h1>Foro de Hallownest</h1>
                        <Link to="/crear-hilo" className="btn btn-lg btn-outline-light boton-hollow">
                            Crear nuevo hilo
                        </Link>
                    </div>

                    <table className="tabla-hilos">
                        <thead>
                        <tr>
                            <th>Tema</th>
                            <th>Autor</th>
                            <th>Respuestas</th>
                            <th>Fecha</th>
                        </tr>
                        </thead>
                        <tbody>
                        {hilos.map(hilo => (
                            <tr key={hilo.idHilo}>
                                <td><Link to={`/hilo/${hilo.idHilo}`}>{hilo.tituloHilo}</Link></td>
                                <td>{hilo.autorHilo}</td>
                                <td className ="text-center">{hilo.cantidadRespuestas || 0}</td>
                                <td>{formatearFecha(hilo.fechaHilo)}</td>
                            </tr>
                        ))}
                        {hilos.length === 0 && (
                            <tr>
                                <td colSpan="4" className="text-center text-white">
                                    No hay hilos creados aún. ¡Sé el primero!
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            )}
        </main>
    );
}

export default Foro;
import React, { useEffect, useState } from 'react';
import { useAuth } from '../data/AuthContext';
import { useChecklist } from '../data/ChecklistContext';
import '/src/style.css';

const API_CUENTAS = "http://localhost:8080/api/usuarios";
const API_JUEGO   = "http://localhost:8082/api/checklist/ranking";

function RankingPage() {
    const { usuario } = useAuth();
    const { checklistData } = useChecklist();

    const [rankingReal, setRankingReal] = useState([]);
    const [loading, setLoading] = useState(true);

    const calcularTotalItems = () => {
        let total = 0;
        if (checklistData) {
            checklistData.forEach(cat => total += cat.items.length);
        }
        return total > 0 ? total : 40;
    };

    useEffect(() => {
        const fetchDatos = async () => {
            try {
                const [resUsuarios, resPuntajes] = await Promise.all([
                    fetch(API_CUENTAS),
                    fetch(API_JUEGO)
                ]);

                if (resUsuarios.ok && resPuntajes.ok) {
                    const usuarios = await resUsuarios.json();
                    const puntajes = await resPuntajes.json();

                    const totalItemsPosibles = calcularTotalItems();

                    const tablaRanking = puntajes.map(puntaje => {
                        const usuarioEncontrado = usuarios.find(u => u.idUsuario === puntaje.idUsuario);

                        const porcentaje = (puntaje.cantidadItems / totalItemsPosibles) * 112;

                        return {
                            id: puntaje.idUsuario,
                            name: usuarioEncontrado ? usuarioEncontrado.nombreUsuario : "Usuario Desconocido",
                            score: Math.min(porcentaje, 112),
                            isCurrentUser: usuario && usuario.idUsuario === puntaje.idUsuario
                        };
                    });

                    setRankingReal(tablaRanking);
                }
            } catch (error) {
                console.error("Error cargando ranking:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDatos();
    }, [usuario, checklistData]);


    if (loading) {
        return (
            <div className="container ranking-container text-center">
                <h1 className="text-white">Cargando Ranking Global...</h1>
            </div>
        );
    }

    return (
        <div className="container ranking-container">
            <h1 className="text-white mb-3">Ranking de Hallownest</h1>
            <p className="text-white-50 mb-4">Los viajeros más dedicados del reino.</p>

            <ul className="ranking-list">
                <li className="ranking-header">
                    <span className="rank">#</span>
                    <span className="name">Jugador</span>
                    <span className="score">Progreso</span>
                </li>

                {rankingReal.length === 0 ? (
                    <li className="text-white text-center mt-3">Nadie ha guardado progreso aún.</li>
                ) : (
                    rankingReal.map((user, index) => (
                        <li
                            key={user.id}
                            className={`ranking-item ${user.isCurrentUser ? 'current-user' : ''}`}
                        >
                            <span className="rank">{index + 1}</span>
                            <span className="name">
                                {user.name} {user.isCurrentUser ? '(Tú)' : ''}
                            </span>
                            <span className="score">{user.score.toFixed(2)}%</span>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default RankingPage;
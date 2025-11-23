import React, { useEffect, useState } from 'react';
import { useAuth } from '../data/AuthContext';
import { useChecklist } from '../data/ChecklistContext';
import './RankingPage.css';

function RankingPage() {
    const { currentUser } = useAuth();
    const { currentPercentage, isLoading: checklistLoading } = useChecklist();


    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (checklistLoading) return;

        const simulatedUsers = [
            { name: 'Hornet', score: 112.00 },
            { name: 'Zote el Todopoderoso', score: 111.99 },
            { name: 'Quirrel', score: 98.50 },
            { name: 'Cloth', score: 85.25 },
            { name: 'Cornifer', score: 50.75 },
            { name: 'Iselda', score: 25.00 },
        ];

        let realUser = null;

        if (currentUser) {

            realUser = {
                name: `${currentUser.nombreUsuario || currentUser.username} (Tú)`,
                score: parseFloat(currentPercentage.toFixed(2)), // Asegurar 2 decimales
                isCurrentUser: true
            };
        } else {
            realUser = {
                name: "Invitado (Tú)",
                score: 0.00,
                isCurrentUser: true
            };
        }

        const users = [...simulatedUsers, realUser].sort((a, b) => b.score - a.score);

        setAllUsers(users.slice(0, 7));
        setLoading(false);

    }, [currentUser, currentPercentage, checklistLoading]);


    if (loading) {
        return (
            <div className="container ranking-container text-center">
                <h1 className="text-white">Cargando Ranking...</h1>
            </div>
        );
    }

    return (
        <div className="container ranking-container">
            <h1 className="text-white mb-3">Ranking de Hallownest</h1>
            <p className="text-white-50 mb-4">Tu progreso en tiempo real comparado con otros viajeros.</p>

            <ul className="ranking-list">
                <li className="ranking-header">
                    <span className="rank">#</span>
                    <span className="name">Jugador</span>
                    <span className="score">Progreso</span>
                </li>

                {allUsers.map((user, index) => (
                    <li
                        key={user.name + index}
                        className={`ranking-item ${user.isCurrentUser ? 'current-user' : ''}`}
                    >
                        <span className="rank">{index + 1}</span>
                        <span className="name">{user.name}</span>
                        <span className="score">{user.score.toFixed(2)}%</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RankingPage;
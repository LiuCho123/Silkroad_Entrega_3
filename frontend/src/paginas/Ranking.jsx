import React from 'react'; 
import { useChecklist } from '../data/ChecklistContext'; 
import '/src/style.css'; 

const currentUsername = "Liucho"; 

function RankingPage() {

  const { currentPercentage, isLoading } = useChecklist();


  const simulatedUsers = [
    { name: 'Hornet', score: 112.00 },
    { name: 'Zote el Todopoderoso', score: 111.99 },
    { name: 'Quirrel', score: 98.50 },
    { name: 'Cloth', score: 85.25 },
    { name: 'Cornifer', score: 50.75 },
    { name: 'Iselda', score: 25.00 },
  ];
  

  const currentUserScore = parseFloat(currentPercentage.toFixed(2)); 
  const currentUser = { 
      name: `${currentUsername} (Tú)`, 
      score: currentUserScore, 
      isCurrentUser: true 
  };
  
  const allUsers = [...simulatedUsers, currentUser].sort((a, b) => b.score - a.score);

  if (isLoading) {
    return (
      <div className="container ranking-container">
        <h1>Cargando Ranking...</h1>
      </div>
    );
  }

  return (
    <div className="container ranking-container">
      <h1>Ranking de Hallownest</h1>
      <p>Tu progreso comparado con otros viajeros.</p>
      
      <ul className="ranking-list">
        <li className="ranking-header"> {}
            <span className="rank">#</span>
            <span className="name">Jugador</span>
            <span className="score">Progreso</span>
        </li>
        {allUsers.map((user, index) => (
          <li 
            key={user.name + index} 
            className={user.isCurrentUser ? 'current-user ranking-item' : 'ranking-item'}
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
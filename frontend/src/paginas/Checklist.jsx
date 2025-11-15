import '/src/style.css';
import { useChecklist } from '../data/ChecklistContext.jsx';
const logoUrl = '/img/Logo Silk Road.png';
const knightUrl = "/img/The_Knight.png";


function ChecklistPage() {
  
  const {
    checkedItems,
    handleCheckboxChange,
    handleReset,
    currentPercentage,
    itemsRemaining,
    checklistData,
    isLoading 
  } = useChecklist();

  if (isLoading) {
    return (
      <div className="container">
        <h1>Cargando progreso...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Medidor Progreso 112%</h1>
      <p className="progress-info">
        <span id="items-remaining">{itemsRemaining}</span> Objetivos restantes
      </p>
      <h2 id="progress-text">{currentPercentage.toFixed(2)}% Completado</h2>
      <button id="reset-button" className="reset-btn" onClick={handleReset}>
        Reiniciar Progreso
      </button>
      <div className="lists-wrapper">
        {checklistData.map(category => (
          <div className="category-block" key={category.category}>
            <div className="title-wrapper">
              <h3>{category.title}</h3>
            </div>
            <ul className="checklist">
              {category.items.map(item => (
                <li key={item.id}>
                  <input
                    type="checkbox"
                    id={item.id}
                    className="checklist-item"
                    checked={checkedItems.has(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                  <label htmlFor={item.id}>{item.label}</label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ChecklistPage;

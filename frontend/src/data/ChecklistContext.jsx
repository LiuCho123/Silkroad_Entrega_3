import React, { createContext, useState, useEffect, useContext } from 'react';
const API_ENDPOINT = 'https://demo0658844.mockable.io/checklist'; 
const percentageValues = {
    'boss': 1,
    'equip': 2,
    'spell': 1,
    'colosseum': 1,
    'mask-shard': 0.25,
    'nail-upgrade': 1,
    'dream-nail': 1,
    'nail-art': 1,
    'vessel-fragment': 1/3,
    'dreamer': 2,
    'godhome': 1,
    'charm': 1
};
const checklistData = [
    { 
        category: 'boss', title: 'Jefes', items: [
            {id: 'boss1', label: 'Falso Caballero' },
            {id: 'boss2', label: 'Madre Gruz' },
            {id: 'boss3', label: 'Maestro del alma' },
            {id: 'boss4', label: 'Malwek Incubador' },
            {id: 'boss5', label: 'Señores Mantis' },
            {id: 'boss6', label: 'Hornet (Protectora)' },
            {id: 'boss7', label: 'Nosk' },
            {id: 'boss8', label: 'Caballero de la Colmena' },
            {id: 'boss9', label: 'Defensor del Estiercol' },
            {id: 'boss10', label: 'Hornet (Centinela)' },
            {id: 'boss11', label: 'Señor Traidor' },
            {id: 'boss12', label: 'Grim' },
            {id: 'boss13', label: 'Coleccionista' },
            {id: 'boss14', label: 'Uumuu' },
            {id: 'boss15', label: 'Caballeros Vigilantes' },
            {id: 'boss16', label: 'Galien' },
            {id: 'boss17', label: 'Marmu' },
            {id: 'boss18', label: 'Markoth' },
            {id: 'boss19', label: 'Xero' },
            {id: 'boss20', label: 'Sin Ojos' },
            {id: 'boss21', label: 'Viejo Hu' },
            {id: 'boss22', label: 'Gorb' },
            {id: 'boss23', label: 'Rey Pesadilla Grimm' }]},
    { 
        category: 'equip', title: 'Equipamiento', items: [
            {id: 'equip1', label: 'Capa de Polilla' },
            {id: 'equip2', label: 'Garra de Mantis' },
            {id: 'equip3', label: 'Corazon de Cristal' },
            {id: 'equip4', label: 'Lagrima de Isma' },
            {id: 'equip5', label: 'Marca del Rey' },
            {id: 'equip6', label: 'Alas del Monarca' },
            {id: 'equip7', label: 'Manto de la Oscuridad' }]},
    { 
        category: 'spell', title: 'Hechizos', items: [
            {id: 'spell1', label: 'Espiritu Vengativo' },
            {id: 'spell2', label: 'Alma Sombria' },
            {id: 'spell3', label: 'Oscuridad descendente' },
            {id: 'spell4', label: 'Espectros Aulladores' },
            {id: 'spell5', label: 'Chillido del Abismo' }]},
    { 
        category: 'colosseum', title: 'Coliseo', items: [
            {id: 'colosseum1', label: 'Prueba del Guerrero' },
            {id: 'colosseum2', label: 'Prueba del Conquistador' },
            {id: 'colosseum3', label: 'Prueba del Insensato' }]},
    { 
        category: 'mask-shard', title: 'Fragmentos de Mascara', items: [
            {id: 'mask-shard1', label: 'Fragmento 1' },
            {id: 'mask-shard2', label: 'Fragmento 2' },
            {id: 'mask-shard3', label: 'Fragmento 3' },
            {id: 'mask-shard4', label: 'Fragmento 4' },
            {id: 'mask-shard5', label: 'Fragmento 5' },
            {id: 'mask-shard6', label: 'Fragmento 6' },
            {id: 'mask-shard7', label: 'Fragmento 7' },
            {id: 'mask-shard8', label: 'Fragmento 8' },
            {id: 'mask-shard9', label: 'Fragmento 9' },
            {id: 'mask-shard10', label: 'Fragmento 10' },
            {id: 'mask-shard11', label: 'Fragmento 11' },
            {id: 'mask-shard12', label: 'Fragmento 12' },
            {id: 'mask-shard13', label: 'Fragmento 13' },
            {id: 'mask-shard14', label: 'Fragmento 14' },
            {id: 'mask-shard15', label: 'Fragmento 15' },
            {id: 'mask-shard16', label: 'Fragmento 16' }]},
    { 
        category: 'nail-upgrade', title: 'Mejoras de Aguijón', items: [
            {id: 'nail-upgrade1', label: 'Aguijon Afilado' },
            {id: 'nail-upgrade2', label: 'Aguijon Esterilizado' },
            {id: 'nail-upgrade3', label: 'Aguijon en Espiral' },
            {id: 'nail-upgrade4', label: 'Aguijon Puro' }]},
    { 
        category: 'dream-nail', title: 'Nail de Sueño', items: [
            {id: 'dream-nail1', label: 'Consigue el Aguijon Onirico' },
            {id: 'dream-nail2', label: 'Despierta el Aguijon Onirico' },
            {id: 'dream-nail3', label: 'Ultimas palabras del Seer' }]},
    {
        category: 'nail-art', title: 'Arte del aguijon', items: [
            {id: 'nail-art1', label: 'Gran Corte' },
            {id: 'nail-art2', label: 'Corte Ciclon' },
            {id: 'nail-art3', label: 'Corte Veloz' }]},
    {
        category: 'vessel-fragment', title: 'Fragmentos de Vasija', items: [
            {id: 'vessel-fragment1', label: 'Fragmento de Vasija 1' },
            {id: 'vessel-fragment2', label: 'Fragmento de Vasija 2' },
            {id: 'vessel-fragment3', label: 'Fragmento de Vasija 3' },
            {id: 'vessel-fragment4', label: 'Fragmento de Vasija 4' },
            {id: 'vessel-fragment5', label: 'Fragmento de Vasija 5' },
            {id: 'vessel-fragment6', label: 'Fragmento de Vasija 6' },
            {id: 'vessel-fragment7', label: 'Fragmento de Vasija 7' },
            {id: 'vessel-fragment8', label: 'Fragmento de Vasija 8' },
            {id: 'vessel-fragment9', label: 'Fragmento de Vasija 9' }]},
    {
        category: 'dreamer', title: 'Soñadores', items: [
            {id: 'dreamer1', label: 'Monomon la Entendida' },
            {id: 'dreamer2', label: 'Lurien el Vigia' },
            {id: 'dreamer3', label: 'Herrah la Bestia' }]},
    {
        category: 'godhome', title: 'Hogar de los Dioses', items: [
            {id: 'godhome1', label: 'Panteon del Maestro' },
            {id: 'godhome2', label: 'Panteon del Artista' },
            {id: 'godhome3', label: 'Panteon del Sabio' },
            {id: 'godhome4', label: 'Panteon del Caballero' },
            {id: 'godhome5', label: 'Panteon de Hallownest' }]},
    {
        category: 'charm', title: 'Amuletos', items: [
            {id: 'charm1', label: 'Brujula Caprichosa' },
            {id: 'charm2', label: 'Enjambre Recolector' },
            {id: 'charm3', label: 'Coraza Robusta' },
            {id: 'charm4', label: 'Atrapalmas' },
            {id: 'charm5', label: 'Piedra de Chamán' },
            {id: 'charm6', label: 'Devoralmas' },
            {id: 'charm7', label: 'Maestro de la Embestida' },
            {id: 'charm8', label: 'Maestro del Esprint' },
            {id: 'charm9', label: 'Cancion de las Larvas' },
            {id: 'charm10', label: 'Elegía de la Larvamosca' },
            {id: 'charm11', label: 'Corazon Fragil' },
            {id: 'charm12', label: 'Avaricia Fragil' },
            {id: 'charm13', label: 'Fuerza Fragil' },
            {id: 'charm14', label: 'TuerceHechizos' },
            {id: 'charm15', label: 'Cuerpo Firme' },
            {id: 'charm16', label: 'Golpe Pesado' },
            {id: 'charm17', label: 'Corte Rápido' },
            {id: 'charm18', label: 'Largoaguijon' },
            {id: 'charm19', label: 'Marca del Orgullo' },
            {id: 'charm20', label: 'Furia de los Caídos' },
            {id: 'charm21', label: 'Espinas de Agonía' },
            {id: 'charm22', label: 'Coraza de Baldur' },
            {id: 'charm23', label: 'Nido de Larvas' },
            {id: 'charm24', label: 'Blason del Defensor' },
            {id: 'charm25', label: 'Vientre Brillante' },
            {id: 'charm26', label: 'Concentracion Rapida' },
            {id: 'charm27', label: 'Concentracion Profunda' },
            {id: 'charm28', label: 'Corazón de Sangre Vital' },
            {id: 'charm29', label: 'Alma de Sangre Vital' },
            {id: 'charm30', label: 'Bendicion de Joni' },
            {id: 'charm31', label: 'Sangrecolmena' },
            {id: 'charm32', label: 'Hongo con Esporas' },
            {id: 'charm33', label: 'Sombra Afilada' },
            {id: 'charm34', label: 'Forma de Unn' },
            {id: 'charm35', label: 'Gloria del Maestro de Aguijones' },
            {id: 'charm36', label: 'Cancion de la Tejedora' },
            {id: 'charm37', label: 'Portador Onirico' },
            {id: 'charm38', label: 'Escudo Onirico' },
            {id: 'charm39', label: 'Niño de Grimm / Melodia Despreocupada' },
            {id: 'charm40', label: 'Alma del Rey / Corazón del vacio' }]},
        ];

const ChecklistContext = createContext();
export function useChecklist() {
  return useContext(ChecklistContext);
}

export function ChecklistProvider({ children }) {
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true); 


  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) throw new Error('No se pudo cargar el progreso.');
        const data = await response.json();
        setCheckedItems(new Set(data.checkedIds || []));
      } catch (error) {
        console.error("Error al cargar:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProgress();
  }, []); 
  const handleCheckboxChange = (id) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(id)) {
      newCheckedItems.delete(id);
    } else {
      newCheckedItems.add(id);
    }
    setCheckedItems(newCheckedItems);
  };
  
  const handleReset = async () => {
    if (window.confirm('¿Estás seguro de que quieres borrar todo tu progreso?')) {
      setCheckedItems(new Set());
    }
  };

  let currentPercentage = 0;
  const allItemsForCalc = checklistData.flatMap(cat => cat.items.map(item => ({...item, category: cat.category })));
  
  checkedItems.forEach(id => {
    const item = allItemsForCalc.find(i => i.id === id);
    if (item && percentageValues[item.category]) {
      currentPercentage += percentageValues[item.category];
    }
  });

  const totalItems = allItemsForCalc.length;
  const itemsRemaining = totalItems - checkedItems.size;


  const value = {
    checkedItems,
    handleCheckboxChange,
    handleReset,
    currentPercentage,
    itemsRemaining,
    checklistData,
    isLoading, 
  };

  return (
    <ChecklistContext.Provider value={value}>
      {children}
    </ChecklistContext.Provider>
  );
}
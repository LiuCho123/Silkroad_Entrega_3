import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './paginas/HomePage'
import Registro from './paginas/Registro';
import InicioSesion from './paginas/InicioSesion'
import OlvidePassword from './paginas/OlvidePassword';
import VerificarCodigo from './paginas/VerificarCodigo';
import RecuperarContraseña from './paginas/RecuperarPassword';
import Foro from './paginas/Foro';
import Layout from './Layout';
import CrearHilo from './paginas/CrearHilo';
import Hilo from './paginas/Hilo';
import Trivia from './paginas/Trivia';
import ChecklistPage from './paginas/Checklist';
import GuiaPage from './paginas/Guia';
import RankingPage from './paginas/Ranking.jsx';
import { ChecklistProvider } from './data/ChecklistContext';
const api_url = "http://demo0658844.mockable.io";

function App() {
  const [hilos, setHilos] = useState([]);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(null);

  useEffect(() => {
    const fetchHilos = async () => {
      try {
        const response = await fetch(`${api_url}/hilos`);
        if (!response.ok) {
          throw new Error("No se pudieron cargar los hilos");
        }
        const data = await response.json();
        setHilos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHilos();
  }, []);

  const handleCrearHilo = (nuevoHilo) => {
    setHilos([...hilos, nuevoHilo]);
  }

  return (
    <BrowserRouter>
      <ChecklistProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/iniciosesion" element={<InicioSesion />} />
          <Route path="/olvidepassword" element={<OlvidePassword />} />
          <Route path="/verificarcodigo" element={<VerificarCodigo />} />
          <Route path="/recuperarpassword" element={<RecuperarContraseña />} />
          <Route path="/crear-hilo" element={<CrearHilo onCrearHilo={handleCrearHilo}/>} />
          <Route path="/hilo/:hiloId" element={<Hilo hilos={hilos}/>} />



          <Route element={<Layout />}>
            <Route path="/foro" element={<Foro hilos={hilos} loading={loading} error={error}/>} />
            <Route path="/trivia" element={<Trivia />} />
            <Route path="/checklist" element={<ChecklistPage />} />
            <Route path="/ranking" element={<RankingPage />} />
            <Route path="/guia" element={<GuiaPage />} />
          </Route>
        </Routes>
      </ChecklistProvider>
    </BrowserRouter>
  );
}

export default App

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
import {AuthProvider} from "./data/AuthContext.jsx";

const API_URL = "http://localhost:8081/api";

function App() {
  const [hilos, setHilos] = useState([]);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(null);

  const recargarHilos = async () => {
      setLoading(true);
      try{
          const response = await fetch(`${API_URL}/hilos`);
          if (!response.ok){
              throw new Error("No se pudieron cargar los hilos");
          }
          const data = await response.json();
          setHilos(data);
          } catch(err){
              setError("Error al cargar el foro");
          } finally{
              setLoading(false);
          }
      };

  useEffect(() => {
      recargarHilos();
  }, []);

  return (
    <BrowserRouter>
        <AuthProvider>
      <ChecklistProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/iniciosesion" element={<InicioSesion />} />
          <Route path="/olvidepassword" element={<OlvidePassword />} />
          <Route path="/verificarcodigo" element={<VerificarCodigo />} />
          <Route path="/recuperarpassword" element={<RecuperarContraseña />} />
          <Route path="/crear-hilo" element={<CrearHilo onCrearHilo={recargarHilos}/>} />
          <Route path="/hilo/:hiloId" element={<Hilo onHiloDeleted={recargarHilos}/>} />



          <Route element={<Layout />}>
            <Route path="/foro" element={<Foro hilos={hilos} loading={loading} error={error}/>} />
            <Route path="/trivia" element={<Trivia />} />
            <Route path="/checklist" element={<ChecklistPage />} />
            <Route path="/ranking" element={<RankingPage />} />
            <Route path="/guia" element={<GuiaPage />} />
          </Route>
        </Routes>
      </ChecklistProvider>
        </AuthProvider>
    </BrowserRouter>
  );
}

export default App

import React, {useState, useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom'

function VerificarCodigo(){
    const [codigo, setCodigo] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const dataRecuperacion = localStorage.getItem("recuperacion");
        if (!dataRecuperacion){
            navigate("/olvidepassword");
        }
    }, [navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setError("");

        const dataRecuperacion = JSON.parse(localStorage.getItem("recuperacion"));

        if (dataRecuperacion && codigo === dataRecuperacion.codigo){
            navigate("/recuperarpassword");
        } else{
            setError("El código ingresado es incorrecto");
        }
    };

    return(
        <div className="body-main">
            <header className="return-main">
                <Link to="/olvidepassword">
                    <img src="/img/volver.png" alt="Volver al inicio de sesión" width="180" />
                </Link>
            </header>

            <main className="inicioSesion">
                <h1>Verificar Código</h1>
                <p className="text-white-50 mb-4 text-center">Ingresa el código que "recibiste" en tu correo.</p>
                {error && <div className="mensaje-error">{error}</div>}
                
                <form id="formVerificarCodigo" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="codigoInput" className="form-label">Código de Verificación</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="codigoInput" 
                            placeholder="123456" 
                            value={codigo}
                            onChange={(e) => setCodigo(e.target.value)}
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-lg btn-outline-light w-100 mt-3 boton-hollow">Verificar</button>
                </form>
            </main>
        </div>
    );
}

export default VerificarCodigo;
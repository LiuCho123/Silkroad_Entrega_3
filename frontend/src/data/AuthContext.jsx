import React, {createContext, useState, useContext, useEffect} from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null);

    useEffect(() =>{
        const usuarioGuardado = localStorage.getItem("usuario_silkroad");

        if (usuarioGuardado){
            setUsuario(JSON.parse(usuarioGuardado));
        }
    }, []);

    const login = (datosUsuario) => {
        setUsuario(datosUsuario);

        localStorage.setItem("usuario_silkroad", JSON.stringify(datosUsuario));
    };

    const logout = () => {
        setUsuario(null);
        localStorage.removeItem("usuario_silkroad");
    };

    return(
        <AuthContext.Provider value = {{usuario, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
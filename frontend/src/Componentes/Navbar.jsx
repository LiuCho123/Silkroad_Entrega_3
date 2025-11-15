import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-custom-dark">
            <div className="container-fluid">
                <img src="/img/Logo Silk Road.png" alt="Logo Silk Road" className="navbar-logo" />

                <a className="navbar-brand" href="#">
                    <img src="/img/foro.png" alt="Foro" className="navbar-page-icon foro-icon" />
                    <img src="/img/guia.png" alt="Guia" className="navbar-page-icon guia-icon" />
                    <img src="/img/checklist.png" alt="Checklist" className="navbar-page-icon checklist-icon" />
                    <img src="/img/ranking.png" alt="Ranking" className="navbar-page-icon ranking-icon" />
                    <img src="/img/trivia.png" alt="Trivia" className="navbar-page-icon trivia-icon" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/foro" ><img src="/img/foro.png" alt="Foro" /></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/guia" ><img src="/img/guia.png" alt="Guia" /></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/checklist"><img src="/img/checklist.png"
                                    alt="Checklist" /></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ranking"><img src="/img/ranking.png" alt="Ranking" /></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="trivia"><img src="/img/trivia.png" alt="Trivia" /></Link>
                        </li>
                        <li className="nav-item cerrarSesion">
                            <Link className="nav-link" to="/"><img src="/img/cerrarsesion.png" alt="Cerrar Sesion"/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
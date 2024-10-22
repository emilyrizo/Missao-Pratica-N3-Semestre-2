import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './componentes/LivroLista';
import LivroDados from './componentes/LivroDados';

const App = () => {
  return (
    <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Catálogo de Livros</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Lista de Livros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dados">Cadastro de Livro</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <main>
            <Routes>
                <Route path="/" element={<LivroLista />} />
                <Route path="/dados" element={<LivroDados />} />
            </Routes>
        </main>
    </Router>
);
};

export default App;

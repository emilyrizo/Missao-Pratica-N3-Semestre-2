import { useEffect, useState } from 'react';
import ControleLivros from '../controle/ControleLivros';
import ControleEditora from '../controle/ControleEditora';
import '../../src/index.css'


const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();

const LinhaLivro = ({ livro, excluir }) => {
const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

return (
    <tr className='table-lista-livros'>
        <td>{livro.codigo}</td>
        <td>{livro.titulo}</td>
        <td>{livro.resumo}</td>
        <td>
            <ul className="list-unstyled">
                {livro.autores.map((autor, index) => (
                    <li key={index}>{autor}</li>
                ))}
            </ul>
        </td>
        <td>{nomeEditora}</td>
        <td>
            <button className="btn btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button>
        </td>
    </tr>
);
};

const LivroLista = () => {
const [livros, setLivros] = useState([]);
const [carregado, setCarregado] = useState(false);

useEffect(() => {
    const fetchLivros = () => {
        setLivros(controleLivro.obterLivros());
        setCarregado(true);
    };

    if (!carregado) {
        fetchLivros();
    }
}, [carregado]);

const excluir = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false);
};

return (
    <main className="container mt-4">
        <h1 className="mb-4">Catálogo de Livros</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Código</th>
                    <th className="col-titulo">Título</th>
                    <th>Resumo</th>
                    <th className="col-autores">Autores</th>
                    <th className="col-editora">Editora</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {livros.map((livro) => (
                    <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
                ))}
            </tbody>
        </table>
    </main>
);
};

export default LivroLista;

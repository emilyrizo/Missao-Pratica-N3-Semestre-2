import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivros from '../controle/ControleLivros';
import ControleEditora from '../controle/ControleEditora';


const LivroDados = () => {
    const controleLivro = new ControleLivros();
    const controleEditora = new ControleEditora();
    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome,
    }));
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes.length > 0 ? opcoes[0].value : 0);    
    const navigate = useNavigate();
    const tratarCombo = (event) => {
        setCodEditora(Number(event.target.value));
    };
    const incluir = (event) => {
        event.preventDefault(); 
        const livro = {
            codigo: 0,
            codEditora,
            titulo,
            resumo,
            autores: autores.split('\n'),
        };

        controleLivro.incluir(livro);
        navigate('/'); 
    };

    return (
        <main className="container mt-5">
            <h1>Dados do Livro</h1>
            <form onSubmit={incluir}>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Título</label>
                    <input 
                        type="text" 
                        id="titulo" 
                        className="form-control" 
                        value={titulo} 
                        onChange={(e) => setTitulo(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="resumo" className="form-label">Resumo</label>
                    <textarea 
                        id="resumo" 
                        className="form-control" 
                        value={resumo} 
                        onChange={(e) => setResumo(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="codEditora" className="form-label">Editora</label>
                    <select 
                        id="codEditora" 
                        className="form-select" 
                        value={codEditora} 
                        onChange={tratarCombo}
                        required
                    >
                        {opcoes.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.text}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="autores" className="form-label">Autores (1 por linha)</label>
                    <textarea 
                        id="autores" 
                        className="form-control" 
                        value={autores} 
                        onChange={(e) => setAutores(e.target.value)} 
                        required 
                    />
                </div>
                
                <button type="submit" className="btn btn-primary">Salvar Dados</button>
            </form>
        </main>
    );
};

export default LivroDados;

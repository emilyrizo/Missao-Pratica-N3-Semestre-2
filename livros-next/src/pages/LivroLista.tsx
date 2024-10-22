import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import { LinhaLivro } from '../componentes/LinhaLivro';
import { Livro } from '../classes/modelo/Livro';
import '../pages/style.css'

const baseURL = "http://localhost:3000/api/livros";

const obter = async () => {
  const response = await fetch(baseURL);
  return response.json();
};

const excluirLivro = async (codigo: number) => {
  const response = await fetch(`${baseURL}/${codigo}`, {
    method: 'DELETE',
  });
  return response.ok;
};

const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState<boolean>(false);

  useEffect(() => {
    if (!carregado) {
      obter().then((data) => {
        setLivros(data);
        setCarregado(true);
      });
    }
  }, [carregado]);

  const excluir = (codigo: number) => {
    excluirLivro(codigo).then((success) => {
      if (success) {
        setCarregado(false);
      }
    });
  };

  return (
    <div>
      <Head>
        <title>Lista de Livros</title>
      </Head>
      <Menu />
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
              <LinhaLivro
                key={livro.codigo}
                livro={livro}
                excluir={() => excluir(livro.codigo)}
              />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;

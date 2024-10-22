import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import '../pages/style.css';

export default function Home() {
  return (
    <div className="container-fluid">
      <Head>
        <title>Catálogo de Livros - Next</title>
      </Head>
      <Menu />
      <main>
        <h1 className='titulo-home'>Catálogo de Livros - Next</h1>
      </main>
    </div>
  );
}

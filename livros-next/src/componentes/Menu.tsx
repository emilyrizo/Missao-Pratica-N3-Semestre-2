import Link from 'next/link';
import React from 'react';
import '../pages/style.css';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
        Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/LivroLista" className="nav-link">
                Catálogo
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroDados" className="nav-link">
                Novo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

import React from 'react';
import CardJogo from './components/CardJogo/CardJogo';
import './App.css';

// Importando todas as imagens
import stardewImg from './assets/imgs/stardew.jpg';
import simsImg from './assets/imgs/the sims.jpeg';
import animalcrossingImg from './assets/imgs/animal crossinf.jpg';
import overcookedImg from './assets/imgs/overcooked.jpeg'; 
import unpackingImg from './assets/imgs/unpacking.jpeg';
import hogwartsImg from './assets/imgs/hogwarts legacy.jpeg';
import justdanceImg from './assets/imgs/jusdance.jpg';
import lifeisstrangeImg from './assets/imgs/lifeisstrange.jpeg';

function App() {
  const jogos = [
    {
      id: 1,
      titulo: 'Stardew Valley',
      genero: 'Simulação / Fazenda',
      preco: 24.90,
      capa: stardewImg,
      onSale: false
    },
    {
      id: 2,
      titulo: 'The Sims 4',
      genero: 'Simulação de Vida',
      preco: 0.00,
      capa: simsImg,
      onSale: false
    },
    {
      id: 3,
      titulo: 'Animal Crossing',
      genero: 'Simulação / Casual',
      preco: 199.90,
      precoOriginal: 299.90,
      capa: animalcrossingImg,
      onSale: true
    },
    {
      id: 4,
      titulo: 'Overcooked 2',
      genero: 'Cooperativo / Party Game',
      preco: 49.90,
      capa: overcookedImg,
      onSale: false
    },
    {
      id: 5,
      titulo: 'Unpacking',
      genero: 'Puzzle / Relaxante',
      preco: 59.90,
      precoOriginal: 99.90,
      capa: unpackingImg,
      onSale: true
    },
    {
      id: 6,
      titulo: 'Hogwarts Legacy',
      genero: 'RPG / Mundo Aberto',
      preco: 149.90,
      precoOriginal: 299.90,
      capa: hogwartsImg,
      onSale: true
    },
    {
      id: 7,
      titulo: 'Just Dance 2024',
      genero: 'Dança / Música',
      preco: 179.90,
      capa: justdanceImg,
      onSale: false
    },
    {
      id: 8,
      titulo: 'Life is Strange',
      genero: 'Aventura / História',
      preco: 79.90,
      precoOriginal: 159.90,
      capa: lifeisstrangeImg,
      onSale: true
    }
  ];

  return (
    <div className="app">
      <header className="app-header">
        <h1>MAKAL STORE</h1>
      </header>

      <main className="app-main">
        <section className="jogos-grid">
          {jogos.map(jogo => (
            <CardJogo
              key={jogo.id}
              capa={jogo.capa}
              titulo={jogo.titulo}
              genero={jogo.genero}
              preco={jogo.preco}
              precoOriginal={jogo.precoOriginal}
              onSale={jogo.onSale}
            />
          ))}
        </section>
      </main>

      <footer className="app-footer">
        <p>© 2024 Makal Store - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;
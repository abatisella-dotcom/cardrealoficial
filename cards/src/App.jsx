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
      titulo: 'O que é React',
      conteudo: 'React é uma biblioteca JS para criar interfaces.',
      exemplo: 'Exemplo de uso',
      codigo: ";",
      capa: stardewImg
    },
    {
      id: 2,
      titulo: 'The Sims 4',
      conteudo: 'Simulação de Vida',
      exemplo: 'Gratuito',
      codigo: 'COD002',
      capa: simsImg
    },
    {
      id: 3,
      titulo: 'Animal Crossing',
      conteudo: 'Simulação / Casual',
      exemplo: '199.90',
      codigo: 'COD003',
      capa: animalcrossingImg
    },
    {
      id: 4,
      titulo: 'Overcooked 2',
      conteudo: 'Cooperativo / Party Game',
      exemplo: '49.90',
      codigo: 'COD004',
      capa: overcookedImg
    },
    {
      id: 5,
      titulo: 'Unpacking',
      conteudo: 'Puzzle / Relaxante',
      exemplo: '59.90',
      codigo: 'COD005',
      capa: unpackingImg
    },
    {
      id: 6,
      titulo: 'Hogwarts Legacy',
      conteudo: 'RPG / Mundo Aberto',
      exemplo: '149.90',
      codigo: 'COD006',
      capa: hogwartsImg
    },
    {
      id: 7,
      titulo: 'Just Dance 2024',
      conteudo: 'Dança / Música',
      exemplo: '179.90',
      codigo: 'COD007',
      capa: justdanceImg
    },
    {
      id: 8,
      titulo: 'Life is Strange',
      conteudo: 'Aventura / História',
      exemplo: '79.90',
      codigo: 'COD008',
      capa: lifeisstrangeImg
    }
  ];


  
  return (
    <div className="app">
      <header className="app-header">
        <h1>CARDS MAKAL</h1>
      </header>

      <main className="app-main">

        <section className="jogos-grid">
          {jogos.map(jogo => (
            <CardJogo
              key={jogo.id}
              capa={jogo.capa}
              titulo={jogo.titulo}
              conteudo={jogo.conteudo}
              exemplo={jogo.exemplo}
              codigo={jogo.codigo}
            />
          ))}
        </section>
      </main>

      <footer className="app-footer">
        <p>© 2024 Cards Makal - Todos os direitos reservados</p>
      </footer>
    </div>
    
  );
}

export default App;

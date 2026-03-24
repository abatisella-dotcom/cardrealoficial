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
  const Fundamentos = [
    {
      id: 1,
      titulo: 'O que é React',
      conteudo: 'React é uma biblioteca JS para criar interfaces.',
      exemplo: 'Exemplo de uso',
      codigo: "",
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

  ];


  
  return (
    <div className="app">
      <header className="app-header">
        <h1>CARDS MAKAL</h1>
      </header>

      <main className="app-main">
        
      <div id="informacoes">
        <div id='info'>
          <h1>
            INFO:
          </h1>
        </div>
        <div id='frase1'>
          <h1>
            Este espaço funciona como um guia rápido e objetivo para apoiar seus <br />estudos e reforçar os fundamentos do React.
          </h1>
        </div>
      </div>

        <div id="fundamentos">
          <h1>FUNDAMENTOS</h1>
        </div>

        <section className="Fundamentos-grid">
          {Fundamentos.map(Fundamento => (
            <CardJogo
              key={Fundamento.id}
              capa={Fundamento.capa}
              titulo={Fundamento.titulo}
              conteudo={Fundamento.conteudo}
              exemplo={Fundamento.exemplo}
              codigo={Fundamento.codigo}
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

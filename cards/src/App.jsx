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
    { id: 1, titulo: 'O que é React', conteudo: 'React é uma biblioteca JS para criar interfaces.', exemplo: 'Exemplo de uso', codigo: "", capa: stardewImg },
    { id: 2, titulo: 'The Sims 4', conteudo: 'Simulação de Vida', exemplo: 'Gratuito', codigo: 'COD002', capa: simsImg },
    { id: 3, titulo: 'Animal Crossing', conteudo: 'Simulação / Casual', exemplo: '199.90', codigo: 'COD003', capa: animalcrossingImg },
    { id: 4, titulo: 'Overcooked 2', conteudo: 'Cooperativo / Party Game', exemplo: '49.90', codigo: 'COD004', capa: overcookedImg },
    { id: 5, titulo: 'Unpacking', conteudo: 'Puzzle / Relaxante', exemplo: '59.90', codigo: 'COD005', capa: unpackingImg },
    { id: 6, titulo: 'Hogwarts Legacy', conteudo: 'RPG / Mundo Aberto', exemplo: '149.90', codigo: 'COD006', capa: hogwartsImg },
  ];

  const JSX = [
    { id: 7, titulo: 'JSX Básico', conteudo: 'Sintaxe parecida com HTML dentro do JS.', exemplo: '<h1>Hello World</h1>', codigo: 'JSX001', capa: justdanceImg },
    { id: 8, titulo: 'Expressões', conteudo: 'Permite usar variáveis dentro do JSX.', exemplo: '{nome}', codigo: 'JSX002', capa: lifeisstrangeImg },
    { id: 9, titulo: 'Expressões', conteudo: 'Permite usar variáveis dentro do JSX.', exemplo: '{nome}', codigo: 'JSX002', capa: lifeisstrangeImg },
    { id: 10, titulo: 'Expressões', conteudo: 'Permite usar variáveis dentro do JSX.', exemplo: '{nome}', codigo: 'JSX002', capa: lifeisstrangeImg },
    { id: 11, titulo: 'Expressões', conteudo: 'Permite usar variáveis dentro do JSX.', exemplo: '{nome}', codigo: 'JSX002', capa: lifeisstrangeImg },
  ];

  const Components = [
    { id: 12, titulo: 'Componentes Funcionais', conteudo: 'Funções que retornam JSX.', exemplo: 'function App() { return <h1>Oi</h1> }', codigo: 'COMP001', capa: simsImg },
    { id: 13, titulo: 'Props', conteudo: 'Permite passar dados para componentes.', exemplo: '<Card titulo="React"/>', codigo: 'COMP002', capa: stardewImg },
    { id: 14, titulo: 'Componentes Funcionais', conteudo: 'Funções que retornam JSX.', exemplo: 'function App() { return <h1>Oi</h1> }', codigo: 'COMP001', capa: simsImg },
    { id: 15, titulo: 'Componentes Funcionais', conteudo: 'Funções que retornam JSX.', exemplo: 'function App() { return <h1>Oi</h1> }', codigo: 'COMP001', capa: simsImg },
  
  ];

  const Props = [
    { id: 16, titulo: 'Componentes Funcionais', conteudo: 'Funções que retornam JSX.', exemplo: 'function App() { return <h1>Oi</h1> }', codigo: 'COMP001', capa: simsImg },
    { id: 17, titulo: 'Props', conteudo: 'Permite passar dados para componentes.', exemplo: '<Card titulo="React"/>', codigo: 'COMP002', capa: stardewImg },
    { id: 18, titulo: 'Componentes Funcionais', conteudo: 'Funções que retornam JSX.', exemplo: 'function App() { return <h1>Oi</h1> }', codigo: 'COMP001', capa: simsImg },
    { id: 19, titulo: 'Componentes Funcionais', conteudo: 'Funções que retornam JSX.', exemplo: 'function App() { return <h1>Oi</h1> }', codigo: 'COMP001', capa: simsImg },
  
  ];

  const State = [
    { id: 20, titulo: 'Componentes Funcionais', conteudo: 'Funções que retornam JSX.', exemplo: 'function App() { return <h1>Oi</h1> }', codigo: 'COMP001', capa: simsImg },
    { id: 21, titulo: 'Props', conteudo: 'Permite passar dados para componentes.', exemplo: '<Card titulo="React"/>', codigo: 'COMP002', capa: stardewImg },
    { id: 22, titulo: 'Componentes Funcionais', conteudo: 'Funções que retornam JSX.', exemplo: 'function App() { return <h1>Oi</h1> }', codigo: 'COMP001', capa: simsImg },
    { id: 23, titulo: 'Componentes Funcionais', conteudo: 'Funções que retornam JSX.', exemplo: 'function App() { return <h1>Oi</h1> }', codigo: 'COMP001', capa: simsImg },
  
  ];

  const Renderizacao = [
    { id: 24, titulo: 'Context API', conteudo: 'Gerencia estado global.', exemplo: '<Context.Provider>', codigo: 'STATE001', capa: simsImg },
    { id: 25, titulo: 'Redux', conteudo: 'Biblioteca para estado global.', exemplo: 'store.dispatch(action)', codigo: 'STATE002', capa: stardewImg },
    { id: 26, titulo: 'Context API', conteudo: 'Gerencia estado global.', exemplo: '<Context.Provider>', codigo: 'STATE001', capa: simsImg },
  ];

  const Hooks = [
    { id: 27, titulo: 'useState', conteudo: 'Hook para gerenciar estado.', exemplo: 'const [count, setCount] = useState(0)', codigo: 'HOOK001', capa: animalcrossingImg },
    { id: 28, titulo: 'useEffect', conteudo: 'Hook para efeitos colaterais.', exemplo: 'useEffect(() => {...}, [])', codigo: 'HOOK002', capa: overcookedImg },
    { id: 29, titulo: 'useEffect', conteudo: 'Hook para efeitos colaterais.', exemplo: 'useEffect(() => {...}, [])', codigo: 'HOOK002', capa: overcookedImg },

  ];

  const Conceitosextras = [
    { id: 30, titulo: 'React Router', conteudo: 'Biblioteca para navegação.', exemplo: '<Route path="/home" />', codigo: 'ROUT001', capa: unpackingImg },
  ];

  const Router = [
    { id: 1, titulo: 'React Router', conteudo: 'Biblioteca para navegação.', exemplo: '<Route path="/home" />', codigo: 'ROUT001', capa: unpackingImg },
    { id: 2, titulo: 'Link', conteudo: 'Componente para navegação.', exemplo: '<Link to="/about">Sobre</Link>', codigo: 'ROUT002', capa: hogwartsImg },
  ];

  return (
    <div className="app">
      <header className="app-header">
        <h1>CARDS MAKAL</h1>
      </header>

      <main className="app-main">
        <div id="informacoes">
          <div id='info'>
            <h1>INFO:</h1>
          </div>
          <div id='frase1'>
            <h1>
              Este espaço funciona como um guia rápido e objetivo para apoiar seus <br />estudos e reforçar os fundamentos do React.
            </h1>
          </div>
        </div>

        <div id="fundamentos"><h1>FUNDAMENTOS</h1></div>
        <section className="Fundamentos-grid">
          {Fundamentos.map(item => (
            <CardJogo key={item.id} {...item} />
          ))}
        </section>

        {/* JSX */}
        <div id="jsx"><h1>JSX</h1></div>
        <section className="JSX-grid">
          {JSX.map(item => (
            <CardJogo key={item.id} {...item} />
          ))}
        </section>

        {/* COMPONENTS */}
        <div id="components"><h1>COMPONENTES</h1></div>
        <section className="Components-grid">
          {Components.map(item => (
            <CardJogo key={item.id} {...item} />
          ))}
        </section>

                {/* PROPS */}
        <div id="props"><h1>PROPS</h1></div>
        <section className="Props-grid">
          {Props.map(item => (
            <CardJogo key={item.id} {...item} />
          ))}
        </section>

                {/* STATE */}
        <div id="state"><h1>STATE</h1></div>
        <section className="State-grid">
          {State.map(item => (
            <CardJogo key={item.id} {...item} />
          ))}
        </section>


        {/* RENDERIZAÇÃo */}
        <div id="renderizacao"><h1>RENDERIZAÇÃO</h1></div>
        <section className="renderizacao-grid">
          {Renderizacao.map(item => (
            <CardJogo key={item.id} {...item} />
          ))}
        </section>


        {/* HOOKS */}
        <div id="hooks"><h1>HOOKS</h1></div>
        <section className="Hooks-grid">
          {Hooks.map(item => (
            <CardJogo key={item.id} {...item} />
          ))}
        </section>

        {/* ROUTER */}
        <div id="router"><h1>ROUTER</h1></div>
        <section className="Router-grid">
          {Router.map(item => (
            <CardJogo key={item.id} {...item} />
          ))}
        </section>
        
        {/* Conceitos */}
        <div id="Conceitosextras"><h1>CONCEITOS EXTRAS</h1></div>
        <section className="Conceitoextras-grid">
          {Conceitosextras.map(item => (
            <CardJogo key={item.id} {...item} />
          ))}
        </section>

      </main>
    </div>
  );
}

export default App;
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
import reactImg from './assets/imgs/react.png';

function App() {
  const Fundamentos = [
  { id: 1, titulo: 'O que é React',
    conteudo: 'React é uma biblioteca JavaScript criada para construir interfaces de usuário de forma componentizada e eficiente.',
    exemplo: 'Criar componentes reutilizáveis',
    codigo: 'REACT001', capa: stardewImg },

  { id: 2, titulo: 'O que é Vite',
    conteudo: 'Vite é uma ferramenta de build moderna que cria projetos rápidos com carregamento instantâneo.',
    exemplo: 'npm create vite@latest',
    codigo: '1', capa: simsImg },

  { id: 3, titulo: 'Criando projeto com Vite',
    conteudo: 'Você pode criar um projeto React com Vite usando npm create vite@latest e escolhendo React.',
    exemplo: 'npm install && npm run dev',
    codigo: '', capa: animalcrossingImg },

  { id: 4, titulo: 'Estrutura de pastas',
    conteudo: 'Projetos React possuem pastas como src, assets e components para organização.',
    exemplo: 'src/components',
    codigo: '', capa: overcookedImg },

  { id: 5, titulo: 'Arquivo main.jsx',
    conteudo: 'Responsável por renderizar o App no HTML usando ReactDOM.',
    exemplo: 'createRoot().render(<App />)',
    codigo: '', capa: unpackingImg },

  { id: 6, titulo: 'Arquivo App.jsx',
    conteudo: 'É o componente principal da aplicação onde outros componentes são chamados.',
    exemplo: '<Header /> <Main />',
    codigo: '', capa: hogwartsImg },
];

 const JSX = [
  { id: 7, titulo: 'O que é JSX',
    conteudo: 'JSX é uma sintaxe que mistura JavaScript com HTML dentro do React.',
    exemplo: '<h1>Hello</h1>',
    codigo: '', capa: justdanceImg },

  { id: 8, titulo: 'HTML vs JSX',
    conteudo: 'No JSX usamos className ao invés de class e tudo precisa estar fechado.',
    exemplo: '<img />',
    codigo: '', capa: lifeisstrangeImg },

  { id: 9, titulo: 'Expressões {}',
    conteudo: 'Permite usar JavaScript dentro do JSX.',
    exemplo: '{nome}',
    codigo: '', capa: lifeisstrangeImg },

  { id: 10, titulo: 'Fragment',
    conteudo: 'Permite agrupar elementos sem criar uma div extra.',
    exemplo: '<> <h1/> <p/> </>',
    codigo: '', capa: lifeisstrangeImg },

  { id: 11, titulo: 'className',
    conteudo: 'Usado para aplicar CSS no JSX.',
    exemplo: '<div className="box">',
    codigo: '', capa: lifeisstrangeImg },
];

const Components = [
  { id: 12, titulo: 'O que são componentes',
    conteudo: 'São partes reutilizáveis da interface feitas com funções ou classes.',
    exemplo: '<Header />',
    codigo: '', capa: simsImg },

  { id: 13, titulo: 'Componente funcional',
    conteudo: 'É uma função que retorna JSX.',
    exemplo: 'function App() { return <h1>Oi</h1> }',
    codigo: '', capa: stardewImg },

  { id: 14, titulo: 'Reutilização',
    conteudo: 'Componentes podem ser usados várias vezes.',
    exemplo: '<Card /> <Card />',
    codigo: '', capa: simsImg },

  { id: 15, titulo: 'Organização',
    conteudo: 'Componentes devem ficar em pastas separadas para melhor organização.',
    exemplo: '/components/Card',
    codigo: '', capa: simsImg },
];

const Props = [
  { id: 16, titulo: 'O que são props',
    conteudo: 'Props são dados passados de um componente pai para um filho.',
    exemplo: '<Card titulo="React" />',
    codigo: '', capa: simsImg },

  { id: 17, titulo: 'Passando props',
    conteudo: 'Você envia valores como atributos no componente.',
    exemplo: '<Card nome="Malu" />',
    codigo: '', capa: stardewImg },

  { id: 18, titulo: 'Props padrão',
    conteudo: 'Você pode definir valores padrão caso não sejam enviados.',
    exemplo: 'defaultProps',
    codigo: '', capa: simsImg },

  { id: 19, titulo: 'Desestruturação',
    conteudo: 'Permite acessar props diretamente.',
    exemplo: 'function Card({titulo})',
    codigo: '', capa: simsImg },
];

const State = [
  { id: 20, titulo: 'O que é useState',
    conteudo: 'Hook que permite criar e controlar estados no React.',
    exemplo: 'const [count, setCount] = useState(0)',
    codigo: '', capa: stardewImg },

  { id: 21, titulo: 'Atualizando estado',
    conteudo: 'O estado é atualizado usando a função setter.',
    exemplo: 'setCount(count + 1)',
    codigo: '', capa: stardewImg },

  { id: 22, titulo: 'Estado em formulários',
    conteudo: 'Controla inputs usando estado.',
    exemplo: 'value={nome}',
    codigo: '', capa: stardewImg },

  { id: 23, titulo: 'Objetos e arrays',
    conteudo: 'Estados podem armazenar estruturas complexas.',
    exemplo: 'setLista([...lista, item])',
    codigo: '', capa: stardewImg },
];

const Renderizacao = [
  { id: 24, titulo: 'Renderização condicional',
    conteudo: 'Renderiza elementos com base em condições.',
    exemplo: 'isLogin && <Home />',
    codigo: '', capa: simsImg },

  { id: 25, titulo: 'Listas com map()',
    conteudo: 'Usado para renderizar listas de dados.',
    exemplo: 'lista.map(item => <Card />)',
    codigo: '', capa: stardewImg },

  { id: 26, titulo: 'Key nas listas',
    conteudo: 'Ajuda o React a identificar elementos.',
    exemplo: 'key={id}',
    codigo: '', capa: simsImg },
];

const Hooks = [
  { id: 27, titulo: 'O que é useEffect',
    conteudo: 'Hook usado para efeitos colaterais.',
    exemplo: 'useEffect(() => {}, [])',
    codigo: '', capa: animalcrossingImg },

  { id: 28, titulo: 'Ciclo de vida',
    conteudo: 'Controla montagem, atualização e desmontagem.',
    exemplo: 'componentDidMount',
    codigo: '', capa: overcookedImg },

  { id: 29, titulo: 'Dependências',
    conteudo: 'Define quando o useEffect será executado.',
    exemplo: '[count]',
    codigo: '', capa: overcookedImg },
];

const Conceitosextras = [
  { id: 30, titulo: 'Comunicação pai → filho',
    conteudo: 'Dados são enviados via props.',
    exemplo: '<Filho dado={valor} />',
    codigo: '', capa: unpackingImg },
];

const Router = [
  { id: 31, titulo: 'React Router',
    conteudo: 'Biblioteca usada para criar navegação entre páginas em aplicações React sem recarregar o site.',
    exemplo: '', codigo: '', capa: unpackingImg },

  { id: 32, titulo: 'Link',
    conteudo: 'Componente utilizado para navegar entre páginas de forma rápida sem recarregar.',
    exemplo: '', codigo: '', capa: hogwartsImg },
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
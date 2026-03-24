// CardJogo.jsx
import React from 'react';
import './CardJogo.css';

const CardJogo = ({ 

  titulo,
  conteudo,
  exemplo,
  codigo,
  capa
}) => {
  return (
    <div className="card-jogo">

      <div className="card-info">
        <h3 className="card-titulo">{titulo}</h3>
        <p className="card-conteudo">{conteudo}</p>
        <p className="card-exemplo">{exemplo}</p>
        <p className="card-codigo">Código: {codigo}</p>
      </div>
      <div className="card-imagem-container">
        <img 
          src={capa} 
          alt={`Capa do jogo ${titulo}`}
          className="card-imagem"
        />
      </div>
    </div>
  );
};

export default CardJogo;

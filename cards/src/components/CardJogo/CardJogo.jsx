// CardJogo.jsx
import React from 'react';
import './CardJogo.css';

const CardJogo = ({ 
  capa, 
  titulo, 
  genero, 
  preco, 
  precoOriginal,  
  onSale = false 
}) => {
  
  // Formata o preço para o padrão brasileiro
  const precoFormatado = preco?.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  const precoOriginalFormatado = precoOriginal?.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return (
    <div className={`card-jogo ${onSale ? 'card-promocao' : ''}`}>
      <div className="card-imagem-container">
        <img 
          src={capa} 
          alt={`Capa do jogo ${titulo}`}
          className="card-imagem"
        />
        
        {onSale && (
          <span className="selo-promocao">
            PROMOÇÃO
          </span>
        )}
      </div>

      <div className="card-info">
        <h3 className="card-titulo">{titulo}</h3>
        <p className="card-genero">{genero}</p>
        
        <div className="card-preco-container">
          {onSale && precoOriginal && (
            <>
              <span className="preco-original">
                {precoOriginalFormatado}
              </span>
              <span className="preco-promocao">
                {precoFormatado}
              </span>
            </>
          )}
          
          {!onSale && (
            <p className="card-preco">
              {precoFormatado}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardJogo;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlexBoxLista from './FlexBoxLista';
import FlexBoxItem from './FlexBoxItem';
import './style.css';

const Jogos = () => {
  const [jogo, setJogo] = useState(null);

  useEffect(() => {
    axios.get('https://www.cheapshark.com/api/1.0/deals').then((resposta) => {
      setJogo(resposta.data);
    });
  }, []);

  if (jogo === null) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <h1>JOGOS EM PROMOÇÃO</h1>
      <br></br>

      {jogo.map((item) => (
        <li key="gameID">
          <hr></hr>
          <br></br>
          <div className="info">
            <img src={item.thumb} />
            <h2 class="h2">{item.title}</h2>
            <p className="desconto">Preço: ${item.normalPrice}</p>
            <a href="#">Compre agora: $ {item.salePrice}</a>
            <br></br>
            <p className="review">Review Steam: {item.steamRatingText}</p>
          </div>
        </li>
      ))}
    </>
  );
};

export default Jogos;

import React from 'react';
import "./Sobre.css";
import fotoSTMA from '../../img/stma.png';

export default function Sobre() {
  return (
    <>
      <h1>STMA</h1>
      
      <div className='sobre'>
        <div className="grid">
          <img src={fotoSTMA} alt="Imagem de exemplo" />

          <div className='drop-shadow-xl text'>
            <p>A Seção Técnica de Materiais da FEG é responsável pela <b>compra</b> de materiais e serviços necessários para o funcionamento da Faculdade.</p>
          </div>
        </div>

        
        <div className="grid">
          <div className='drop-shadow-xl text'>
            <p>A Seção Técnica de Materiais da FEG é responsável pela <b>compra</b> de materiais e serviços necessários para o funcionamento da Faculdade.</p>
          </div>

          <img src={fotoSTMA} alt="Imagem de exemplo" />
        </div>
      </div>
    </>
  )
}
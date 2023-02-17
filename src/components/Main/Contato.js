import React from 'react';
import './Contato.css';

export default function Contato() {
  return (
    <>
      <h1>Contato da STMA</h1>
      
      <div className="contact grid drop-shadow-lg">
        <h2>STMA</h2>

        <p className='telefone'>
          <span className="material-symbols-outlined pr-1">call</span>
          (12) 3123-2733
        </p>
        <p><a href='mailto:sma.feg@unesp.br'>
          <span className="material-symbols-outlined pr-2">mail</span>
          sma.feg@unesp.br</a></p>
      </div>
    </>
  )
}
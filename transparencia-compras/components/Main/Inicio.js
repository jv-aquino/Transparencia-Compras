import React from "react";
import { v4 as uuidv4 } from 'uuid';
import faq from "../../data/faq.json";

function Início() {
  function showContent (e) {
    e.target.classList.toggle("selected");
  }

  return (
    <>
      <h1>Transparência de Compras</h1>

      <div className="content drop-shadow-xl">
        <h2>Início</h2>

        <p>Bem-vindo ao site Transparência de Compras, feito pela Seção Técnica de Materiais da FEG! Aqui você poderá encontrar:</p>
        <ul className='p'>
          <li>como realizar pedidos</li>
          <li>o status dos seus pedidos</li>
          <li>informações sobre a STMA</li>
          <li>contato da seção e da equipe</li>
          <li>esclarecimento de dúvidas</li>
        </ul>

        <h2 className='faq'>Perguntas Frequentes</h2>
        {
          faq.map(obj => {
            return Object.keys(obj).map(key => {
              if (key === "Pergunta") {
                return (
                <button 
                  onClick={showContent}
                  key={uuidv4()}> 
                  <span className='material-symbols-outlined'>expand_more</span>
                  { obj[key] } 
                </button>
                );
              }
              else {
                return (
                    <div 
                    key={uuidv4()}
                    dangerouslySetInnerHTML={{ __html: obj[key] }}>
                    </div>
                );
              }
            });
          })
        }
      </div>
    </>
  );
}

export default Início;
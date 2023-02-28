import React from 'react';
import fotoSTMA from '../../img/stma.png';

export default function Sobre() {
  return (
    <>
      <h1>STMA</h1>
      
      <div className='sobre'>
        <div className="grid">
          <img src={fotoSTMA} alt="Imagem de exemplo" />

          <div className='drop-shadow-xl text'>
            <h2>Responsabilidades</h2>

            <p className='pt-1'>A Seção Técnica de Materiais da FEG é responsável por: </p>
            
            <ul className='pt-1'>
              <li><b>comprar materiais</b> necessários para o funcionamento da Faculdade.</li>
              <li><b>contratar serviços</b> terceirizados (manutenção, reparo, etc.)</li>
              <li>gerenciar <b>contratos</b></li>
              <li>controlar o <b>patrimônio</b> da FEG</li>
              <li><b>estocar os materiais</b> de uso contínuo</li>
            </ul>

          </div>
        </div>

        
        <div className="grid">
          <div className='drop-shadow-xl text'>
            <h2>Localização e Horário</h2>

            <p className='pt-1'>
              A STMA está localizada perto da <b>cantina</b> da FEG, no bloco do <b>CTIG</b>.
            </p>

            <p className='pt-2'>
              O <b>horário</b> de funcionamento para atendimentos é:
            </p>

            <ul className='pt-1 horario'>
              <li>Manhã: <b>8h -&gt; 12h</b></li>
              <li>Tarde: <b>13:30h -&gt; 17h</b> </li>
            </ul>
            
          </div>

          <img src={fotoSTMA} alt="Imagem de exemplo" />
        </div>
      </div>
    </>
  )
}
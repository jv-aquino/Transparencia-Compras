import React from 'react';
import './Navbar.css';
import unespLogo from '../img/unesp.png';

function Li({text, navGroup}) {
  const id = text.toLowerCase().replace(/\s+/g, '');
  // ID is a lowercase and no-space version of the Li text

  const li = (
    <li className="p-2" id={id}
    {...(typeof navGroup === 'string') ? {'data-drop': navGroup} : {}}>
      { /* If it's part of a dropdown, assign to it */}
      {text}
    </li>
  );

  return li;
}

function Navbar(props) {
  return (
    <nav className="py-3 px-8 justify-between items-center">
      <img src={unespLogo} alt="Logo da Unesp" className="page cursor-pointer" id="logo" />

      <button type="button" className="items-center justify-center" id="mobileButton"><span className="material-symbols-outlined">menu</span></button>

      <div className="ul">
        <ul className="font-bold items-center gap-3">
          <Li text='Início' />
          <div className="dropdown">
            <li className="p-2" id="pedidos">Pedidos<span className="material-symbols-outlined">expand_more</span></li>
            <ul id="pedidos">
              <Li text='Como Pedir' navGroup='pedido'/>
              <Li text='Visualizar Pedidos' navGroup='pedido'/>
            </ul>
          </div>
          <div className="dropdown">
          <li className="p-2" id="stma">STMA<span className="material-symbols-outlined">expand_more</span></li>
            <ul id="stmas">
              <Li navGroup='stma' text="Sobre"/>
              <Li navGroup='stma' text="Equipe"/>
              <Li navGroup='stma' text="Contato"/>
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
import React from 'react';
import './Navbar.css';
import unespLogo from '../img/unesp.png';

function MobileMenuButton() {
  return (
    <button type="button" className="items-center justify-center" id="mobileButton">
      <span className="material-symbols-outlined">menu</span>
    </button>
  )
}

function Dropdown({name, children}) {
  return (
    <div className='dropdown'>
      <li className="p-2" id={name.toLowerCase()}>
        {name}
        <span className="material-symbols-outlined">expand_more</span>
      </li>

      <ul>
        {children}
      </ul>
    </div>
  )
}

function Navbar({onLiClick}) {
  function Li({text}) {
    const id = text.toLowerCase().replace(/\s+/g, '');
    // ID is a lowercase and no-space version of the Li text
  
    const li = (
      <li className="p-2 page" id={id} 
      onClick={(e) => {
        const selectedLi = document.getElementById(e.target.id);
        selectedLi.classList.add("selected");

        onLiClick(e.target.id);
      }}>
        {text}
      </li>
    );
  
    return li;
  }

  return (
    <nav className="py-3 px-8 justify-between items-center">
      <img src={unespLogo} alt="Logo da Unesp" className="page cursor-pointer" id="logo" />

      <MobileMenuButton />

      <ul className="font-bold items-center gap-3">
        <Li text='Início' />
        
        <Dropdown name="Pedidos">
            <Li text="Como Pedir" />
            <Li text="Visualizar Pedidos" />
        </Dropdown>

        <Dropdown name="STMA">
          <Li text="Sobre" />
          <Li text="Equipe"/>
          <Li text="Contato"/>
        </Dropdown>
      </ul>
    </nav>
  );
}

export default Navbar;
import React, { useCallback } from 'react';
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

function Li({text, onLiClick}) {
  const id = text.toLowerCase().replace(/\s+/g, '');
  // ID is a lowercase and no-space version of the Li text

  const inicio = (id === 'início') ? " selected" : "";

  const li = (
    <li className={id + " p-2 page" + inicio} 
    id={id} 
    onClick={(e) => {
      document.querySelectorAll("nav li.page").forEach(li => {
        li.classList.remove("selected");
      })

      e.target.classList.add("selected");

      onLiClick(e.target.id);
      }}>
      {text}
    </li>
  );

  return li;
}

function Navbar({onLiClick}) {
  const handleLiClick = useCallback(onLiClick, [onLiClick]);

  return (
    <nav className="py-3 px-8 justify-between items-center">
      <img src={unespLogo} alt="Logo da Unesp" className="page cursor-pointer" id="logo" />

      <MobileMenuButton />

      <ul className="font-bold items-center gap-3">
        <Li text='Início' onLiClick={handleLiClick} />
        
        <Dropdown name="Pedidos">
            <Li text="Como Pedir" onLiClick={handleLiClick} />
            <Li text="Visualizar Pedidos" onLiClick={handleLiClick} />
        </Dropdown>

        <Dropdown name="STMA">
          <Li text="Sobre" onLiClick={handleLiClick}/>
          <Li text="Equipe" onLiClick={handleLiClick}/>
          <Li text="Contato" onLiClick={handleLiClick}/>
        </Dropdown>
      </ul>
    </nav>
  );
}

export default React.memo(Navbar);
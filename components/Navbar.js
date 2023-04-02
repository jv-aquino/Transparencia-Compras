import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import unespLogo from '@/img/unesp.png';

function MobileMenuButton() {
  const [selected, setSelected] = useState(false);

  const toggleMenu = () => {
    document.querySelector("nav > ul").classList.toggle("selected");

    setSelected((prevState) => {
      return !prevState;
    })
  }

  return (
    <button type="button" className="items-center justify-center" id="mobileButton">
      <span className={"material-symbols-outlined " + ((selected) ? 'selected' : '')}
      onClick={() => toggleMenu()}>
        {selected ? 'close' : 'menu'}
      </span>
    </button>
  )
}

function Dropdown({name, children}) {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible((prevState) => {
      return !prevState;
    })
  }

  return (
    <div className={'dropdown' + ((visible) ? " click" : '')}>
      <li className="p-2" id={name.toLowerCase()}
      onClick={() => toggleVisible()}>
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
    <nav className="py-3 px-8 justify-between items-center" id="nav">
      <Image src={unespLogo} alt="Logo da Unesp" className="page cursor-pointer" id="logo"
      onClick={() => handleLiClick("início")} />

      <MobileMenuButton />

      <ul className="items-center gap-3">
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
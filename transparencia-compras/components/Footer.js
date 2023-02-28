import React, { useCallback } from 'react';
import stmaLogo from '../img/stma.png';

function Section({header, children}) {
  return (
    <div>
      <h3>{header}</h3>
      <ul>
        {children}
      </ul>
    </div>
  )
}

function Li({text, icon, link, onLiClick}) {
  const isNav = onLiClick ? true : false;

  const id = (isNav) ? text.toLowerCase().replace(/\s+/g, '') : '';
  // ID is a lowercase and no-space version of the Li text

  const li = (
    <li className={"highlight " + ((isNav) ? "page" : '')}
    id={id}
    onClick={() => {
      if (isNav) {
        onLiClick(id);
      }
    }}>
      
      <a href={link}>
        <span className="material-symbols-outlined">{icon}</span>
        {text}
      </a>

    </li>
  )

  return li;
}

function Footer({ onLiClick }) {
  const handleLiClick = useCallback(onLiClick, [onLiClick]);

  return (
    <footer className="gap-2 px-2 py-7">
      <Section header="Navegação">
        <Li onLiClick={handleLiClick} text='Início' link='#root' icon='home' />
        <Li onLiClick={handleLiClick} text='Como Pedir' link='#root' icon='edit_square' />
        <Li onLiClick={handleLiClick} text='Visualizar Pedidos' link='#root' icon='sort' />
        <Li onLiClick={handleLiClick} text='Sobre' link='#root' icon='apartment' />
        <Li onLiClick={handleLiClick} text='Equipe' link='#root' icon='groups' />
        <Li onLiClick={handleLiClick} text='Contato' link='#root' icon='call' />
      </Section>
      
      <Section header="Links">
        <Li text='Central de Acessos' link='https://sistemas.unesp.br/central/' icon='workspaces' />
        <Li text='BEC' link='http://www.bec.sp.gov.br/BECSP/Home/Home.aspx' icon='token' />
        <Li text='Site da FEG' link='https://www.feg.unesp.br/' icon='school' />
        <Li text='Intranet' link='http://intranet.feg.unesp.br/' icon='dns' />
        <Li text='Site da STMA' link='https://www.feg.unesp.br/#!/instituicao/secao-tecnica-de-materiais/' icon='link' />
        <Li text='Email da STMA' link='mailto:sma.feg@unesp.br' icon='alternate_email' />
      </Section>
          

      <img src={stmaLogo} alt="Logo da STMA" className="justify-self-center self-center"></img>
    </footer>
  );
}

export default React.memo(Footer);
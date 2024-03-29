import React, { useCallback } from 'react';
import Image from 'next/image';
import stmaLogo from '@/img/stma.png';

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
  link = (isNav) ? "#nav" : link;

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
      
      <a href={link} target={isNav ? "_self" : "_blank"}>
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
    <footer className="bg-black grid px-2 py-7">
      <Section header="Navegação">
        <Li onLiClick={handleLiClick} text='Início' icon='home' />
        <Li onLiClick={handleLiClick} text='Como Pedir' icon='edit_square' />
        <Li onLiClick={handleLiClick} text='Visualizar Pedidos' icon='sort' />
        <Li onLiClick={handleLiClick} text='Sobre' icon='apartment' />
        <Li onLiClick={handleLiClick} text='Equipe' icon='groups' />
        <Li onLiClick={handleLiClick} text='Contato' icon='call' />
      </Section>
      
      <Section header="Links">
        <Li text='Central de Acessos' link='https://sistemas.unesp.br/central/' icon='workspaces' />
        <Li text='BEC' link='http://www.bec.sp.gov.br/BECSP/Home/Home.aspx' icon='token' />
        <Li text='Site da FEG' link='https://www.feg.unesp.br/' icon='school' />
        <Li text='Intranet' link='http://intranet.feg.unesp.br/' icon='dns' />
        <Li text='Site da STMA' link='https://www.feg.unesp.br/#!/instituicao/secao-tecnica-de-materiais/' icon='link' />
        <Li text='Email da STMA' link='mailto:sma.feg@unesp.br' icon='alternate_email' />
      </Section>
          

      <Image src={stmaLogo} alt="Logo da STMA" className="justify-self-center self-center cursor-pointer" 
      onClick={() => {
        handleLiClick("início");
        document.querySelector("#nav").scrollIntoView({ behavior: 'smooth' })
      }}/>
    </footer>
  );
}

export default React.memo(Footer);
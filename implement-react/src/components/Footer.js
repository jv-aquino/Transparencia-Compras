import React from 'react';
import './Footer.css';
import stmaLogo from '../img/stma.png';

function Li({text, icon, link, isNav}) {
  const id = (isNav) ? text.toLowerCase().replace(/\s+/g, '') : '';
  // ID is a lowercase and no-space version of the Li text

  const li = (
    <li className={"highlight" + (isNav) ? "page" : ''}
    id={id}>
      <a href={link}><span className="material-symbols-outlined">{icon}</span>{text}</a>
    </li>
  )

  return li;
}

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

function Footer(props) {
  return (
    <footer className="gap-2 px-2 py-6">
      <Section header="Navegação">
        <Li isNav={true} text='Início' link='#container' icon='home' />
        <Li isNav={true} text='Como Pedir' link='#container' icon='edit_square' />
        <Li isNav={true} text='Visualizar Pedidos' link='#container' icon='sort' />
        <Li isNav={true} text='STMA' link='#container' icon='apartment' />
        <Li isNav={true} text='Equipe' link='#container' icon='groups' />
        <Li isNav={true} text='Contato' link='#container' icon='call' />
      </Section>
      
      <Section header="Links">
          <li class="highlight"><a target="_blank" href="https://sistemas.unesp.br/central/"><span class="material-symbols-outlined email pb-1">workspaces</span>Central de Acessos</a></li>
          <li class="highlight"><a target="_blank" href="http://www.bec.sp.gov.br/BECSP/Home/Home.aspx"><span class="material-symbols-outlined email pb-1">token</span>BEC</a></li>
          <li class="highlight"><a target="_blank" href="https://www.feg.unesp.br/"><span class="material-symbols-outlined">school</span>Site da FEG</a></li>
          <li class="highlight"><a target="_blank" href="http://intranet.feg.unesp.br/"><span class="material-symbols-outlined">dns</span>Intranet</a></li>
          <li class="highlight"><a target="_blank" href="https://www.feg.unesp.br/#!/instituicao/secao-tecnica-de-materiais/"><span class="material-symbols-outlined">link</span>Site da STMA</a></li>
          <li class="highlight"><a target="_blank" href="mailto:sma.feg@unesp.br"><span class="material-symbols-outlined email pb-1">alternate_email</span>Email da STMA</a></li>
      </Section>
          

      <img src={stmaLogo} alt="Logo da STMA" class="justify-self-center self-center"></img>
    </footer>
  );
}

export default Footer;
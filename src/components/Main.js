import React from 'react';
import './Main.css';

import Inicio from './Main/Inicio';

import ComoPedir from './Main/ComoPedir';
import VisualizarPedidos from './Main/VisualizarPedidos';

import Sobre from './Main/Sobre';
import Equipe from './Main/Equipe';
import Contato from './Main/Contato';

function Main({page}) {
  return (
    <main className='py-7 flex flex-col items-center'>
      { (page === 'início') && <Inicio /> }

      { (page === 'comopedir') && <ComoPedir /> }
      { (page === 'visualizarpedidos') && <VisualizarPedidos /> }

      { (page === 'sobre') && <Sobre /> }
      { (page === 'equipe') && <Equipe /> }
      { (page === 'contato') && <Contato /> }
    </main>
  );
}

export default React.memo(Main);
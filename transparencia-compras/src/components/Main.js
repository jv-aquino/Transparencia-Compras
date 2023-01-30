import React from 'react';
import './Main.css';
import Inicio from './Main/Inicio'
import ComoPedir from './Main/ComoPedir';
import VisualizarPedidos from './Main/VisualizarPedidos';

function Main({page}) {
  return (
    <main className='pt-7 pb-6 flex flex-col items-center'>
      { (page === 'início') && <Inicio /> }
      { (page === 'comopedir') && <ComoPedir /> }
      { (page === 'visualizarpedidos') && <VisualizarPedidos /> }
    </main>
  );
}

export default React.memo(Main);
import React, { useState, useEffect } from 'react';

import Inicio from './Main/Inicio';

import ComoPedir from './Main/ComoPedir';
import VisualizarPedidos from './Main/VisualizarPedidos';

import Sobre from './Main/Sobre';
import Equipe from './Main/Equipe';
import Contato from './Main/Contato';

import { supabase } from '../lib/supabaseClient';

const getFuncionarios = async () => {
  let { data: equipe, error } = await supabase
  .from('equipe')
  .select('*');

  return equipe;
}

function Main({page}) {
  let [data, setData] = useState([]);

  useEffect(() => {
    getFuncionarios().then((res) => {
      setData(res);
    });

  }, [])

  return (
    <main className='py-7 flex flex-col items-center'>
      { (page === 'início') && <Inicio /> }

      { (page === 'comopedir') && <ComoPedir /> }
      { (page === 'visualizarpedidos') && <VisualizarPedidos /> }

      { (page === 'sobre') && <Sobre /> }
      { (page === 'equipe') && <Equipe funcionarios={data} /> }
      { (page === 'contato') && <Contato /> }
    </main>
  );
}

export default React.memo(Main);
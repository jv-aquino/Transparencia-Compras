import React, { useState, useEffect } from 'react';

import Inicio from './Main/Inicio';

import ComoPedir from './Main/ComoPedir';
import VisualizarPedidos from './Main/VisualizarPedidos';

import Sobre from './Main/Sobre';
import Equipe from './Main/Equipe';
import Contato from './Main/Contato';

import { supabase } from '../lib/supabaseClient';

const getFaq = async () => {
  let { data: faq, error } = await supabase
  .from('faq')
  .select('*');

  return faq;
}

const getFuncionarios = async () => {
  let { data: equipe, error } = await supabase
  .from('equipe')
  .select('*');

  return equipe;
}

function Main({page}) {
  let [equipe, setEquipe] = useState([]);
  let [faq, setFaq] = useState([]);

  useEffect(() => {
    getFaq().then((res) => {
      setFaq(res);
    })
    getFuncionarios().then((res) => {
      setEquipe(res);
    });
  }, [])

  return (
    <main className='py-7 flex flex-col items-center'>
      { (page === 'início') && <Inicio faq={faq} /> }

      { (page === 'comopedir') && <ComoPedir /> }
      { (page === 'visualizarpedidos') && <VisualizarPedidos /> }

      { (page === 'sobre') && <Sobre /> }
      { (page === 'equipe') && <Equipe funcionarios={equipe} /> }
      { (page === 'contato') && <Contato /> }
    </main>
  );
}

export default React.memo(Main);
import React from 'react';
import './Main.css';
import Inicio from './Main/Inicio'

function Main({page}) {
  return (
    <main className='pt-7 pb-6 flex flex-col items-center'>
      { (page === 'início') && <Inicio /> }
    </main>
  );
}

export default React.memo(Main);
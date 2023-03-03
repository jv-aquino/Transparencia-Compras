import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Funcoes({text}) {
  const [visible, setVisible] = useState(false);

  return (
    <>
    <button className="funcoes font-bold"
    onClick={() => {
      setVisible(prevVisible => !prevVisible)
    }}>
      <span className="material-symbols-outlined">expand_more</span>
      Funções
    </button>
    <ul className={'funcoes list-disc ' + ((visible) ? "visible" : "")}>
      <li>{text}</li>
    </ul>
    </>
  )
}

export default function Equipe({funcionarios}) {
  return (
    <>
      <h1>Equipe</h1>
      
      <div className="funcionarios grid">
        {
          funcionarios.map(funcionario => {
            return (
              <div className='drop-shadow-lg'
              key={uuidv4()}>
                  <p className={'nome highlight'}>
                    {funcionario.nome }
                  </p>
                  <p className={'cargo'}>
                    {funcionario.cargo }
                  </p>
                  <p className={"email"}>
                    <a href={"mailto:" + funcionario.email}>
                      <span className="material-symbols-outlined">mail</span>
                      {funcionario.email}
                    </a>
                  </p>
                  <p className='telefone'>
                      <span className="material-symbols-outlined">call</span>
                      {funcionario.telefone}
                  </p>

                  <Funcoes key={uuidv4()} text={funcionario.funcoes}/>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
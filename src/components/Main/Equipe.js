import React, { useState } from 'react';
import funcionarios from "../../data/equipe.json";
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

export default function Equipe() {
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
                    {funcionario.Nome }
                  </p>
                  <p className={"email"}>
                    <a href={"mailto:" + funcionario.Email}>
                      <span className="material-symbols-outlined">mail</span>
                      {funcionario.Email}
                    </a>
                  </p>
                  <p className='telefone'>
                      <span className="material-symbols-outlined">call</span>
                      {funcionario.Telefone}
                  </p>

                  <Funcoes key={uuidv4()} text={funcionario.Funcoes}/>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
import React, { useState } from 'react';
import funcionarios from "../../data/equipe.json";
import { v4 as uuidv4 } from 'uuid';

function Funcoes({funcionario, funcKey}) {
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
      <li>{funcionario[funcKey]}</li>
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
                {
                  Object.keys(funcionario).map(key => {
                    if (key === "Funcoes") {
                      return <Funcoes key={uuidv4()} funcionario={funcionario} funcKey={key}/>
                    }
              
                    return (
                    <p className={key.toLowerCase() + ((key === "Nome") ? " highlight" : "")}
                    key={uuidv4()}>
                      {
                        (key === 'Email')
                        ? <a href={"mailto:" + funcionario[key]}>
                          <span className="material-symbols-outlined">mail</span>
                          {funcionario[key]}
                        </a>

                        : (key === "Telefone") ? <>
                          <span className="material-symbols-outlined">call</span>
                          {funcionario[key]}
                        </>
                        
                        : funcionario[key]
                      }
                    </p>
                    );
                  })
                }
              </div>
            )
          })
        }
      </div>
    </>
  )
}
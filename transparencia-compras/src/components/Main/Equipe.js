import React from 'react';
import funcionarios from "../../data/equipe.json";
import { v4 as uuidv4 } from 'uuid';

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
                    if (key === "Funcoes") { return null }

                    const content = (key === 'Email')
                    ?  `<a href='mailto:${funcionario[key]}'>${funcionario[key]}</a>` 
                    : funcionario[key];
              
                    return (
                      <p className={key.toLowerCase() + ((key === "Nome") ? " highlight" : "")}
                      dangerouslySetInnerHTML={{ __html: content}}
                      key={uuidv4()}>
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
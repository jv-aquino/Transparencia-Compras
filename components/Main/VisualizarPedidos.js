import React from 'react';

export default function VisualizarPedidos() {
  return (
    <>
      <h1>Pedidos</h1>

      <button className="pedidos drop-shadow-lg" onClick={(e) => {
        e.target.classList.add('hidden');

        document.querySelector('form.pesquisa').classList.remove('hidden');
        document.querySelector('form.pesquisa').classList.add('flex');
      }}>
        Visualizar Pedidos
      </button>

      <form className="pesquisa hidden flex-col p-4 gap-3 rounded-md">
        <label htmlFor="id" className='a text-lg'>Número do <b>Pedido</b> ou <b>Agrupamento</b>:</label>
        <input type="text" name="id" id="id" maxLength={11} className='rounded p-2 border-2 border-black' />

        <button className='search'>Pesquisar</button>

        <button type='button' className="cancelar" onClick={(e) => {
          document.querySelector('form.pesquisa').classList.add('hidden');
          document.querySelector('form.pesquisa').classList.remove('flex');

          document.querySelector('button.pedidos').classList.remove('hidden');
        }}>
          Cancelar
        </button>
      </form>
    </>
  )
}
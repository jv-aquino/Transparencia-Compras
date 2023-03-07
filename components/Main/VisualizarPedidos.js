import React from 'react';

export default function VisualizarPedidos() {
  return (
    <>
      <h1>Pedidos</h1>

      <button className="pedidos drop-shadow-lg" onClick={(e) => {
        e.target.classList.add('hidden');
        document.querySelector('form.pesquisa').classList.remove('hidden');
      }}>
        Visualizar Pedidos
      </button>

      <form className="pesquisa hidden flex-row">
        <label htmlFor="id">Número do <b>Pedido</b> ou <b>Agrupamento</b>:</label>
        <input type="text" name="id" id="id" />
        <input type="submit" value="Pesquisar" />
      </form>
    </>
  )
}
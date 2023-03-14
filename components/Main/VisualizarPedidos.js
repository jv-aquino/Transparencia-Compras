import React, { useState } from 'react';
import { supabase } from 'lib/supabaseClient';

const searchPedido = async (pedido) => {
  let { data: pedidosEmCompras, error } = await supabase
  .from('pedidosEmCompras')
  .select('*')
  .eq('id_agrupamento', pedido);

  return pedidosEmCompras;
}

function Pedido({obj}) {
  if (obj == undefined) {
    return (
    <div className="pedidoEncontrado">
          <p>Pedido não encontrado :(</p>
          <p>Pesquise o número da sua solicitação no SISADM:</p>
          <ul className='list-disc'>
            <li>Se estiver em compras mas não tiver número de agrupamento, seu pedido está na lista de <b>espera</b>, aguardando definição da modalidade de compra</li>
            <li>Se o pedido tiver número de agrupamento, pesquise novamente com o número do agrupamento</li>
          </ul>
    </div>
    )
  }
  return (
    <div className='pedidoEncontrado'>
      <p>Pedido n°{obj.id_agrupamento}</p>
      <p className='status'>Status: {obj.status}</p>
    </div>
  )
} 

export default function VisualizarPedidos() {
  const [visible, setVisible] = useState(false);
  const [pedidoEncontrado, setPedido] = useState({});

  return (
    <>
      <h1>Pedidos</h1>

      {visible && <Pedido obj={pedidoEncontrado} />}

      <button className="pedidos drop-shadow-lg" onClick={(e) => {
        e.target.classList.add('hidden');

        document.querySelector('form.pesquisa').classList.remove('hidden');
        document.querySelector('form.pesquisa').classList.add('flex');
      }}>
        Visualizar Pedido
      </button>

      <form className="pesquisa hidden flex-col p-4 gap-3 rounded-md" onSubmit={(e) => {
          e.preventDefault();
          let pedido = document.querySelector("#id").value;
          searchPedido(pedido)
          .then(res => {
            setPedido(res[0]);
            setVisible(true);
          })
        }}>
        <label htmlFor="id" className='text-[1.2rem]'>Número do <b>Agrupamento</b>:</label>
        <input type="text" name="id" id="id" maxLength={11} className='rounded p-2 border-2 border-black' />

        <button className='search'>
          Pesquisar
        </button>

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
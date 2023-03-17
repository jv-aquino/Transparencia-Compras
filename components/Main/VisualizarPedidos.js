import React, { useState } from 'react';
import { supabase } from 'lib/supabaseClient';

function Pedido({obj}) {
  if (obj == undefined) {
    return (
    <div className="pedidoEncontrado">
          <p className='pb-3 font-bold text-4xl text-light-blue-500'>Pedido não encontrado :(</p>
          <p>Pesquise o número da sua solicitação no <b className="text-light-blue-500">SISADM</b>:</p>
          <ul className='list-disc pt-1.5'>
            <li className='pb-1'>Se estiver em <b className="text-light-blue-500">Compras</b> mas <b className="a text-red-600">não tem número de agrupamento</b>, seu pedido está na <b className='text-dark-blue-500'>lista de espera</b>, aguardando definição da modalidade de compra</li>
            <li>Se o pedido <b className='text-green-500'>tem número de agrupamento</b>, <b className='text-dark-blue-500'>pesquise novamente</b> com o número do <b className="text-dark-blue-500">agrupamento</b></li>
          </ul>
    </div>
    )
  }
  return (
    <div className='pedidoEncontrado'>
      <p className='pedido'>Pedido <b className="font-bold text-light-blue-500">{obj.id_agrupamento}</b></p>
      <p className='status'>Status: <b className='font-bold text-green-500'>{obj.status}</b></p>
    </div>
  )
} 

const searchPedido = async (pedido) => {
  let { data: pedidosEmCompras, error } = await supabase
  .from('pedidosEmCompras')
  .select('*')
  .eq('id_agrupamento', pedido);

  return pedidosEmCompras;
}

export default function VisualizarPedidos() {
  const [visible, setVisible] = useState(false);
  const [pedidoEncontrado, setPedido] = useState({});

  return (
    <>
      <h1>Pedidos</h1>

      <div className="visualizarPedidos grid gap-2 justify-center">
        {visible && <Pedido obj={pedidoEncontrado} />}

        <button className="pedidos drop-shadow-lg" onClick={(e) => {
          e.target.classList.add('hidden');
          document.querySelector('form.pesquisa').classList.remove('hidden');
          document.querySelector('form.pesquisa').classList.add('flex');
        }}>
          Visualizar {visible && 'Outro'} Pedido
        </button>

        <form className="pesquisa hidden flex-col p-4 gap-2 rounded-md justify-self-center" onSubmit={(e) => {
            e.preventDefault();
            let pedido = document.querySelector("#id").value;
            searchPedido(pedido)
            .then(res => {
              setPedido(res[0]);
              setVisible(true);
            })
          }}>
          <label htmlFor="id" className='text-[1.4rem] text-center'>Número do <b className='text-dark-blue-500'>Agrupamento</b>:</label>
          <input type="text" name="id" id="id" maxLength={11} 
          placeholder='ex: 1234567'
          className='border-2 border-black rounded mb-3 p-2 font-bold text-xl text-dark-blue-500' />

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
      </div>
    </>
  )
}
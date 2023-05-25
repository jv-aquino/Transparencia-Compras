import React, { useState, useCallback, useEffect } from 'react';
import { supabase } from 'lib/supabaseClient';

function FecharPedido({changeVisible}) {
  return (
    <button className='closePedido absolute top-3 right-3'>
      <span className="material-symbols-outlined" onClick={() => changeVisible(false)}>close</span>
    </button>
  )
}

function Pedido({obj, setVisible}) {
  const changeVisible = useCallback(setVisible, [setVisible]);

  if (obj == undefined) {
    return (
    <div className="pedidoEncontrado">
      <FecharPedido changeVisible={changeVisible}/>

      <p className='pb-3 font-bold text-4xl text-light-blue-500'>Pedido não encontrado :(</p>
      <p>Pesquise o número da sua solicitação no <b className="text-light-blue-500">SISADM</b>:</p>
      <ul className='list-disc pt-1.5'>
        <li className='pb-1'>Se estiver em <b className="text-light-blue-500">Compras</b> mas <b className="a text-red-500">não tem número de agrupamento</b>, seu pedido está na <b className='text-red-500'>lista de espera</b>, aguardando definição da modalidade de compra</li>
        <li>Se o pedido <b className='text-green-500'>tem número de agrupamento</b>, <b className='text-green-500'>pesquise novamente</b> com o número do <b className="text-green-500">agrupamento</b></li>
        <li className='pt-4'>Pode ser também que o pedido já tenha sido <b className="text-green-500">Finalizado</b>, e por isso ele não está mais em <b className="text-light-blue-500">Compras</b>.</li>
      </ul>
    </div>
    )
  }
  return (
    <div className='pedidoEncontrado w-[400px]'>
      <FecharPedido changeVisible={changeVisible}/>

      <p className='pedido pb-2'>Pedido <b className="font-bold text-light-blue-500">{obj.id_agrupamento}</b></p>
      <p className="nome">Nome: <b className='font-bold text-dark-blue-500'>{obj.nome}</b></p>
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
  const [visibleForm, setVisibleForm] = useState(false);
  const [pedidoEncontrado, setPedido] = useState({});

  return (
    <>
      <h1>Pedidos</h1>

      <div className="visualizarPedidos grid gap-2 justify-center">
        {visible && <Pedido obj={pedidoEncontrado} setVisible={setVisible} />}

        { !visibleForm &&
        <button className="pedidos drop-shadow-lg" onClick={() => setVisibleForm(true)}>
          Visualizar {visible && 'Outro'} Pedido
        </button>}

        { visibleForm &&
          <form className="pesquisa flex flex-col p-4 gap-2 rounded-md justify-self-center" onSubmit={(e) => {
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
          <button type='button' className="cancelar" onClick={() => setVisibleForm(false)}>
            Cancelar
          </button>
        </form>}
      </div>
    </>
  )
}
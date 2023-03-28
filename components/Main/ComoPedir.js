import React from 'react';
import Image from 'next/image';
import fluxograma from "@/img/fluxograma.png"

export default function ComoPedir() {
  return (
    <>
      <h1>Como Pedir</h1>

      <Image className='fluxograma' 
      src={fluxograma} 
      alt=''/>

      <div className='bg-black py-7 px-9 rounded-xl w-[640px]'>
        <h2 className='text-red-600 text-center text-4xl mb-2'>Observações</h2>

        <ul className='flex flex-col gap-2
        [&>*]:text-white [&>li]:text-[21px] [&>li>b]:text-light-blue-500'>
          <li>Se a <b>qualidade</b> do produto é importante, especifique ele o máximo possível - incluindo <b>características e qualidades</b> relevantes, não a marca desejada.</li>
          <li>Faça de 1 a 3 <b>orçamentos</b> para o produto para que o tempo de cotação seja reduzido e o seu pedido <b>chegue de forma mais rápida</b></li>
        </ul>      
      </div>
    </>
  )
}
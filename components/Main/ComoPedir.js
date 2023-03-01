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
    </>
  )
}
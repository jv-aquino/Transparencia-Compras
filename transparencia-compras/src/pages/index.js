import Head from 'next/head'
import Image from 'next/image'

import Navbar from 'components/Navbar'
import Main from 'components/Main'
import Footer from 'components/Footer'

import { useState } from 'react'

export default function Home() {
  const [actualPage, setPage] = useState("início");

  function changePage(page) {
    setPage(page);

    document.querySelectorAll("nav li.page").forEach(li => {
      li.classList.remove("selected");
    })

    document.querySelector('nav li#' + page).classList.add("selected");
  }

  return (
    <>
      <Head>
        <title>Transparência de Compras</title>
        <meta name="description" content="Site oficial da Seção Técnica de Materiais da FEG" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar onLiClick={changePage} />
      
      <Main page={actualPage} />

      <Footer onLiClick={changePage} />
    </>
  )
}

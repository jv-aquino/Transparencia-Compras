import Head from "next/head";
import Auth from "components/Auth/Auth";

export default function Home() {
  return (
    <>
      <Head>
        <title>Transparência de Compras</title>
        <meta name="description" content="Site oficial da Seção Técnica de Materiais da FEG" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Auth />
    </>
  )
}
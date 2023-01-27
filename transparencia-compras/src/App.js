import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [actualPage, setPage] = useState("início")

  function changePage(newPage) {
    setPage(newPage);
  }

  return (
    <>
      <Navbar onLiClick={changePage}/>
      <Main page={actualPage} />
      <Footer />
    </>
  );
}

export default App;

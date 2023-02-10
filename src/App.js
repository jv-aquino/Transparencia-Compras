import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import { useState } from 'react';

function App() {
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
      <Navbar onLiClick={changePage} />
      
      <Main page={actualPage} />

      <Footer onLiClick={changePage} />
    </>
  );
}

export default App;

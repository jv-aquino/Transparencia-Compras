import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [actualPage, setPage] = useState("início");

  return (
    <>
      <Navbar onLiClick={(page) => setPage(page)} />
      
      <Main page={actualPage} />

      <Footer onLiClick={(page) => setPage(page)} />
    </>
  );
}

export default App;

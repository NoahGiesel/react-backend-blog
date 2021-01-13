import React from 'react';

import './App.css';

import Header from "./client/components/Header/Header"
import Menu from "./client/components/Menu/Menu"
import Article from "./client/components/Article/Article"

function App() {
  return (
    // thinking about Mo.js implementation for animations! ( like button to DB, upvotes, ecc)
    <div className="App">
      <Header/>
      <Menu/>
      <Article/>
      <Article/>
    </div>
  );
}

export default App;

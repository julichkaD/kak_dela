import React from 'react'
import Header from './components/Header';
import nature from "./img/nature.webp"
import "./main.css/style.css";


const App = () => {
  return (
    <div>
      <Header title="Hello Nature" />
      <Header title="Hello Flowers" />
      <img src={nature} alt="nature" />
    </div>
  );
}

export default App;

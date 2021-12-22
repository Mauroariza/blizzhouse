import React from 'react';
import headerImg from './assets/muchacho.svg';

export default function App() {
  return (
    <div className="">
      <header className="flex headerBackground h-92">
        <h1>PRACTICA TU INGLÉS CON EJERCICIOS DISEÑADOS A TU NIVEL</h1>
        <img src={headerImg} alt="blizzhouse-header"/>
      </header>
    </div>
  )
}

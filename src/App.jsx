import React from 'react';
import './App.css';
import SEOHead from './components/SEOHead';
import Header from './components/Header';
import Hero from './components/Hero';
import Estoque from './components/Estoque';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Depoimentos from './components/Depoimentos';
import Localizacao from './components/Localizacao';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="App">
      <SEOHead />
      <Header />
      <main>
        <Hero />
        <Estoque />
        <Sobre />
        <Servicos />
        <Depoimentos />
        <Localizacao />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;


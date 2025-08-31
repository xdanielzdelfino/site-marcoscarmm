import React, { useState } from 'react';
import { Phone, Instagram, Facebook, Menu, X } from 'lucide-react';
import logo from '../assets/MARCOSCAR.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Função para rastrear conversão e abrir WhatsApp
  const handleWhatsAppClick = (url, e) => {
    e.preventDefault();
    if (window.gtag_report_conversion) {
      window.gtag_report_conversion(url);
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <header className="bg-black shadow-lg sticky top-0 z-50">

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="MARCOS CAR" className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-[#fff100] hover:text-accent font-medium transition-colors px-4 py-2 rounded-lg focus:outline-none hover:ring-2 hover:ring-[#fff100] hover:ring-offset-2">
              Início
            </a>
            <a href="#estoque" className="text-[#fff100] hover:text-accent font-medium transition-colors px-4 py-2 rounded-lg focus:outline-none hover:ring-2 hover:ring-[#fff100] hover:ring-offset-2">
              Estoque
            </a>
            <a href="#sobre" className="text-[#fff100] hover:text-accent font-medium transition-colors px-4 py-2 rounded-lg focus:outline-none hover:ring-2 hover:ring-[#fff100] hover:ring-offset-2">
              Sobre
            </a>
            <a href="#servicos" className="text-[#fff100] hover:text-accent font-medium transition-colors px-4 py-2 rounded-lg focus:outline-none hover:ring-2 hover:ring-[#fff100] hover:ring-offset-2">
              Serviços
            </a>
            <a href="#contato" className="text-[#fff100] hover:text-accent font-medium transition-colors px-4 py-2 rounded-lg focus:outline-none hover:ring-2 hover:ring-[#fff100] hover:ring-offset-2">
              Contato
            </a>
          </nav>

          {/* WhatsApp Button Desktop */}
          <a
            href="https://wa.me/5585998100070?text=Olá,%20tenho%20interesse%20em%20um%20carro%20do%20site"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex bg-accent text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            onClick={e => handleWhatsAppClick('https://wa.me/5585998100070?text=Olá,%20tenho%20interesse%20em%20um%20carro%20do%20site', e)}
          >
            Fale no WhatsApp
          </a>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X size={24} color="#fff100" /> : <Menu size={24} color="#fff100" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('inicio')} 
                      className="text-[#fff100] hover:text-accent font-medium transition-colors text-left">
                Início
              </button>
              <button onClick={() => scrollToSection('estoque')} 
                      className="text-[#fff100] hover:text-accent font-medium transition-colors text-left">
                Estoque
              </button>
              <button onClick={() => scrollToSection('sobre')} 
                      className="text-[#fff100] hover:text-accent font-medium transition-colors text-left">
                Sobre
              </button>
              <button onClick={() => scrollToSection('servicos')} 
                      className="text-[#fff100] hover:text-accent font-medium transition-colors text-left">
                Serviços
              </button>
              <button onClick={() => scrollToSection('contato')} 
                      className="text-[#fff100] hover:text-accent font-medium transition-colors text-left">
                Contato
              </button>
              <a
                href="https://wa.me/5585998100070?text=Olá,%20tenho%20interesse%20em%20um%20carro%20do%20site"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-center"
                onClick={e => handleWhatsAppClick('https://wa.me/5585998100070?text=Olá,%20tenho%20interesse%20em%20um%20carro%20do%20site', e)}
              >
                Fale no WhatsApp
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
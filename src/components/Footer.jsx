import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react';
import logo from '../assets/MARCOSCAR.png';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="MARCOS CAR" className="h-16 w-auto mb-4" />
            <p className="text-gray-300 mb-4">
              Especializada em compra, venda e troca de veículos multimarcas. 
              Oferecemos carros seminovos revisados com garantia e procedência, 
              além de financiamento facilitado para realizar o seu sonho.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/fmarcoscar.motos" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-accent transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Menu Institucional */}
          <div>
            <h3 className="text-accent font-semibold text-lg mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('inicio')} 
                        className="text-gray-300 hover:text-accent transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('estoque')} 
                        className="text-gray-300 hover:text-accent transition-colors">
                  Estoque
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('sobre')} 
                        className="text-gray-300 hover:text-accent transition-colors">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicos')} 
                        className="text-gray-300 hover:text-accent transition-colors">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contato')} 
                        className="text-gray-300 hover:text-accent transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-accent font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-accent" />
                <a href="tel:+558598100070" className="text-gray-300 hover:text-accent transition-colors">
                  (85) 99810-0070
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-accent" />
                <a href="mailto:fmarcoscomercial@gmail.com" className="text-gray-300 hover:text-accent transition-colors">
                  fmarcoscomercial@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 text-accent mt-1" />
                <span className="text-gray-300">
                  Av. Padre José Holanda do Vale, 2000 - Piratininga<br />
                  Maracanaú - CE<br />
                  CEP: 61905-292
                </span>
              </div>
              <div className="flex items-start">
                <Clock size={18} className="mr-3 text-accent mt-1" />
                <span className="text-gray-300">
                  Segunda a Sexta: 8h às 12h e 13h às 19h<br />
                  Sábado: 8h às 15h<br />
                  Domingo: Fechado
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>© 2025 MARCOS CAR. Todos os direitos reservados.</p>
              <p>CNPJ: 10.303.123/0001-55</p>
            </div>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


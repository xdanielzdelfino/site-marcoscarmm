import React from 'react';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const message = "Olá! Vim através do site da MARCOS CAR e gostaria de conhecer o estoque de veículos disponíveis.";
    const whatsappUrl = `https://wa.me/558598100070?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com imagem fixa independente do estoque */}
      <div className="absolute inset-0 z-0">
        <img 
          src={import.meta.env.BASE_URL + 'assets/images/hero-bg.webp'}
          alt="Carros em destaque"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 60%, #fff100 100%)'}}></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge de destaque */}
          <div className="inline-flex items-center bg-accent text-black px-4 py-2 rounded-full font-semibold mb-6 animate-pulse">
            <Star size={18} className="mr-2" />
            Veículos Multimarcas com Garantia
          </div>

          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Seu Novo Carro
            <span className="block text-accent">Está Aqui!</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Multimarcas selecionadas com garantia e procedência. 
            Financiamento facilitado e atendimento personalizado.
          </p>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('estoque')}
              className="bg-accent text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center group"
            >
              Ver Estoque
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              Fale no WhatsApp
            </button>
          </div>

          {/* Características em destaque */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto -mt-9">
            <div className="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
              <Shield size={32} className="text-accent mb-3" />
              <h3 className="font-semibold text-black">Garantia Assegurada</h3>
              <p className="text-black text-sm text-center">
                Todos os veículos passam por rigorosa revisão e vêm com garantia
              </p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
              <Star size={32} className="text-accent mb-3" />
              <h3 className="font-semibold text-black">Procedência Verificada</h3>
              <p className="text-black text-sm text-center">
                Documentação completa e histórico verificado de todos os carros
              </p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
              <Clock size={32} className="text-accent mb-3" />
              <h3 className="font-semibold text-black">Financiamento Rápido</h3>
              <p className="text-black text-sm text-center">
                Aprovação em até 24h com as melhores taxas do mercado
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;


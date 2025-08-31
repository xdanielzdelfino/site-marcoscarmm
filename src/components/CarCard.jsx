import React, { useState } from 'react';
import { Calendar, Fuel, Palette, Gauge, MessageCircle } from 'lucide-react';

const CarCard = ({ car }) => {
  const formatPrice = (price) => {
    if (!price) return 'Consulte';
    // Se vier string formatada, remove pontos e vírgulas, converte para número
    let num = price;
    if (typeof price === 'string') {
      // Remove tudo que não for número
      num = price.replace(/[^\d]/g, '');
      // Se o valor for menor que 7 dígitos, trata como reais
      if (num.length <= 6) {
        num = Number(num);
      } else {
        // Se vier com centavos, divide por 100
        num = Number(num) / 100;
      }
    }
    if (typeof num !== 'number' || isNaN(num) || num <= 0) return 'Consulte';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(num);
  };

  const formatKm = (km) => {
    return new Intl.NumberFormat('pt-BR').format(km) + ' km';
  };

  // Função para rastrear conversão e abrir WhatsApp
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const message = `Olá! Tenho interesse no ${car.marca} ${car.modelo} ${car.ano} por ${formatPrice(car.preco)}. Gostaria de mais informações.`;
    const whatsappUrl = `https://wa.me/5585998100070?text=${encodeURIComponent(message)}`;
    if (window.gtag_report_conversion) {
      window.gtag_report_conversion(whatsappUrl);
    } else {
      window.open(whatsappUrl, '_blank');
    }
  };

  // Suporte a múltiplas imagens
  const imagens = Array.isArray(car.imagem) ? car.imagem : [car.imagem];
  const [imgIndex, setImgIndex] = useState(0);
  const [expandida, setExpandida] = useState(false);
  const handlePrev = (e) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };
  const handleNext = (e) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  };
  const handleExpand = (e) => {
    e.stopPropagation();
    setExpandida(true);
  };
  const handleCloseExpand = (e) => {
    e.stopPropagation();
    setExpandida(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Imagem do carro com navegação */}
      <div className="relative overflow-hidden">
        <img 
          src={imagens[imgIndex]} 
          alt={`${car.marca} ${car.modelo}`}
          className="w-full h-48 object-contain mx-auto bg-gray-100 cursor-zoom-in"
          style={{ display: 'block' }}
          onClick={handleExpand}
          title="Clique para expandir"
        />
      {/* Modal de imagem expandida */}
      {expandida && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={handleCloseExpand}
        >
          <button
            onClick={handleCloseExpand}
            className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-40 rounded-full px-3 py-1 hover:bg-opacity-70"
            aria-label="Fechar"
            type="button"
          >
            &times;
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(e); }}
            className="absolute left-8 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white rounded-full p-3 text-2xl"
            aria-label="Imagem anterior"
            type="button"
            style={{ zIndex: 51 }}
          >
            &#8592;
          </button>
          <img
            src={imagens[imgIndex]}
            alt={`${car.marca} ${car.modelo}`}
            className="max-h-[80vh] max-w-[90vw] object-contain rounded shadow-lg border-4 border-white"
            style={{ background: '#f3f4f6' }}
            onClick={e => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(e); }}
            className="absolute right-8 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white rounded-full p-3 text-2xl"
            aria-label="Próxima imagem"
            type="button"
            style={{ zIndex: 51 }}
          >
            &#8594;
          </button>
        </div>
      )}
        {/* Botões de navegação */}
        {imagens.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-60 text-white rounded-full p-1 z-10"
              aria-label="Imagem anterior"
              type="button"
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-60 text-white rounded-full p-1 z-10"
              aria-label="Próxima imagem"
              type="button"
            >
              &#8594;
            </button>
          </>
        )}
        <div className="absolute top-4 right-4 bg-accent text-black px-3 py-1 rounded-full font-semibold text-sm">
          {car.ano}
        </div>
      </div>

      {/* Conteúdo do card */}
      <div className="p-6">
        {/* Título e marca */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-1">
            {car.marca} {car.modelo}
          </h3>
          <p className="text-gray-600 text-sm">{car.descricao}</p>
        </div>

        {/* Informações técnicas */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center text-gray-600">
            <Calendar size={16} className="mr-2 text-accent" />
            <span>{car.ano}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Gauge size={16} className="mr-2 text-accent" />
            <span>{formatKm(car.km)}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Fuel size={16} className="mr-2 text-accent" />
            <span>{car.combustivel}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Palette size={16} className="mr-2 text-accent" />
            <span>{car.cor}</span>
          </div>
        </div>

        {/* Características */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {(Array.isArray(car.caracteristicas) ? car.caracteristicas : []).map((caracteristica, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
              >
                {caracteristica}
              </span>
            ))}
            {(!car.caracteristicas || car.caracteristicas.length === 0) && (
              <span className="text-gray-400 text-xs">Nenhuma característica</span>
            )}
          </div>
        </div>

        {/* Preço e botão */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-gray-800">
              {formatPrice(car.preco)}
            </span>
          </div>
          <button 
            onClick={handleWhatsAppClick}
            className="bg-accent text-black px-2 py-1 rounded-md text-sm font-semibold hover:bg-yellow-400 transition-colors flex items-center"
          >
            <MessageCircle size={16} className="mr-1" />
            Tenho Interesse
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
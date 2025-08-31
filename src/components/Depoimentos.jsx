import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Depoimentos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      location: "Maracanaú, CE",
      rating: 5,
      text: "Excelente atendimento! Comprei meu Corolla na MARCOS CAR e foi a melhor experiência que já tive comprando um carro. Transparência total e o carro atendeu todas as espectativas.",
      car: "Toyota Corolla 2020",
      date: "Dezembro 2023"
    },
    {
      id: 2,
      name: "João Alves",
      location: "Caucaia, CE",
      rating: 5,
      text: "Recomendo de olhos fechados! O Marcos e sua equipe são muito profissionais. Consegui financiar meu Honda Civic com uma taxa excelente e sem burocracia.",
      car: "Honda Civic 2019",
      date: "Janeiro 2024"
    },
    {
      id: 3,
      name: "Ana Costa",
      location: "Maranguape, CE",
      rating: 5,
      text: "Atendimento nota 10! Desde o primeiro contato até a entrega do veículo, tudo foi perfeito. O carro estava impecável e a documentação toda certinha.",
      car: "Jeep Compass 2021",
      date: "Fevereiro 2024"
    },
    {
      id: 4,
      name: "Carlos Oliveira",
      location: "Maracanaú, CE",
      rating: 5,
      text: "Melhor loja de carros da região! Troquei meu carro antigo por um Onix Plus e a diferença foi super justa. Processo rápido e sem dor de cabeça.",
      car: "Chevrolet Onix Plus 2022",
      date: "Março 2024"
    },
    {
      id: 5,
      name: "Fernanda Lima",
      location: "Pacatuba, CE",
      rating: 5,
      text: "Confiança total! Já é a segunda vez que compro com eles. Sempre carros de qualidade e com garantia. O pós-venda também é excelente.",
      car: "Volkswagen T-Cross 2021",
      date: "Abril 2024"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={index < rating ? "text-accent fill-current" : "text-gray-300"}
      />
    ));
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Confira os depoimentos de quem já realizou o sonho do carro novo conosco.
          </p>
        </div>

        {/* Carrossel de depoimentos */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote icon */}
            <Quote size={64} className="text-accent opacity-20 absolute top-4 left-4" />
            
            {/* Conteúdo do depoimento */}
            <div className="relative z-10">
              {/* Avaliação */}
              <div className="flex justify-center mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              {/* Texto do depoimento */}
              <blockquote className="text-lg md:text-xl text-gray-700 text-center mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Informações do cliente */}
              <div className="text-center">
                <div className="font-bold text-gray-800 text-lg mb-1">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600 mb-2">
                  {testimonials[currentIndex].location}
                </div>
                <div className="text-accent font-semibold">
                  {testimonials[currentIndex].car}
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  {testimonials[currentIndex].date}
                </div>
              </div>
            </div>
          </div>

          {/* Controles do carrossel */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-accent' : 'bg-gray-300'
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>

        {/* Estatísticas de satisfação */}
        <div className="mt-16 bg-black text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Índices de Satisfação
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-gray-300">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-gray-300">Recomendariam</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">4.9</div>
              <div className="text-gray-300">Avaliação Média</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Seja Nosso Próximo Cliente Satisfeito!
          </h3>
          <p className="text-gray-600 mb-6">
            Junte-se a centenas de clientes que já realizaram o sonho do carro novo conosco.
          </p>
          <a
            href="https://wa.me/5585998100070?text=Olá! Gostaria de conhecer os veículos disponíveis e fazer parte dos clientes satisfeitos da MARCOS CAR."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors inline-block"
            onClick={e => handleWhatsAppClick('https://wa.me/5585998100070?text=Olá! Gostaria de conhecer os veículos disponíveis e fazer parte dos clientes satisfeitos da MARCOS CAR.', e)}
          >
            Falar com Consultor
          </a>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
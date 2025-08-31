import React from 'react';
import { Award, Users, Clock, Shield, Heart, Target } from 'lucide-react';

const Sobre = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Clientes Satisfeitos" },
    { icon: Clock, number: "18+", label: "Anos de Experiência" },
    { icon: Award, number: "100%", label: "Veículos Revisados" },
    { icon: Shield, number: "3", label: "Meses de Garantia" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Transparência",
      description: "Acreditamos na honestidade em todas as nossas negociações. Cada veículo tem sua história contada de forma clara e completa."
    },
    {
      icon: Shield,
      title: "Confiança",
      description: "Construímos relacionamentos duradouros baseados na confiança mútua. Nossos clientes são nossa maior referência."
    },
    {
      icon: Target,
      title: "Qualidade",
      description: "Selecionamos apenas veículos que passam por rigorosa inspeção técnica, garantindo a melhor experiência de compra."
    }
  ];

  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Sobre a MARCOS CAR
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma empresa dedicada a conectar pessoas com seus carros dos sonhos, com transparência, confiança e o melhor atendimento do mercado.
          </p>
        </div>

        {/* História da empresa */}
        <div className="text-center"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="w-full flex flex-col items-center justify-center lg:col-span-2">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Nossa História
            </h3>
            <div className="space-y-4 text-gray-600 text-center max-w-2xl mx-auto">
              <p>
                A MARCOS CAR nasceu em 2014 com um sonho simples: democratizar o acesso a veículos 
                de qualidade, oferecendo transparência e confiança em cada negociação. Fundada por 
                Marcos Negreiros, um apaixonado por automóveis com mais de 18 anos de experiência no setor.
              </p>
              <p>
                Ao longo dos anos, construímos uma reputação sólida baseada em três pilares fundamentais: 
                qualidade dos veículos, transparência nas negociações e atendimento personalizado. 
                Cada carro que passa por nossas mãos é cuidadosamente selecionado e revisado.
              </p>
              <p>
                Hoje, somos referência em veículos multimarcas na região, com centenas de clientes 
                satisfeitos que se tornaram amigos e indicam nossos serviços para familiares e conhecidos. 
                Nossa missão é continuar crescendo sem perder a essência familiar que nos define.
              </p>
            </div>
          </div>
          <div className="relative">

            
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Números que Falam por Si
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-black" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nossos valores */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <value.icon size={40} className="text-black" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Compromissos */}
        <div className="mt-16 bg-black text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">
            Nosso Compromisso com Você
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-4">
              <Shield size={32} className="text-accent mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Garantia de Procedência</h4>
              <p className="text-gray-300">
                Todos os veículos possuem documentação completa e histórico verificado
              </p>
            </div>
            <div className="p-4">
              <Award size={32} className="text-accent mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Veículos Revisados</h4>
              <p className="text-gray-300">
                Inspeção técnica completa em todos os sistemas do veículo
              </p>
            </div>
            <div className="p-4">
              <Heart size={32} className="text-accent mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Financiamento Facilitado</h4>
              <p className="text-gray-300">
                Parcerias com os melhores bancos para aprovação rápida
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;


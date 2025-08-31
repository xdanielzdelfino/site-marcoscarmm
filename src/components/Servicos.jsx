import React from 'react';
import { ShoppingCart, DollarSign, RefreshCw, Calculator, FileText, Headphones } from 'lucide-react';

const Servicos = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Compra de Veículos",
      description: "Compramos seu veículo pelo melhor preço do mercado. Avaliação gratuita e pagamento à vista.",
      features: ["Avaliação gratuita", "Pagamento à vista", "Documentação inclusa", "Processo rápido"]
    },
    {
      icon: DollarSign,
      title: "Venda de Veículos",
      description: "Amplo estoque de veículos multimarcas, todos revisados e com garantia de procedência.",
      features: ["Veículos revisados", "Garantia inclusa", "Documentação ok", "Multimarcas"]
    },
    {
      icon: RefreshCw,
      title: "Troca de Veículos",
      description: "Troque seu carro atual por um modelo mais novo. Facilitamos todo o processo para você.",
      features: ["Avaliação justa", "Diferença facilitada", "Sem burocracia", "Troca imediata"]
    },
    {
      icon: Calculator,
      title: "Financiamento",
      description: "Parcerias com os melhores bancos do mercado para oferecer as menores taxas de juros.",
      features: ["Aprovação em 24h", "Menores taxas", "Até 60x", "Com ou Sem entrada"]
    },
    {
      icon: FileText,
      title: "Documentação",
      description: "Cuidamos de toda a documentação necessária para a transferência do seu veículo.",
      features: ["Transferência inclusa", "Licenciamento", "Seguro DPVAT", "Vistoria"]
    },
    {
      icon: Headphones,
      title: "Pós-Venda",
      description: "Atendimento especializado mesmo após a compra. Estamos sempre à disposição.",
      features: ["Suporte contínuo", "Manutenção indicada", "Peças originais", "Garantia estendida"]
    }
  ];

  // Função para rastrear conversão e abrir WhatsApp
  const handleWhatsAppClick = (service) => {
    const message = `Olá! Tenho interesse no serviço de ${service}. Gostaria de mais informações.`;
    const whatsappUrl = `https://wa.me/5585998100070?text=${encodeURIComponent(message)}`;
    if (window.gtag_report_conversion) {
      window.gtag_report_conversion(whatsappUrl);
    } else {
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section id="servicos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços automotivos para atender todas as suas necessidades. 
            Da compra à venda, do financiamento ao pós-venda, estamos com você em cada etapa.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              {/* Ícone */}
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <service.icon size={32} className="text-black" />
              </div>

              {/* Conteúdo */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Seção de financiamento em destaque */}
        <div className="bg-black text-white rounded-2xl px-4 py-4 text-center">
          <h3 className="text-xl font-bold mb-2">
            Financiamento Facilitado
          </h3>
          <p className="text-base text-gray-300 mb-4 max-w-2xl mx-auto">
            Realizamos parcerias com os principais bancos do mercado para oferecer 
            as melhores condições de financiamento para você.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            <div className="h-16 flex flex-col justify-center items-center text-center">
              <div className="text-xl font-bold text-accent mb-0.5">24h</div>
              <div className="text-gray-300 text-xs">Aprovação Rápida</div>
            </div>
            <div className="h-16 flex flex-col justify-center items-center text-center">
              <div className="text-xl font-bold text-accent mb-0.5">60x</div>
              <div className="text-gray-300 text-xs">Parcelas</div>
            </div>
            <div className="h-16 flex flex-col justify-center items-center text-center">
              <div className="text-xl font-bold text-accent mb-0.5">100%</div>
              <div className="text-gray-300 text-xs">Financiado</div>
            </div>
          </div>

          <button
            onClick={() => handleWhatsAppClick('Simulação de Financiamento')}
            className="bg-accent text-black px-5 py-2 rounded-md font-semibold text-sm hover:bg-yellow-400 transition-colors"
          >
            Simular Financiamento
          </button>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Precisa de Ajuda?
          </h3>
          <p className="text-gray-600 mb-6">
            Nossa equipe está pronta para atender você e esclarecer todas as suas dúvidas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+5585998100070"
              className="bg-accent text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Ligar Agora
            </a>
            <button
              onClick={() => handleWhatsAppClick('Atendimento Geral')}
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
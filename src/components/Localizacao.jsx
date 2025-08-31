import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';

const Localizacao = () => {
  const handleDirections = () => {
    const address = "Rua dos Automóveis, 123, Centro, São Paulo, SP";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
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
    <section id="contato" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nossa Localização
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Venha nos visitar! Estamos localizados em um ponto estratégico da cidade, 
            com fácil acesso e estacionamento disponível para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de contato */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              {/* Endereço */}
              <div className="flex items-start">
                <MapPin size={24} className="text-accent mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                  <p className="text-gray-600">
                    Av. Padre José Holanda do Vale, 2000 - Piratininga<br />
                    Maracanaú - CE<br />
                    CEP: 61905-292
                  </p>
                </div>
              </div>

              {/* Horário de funcionamento */}
              <div className="flex items-start">
                <Clock size={24} className="text-accent mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Horário de Funcionamento</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Segunda a Sexta: 8h às 12h e 13h às 18h</p>
                    <p>Sábado: 8h às 15h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex items-start">
                <Phone size={24} className="text-accent mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Telefone / WhatsApp</h4>
                  <a 
                    href="https://wa.me/5585998100070" 
                    className="text-gray-600 hover:text-accent transition-colors"
                    target="_blank" rel="noopener noreferrer"
                    onClick={e => handleWhatsAppClick('https://wa.me/5585998100070', e)}
                  >
                    (85) 99810-0070
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <Mail size={24} className="text-accent mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">E-mail</h4>
                  <a 
                    href="mailto:fmarcoscomercial@gmail.com" 
                    className="text-gray-600 hover:text-accent transition-colors"
                  >
                    fmarcoscomercial@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Localização no Mapa
            </h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.694866687879!2d-38.63200042442644!3d-3.875462133850637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7536b535cd997%3A0xfc8a6e7aca9d5a7b!2sAv.%20Padre%20Jos%C3%A9%20Holanda%20do%20Vale%2C%202000%20-%20Piratininga%2C%20Maracana%C3%BA%20-%20CE%2C%2061905-292!5e0!3m2!1spt-BR!2sbr!4v1753804257739!5m2!1spt-BR!2sbr" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-black text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Agende Sua Visita
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Venha conhecer nosso showroom e test-drive os veículos que mais chamaram sua atenção. 
              Nossa equipe está pronta para recebê-lo!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+5585998100070"
                className="bg-accent text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Ligar Agora
              </a>
              <a
                href="https://wa.me/5585998100070?text=Olá! Gostaria de agendar uma visita ao showroom da MARCOS CAR."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                onClick={e => handleWhatsAppClick('https://wa.me/5585998100070?text=Olá! Gostaria de agendar uma visita ao showroom da MARCOS CAR.', e)}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Localizacao;
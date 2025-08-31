import React from 'react';
// Ícone SVG oficial do WhatsApp

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = "Olá! Vim através do site da MARCOS CAR e gostaria de mais informações sobre os veículos disponíveis.";
    const whatsappUrl = `https://wa.me/5585998100070?text=${encodeURIComponent(message)}`;
    if (window.gtag_report_conversion) {
      window.gtag_report_conversion(whatsappUrl);
    } else {
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-bounce"
      aria-label="Falar no WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.868-2.029-.967-.272-.099-.471-.149-.67.15-.198.297-.767.967-.941 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.348.711.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.991c-.002 5.45-4.437 9.884-9.888 9.884m8.413-18.297a11.815 11.815 0 0 0-8.414-3.488C5.29.214.211 5.293.209 11.104c.002 1.958.512 3.86 1.494 5.522L.057 23.953a1 1 0 0 0 1.225 1.225l7.334-1.945a11.89 11.89 0 0 0 5.522 1.393h.005c5.809 0 10.888-5.079 10.891-10.888a11.82 11.82 0 0 0-3.488-8.413"/>
      </svg>
    </button>
  );
};

export default WhatsAppButton;
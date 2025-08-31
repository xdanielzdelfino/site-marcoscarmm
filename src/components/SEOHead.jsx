import { useEffect } from 'react';

const SEOHead = () => {
  useEffect(() => {
    // Structured Data para SEO Local
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "AutoDealer",
      "name": "MARCOS CAR",
      "description": "Compra, venda e troca de veículos multimarcas. Carros seminovos revisados com garantia e procedência. Financiamento facilitado.",
      "url": "https://marcoscarmm.com.br",
      "telephone": "+55-85-99810-0070",
      "email": "fmarcoscomercial@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Padre José Holanda do Vale, 2000",
        "addressLocality": "Maracanaú",
        "addressRegion": "CE",
        "postalCode": "61905-292",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-3.8754675",
        "longitude": "-38.6271295"
      },
      "openingHours": [
        "Mo-Fr 08:00-18:00",
        "Sa 08:00-14:00"
      ],
      "priceRange": "$$",
      "paymentAccepted": ["Cash", "Credit Card", "Financing"],
      "currenciesAccepted": "BRL",
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "-3.8754675",
          "longitude": "-38.6271295"
        },
        "geoRadius": "50000"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Veículos Multimarcas",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Car",
              "name": "Carros Seminovos",
              "description": "Veículos multimarcas revisados com garantia"
            }
          }
        ]
      },
      "sameAs": [
        "https://www.facebook.com/marcoscar",
        "https://www.instagram.com/fmarcoscar.motos"
      ]
    };

    // Adicionar structured data ao head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Meta tags adicionais
    const metaTags = [
      { property: 'og:title', content: 'MARCOS CAR - Multimarcas | Seu Novo Carro Está Aqui!' },
      { property: 'og:description', content: 'Compra, venda e troca de veículos multimarcas. Carros seminovos revisados com garantia e procedência. Financiamento facilitado.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://marcoscarmm.com.br' },
      { property: 'og:image', content: 'https://marcoscarmm.com.br/og-image.jpg' },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:site_name', content: 'MARCOS CAR' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'MARCOS CAR - Multimarcas | Seu Novo Carro Está Aqui!' },
      { name: 'twitter:description', content: 'Compra, venda e troca de veículos multimarcas. Carros seminovos revisados com garantia e procedência.' },
      { name: 'twitter:image', content: 'https://marcoscarmm.com.br/og-image.jpg' },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'geo.region', content: 'BR-CE' },
      { name: 'geo.placename', content: 'Maracanaú' },
      { name: 'geo.position', content: '-3.8754675;-38.6271295' },
      { name: 'ICBM', content: '-3.8754675, -38.6271295' }
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.property) {
        meta.setAttribute('property', tag.property);
      } else {
        meta.setAttribute('name', tag.name);
      }
      meta.setAttribute('content', tag.content);
      document.head.appendChild(meta);
    });

    // Cleanup function
    return () => {
      document.head.removeChild(script);
      metaTags.forEach(() => {
        const metas = document.head.querySelectorAll('meta[property], meta[name]');
        metas.forEach(meta => {
          if (metaTags.some(tag => 
            (tag.property && meta.getAttribute('property') === tag.property) ||
            (tag.name && meta.getAttribute('name') === tag.name)
          )) {
            document.head.removeChild(meta);
          }
        });
      });
    };
  }, []);

  return null;
};

export default SEOHead;

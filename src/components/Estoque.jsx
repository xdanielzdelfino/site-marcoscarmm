import React, { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import CarCard from './CarCard';
// import carsData from '../data/cars.json';

const Estoque = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filters, setFilters] = useState({
    marca: '',
    anoMin: '',
    anoMax: '',
    precoMin: '',
    precoMax: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetch('/api/cars_json.php')
      .then(res => res.json())
      .then(data => {
        setCars(data);
        setFilteredCars(data);
      });
  }, []);

  useEffect(() => {
    let filtered = cars;

    if (filters.marca) {
      filtered = filtered.filter(car => 
        car.marca.toLowerCase().includes(filters.marca.toLowerCase())
      );
    }

    if (filters.anoMin) {
      filtered = filtered.filter(car => car.ano >= parseInt(filters.anoMin));
    }

    if (filters.anoMax) {
      filtered = filtered.filter(car => car.ano <= parseInt(filters.anoMax));
    }

    if (filters.precoMin) {
      filtered = filtered.filter(car => car.preco >= parseFloat(filters.precoMin));
    }

    if (filters.precoMax) {
      filtered = filtered.filter(car => car.preco <= parseFloat(filters.precoMax));
    }

    setFilteredCars(filtered);
  }, [filters, cars]);

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      marca: '',
      anoMin: '',
      anoMax: '',
      precoMin: '',
      precoMax: ''
    });
  };

  const marcas = [...new Set(cars.map(car => car.marca))];

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
    <section id="estoque" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nosso Estoque
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Confira nossa seleção de veículos multimarcas, todos revisados e com garantia. 
            Use os filtros para encontrar o carro ideal para você.
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Filter size={18} className="mr-2" />
                Filtros
              </button>
              {(filters.marca || filters.anoMin || filters.anoMax || filters.precoMin || filters.precoMax) && (
                <button
                  onClick={clearFilters}
                  className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <X size={18} className="mr-1" />
                  Limpar filtros
                </button>
              )}
            </div>
            <div className="text-gray-600">
              {filteredCars.length} veículo{filteredCars.length !== 1 ? 's' : ''} encontrado{filteredCars.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Painel de filtros */}
          {showFilters && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Filtro por marca */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Marca
                  </label>
                  <select
                    value={filters.marca}
                    onChange={(e) => handleFilterChange('marca', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">Todas as marcas</option>
                    {marcas.map(marca => (
                      <option key={marca} value={marca}>{marca}</option>
                    ))}
                  </select>
                </div>

                {/* Filtro por ano mínimo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ano mínimo
                  </label>
                  <input
                    type="number"
                    value={filters.anoMin}
                    onChange={(e) => handleFilterChange('anoMin', e.target.value)}
                    placeholder="Ex: 2018"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                {/* Filtro por ano máximo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ano máximo
                  </label>
                  <input
                    type="number"
                    value={filters.anoMax}
                    onChange={(e) => handleFilterChange('anoMax', e.target.value)}
                    placeholder="Ex: 2024"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                {/* Filtro por preço mínimo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preço mínimo
                  </label>
                  <input
                    type="number"
                    value={filters.precoMin}
                    onChange={(e) => handleFilterChange('precoMin', e.target.value)}
                    placeholder="Ex: 50000"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                {/* Filtro por preço máximo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preço máximo
                  </label>
                  <input
                    type="number"
                    value={filters.precoMax}
                    onChange={(e) => handleFilterChange('precoMax', e.target.value)}
                    placeholder="Ex: 150000"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Grid de carros */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Nenhum veículo encontrado
            </h3>
            <p className="text-gray-500 mb-4">
              Tente ajustar os filtros ou entre em contato conosco para mais opções.
            </p>
            <button
              onClick={clearFilters}
              className="bg-accent text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Limpar filtros
            </button>
          </div>
        )}

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Não encontrou o que procura? Temos mais opções disponíveis!
          </p>
          <a
            href="https://wa.me/5585998100070?text=Olá! Gostaria de conhecer mais opções de veículos disponíveis."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors inline-block"
            onClick={e => handleWhatsAppClick('https://wa.me/5585998100070?text=Olá! Gostaria de conhecer mais opções de veículos disponíveis.', e)}
          >
            Falar com Consultor
          </a>
        </div>
      </div>
    </section>
  );
};

export default Estoque;
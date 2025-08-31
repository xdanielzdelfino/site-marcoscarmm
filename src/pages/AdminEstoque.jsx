import React, { useState, useEffect } from 'react';
import logo from '../assets/MARCOSCAR.png';
import '../App.css';

const API_URL = '/api';
const CARS_ENDPOINT = `${API_URL}/cars_json.php`;

function AdminEstoque() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [cars, setCars] = useState([]);
  const caracteristicasOpcoes = [
    "Ar condicionado",
    "Direção hidráulica",
    "Vidros elétricos",
    "Trava elétrica",
    "Central multimídia",
    "Câmera de ré",
    "Sensor de estacionamento",
    "Bancos de couro",
    "Teto solar",
    "GPS",
    "Rodas de liga leve",
    "Faróis de LED",
    "Faróis de Milha",
    "Pneus novos",
    "Airbags",
    "Freio Abs",
    "Retrovisor elétrico"
  ];
  const [form, setForm] = useState({
    modelo: '',
    marca: '',
    ano: '',
    preco: '',
    km: '',
    combustivel: '',
    cor: '',
    descricao: '',
    caracteristicas: [],
    fotos: []
  });
  const [preview, setPreview] = useState([]);
  const [msg, setMsg] = useState('');
  const [editIdx, setEditIdx] = useState(null); // índice do carro em edição

  useEffect(() => {
    if (logged) fetchCars();
  }, [logged]);

  const fetchCars = async () => {
    const res = await fetch(CARS_ENDPOINT);
    setCars(await res.json());
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user', user);
    formData.append('pass', pass);
    const res = await fetch(`${API_URL}/login.php`, {
      method: 'POST',
      body: formData
    });
    if (res.ok) setLogged(true);
    else setMsg('Usuário ou senha inválidos');
  };

  const handleForm = (e) => {
    const { name, value, files } = e.target;
    if (name === 'fotos' && files && files.length > 0) {
      setForm(f => ({ ...f, fotos: Array.from(files) }));
      setPreview(Array.from(files).map(file => URL.createObjectURL(file)));
    } else if (name === 'preco') {
      // Salva apenas números, exibe formatado como moeda (centavos)
      const raw = value.replace(/\D/g, '');
      setForm(f => ({ ...f, preco: raw }));
    } else if (name === 'km') {
      let val = value.replace(/\D/g, '');
      val = Number(val).toLocaleString('pt-BR');
      setForm(f => ({ ...f, km: val }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleToggleCaracteristica = (carac) => {
    setForm(f => {
      if (f.caracteristicas.includes(carac)) {
        return { ...f, caracteristicas: f.caracteristicas.filter(c => c !== carac) };
      } else {
        return { ...f, caracteristicas: [...f.caracteristicas, carac] };
      }
    });
  };

  const handleAddOrEditCar = async (e) => {
    e.preventDefault();
    let imagensPath = [];
    try {
      // Se novas fotos foram selecionadas, faz upload delas
      if (form.fotos && form.fotos.length > 0) {
        for (let foto of form.fotos) {
          const fotoData = new FormData();
          fotoData.append('foto', foto);
          const resFoto = await fetch(`${API_URL}/upload.php`, {
            method: 'POST',
            body: fotoData
          });
          const fotoRes = await resFoto.json();
          if (fotoRes.success && fotoRes.path) {
            imagensPath.push(fotoRes.path);
          }
        }
      }
      // Salva o preço como número de reais (divide por 100)
      const precoReais = form.preco ? String(Number(form.preco) / 100) : '';
      let novoCarro;
      if (editIdx !== null) {
        // Edição: mantém imagens antigas se não houver novas
        novoCarro = {
          ...cars[editIdx],
          modelo: form.modelo,
          marca: form.marca,
          ano: form.ano,
          preco: precoReais,
          km: form.km,
          combustivel: form.combustivel,
          cor: form.cor,
          descricao: form.descricao,
          caracteristicas: form.caracteristicas,
          imagem: imagensPath.length > 0 ? imagensPath : cars[editIdx].imagem
        };
      } else {
        // Novo carro
        novoCarro = {
          id: Date.now(),
          modelo: form.modelo,
          marca: form.marca,
          ano: form.ano,
          preco: precoReais,
          km: form.km,
          combustivel: form.combustivel,
          cor: form.cor,
          descricao: form.descricao,
          caracteristicas: form.caracteristicas,
          imagem: imagensPath
        };
      }
      let novaLista;
      if (editIdx !== null) {
        novaLista = cars.map((c, i) => (i === editIdx ? novoCarro : c));
      } else {
        novaLista = [novoCarro, ...cars];
      }
      const res = await fetch(CARS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novaLista)
      });
      const result = await res.json();
      if (res.ok && result.success) {
        setMsg(editIdx !== null ? 'Carro editado!' : 'Carro adicionado!');
        setForm({
          modelo: '', marca: '', ano: '', preco: '', km: '', combustivel: '', cor: '', descricao: '', caracteristicas: [], fotos: []
        });
        setPreview([]);
        setEditIdx(null);
        fetchCars();
      } else {
        setMsg('Erro ao salvar carro: ' + (result.error || JSON.stringify(result)));
      }
    } catch (err) {
      setMsg('Erro ao salvar carro: ' + err.message);
    }
  };

  const handleDeleteCar = async (idx) => {
    const novaLista = cars.filter((_, i) => i !== idx);
    try {
      const res = await fetch(CARS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novaLista)
      });
      const result = await res.json();
      if (res.ok && result.success) {
        setMsg('Carro removido!');
        fetchCars();
      } else {
        setMsg('Erro ao remover carro: ' + (result.error || JSON.stringify(result)));
      }
    } catch (err) {
      setMsg('Erro ao remover carro: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-accent flex flex-col items-center justify-center py-8">
      <div className="w-full max-w-2xl bg-white/90 rounded-2xl shadow-2xl p-10 border border-border backdrop-blur-md">
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="MARCOS CAR" className="h-20 mb-4 drop-shadow-lg" />
          <h2 className="text-3xl font-extrabold text-accent mb-2 tracking-tight">Administração de Estoque</h2>
          <p className="text-muted-foreground text-center text-lg">Área restrita para gerenciar o estoque de veículos.</p>
        </div>

        {!logged ? (
          <form onSubmit={handleLogin} className="flex flex-col gap-4 mb-4">
            <input name="user" placeholder="Usuário" value={user} onChange={e => setUser(e.target.value)} required className="px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-accent text-lg" />
            <input name="pass" type="password" placeholder="Senha" value={pass} onChange={e => setPass(e.target.value)} required className="px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-accent text-lg" />
            <button type="submit" className="bg-accent text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition-colors text-lg">Entrar</button>
            <div className="text-destructive text-base text-center font-semibold">{msg}</div>
          </form>
        ) : (
          <>
            <form onSubmit={handleAddOrEditCar} className="flex flex-col gap-6 mb-8 bg-white/80 rounded-xl p-6 shadow">
              <div className="grid grid-cols-2 gap-6">
                <input name="modelo" placeholder="Modelo" value={form.modelo} onChange={handleForm} required className="px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-accent text-lg" />
                <select name="marca" value={form.marca} onChange={handleForm} required className="px-4 py-3 rounded-xl border border-input bg-background text-foreground text-lg">
                  <option value="">Marca</option>
                  <option>Toyota</option>
                  <option>Honda</option>
                  <option>Jeep</option>
                  <option>Chevrolet</option>
                  <option>Volkswagen</option>
                  <option>Fiat</option>
                  <option>Ford</option>
                  <option>Renault</option>
                  <option>Hyundai</option>
                  <option>Outro</option>
                </select>
                <input name="ano" type="number" min="1900" max="2099" placeholder="Ano" value={form.ano} onChange={handleForm} required className="px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-accent text-lg" />
                <input
                  name="preco"
                  type="text"
                  inputMode="numeric"
                  placeholder="Preço"
                  value={form.preco ? (Number(form.preco) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : ''}
                  onChange={handleForm}
                  required
                  className="px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-accent text-lg"
                />
                <input name="km" type="text" inputMode="numeric"  placeholder="KM" value={form.km} onChange={handleForm} required className="px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-accent text-lg" />
                <select name="combustivel" value={form.combustivel} onChange={handleForm} required className="px-4 py-3 rounded-xl border border-input bg-background text-foreground text-lg">
                  <option value="">Combustível</option>
                  <option>Flex</option>
                  <option>Gasolina</option>
                  <option>Diesel</option>
                  <option>Elétrico</option>
                  <option>GNV</option>
                  <option>Outro</option>
                </select>
                <select name="cor" value={form.cor} onChange={handleForm} required className="px-4 py-3 rounded-xl border border-input bg-background text-foreground text-lg">
                  <option value="">Cor</option>
                  <option>Prata</option>
                  <option>Preto</option>
                  <option>Branco</option>
                  <option>Vermelho</option>
                  <option>Azul</option>
                  <option>Cinza</option>
                  <option>Verde</option>
                  <option>Amarelo</option>
                  <option>Outro</option>
                </select>
              </div>
              <textarea name="descricao" placeholder="Descrição" value={form.descricao} onChange={handleForm} required className="px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-accent text-lg" />
              <div>
                <label className="block mb-2 font-semibold">Características</label>
                <div className="flex flex-wrap gap-2">
                  {caracteristicasOpcoes.map((carac, idx) => (
                    <button
                      type="button"
                      key={carac}
                      onClick={() => handleToggleCaracteristica(carac)}
                      className={`px-4 py-2 rounded-full border font-semibold text-sm transition-colors ${form.caracteristicas.includes(carac) ? 'bg-accent text-black border-accent' : 'bg-muted text-gray-600 border-gray-300'}`}
                    >
                      {carac}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block mb-2 font-semibold">Fotos do carro</label>
                <input name="fotos" type="file" accept="image/*" multiple onChange={handleForm} className="px-4 py-2 rounded-xl border border-input bg-background text-lg" />
                {preview && preview.length > 0 && (
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {preview.map((src, i) => (
                      <img key={i} src={src} alt={`preview${i}`} className="w-24 h-16 object-cover rounded-xl border shadow" />
                    ))}
                  </div>
                )}
              </div>
              <button type="submit" className="bg-accent text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition-colors text-lg shadow">
                {editIdx !== null ? 'Salvar Alterações' : 'Adicionar Carro'}
              </button>
              {editIdx !== null && (
                <button type="button" onClick={() => { setEditIdx(null); setForm({modelo: '', marca: '', ano: '', preco: '', km: '', combustivel: '', cor: '', descricao: '', caracteristicas: [], fotos: []}); setPreview([]); }}
                  className="bg-gray-300 text-black font-bold py-3 rounded-xl hover:bg-gray-400 transition-colors text-lg shadow mt-2">
                  Cancelar Edição
                </button>
              )}
              <div className="text-green-600 text-base text-center font-semibold">{msg}</div>
            </form>
            <h3 className="text-xl font-bold text-primary mb-6 mt-2">Estoque Atual</h3>
            <ul className="space-y-6">
              {cars.map((car, idx) => (
                <li key={idx} className="flex items-center justify-between bg-popover rounded-xl p-6 border border-border shadow">
                  <div className="flex items-center gap-6">
                    {car.imagem && Array.isArray(car.imagem) && car.imagem.length > 0 && (
                      <div className="flex gap-1">
                        {car.imagem.map((img, i) => (
                          <img key={i} src={img} alt={`foto${i}`} className="w-16 h-12 object-cover rounded border border-input shadow" />
                        ))}
                      </div>
                    )}
                    {car.imagem && typeof car.imagem === 'string' && (
                      <img src={car.imagem} alt="foto" className="w-28 h-20 object-cover rounded-lg border border-input shadow" />
                    )}
                    <div>
                      <div className="font-bold text-xl text-accent mb-1">{car.modelo} {car.marca} {car.ano}</div>
                      <div className="text-primary font-bold text-lg">{(() => {
                        const num = Number(car.preco);
                        if (isNaN(num) || num <= 0) return 'Consulte';
                        return num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                      })()}</div>
                      <div className="text-muted-foreground mb-1">{car.descricao}</div>
                      <div className="text-xs text-muted-foreground">KM: {car.km} | Combustível: {car.combustivel} | Cor: {car.cor}</div>
                      {car.caracteristicas && (
                        <div className="text-xs text-muted-foreground mt-1">Características: {Array.isArray(car.caracteristicas) ? car.caracteristicas.join(', ') : car.caracteristicas}</div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 ml-4">
                    <button onClick={() => handleDeleteCar(idx)} className="bg-destructive text-white px-5 py-2 rounded-xl hover:bg-red-700 transition-colors font-bold shadow">Remover</button>
                    <button onClick={() => {
                      setEditIdx(idx);
                      const carro = cars[idx];
                      setForm({
                        modelo: carro.modelo || '',
                        marca: carro.marca || '',
                        ano: carro.ano || '',
                        preco: carro.preco ? String(Math.round(Number(carro.preco) * 100)) : '',
                        km: carro.km || '',
                        combustivel: carro.combustivel || '',
                        cor: carro.cor || '',
                        descricao: carro.descricao || '',
                        caracteristicas: carro.caracteristicas || [],
                        fotos: [] // não carrega fotos antigas para upload
                      });
                      setPreview(Array.isArray(carro.imagem) ? carro.imagem : (carro.imagem ? [carro.imagem] : []));
                    }}
                      className="bg-blue-500 text-white px-5 py-2 rounded-xl hover:bg-blue-600 transition-colors font-bold shadow">
                      Editar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default AdminEstoque;
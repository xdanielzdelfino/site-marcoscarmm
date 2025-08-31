# MARCOS CAR - Site Institucional

Site institucional moderno e otimizado para a MARCOS CAR, empresa de compra, venda e troca de veículos multimarcas.

## 🚗 Sobre o Projeto

Este site foi desenvolvido com foco em conversão e experiência do usuário, apresentando:

- **Design Responsivo**: Adaptado para desktop, tablet e mobile
- **Paleta de Cores**: Baseada na logomarca (amarelo, branco, preto/grafite)
- **SEO Otimizado**: Meta tags, dados estruturados e sitemap
- **Integração WhatsApp**: Botões de contato direto em toda a aplicação
- **Filtros Inteligentes**: Sistema de busca por marca, ano e preço
- **Formulários Funcionais**: Contato e simulação de financiamento

## 🛠️ Tecnologias Utilizadas

- **React 18** com Vite
- **TailwindCSS** para estilização
- **Lucide Icons** para ícones
- **JavaScript (JSX)**
- **Responsive Design**

## 📁 Estrutura do Projeto

```
marcos-car/
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   ├── images/cars/     # Imagens dos veículos (WebP)
│   │   └── MARCOSCAR.png    # Logomarca
│   ├── components/
│   │   ├── Header.jsx       # Cabeçalho com navegação
│   │   ├── Hero.jsx         # Seção principal
│   │   ├── Estoque.jsx      # Listagem de veículos
│   │   ├── Sobre.jsx        # Sobre a empresa
│   │   ├── Servicos.jsx     # Serviços oferecidos
│   │   ├── Depoimentos.jsx  # Depoimentos de clientes
│   │   ├── ContatoForm.jsx  # Formulários de contato
│   │   ├── Localizacao.jsx  # Localização e contato
│   │   ├── Footer.jsx       # Rodapé
│   │   ├── CarCard.jsx      # Card de veículo
│   │   ├── WhatsAppButton.jsx # Botão flutuante WhatsApp
│   │   └── SEOHead.jsx      # Componente de SEO
│   ├── data/
│   │   └── cars.json        # Dados dos veículos
│   ├── App.jsx              # Componente principal
│   ├── App.css              # Estilos customizados
│   └── main.jsx             # Ponto de entrada
├── package.json
└── vite.config.js
```

## 🚀 Como Executar

### Desenvolvimento

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Acessar em http://localhost:5173
```

### Produção

```bash
# Gerar build de produção
npm run build

# Os arquivos estarão na pasta 'dist/'
```

## 📱 Funcionalidades

### Seções do Site

1. **Hero Section**
   - Título impactante com call-to-action
   - Botões para estoque e WhatsApp
   - Cards com diferenciais da empresa

2. **Estoque de Veículos**
   - Grid responsivo de veículos
   - Filtros por marca, ano e preço
   - Cards com informações detalhadas
   - Botão de interesse via WhatsApp

3. **Sobre a Empresa**
   - História da MARCOS CAR
   - Estatísticas de satisfação
   - Valores e compromissos

4. **Serviços**
   - Compra, venda e troca
   - Financiamento facilitado
   - Documentação completa
   - Pós-venda especializado

5. **Depoimentos**
   - Carrossel de depoimentos reais
   - Avaliações com estrelas
   - Índices de satisfação

6. **Contato e Simulação**
   - Formulário de contato
   - Simulador de financiamento
   - Integração com WhatsApp

7. **Localização**
   - Informações de contato
   - Horário de funcionamento
   - Facilidades do showroom

### Integrações

- **WhatsApp**: Mensagens personalizadas para cada ação
- **SEO Local**: Dados estruturados para Google
- **Responsividade**: Mobile-first design
- **Performance**: Imagens otimizadas em WebP

## 🎨 Design System

### Cores Principais
- **Amarelo (Accent)**: #F59E0B - Botões e destaques
- **Preto/Grafite**: #1F2937 - Textos e contrastes
- **Branco**: #FFFFFF - Fundos e textos claros

### Tipografia
- **Títulos**: Fonte bold e impactante
- **Corpo**: Fonte legível e moderna
- **Hierarquia**: H1, H2, H3 bem definidos

## 📞 Configurações de Contato

Para personalizar as informações de contato, edite os seguintes arquivos:

1. **Telefone**: Alterar em todos os componentes o número `5511999999999`
2. **E-mail**: Alterar `contato@marcoscar.com.br`
3. **Endereço**: Atualizar em `Localizacao.jsx` e `Footer.jsx`
4. **Redes Sociais**: URLs do Instagram e Facebook

## 🔧 Deploy

### cPanel (Hospedagem Compartilhada)

1. Execute `npm run build`
2. Faça upload dos arquivos da pasta `dist/` para o diretório público
3. Configure redirecionamentos se necessário

### Netlify/Vercel

1. Conecte o repositório
2. Configure build command: `npm run build`
3. Configure publish directory: `dist`

## 📈 SEO e Performance

- **Meta Tags**: Otimizadas para carros e localização
- **Structured Data**: Schema.org para negócios locais
- **Sitemap**: Gerado automaticamente
- **Robots.txt**: Configurado para indexação
- **Imagens**: Otimizadas em WebP
- **Core Web Vitals**: Otimizado para performance

## 🔄 Manutenção

### Adicionar Novos Veículos

Edite o arquivo `src/data/cars.json` seguindo a estrutura:

```json
{
  "id": 5,
  "modelo": "Nome do Modelo",
  "marca": "Marca",
  "ano": 2024,
  "preco": 100000,
  "km": 10000,
  "combustivel": "Flex",
  "cor": "Cor",
  "imagem": "/src/assets/images/cars/imagem.webp",
  "descricao": "Descrição do veículo",
  "caracteristicas": ["Item 1", "Item 2", "Item 3", "Item 4"]
}
```

### Atualizar Depoimentos

Edite o array `testimonials` em `src/components/Depoimentos.jsx`.

## 📄 Licença

Este projeto foi desenvolvido especificamente para a MARCOS CAR. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para a MARCOS CAR**


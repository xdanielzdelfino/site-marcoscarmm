# 🚀 Instruções de Deploy - MARCOS CAR

## Preparação para Deploy

### 1. Build de Produção

O projeto já foi compilado e está pronto para deploy. Os arquivos estão na pasta `dist/`.

```bash
# Se precisar gerar novamente o build
npm run build
```

### 2. Arquivos Gerados

Após o build, você terá:
- `dist/index.html` - Página principal
- `dist/assets/` - CSS, JS e imagens otimizadas
- `dist/robots.txt` - Configuração para motores de busca
- `dist/sitemap.xml` - Mapa do site

## Opções de Deploy

### 🌐 cPanel (Hospedagem Compartilhada)

**Passo a passo:**

1. **Acesse o cPanel** da sua hospedagem
2. **Abra o Gerenciador de Arquivos**
3. **Navegue até a pasta public_html** (ou www)
4. **Faça upload de todos os arquivos** da pasta `dist/`
5. **Extraia os arquivos** se necessário
6. **Acesse seu domínio** para verificar

**Estrutura final no servidor:**
```
public_html/
├── index.html
├── assets/
├── robots.txt
└── sitemap.xml
```

### ☁️ Netlify (Recomendado)

**Deploy via Drag & Drop:**

1. Acesse [netlify.com](https://netlify.com)
2. Faça login ou crie uma conta
3. Arraste a pasta `dist/` para a área de deploy
4. Aguarde o deploy automático
5. Seu site estará disponível em uma URL temporária

**Deploy via Git (Melhor opção):**

1. Suba o código para um repositório Git
2. Conecte o repositório no Netlify
3. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy automático a cada commit

### ⚡ Vercel

**Deploy via CLI:**

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

**Deploy via Dashboard:**

1. Acesse [vercel.com](https://vercel.com)
2. Importe o repositório
3. Configure build settings
4. Deploy automático

### 🐳 Docker (Avançado)

Crie um `Dockerfile`:

```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Configurações Importantes

### 🔧 Antes do Deploy

**1. Atualize as informações de contato:**

Edite os seguintes arquivos se necessário:
- Telefone: `5511999999999` → seu número
- E-mail: `contato@marcoscar.com.br` → seu e-mail
- Endereço: Atualizar em `Localizacao.jsx`

**2. Configure o domínio:**

No arquivo `src/components/SEOHead.jsx`, altere:
```javascript
"url": "https://marcoscar.com.br" // → seu domínio
```

**3. Adicione Google Analytics (opcional):**

No `index.html`, adicione antes do `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 🗺️ Google Maps (Opcional)

Para adicionar um mapa real do Google:

1. **Obtenha uma API Key** no Google Cloud Console
2. **Substitua o placeholder** em `Localizacao.jsx`:

```jsx
// Substitua o div placeholder por:
<iframe
  src="https://www.google.com/maps/embed/v1/place?key=SUA_API_KEY&q=Rua+dos+Automóveis+123+São+Paulo"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
```

### 📱 PWA (Progressive Web App) - Opcional

Para transformar em PWA, adicione:

1. **Manifest.json** no public:
```json
{
  "name": "MARCOS CAR",
  "short_name": "MARCOS CAR",
  "description": "Veículos Multimarcas",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#F59E0B",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

2. **Service Worker** para cache offline

## Verificações Pós-Deploy

### ✅ Checklist de Testes

- [ ] Site carrega corretamente
- [ ] Todas as imagens aparecem
- [ ] Botões do WhatsApp funcionam
- [ ] Formulários enviam para WhatsApp
- [ ] Site é responsivo (mobile/desktop)
- [ ] Navegação entre seções funciona
- [ ] Filtros de veículos funcionam
- [ ] Links de contato funcionam

### 🔍 Ferramentas de Teste

**Performance:**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

**SEO:**
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

**Responsividade:**
- Teste em diferentes dispositivos
- Use as ferramentas de desenvolvedor do navegador

## Manutenção Contínua

### 📊 Analytics e Monitoramento

1. **Configure Google Analytics**
2. **Configure Google Search Console**
3. **Monitore performance regularmente**
4. **Atualize conteúdo conforme necessário**

### 🔄 Atualizações

Para atualizar o site:

1. **Edite os arquivos fonte**
2. **Execute `npm run build`**
3. **Faça upload dos novos arquivos**
4. **Teste as alterações**

### 🛡️ Segurança

- **Use HTTPS** sempre
- **Mantenha backups** regulares
- **Monitore uptime** do site
- **Atualize dependências** periodicamente

## Suporte

Para dúvidas sobre o deploy ou manutenção do site, consulte:

- **Documentação do React**: [reactjs.org](https://reactjs.org)
- **Documentação do Vite**: [vitejs.dev](https://vitejs.dev)
- **Documentação do Tailwind**: [tailwindcss.com](https://tailwindcss.com)

---

**🎉 Parabéns! Seu site da MARCOS CAR está pronto para o mundo!**


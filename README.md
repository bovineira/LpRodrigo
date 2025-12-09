# Landing Page - Rodrigo Rocha Advogados

Landing Page de alta conversão para advogado Full Service com foco em B2B/Empresarial.

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animações)
- **Lucide React** (ícones)

## 📦 Instalação

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

### Cores Personalizadas

- **Primary (Navy Blue):** `#0C182E` - Fundo de seções escuras, textos de destaque
- **Accent (Gold/Bronze):** `#C5A059` - Botões CTA, ícones, bordas
- **Background:** `#F5F5F7` - Off-white para seções claras
- **Text:** `#111827` - Preto suave para leitura

### Fontes

- **Títulos:** Playfair Display
- **Corpo:** Roboto/Lato/Inter

## 📁 Estrutura do Projeto

```
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   ├── Header.tsx          # Navbar com glassmorphism
│   ├── Hero.tsx            # Seção hero principal
│   ├── AuthoritySection.tsx # Seção de autoridade
│   ├── ServicesSection.tsx  # Grid de serviços
│   ├── ContactForm.tsx     # Formulário de contato
│   ├── Footer.tsx          # Rodapé
│   └── WhatsAppFloat.tsx   # Botão flutuante WhatsApp
└── public/                 # Imagens e assets
    ├── logo-gold.png       # Logo do escritório
    └── hero-rodrigo.png    # Foto do Dr. Rodrigo
```

## 🖼️ Imagens Necessárias

Adicione as seguintes imagens na pasta `public/`:

1. **`logo-gold.png`** - Logo do escritório (recomendado: 180x60px)
2. **`hero-rodrigo.png`** - Foto profissional do Dr. Rodrigo (recomendado: 800x1000px)
3. **`office-bg.jpg`** (opcional) - Imagem de fundo para o hero

**Nota:** Se as imagens não existirem, o sistema exibirá placeholders automáticos.

## ⚙️ Configurações

### WhatsApp

Atualize o número do WhatsApp nos seguintes arquivos:
- `components/Header.tsx` (linha ~30)
- `components/Footer.tsx` (linha ~20)
- `components/WhatsAppFloat.tsx` (linha ~7)

Substitua `5511999999999` pelo número real no formato internacional (sem + e espaços).

### Formulário de Contato

O formulário atualmente simula o envio. Para integrar com uma API real:

1. Crie uma rota API em `app/api/contact/route.ts`
2. Atualize a função `handleSubmit` em `components/ContactForm.tsx`

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)

## 🎯 Funcionalidades

- ✅ Header fixo com efeito glassmorphism ao rolar
- ✅ Hero section com animações suaves
- ✅ Seção de autoridade com estatísticas
- ✅ Grid de serviços 2x2
- ✅ Formulário de contato com validação completa
- ✅ Botão flutuante do WhatsApp
- ✅ Footer com links e informações de contato
- ✅ Scroll suave entre seções
- ✅ Animações com Framer Motion

## 🚢 Build para Produção

```bash
npm run build
npm start
```

## 📝 Licença

Este projeto foi desenvolvido para uso exclusivo do escritório Rodrigo Rocha Advogados.







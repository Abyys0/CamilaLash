# 🎨 Paleta de Cores e Identidade Visual

## Cores Principais

### Dourado Premium
- **Principal**: `#d4af37` 
  - RGB: (212, 175, 55)
  - Uso: Elementos principais, botões, destaques
  
- **Dourado Claro**: `#f0d977`
  - RGB: (240, 217, 119)
  - Uso: Gradientes, hover effects

- **Dourado Escuro**: `#b8941f`
  - RGB: (184, 148, 31)
  - Uso: Sombras, textos em destaque

### Neutros
- **Cinza Escuro**: `#2c2c2c`
  - RGB: (44, 44, 44)
  - Uso: Textos principais, backgrounds escuros

- **Cinza Texto**: `#1a1a1a`
  - RGB: (26, 26, 26)
  - Uso: Textos principais

- **Cinza Claro**: `#6b6b6b`
  - RGB: (107, 107, 107)
  - Uso: Textos secundários

- **Bege Claro**: `#f9f7f4`
  - RGB: (249, 247, 244)
  - Uso: Backgrounds claros

- **Branco**: `#ffffff`
  - RGB: (255, 255, 255)
  - Uso: Cards, textos sobre escuro

### Acento
- **Bege Rosado**: `#e8c4a0`
  - RGB: (232, 196, 160)
  - Uso: Detalhes, bordas suaves

---

## 📐 Tipografia

### Fonte Principal: Poppins
```css
font-family: 'Poppins', sans-serif;
```
- **Uso**: Textos gerais, parágrafos, botões
- **Pesos**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Fonte Secundária: Playfair Display
```css
font-family: 'Playfair Display', serif;
```
- **Uso**: Títulos, destaques, logo
- **Pesos**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Características**: Elegante, sofisticada, premium

---

## 🎨 Gradientes

### Gradiente Principal (Dourado)
```css
background: linear-gradient(135deg, #d4af37 0%, #f0d977 100%);
```
- **Uso**: Botões principais, destaques importantes

### Gradiente Escuro
```css
background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);
```
- **Uso**: Footer, seções escuras, cards destacados

### Gradiente Overlay
```css
background: linear-gradient(135deg, rgba(212, 175, 55, 0.9) 0%, rgba(240, 217, 119, 0.9) 100%);
```
- **Uso**: Overlays sobre imagens, galeria

---

## 🌟 Identidade Visual

### Conceito
- **Estilo**: Sofisticado, Premium, Elegante
- **Público**: Mulheres 18-45 anos, classes A/B
- **Sentimento**: Confiança, Beleza, Profissionalismo

### Elementos Visuais
- ✨ Ícones dourados
- 💎 Bordas arredondadas (15-20px)
- 🎯 Sombras suaves
- ✨ Animações delicadas
- 💫 Espaçamento generoso

---

## 📏 Espaçamentos

```css
--header-height: 80px
--section-padding: 100px 0

Gaps:
- Pequeno: 10-15px
- Médio: 25-35px
- Grande: 50-60px
```

---

## 🎯 Uso das Cores por Seção

### Header/Menu
- Background: Branco `#ffffff`
- Texto: Cinza Escuro `#2c2c2c`
- Hover: Gradiente Dourado
- CTA Button: Gradiente Dourado

### Hero
- Background: Bege gradiente claro
- Título: Cinza Escuro
- Destaque: Gradiente Dourado (texto)
- Botões: Gradiente Dourado + Outline

### Serviços
- Cards: Branco
- Card Destaque: Gradiente Escuro
- Ícones: Gradiente Dourado
- Hover: Borda Dourada

### Footer
- Background: Gradiente Escuro
- Texto: Branco/Cinza claro
- Links Hover: Dourado

---

## 🎨 Combinações Recomendadas

### Para Banners/Anúncios:
```
Fundo: #2c2c2c (escuro)
Título: #f0d977 (dourado claro)
Texto: #ffffff (branco)
CTA: Gradiente Dourado
```

### Para Stories Instagram:
```
Fundo: #f9f7f4 (bege claro)
Título: #2c2c2c (escuro)
Destaque: #d4af37 (dourado)
Detalhes: #e8c4a0 (rosado)
```

### Para Cards de Trabalho:
```
Fundo: #ffffff (branco)
Borda: #d4af37 (dourado)
Texto: #1a1a1a (preto)
```

---

## 🖼️ Tratamento de Imagens

### Fotos de Trabalho (Cílios):
- **Fundo**: Neutro ou desfocado
- **Iluminação**: Natural, bem iluminado
- **Filtro**: Leve aumento de saturação
- **Destaque**: Nitidez nos cílios

### Fotos Profissionais:
- **Fundo**: Branco ou neutro
- **Roupa**: Cores escuras (contraste)
- **Iluminação**: Profissional
- **Edição**: Natural, pele suave

### Fotos de Ambiente:
- **Tom**: Quente e acolhedor
- **Cores**: Alinhadas com paleta
- **Elementos**: Limpo e organizado

---

## ✨ Ícones

### Biblioteca: Font Awesome 6.4.0

**Ícones Principais Usados**:
- 👁️ Olho: `fa-eye` (serviços)
- 💎 Diamante: `fa-gem` (premium)
- ⭐ Estrela: `fa-star` (avaliações)
- 📸 Câmera: `fa-camera` (galeria)
- 🎓 Formatura: `fa-graduation-cap` (cursos)
- ✅ Check: `fa-check-circle` (benefícios)
- 📱 WhatsApp: `fab fa-whatsapp`
- 📷 Instagram: `fab fa-instagram`

**Estilo dos Ícones**:
- Cor: Dourado `#d4af37`
- Tamanho: 20-32px
- Background circular quando em destaque
- Animação sutil no hover

---

## 🎬 Animações

### Timing:
```css
--transition: all 0.3s ease
```

### Tipos de Animação:
1. **Fade Up**: Elementos aparecem de baixo
2. **Fade Left/Right**: Elementos laterais
3. **Zoom In**: Galeria
4. **Float**: Badges flutuantes
5. **Bounce**: Scroll indicator

### Easing:
- Padrão: `ease-in-out`
- Rápido: `ease`
- Suave: `cubic-bezier(0.4, 0, 0.2, 1)`

---

## 📱 Responsividade

### Breakpoints:
```css
Mobile: < 576px
Tablet: 576px - 968px
Desktop: > 968px
```

### Ajustes por Tela:
- **Mobile**: 
  - Fontes menores
  - Padding reduzido
  - Cards em coluna única
  
- **Tablet**: 
  - 2 colunas
  - Espaçamento médio
  
- **Desktop**: 
  - 3-4 colunas
  - Espaçamento completo

---

## 🎯 Guia de Estilo para Novos Elementos

### Ao adicionar um botão:
```css
background: linear-gradient(135deg, #d4af37 0%, #f0d977 100%);
color: white;
padding: 15px 35px;
border-radius: 50px;
box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
```

### Ao adicionar um card:
```css
background: white;
padding: 40px 30px;
border-radius: 20px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
transition: all 0.3s ease;
```

### Ao adicionar título:
```css
font-family: 'Playfair Display', serif;
font-size: 42px;
color: #2c2c2c;
```

---

## ✅ Checklist de Consistência Visual

- [ ] Todas as cores seguem a paleta
- [ ] Fontes corretas (Poppins/Playfair)
- [ ] Border-radius consistente (15-20px)
- [ ] Sombras suaves e uniformes
- [ ] Espaçamentos proporcionais
- [ ] Animações suaves (0.3s)
- [ ] Ícones dourados
- [ ] Botões com gradiente
- [ ] Hover effects em todos elementos clicáveis

---

**Use este guia como referência para manter a identidade visual consistente em futuras atualizações!** 🎨✨

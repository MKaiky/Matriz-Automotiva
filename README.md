🚗 Matriz Automotiva

Uma plataforma simples e elegante para visualizar marcas, modelos e fotos de carros populares e premium, com navegação moderna, busca em tempo real e galeria em modal com slider.

🎯 Objetivo do Projeto

Criar uma interface dinâmica para explorar veículos de diferentes categorias (Populares e Premium), permitindo visualizar marcas → modelos → fotos em alta resolução, tudo dentro de uma experiência rápida, intuitiva e responsiva.

✨ Funcionalidades

📱 Menu lateral responsivo (estilo mobile first)

🔍 Busca em tempo real (filtra marcas e modelos)

🚘 Exibição de marcas → modelos → fotos

🖼️ Modal com slider para visualizar múltiplas imagens

↩️ Botão voltar entre modelos e marcas

👤 Mini sistema de cadastro (frontend)

🪄 Tratamento de erro automático para imagens quebradas

🎯 Rolagem travada ao abrir modal (UX profissional)

🛠️ Tecnologias Utilizadas

HTML5

CSS3

JavaScript Vanilla (DOM + Eventos + Modais)

📂 Estrutura do Projeto
/
├── index.html
├── /css
│   └── style.css
├── /javascript
│   └── script.js
├── /Logos
│   └── (logos das marcas)
└── /imgcarros
    └── (fotos de veículos)

▶️ Como Rodar o Projeto
# Clone o repositório
git clone https://github.com/SEU-USER/NOME-DO-REPO.git

# Acesse a pasta
cd NOME-DO-REPO

# Abra o index.html no navegador


👉 Não precisa instalar nada.
👉 Tudo roda direto no navegador.

🧩 Explicação da Estrutura Lógica
🔵 1. Marcas

Cada card de marca chama a função:

mostrarModelos(marca, secao)


Que substitui os cards da marca pelos cards dos modelos.

🟢 2. Modelos

Cada modelo abre o modal de fotos:

abrirModal(nome, imagens)


Dentro do modal existe um slider dinâmico com botões (prev/next).

🔴 3. Busca em Tempo Real

Filtra tanto marcas quanto modelos:

card.style.display = texto.includes(termo) ? 'block' : 'none';

⚪ 4. Sistema simples de cadastro

Apenas interface.
Ao enviar o formulário:

alert('Cadastro enviado com sucesso!');


(Você pode integrar futuramente com backend.)

🟡 5. Tratamento inteligente de imagens quebradas

Se alguma imagem der erro:

img.onerror = function() {
  this.style.display = 'none';
  this.parentElement.innerHTML = '<div>Imagem não disponível</div>';
};

📌 Exemplo de comando:  
git clone, abrir index.html — pronto.

📞 Contato

Projeto desenvolvido por Marcos Kaiky.

📩 Email: contatokodeky@gmail.com

📸 Instagram: @kodekylab
🐦 Twitter: @kodekylab
🎨 Marca/Agência: KODEKY

// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menu-btn');
  const sidebar = document.getElementById('sidebar');
  const modal = document.getElementById('carro-modal');
  const closeBtn = document.querySelector('.close');
  const searchInput = document.getElementById('search-input');
  const cadastroLink = document.getElementById('cadastro-link');
  const cadastroForm = document.getElementById('cadastro-form');
  const popularesCards = document.getElementById('populares-cards');
  const premiumCards = document.getElementById('premium-cards');
  const popularesModelos = document.getElementById('populares-modelos');
  const premiumModelos = document.getElementById('premium-modelos');
  const modalTitulo = document.getElementById('modal-titulo');
  const modalSlides = document.getElementById('modal-slides');
  const formCadastro = document.getElementById('form-cadastro');

  let currentSlide = 0;

  // === DADOS DOS CARROS (mantidos como você enviou) ===
  const dadosCarros = {
    chevrolet: {
      modelos: [
        { nome: 'Celta', imagens: ['https://mpveiculosrs.com.br/carros/9da767ab3266fd8edf075bfb1e61c92c-thumbjpeg-chevrolet-celta-13300443-800-600-70.jpg', 'https://mpveiculosrs.com.br/carros/8dd1bc748c2ed7236bb7d71f359b8384-thumbjpeg-chevrolet-celta-13300443-1000-750-70.jpg', 'https://mpveiculosrs.com.br/carros/64dcf0f83ccf61949fa29ee224ca322b-thumbjpeg-chevrolet-celta-13300443-1000-750-70.jpg'] },
        { nome: 'Corsa', imagens: ['imgcarros/CORSA-FRONTAL.jpg', 'imgcarros/CORSA-TRASEIRA.jpg'] },
        { nome: 'Onix', imagens: ['imgcarros/ONIX-FRONTAL.jpg', 'imgcarros/ONIX-TRASEIRA.jpg', 'imgcarros/ONIX-INTERIOR.jpg'] }
      ]
    },
    fiat: {
      modelos: [
        { nome: 'Palio Weekend', imagens: ['imgcarros/PALIO-FRONTAL.jpg', 'imgcarros/PALIO-TRASEIRA.jpg', 'imgcarros/PALIO-INTERIOR.jpg'] },
        { nome: 'Uno', imagens: ['imgcarros/UNO-FRONTAL.jpg', 'imgcarros/UNO-TRASEIRA.jpg', 'imgcarros/UNO-INTERIOR.jpg'] }
      ]
    },
    volkswagen: {
      modelos: [
        { nome: 'Fox', imagens: ['imgcarros/FOX-FRONTAL.jpg', 'imgcarros/FOX-TRASEIRA.jpg', 'imgcarros/FOX-INTERIOR.jpg'] },
        { nome: 'Polo', imagens: ['imgcarros/POLO-FRONTAL.jpg', 'Polo/POLO-TRASEIRA.jpg'] }
      ]
    },
    toyota: {
      modelos: [
        { nome: 'Corolla Cross', imagens: ['https://mediapool.bmwgroup.com/cache/P9/202306/P90509733/P90509733-bmw-x1-m35i-m-frozen-pure-grey-metallic-rim-20-styling-872m-06-2023-600px.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkg6AZ5KpzlUGC93o55DacrC0yZCCHRoyqWCD5f2dm9ltditL408TiALdS3RZAzlFZ_uQ&usqp=CAU', 'https://http2.mlstatic.com/D_NQ_NP_875392-MLB89991096742_082025-O-toyota-corolla-xei-20-16v-flex-aut-2020.webp'] },
        { nome: 'SW4 2020', imagens: ['https://img.olx.com.br/images/37/370518688118649.jpg', 'imgcarros/SW4-TRASEIRA.jpg', 'imgcarros/SW4-INTERIOR.jpg'] },
        { nome: 'Tocoma 2020', imagens: ['imgcarros/TACOMA-FRONTAL.jpg', 'imgcarros/TACOMA-TRASEIRA.jpg', 'imgcarros/TACOMA-INTERIOR.jpg'] }
      ]
    },
    bmw: {
      modelos: [
        { nome: 'X1', imagens: ['https://carimports254.co.ke/upakiaji/2025/09/70097307153025091400300.webp', 'https://carimports254.co.ke/upakiaji/2025/09/9730715A30250914W00308-600x450.jpg', 'imgcarros/X1-INTERIOR.jpg'] },
        { nome: 'X5', imagens: ['https://http2.mlstatic.com/D_NQ_NP_910498-MLA88065923240_072025-O.webp', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6JKljGerG372UpGOpSImDLfURaaCYlptOQJC7WU6Wsv6mxPXJFuJIVIjb4V-GSwZ8Jg&usqp=CAU', 'https://cdn.salaodocarro.com.br/_upload/galleries/2021/05/20/bmw-x5-m-competition-chega-brasil-r-973950-60a6883cc8046_album.jpg'] },
        { nome: '320i 2023', imagens: ['imgcarros/320I-FRONTAL.jpg', 'https://http2.mlstatic.com/D_NQ_NP_880112-MLB91217828815_082025-O-bmw-320i-m-sport-20-2024-c-teto-solar.webp', 'https://carrosbemmontados.com.br/wp-content/uploads/2023/06/2024-BMW-X1-M35i-25.jpg'] }
      ]
    },
    mercedes: {
      modelos: [
        { nome: 'Maybach Class-S', imagens: ['https://media.ed.edmunds-media.com/mercedes-benz/maybach-s580/2021/fe/2021_mercedes-benz_maybach-s580_front_fe_1117201_717.jpg', 'https://hips.hearstapps.com/hmg-prod/images/2020-11-08-image-2021-mercedes-maybach-s580-014-1607412123.jpg?crop=0.895xw:0.672xh;0,0.191xh&resize=640:*', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKYkDjWsdnbvKdA-BpAAlMA6bf-K9ajs9WHN_9c4B7qJjpbpxo1iyyeimip4DzSSkysLI&usqp=CAU'] },
        { nome: 'AMG CLA 35 Coupé', imagens: ['https://cdn.motor1.com/images/mgl/g40jo7/s4/mercedes-amg-cla-35.jpg', 'https://cdn.motor1.com/images/mgl/P3GL1X/s1/mercedes-amg-cla-35.jpg', 'imgcarros/CLA-INTERIOR.jpg'] },
        { nome: 'AMG GT 63 S', imagens: ['imgcarros/GT63-FRONTAL.jpg', 'imgcarros/GT63-TRASEIRA.jpg', 'imgcarros/GT63-INTERIOR.jpg'] }
      ]
    }
  };

  // === MENU LATERAL ===
  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
      sidebar.classList.remove('active');
    }
  });

  // === TOGGLE CADASTRO ===
  cadastroLink.addEventListener('click', (e) => {
    e.preventDefault();
    cadastroForm.classList.toggle('hidden');
  });

  // === SUBMIT CADASTRO ===
  formCadastro.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Cadastro enviado com sucesso! (Implemente o backend aqui)');
    cadastroForm.classList.add('hidden');
    formCadastro.reset();
  });

  // === MOSTRAR MODELOS ===
  function mostrarModelos(marca, secao) {
    const containerModelos = secao === 'populares' ? popularesModelos : premiumModelos;
    const containerCards = secao === 'populares' ? popularesCards : premiumCards;

    containerCards.style.display = 'none';
    const modelosContainer = secao === 'populares' ? document.getElementById('populares-modelos-cards') : document.getElementById('premium-modelos-cards');
    modelosContainer.innerHTML = '';

    const modelos = dadosCarros[marca].modelos;
    modelos.forEach(modelo => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `<h4>${modelo.nome}</h4>`;
      card.addEventListener('click', () => abrirModal(modelo.nome, modelo.imagens));
      modelosContainer.appendChild(card);
    });

    containerModelos.classList.remove('hidden');
  }

  // === EVENTOS DAS MARCAS ===
  popularesCards.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => mostrarModelos(card.dataset.marca, 'populares'));
  });
  premiumCards.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => mostrarModelos(card.dataset.marca, 'premium'));
  });

  // === BOTÃO VOLTAR (CORRIGIDO) ===
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('voltar-btn')) {
      e.preventDefault();
      const secao = e.target.dataset.secao;
      const containerModelos = secao === 'populares' ? popularesModelos : premiumModelos;
      const containerCards = secao === 'populares' ? popularesCards : premiumCards;
      containerModelos.classList.add('hidden');
      containerCards.style.display = 'flex';
    }
  });

  // === MODAL / SLIDER (CORRIGIDO COM LISTENERS DINÂMICOS) ===
  function abrirModal(nome, imagens) {
    modalTitulo.textContent = nome;
    modalSlides.innerHTML = '';

    imagens.forEach((imgSrc, i) => {
      const slide = document.createElement('div');
      slide.classList.add('slide');
      if (i === 0) slide.classList.add('active');
      const img = document.createElement('img');
      img.src = imgSrc;
      img.alt = nome;
      img.loading = 'lazy';
      img.onerror = function() {
        this.style.display = 'none';
        this.parentElement.innerHTML = '<div style="color: white; text-align: center; padding: 20px;">Imagem não disponível</div>';
      };
      slide.appendChild(img);
      modalSlides.appendChild(slide);
    });

    currentSlide = 0;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Trava scroll

    // === LISTENERS DINÂMICOS PARA SLIDE (ADICIONADOS AQUI PARA FUNCIONAR SEMPRE) ===
    const prevBtn = modal.querySelector('.prev');
    const nextBtn = modal.querySelector('.next');
    const slides = modalSlides.querySelectorAll('.slide');

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }

    // Remove listeners antigos se existirem (evita duplicatas)
    prevBtn.replaceWith(prevBtn.cloneNode(true));
    nextBtn.replaceWith(nextBtn.cloneNode(true));
    const newPrev = modal.querySelector('.prev');
    const newNext = modal.querySelector('.next');

    newPrev.addEventListener('click', prevSlide);
    newNext.addEventListener('click', nextSlide);
  }

  // === FECHAR MODAL ===
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });

  // Clique fora do modal para fechar
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  });

  // Fechar com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  });

  // === BUSCA EM TEMPO REAL ===
  searchInput.addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();

    // Filtra marcas
    [popularesCards, premiumCards].forEach(container => {
      container.querySelectorAll('.card').forEach(card => {
        const texto = (card.querySelector('h3')?.textContent || '').toLowerCase();
        card.style.display = texto.includes(termo) ? 'block' : 'none';
      });
    });

    // Filtra modelos (se visíveis)
    [popularesModelos, premiumModelos].forEach(container => {
      if (!container.classList.contains('hidden')) {
        container.querySelectorAll('.card').forEach(card => {
          const texto = (card.querySelector('h4')?.textContent || '').toLowerCase();
          card.style.display = texto.includes(termo) ? 'block' : 'none';
        });
      }
    });
  });

  // Inicializa modal oculto
  modal.classList.add('hidden');
});

// Menu toggle
function toggleMenu() {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.getElementById("menu");
  hamburger.classList.toggle("open");
  menu.classList.toggle("active");
}

// Close menu when navigating
function closeMenu(event) {
  const menu = document.getElementById("menu");
  const hamburger = document.querySelector(".hamburger");
  const targetId = event.target.getAttribute("href").substring(1);
  const targetSection = document.getElementById(targetId);

  menu.classList.remove("active");
  hamburger.classList.remove("open");

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Hamburger menu toggle for mobile
document.getElementById("hamburger-menu").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("active");
});

/// Função para atualizar os valores na tela com animação progressiva
function atualizarValores() {
    const valores = {
        carbono: 720,
        energia: 838530,
        arvores: 0,
        bauxita: 171000,
        ferro: 728010,
        agua: 5973930,
        petroleo: 2790,
        oleoVegetal: 90,
        creditosCarbono: 720
    };

    // Atualiza os valores progressivamente
    Object.keys(valores).forEach(chave => {
        const elemento = document.getElementById(chave);
        let valorAtual = 0;
        const incremento = valores[chave] / 100;

        // Animação progressiva para cada valor
        const contador = setInterval(() => {
            valorAtual += incremento;
            if (valorAtual >= valores[chave]) {
                valorAtual = valores[chave];
                clearInterval(contador);
            }
            elemento.textContent = valorAtual.toFixed(2) + (chave === 'agua' ? ' Litros' :
                chave === 'energia' ? ' Mwh' :
                chave === 'petroleo' ? ' Barris' :
                chave === 'oleoVegetal' ? ' toneladas' :
                chave === 'carbono' || chave === 'creditosCarbono' ? ' tCO2e' : ' Kg');
        }, 30);
    });

    // Atualiza a barra de progresso
    const barra = document.getElementById("barra");
    let progresso = 0;
    const progressoFinal = 100; // Percentual de 100%

    // Animação da barra de progresso
    const progressoIntervalo = setInterval(() => {
        progresso += 1;
        barra.style.width = progresso + "%";
        if (progresso >= progressoFinal) {
            clearInterval(progressoIntervalo);
        }
    }, 30);
}

// Chama a função para iniciar a animação dos valores ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    atualizarValores();
});

// Testimonials carousel
let currentSlide = 0;
const testimonials = document.querySelectorAll(".testimonial");
const totalSlides = testimonials.length;

function updateSlides() {
  testimonials.forEach((testimonial, index) => {
    testimonial.style.display = index === currentSlide ? "flex" : "none";
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlides();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlides();
}

updateSlides();
setInterval(nextSlide, 5000);


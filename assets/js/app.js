// Script to alternate hamburger menu


const hamburgerMenu = document.getElementById("hamburger-menu");
const nav = document.querySelector("nav");


hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("active"); // Toggle 'active' class to show/hide the menu
});

// Testimonials carousel variables
let currentSlide = 0;
const testimonials = document.querySelectorAll(".testimonial");
const totalSlides = testimonials.length;

// Function to update the carousel slides
function updateSlides() {
  testimonials.forEach((testimonial, index) => {
    testimonial.style.display = index === currentSlide ? "flex" : "none";
  });
}

// Functions to go to next and previous slides
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the start
  updateSlides();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop to the last slide
  updateSlides();
}

// Initialize the carousel on page load
updateSlides();

// Auto-advance slides every 5 seconds
setInterval(nextSlide, 5000);


/* Script para o contado e a barrada de carregamento*/
document.addEventListener("DOMContentLoaded", function () {
  const finalWeight = 300000; // Peso final em quilos
  const duration = 3000; // Duração da animação em milissegundos
   
  const progressBarFill = document.getElementById("progress-bar-fill");
  const weightCounter = new CountUp("weight-counter", 0, 5000, 0, 2.5); // Exemplo
  weightCounter.start();

  progressBarFill.style.width = `${(5000 / 10000) * 100}%`; // Atualizar largura

  let start = null;

  // Função de animação
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1); // Progresso de 0 a 1
    const currentWeight = Math.floor(progress * finalWeight);

    // Atualiza o contador e a barra de progresso
    weightCounter.textContent = `${currentWeight} kg`;
    progressBarFill.style.width = `${progress * 100}%`;

    // Continua a animação enquanto o progresso for menor que 1
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  // Inicia a animação
  window.requestAnimationFrame(step);
});






// Navegação por teclado no menu
document
  .getElementById("hamburger-menu")
  .addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      document.querySelector("nav ul").classList.toggle("visible");
    }
  });

        const chatbotToggle = document.getElementById('chatbot-toggle');
        const chatbotContent = document.getElementById('chatbot-content');
        const chatbotInput = document.getElementById('chatbot-input');
        const chatbotSend = document.getElementById('chatbot-send');
        const chatbotMessages = document.getElementById('chatbot-messages');

        chatbotToggle.addEventListener('click', () => {
            const isExpanded = chatbotToggle.getAttribute('aria-expanded') === 'true';
            chatbotToggle.setAttribute('aria-expanded', !isExpanded);
            chatbotContent.style.display = isExpanded ? 'none' : 'block';
        });

        chatbotSend.addEventListener('click', () => {
            const userMessage = chatbotInput.value.trim();
            if (userMessage) {
                addMessage('Usuário', userMessage);
                chatbotInput.value = '';
                respondToMessage(userMessage);
            }
        });

        function addMessage(sender, message) {
            const messageElement = document.createElement('p');
            messageElement.textContent = `${sender}: ${message}`;
            chatbotMessages.appendChild(messageElement);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
        /* Interação do Chatbot com o clinete*/
       function respondToMessage(message) {
         let response = "Desculpe, não entendi. Pode reformular?";
         const lowerCaseMessage = message.toLowerCase();

         const sustainabilityKeywords = [
           "sustentabilidade",
           "reciclagem",
           "meio ambiente",
           "ecologia",
           "práticas sustentáveis",
           "verde",
           "ambiental",
         ];
         const contactKeywords = [
           "contato",
           "fale conosco",
           "comunicação",
           "telefone",
           "e-mail",
           "endereço",
           "suporte",
         ];
         const productKeywords = [
           "produtos",
           "serviços",
           "catálogo",
           "lista de preços",
           "orçamentos",
           "ofertas",
         ];
         const scheduleKeywords = [
           "horários",
           "funcionamento",
           "localização",
           "endereço",
           "mapa",
           "onde estamos",
           "abrir",
         ];
         const generalQuestionKeywords = [
           "dúvidas",
           "perguntas",
           "questões",
           "ajuda",
           "suporte",
           "assistência",
           "FAQ",
         ];
         const feedbackKeywords = [
           "feedback",
           "reclamações",
           "sugestões",
           "opinião",
           "comentários",
           "avaliação",
         ];
         const greetingKeywords = [
           "olá",
           "oi",
           "bom dia",
           "boa tarde",
           "boa noite",
           "saudações",
         ];
         const recyclerKeywords = [
           "reciclador",
           "reciclagem",
           "reuso",
           "reutilização",
           "recicláveis",
           "resíduos",
         ];
         const industryKeywords = [
           "indústria",
           "fábrica",
           "produção",
           "manufatura",
           "industrial",
           "setor",
         ];

         if (
           sustainabilityKeywords.some((keyword) =>
             lowerCaseMessage.includes(keyword)
           )
         ) {
           const sustainabilityResponses = [
             "Nós promovemos soluções em sustentabilidade e reciclagem. Como posso ajudar?",
             "Estamos comprometidos com práticas sustentáveis. Em que posso assisti-lo?",
             "A sustentabilidade é uma prioridade para nós. Como posso ser útil?",
           ];
           response =
             sustainabilityResponses[
               Math.floor(Math.random() * sustainabilityResponses.length)
             ];
         } else if (
           contactKeywords.some((keyword) => lowerCaseMessage.includes(keyword))
         ) {
           const contactResponses = [
             "Você pode nos contatar pelo e-mail contato@axelconsultoria.com ou pelo telefone (21) 1234-5678.",
             "Para entrar em contato, envie um e-mail para contato@axelconsultoria.com ou ligue para (21) 1234-5678.",
             "Estamos disponíveis pelo e-mail contato@axelconsultoria.com ou pelo telefone (21) 1234-5678.",
           ];
           response =
             contactResponses[
               Math.floor(Math.random() * contactResponses.length)
             ];
         } else if (
           productKeywords.some((keyword) => lowerCaseMessage.includes(keyword))
         ) {
           const productResponses = [
             "Confira nosso catálogo de produtos e serviços no site.",
             "Oferecemos uma ampla gama de produtos e serviços. Como posso ajudar?",
             "Você pode solicitar um orçamento através do nosso site ou entrando em contato conosco.",
           ];
           response =
             productResponses[
               Math.floor(Math.random() * productResponses.length)
             ];
         } else if (
           scheduleKeywords.some((keyword) =>
             lowerCaseMessage.includes(keyword)
           )
         ) {
           const scheduleResponses = [
             "Nosso horário de funcionamento é de segunda a sexta das 9h às 18h.",
             "Estamos localizados na Rua Exemplo, 123. Venha nos visitar!",
             "Você pode conferir nosso mapa e localização no site.",
           ];
           response =
             scheduleResponses[
               Math.floor(Math.random() * scheduleResponses.length)
             ];
         } else if (
           generalQuestionKeywords.some((keyword) =>
             lowerCaseMessage.includes(keyword)
           )
         ) {
           const generalQuestionResponses = [
             "Você pode encontrar respostas para as perguntas mais frequentes na seção FAQ do nosso site.",
             "Como posso ajudar com suas dúvidas?",
             "Estamos aqui para ajudar! Qual é a sua pergunta?",
           ];
           response =
             generalQuestionResponses[
               Math.floor(Math.random() * generalQuestionResponses.length)
             ];
         } else if (
           feedbackKeywords.some((keyword) =>
             lowerCaseMessage.includes(keyword)
           )
         ) {
           const feedbackResponses = [
             "Agradecemos seu feedback! Por favor, envie suas sugestões ou reclamações para feedback@axelconsultoria.com.",
             "Sua opinião é muito importante para nós. Como podemos melhorar?",
             "Estamos sempre buscando melhorar. Envie seus comentários para feedback@axelconsultoria.com.",
           ];
           response =
             feedbackResponses[
               Math.floor(Math.random() * feedbackResponses.length)
             ];
         } else if (
           greetingKeywords.some((keyword) =>
             lowerCaseMessage.includes(keyword)
           )
         ) {
           const greetingResponses = [
             "Olá! Como posso ajudar você hoje?",
             "Oi! Em que posso assisti-lo?",
             "Bom dia! Como posso ser útil?",
           ];
           response =
             greetingResponses[
               Math.floor(Math.random() * greetingResponses.length)
             ];
         } else if (
           recyclerKeywords.some((keyword) =>
             lowerCaseMessage.includes(keyword)
           )
         ) {
           const recyclerResponses = [
             "Somos especialistas em reciclagem. Como posso ajudar?",
             "Oferecemos serviços de reciclagem e reuso. Em que posso assisti-lo?",
             "Reciclador? Estamos aqui para ajudar com qualquer dúvida sobre reciclagem.",
           ];
           response =
             recyclerResponses[
               Math.floor(Math.random() * recyclerResponses.length)
             ];
         } else if (
           industryKeywords.some((keyword) =>
             lowerCaseMessage.includes(keyword)
           )
         ) {
           const industryResponses = [
             "Trabalhamos com soluções industriais. Como posso ajudar?",
             "Oferecemos serviços para a indústria. Em que posso assisti-lo?",
             "A indústria é nosso foco. Como posso ser útil?",
           ];
           response =
             industryResponses[
               Math.floor(Math.random() * industryResponses.length)
             ];
         }
            const complianceKeywords = [
              "compliance",
              "normas ambientais",
              "regulamentação",
              "legislação",
              "PNRS",
            ];
            if (complianceKeywords.some((keyword) => lowerCaseMessage.includes(keyword))) {
              response =
                "Estamos aqui para ajudar com questões relacionadas ao compliance ambiental e à PNRS. Alguma dúvida específica?";
            }

         addMessage("Chatbot", response);
       }


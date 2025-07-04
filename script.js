const scarpe = [
  {
    image: "img/scarpaanimal.webp",
    alt: "scarpa animal",
    nome: "Scarpa Animal",
    descrizione: "Scarpa dal look animalier, perfetta per uno stile deciso.",
    prezzo: "€32,99",
  },
  {
    image: "img/scarpanera.webp",
    alt: "scarpa nera",
    nome: "Scarpa Nera",
    descrizione: "Scarpa classica nera, versatile e comoda per ogni occasione.",
    prezzo: "€38,99",
  },
  {
    image: "img/scarparossa.webp",
    alt: "scarpa rossa",
    nome: "Scarpa Rossa",
    descrizione: "Scarpa sportiva rossa, perfetta per distinguerti.",
    prezzo: "€30,99",
  },
  {
    image: "img/scarpastriscebianche.webp",
    alt: "scarpa strisce bianche",
    nome: "Scarpa Strisce Bianche",
    descrizione: "Scarpa casual con strisce bianche a contrasto.",
    prezzo: "€24,99",
  },
  {
    image: "img/scarpastrisceblu.webp",
    alt: "scarpa strisce blu",
    nome: "Scarpa Strisce Blu",
    descrizione: "Scarpa sportiva con eleganti strisce blu.",
    prezzo: "€29,99",
  },
  {
    image: "img/scarpastriscenere.webp",
    alt: "scarpa strisce nere",
    nome: "Scarpa Strisce Nere",
    descrizione: "Scarpa dallo stile urban con strisce nere.",
    prezzo: "€41,99",
  },
];

function createCard(scarpa) {
  return `
    <div class="card">
      <img src="${scarpa.image}" alt="${scarpa.alt}">
      <div class="info"> 
        <div class="nome">${scarpa.nome}</div>
        <div class="descrizione">${scarpa.descrizione}</div>
        <div class="prezzo"><span>prezzo</span> ${scarpa.prezzo}</div>
        <button>🛒 Acquista ora</button>
      </div>
    </div>
  `;
}

function renderCards() {
  const cardcontainer = document.querySelector(".cardcontainer");
  cardcontainer.innerHTML = "";
  scarpe.forEach((scarpa) => {
    cardcontainer.innerHTML += createCard(scarpa);
  });
}

// Avvia rendering dopo caricamento
document.addEventListener("DOMContentLoaded", renderCards);

/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// # MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// # MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// # MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// # BONUS 1:
// Trasformare la stringa foto in una immagine effettiva (le trovate in allegato)
// # BONUS 2:
// Organizzare i singoli membri in card/schede e ispirarci alle grafiche in allegato
// */

const teamPersons = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  }
];

const deckElement = document.getElementById('deck-card');
let cardItems = "";

for (let i = 0; i < teamPersons.length; i++) {
  let cardItem = '<div class="col"><div class="card">';
  cardItem += `<img src="img/${teamPersons[i].image}" class="card-img-top" alt="${teamPersons[i].name}">`
  cardItem += `<div class="card-body">`
  cardItem += `<h5 class="card-title">${teamPersons[i].name}</h5>`
  cardItem += `<p class="card-text">${teamPersons[i].role}</p>`
  cardItem += `</div></div></div>` 
  console.log(cardItem);
  cardItems += cardItem;
  console.log(cardItems);
}

deckElement.innerHTML = cardItems;
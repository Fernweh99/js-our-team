/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// # MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// # MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
# MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
# BONUS 1:
Trasformare la stringa foto in una immagine effettiva (le trovate in allegato)
# BONUS 2:
Organizzare i singoli membri in card/schede e ispirarci alle grafiche in allegato
*/

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

const deckElement = document.getElementById('card-deck');

for (let i = 0; i < teamPersons.length; i++) {
  const cardElement = document.createElement('ul'); 
  for (let key in teamPersons[i]) {
    const cardAttribute = document.createElement("li");
    cardAttribute.innerHTML = `${key}: ${teamPersons[i][key]}`
    cardElement.appendChild(cardAttribute);
  }
  deckElement.appendChild(cardElement);
}
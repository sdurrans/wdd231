const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let caption = document.createElement('figcaption');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        caption.textContent = `Born: ${prophet.birthdate} in ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        

        card.appendChild(fullName);
        card.appendChild(portrait); 
        card.appendChild(caption);
        cards.appendChild(card);

    });
}

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data);
    displayProphets(data.prophets);
}



getProphetData();
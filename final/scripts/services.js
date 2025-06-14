const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#portfolio-list');
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let service = document.createElement('h2');
        let picture = document.createElement('img');
        let location = document.createElement('figcaption');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        caption.textContent = `Born: ${prophet.birthdate} in ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');



        card.appendChild(service);
        card.appendChild(picture);
        card.appendChild(location);
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


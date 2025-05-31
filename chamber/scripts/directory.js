const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;


const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;


const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('header nav ul');
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
});


async function getMembers() {
  const response = await fetch('data/members.json');
  const members = await response.json();
  displayMembers(members, 'grid');
}

function displayMembers(members, view) {
  const container = document.querySelector('.Business');
  container.innerHTML = '';
  container.className = `Business ${view}`;

  members.forEach(member => {
    const card = document.createElement('div');
    card.className = 'business-card';
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h4>${member.name}</h4>
      <div class="tagline">${member.description}</div>
      <div class="contact"><strong>ADDRESS:</strong> ${member.address}</div>
      <div class="contact"><strong>PHONE:</strong> ${member.phone}</div>
      <div class="contact"><strong>URL:</strong> <a href="${member.website}" target="_blank">${member.website}</a></div>
      <div class="contact"><strong>Membership:</strong> ${["Member", "Silver", "Gold"][member.membership - 1]}</div>
    `;
    container.appendChild(card);
  });
}

// Toggle view
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('grid-btn').addEventListener('click', () => getMembersWithView('grid'));
  document.getElementById('list-btn').addEventListener('click', () => getMembersWithView('list'));
});


async function getMembersWithView(view) {
  const response = await fetch('data/members.json');
  const members = await response.json();
  displayMembers(members, view);
}

// Initial load
getMembers();


const apiKey = "cee6a049a29a2d3e889cce6c47a5c1d6";
const city = "Buffalo,US";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Current weather
    document.getElementById('temperature').textContent = Math.round(data.list[0].main.temp);
    document.getElementById('conditions').textContent = data.list[0].weather[0].description;
    document.getElementById('wind').textContent = Math.round(data.list[0].wind.speed);

    // 3-day forecast (simplified: next 3 days at noon)
    const forecastEls = document.querySelectorAll('.forecast-temp');
    let day = 1;
    for (let i = 0; i < data.list.length; i++) {
      if (data.list[i].dt_txt.includes("12:00:00") && day <= 3) {
        forecastEls[day - 1].textContent = Math.round(data.list[i].main.temp) + "°F";
        day++;
      }
    }
  });


async function loadSpotlights() {
  const response = await fetch('data/members.json');
  const members = await response.json();
  // Filter for gold or silver
  const goldSilver = members.filter(m => m.membership === 2 || m.membership === 3);
  // Shuffle and pick 2 or 3
  goldSilver.sort(() => 0.5 - Math.random());
  const spotlights = goldSilver.slice(0, 3);

  const container = document.querySelector('.Spotlights');
  container.innerHTML = '';
  spotlights.forEach(member => {
    const card = document.createElement('div');
    card.className = 'business-card';
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h4>${member.name}</h4>
      <div class="tagline">${member.description}</div>
      <div class="contact"><strong>ADDRESS:</strong> ${member.address}</div>
      <div class="contact"><strong>PHONE:</strong> ${member.phone}</div>
      <div class="contact"><strong>URL:</strong> <a href="${member.website}" target="_blank">${member.website}</a></div>
      <div class="contact"><strong>Membership:</strong> ${["Member", "Silver", "Gold"][member.membership - 1]}</div>
    `;
    container.appendChild(card);
  });
}


document.getElementById('timestamp').value = new Date().toISOString();


document.querySelectorAll('.modal-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const modalId = this.getAttribute('data-modal');
    document.getElementById(modalId).showModal();
  });
});


window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.membership-card').forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(40px)";
    setTimeout(() => {
      card.style.transition = "all 0.7s cubic-bezier(.4,2,.6,1)";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, 200 + i * 200);
  });
});
document.addEventListener('DOMContentLoaded', loadSpotlights);



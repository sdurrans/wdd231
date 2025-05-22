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
  container.className = 'Business ${view}';

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
      <div class="contact"><strong>Membership:</strong> ${["Member", "Silver", "Gold"][member.membership-1]}</div>
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



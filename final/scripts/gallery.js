// gallery.js

import { setupModal } from './modal.js';

const galleryContainer = document.querySelector('#portfolio-list');
const dataUrl = 'data/drones.json';

const showModal = setupModal();

async function loadDroneImages() {
    try {
        const response = await fetch(dataUrl);
        if (!response.ok) throw new Error(`Error fetching data: ${response.status}`);
        const data = await response.json();
        displayGallery(data.droneImages);
    } catch (error) {
        console.error('Error loading drone image data:', error);
        galleryContainer.innerHTML = `<p class="error">Failed to load portfolio data. Please try again later.</p>`;
    }
}

function displayGallery(images) {
    images.forEach(image => {
        const card = document.createElement('section');
        card.classList.add('card');

        card.innerHTML = `
            <img src="images/${image.image}" alt="${image.title}" loading="lazy">
            <h3>${image.title}</h3>
            <p>${image.address}</p>
            <p class="category">${image.category}</p>
        `;

        card.addEventListener('click', () => {
            showModal({
                image: `images/${image.image}`,
                title: image.title,
                address: image.address,
                category: image.category
            });
        });

        galleryContainer.appendChild(card);
    });
}

loadDroneImages();

import { loadGallery } from './gallery.js';

// Update footer dates
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.querySelector('#currentYear');
    const modifiedPara = document.querySelector('#lastModified');

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (modifiedPara) {
        modifiedPara.textContent = `Last Modified: ${document.lastModified}`;
    }

    // Load drone gallery if gallery container is present
    if (document.querySelector('#portfolio-list')) {
        loadGallery();
    }
});

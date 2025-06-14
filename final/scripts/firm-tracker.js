// form-tracker.js

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Set last modified date in footer
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// Track request count in localStorage
const countDisplay = document.getElementById('request-count');
if (countDisplay) {
    let count = Number(localStorage.getItem('requestCount')) || 0;
    count += 1;
    localStorage.setItem('requestCount', count);
    countDisplay.textContent = count;
}

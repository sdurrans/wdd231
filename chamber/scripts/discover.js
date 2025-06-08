document.addEventListener("DOMContentLoaded", async () => {
    // Load destinations
    const res = await fetch("data/destinations.json");
    const data = await res.json();
    const grid = document.querySelector(".discover-grid");
    data.forEach((item, i) => {
        const card = document.createElement("div");
        card.className = "discover-card";
        card.style.gridArea = `card${i+1}`;
        card.innerHTML = `
            <h2>${item.name}</h2>
            <figure>
                <img src="images/${item.photo_url}" alt="${item.name}">
            </figure>
            <address>${item.location}</address>
            <p>${item.description}</p>
            
        `;
        grid.appendChild(card);
    });


    const msg = document.getElementById("visit-message");
    const lastVisit = localStorage.getItem("discoverLastVisit");
    const now = Date.now();
    if (!lastVisit) {
        msg.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        if (days < 1) {
            msg.textContent = "Back so soon! Awesome!";
        } else if (days === 1) {
            msg.textContent = "You last visited 1 day ago.";
        } else {
            msg.textContent = `You last visited ${days} days ago.`;
        }
    }
    localStorage.setItem("discoverLastVisit", now);
});
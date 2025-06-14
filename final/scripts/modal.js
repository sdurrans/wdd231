// modal.js

export function setupModal() {
    const modal = document.createElement('div');
    modal.id = 'image-modal';
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <img id="modal-img" src="" alt="">
            <div class="modal-details">
                <h2 id="modal-title"></h2>
                <p id="modal-address"></p>
                <p id="modal-category"></p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalAddress = document.getElementById('modal-address');
    const modalCategory = document.getElementById('modal-category');
    const modalClose = modal.querySelector('.modal-close');

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    return function showModal(data) {
        modalImg.src = data.image;
        modalImg.alt = data.title;
        modalTitle.textContent = data.title;
        modalAddress.textContent = `Address: ${data.address}`;
        modalCategory.textContent = `Category: ${data.category}`;
        modal.style.display = 'block';
    };
}

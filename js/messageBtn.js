'use strict';

const profEl = document.querySelector('.profile__dropdown-list');
document.querySelector('.profile__dropdown-toggle')
    .addEventListener('click', () => {
        profEl.classList.toggle('showMessageBox');
    });

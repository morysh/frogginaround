'use strict';

const FOLDED_LEFT = 'folded-left';

let sidenav;

document.addEventListener('DOMContentLoaded', () => {
    sidenav = document.getElementById('sidenav');

    document.getElementById('sidenav-toggle').addEventListener('click', () => {
        sidenav.classList.remove(FOLDED_LEFT);
    }, false);

    document.getElementById('sidenav-closer').addEventListener('click', () => {
        sidenav.classList.add(FOLDED_LEFT)
    });
}, false);
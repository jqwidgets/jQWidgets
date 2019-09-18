window.onload = function () {
    'use strict';

    let button = document.querySelector('.cta');
    button.addEventListener('click', function () {
        button.classList.add('active');
        setTimeout(function () {
            button.classList.remove('active');
        }, 300);
    });
}

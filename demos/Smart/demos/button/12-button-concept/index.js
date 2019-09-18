window.onload = function () {
    'use strict';

    let button = document.querySelector('.button');

    let removeSuccess = () => {
        button.classList.remove('success');
    }
    
    button.addEventListener('click', function () {
        button.classList.add('success');

        setTimeout(function () {
            removeSuccess();
        }, 3000);

    });

}
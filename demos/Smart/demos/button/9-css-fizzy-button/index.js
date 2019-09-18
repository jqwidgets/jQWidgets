window.onload = function () {
    'use strict';

    let smartButton = document.querySelector('.smart-button');

    smartButton.addEventListener('click', function () {
        let button = document.getElementById('button');
        if (button.checked === true) {
            button.checked = false;
        }
        else {
            button.checked = true;
        }
    });

}

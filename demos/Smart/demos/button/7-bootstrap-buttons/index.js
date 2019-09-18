window.onload = function () {
    'use strict';

    let submitButtons = document.querySelectorAll('smart-button.submit');
    for (let i = 0; i < submitButtons.length; i++) {
        let submitButton = submitButtons[i];

        submitButton.addEventListener('click', function () {

            if (submitButton.classList.contains('sending')) {
                submitButton.classList.remove('sending');
            }
            else {
                submitButton.classList.add('sending');
            }

            setTimeout(function () {
                submitButton.classList.remove('sending');
            }, 4500);

        });
    }
}
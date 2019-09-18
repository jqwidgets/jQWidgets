window.onload = function () {
    document.querySelector('#setSignificantDigits').addEventListener('click', function () {
        const myCustomElement = document.querySelector('smart-numeric-text-box');
        myCustomElement.significantDigits = 5;
    });

    document.querySelector('#setPrecisionDigits').addEventListener('click', function () {
        const myCustomElement = document.querySelector('smart-numeric-text-box');
        myCustomElement.precisionDigits = 5;
    });
};
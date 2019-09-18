window.onload = function () {
    const myCustomElement = document.querySelector('smart-numeric-text-box');
    myCustomElement.style.fontFamily = "Verdana";

    document.querySelector('#setSignificantDigits').addEventListener('click', function () {
        myCustomElement.significantDigits = 5;
    });

    document.querySelector('#setPrecisionDigits').addEventListener('click', function () {
        myCustomElement.precisionDigits = 5;
    });

    document.querySelector('#setValue').addEventListener('click', function () {
        myCustomElement.value = '5e12 + 1.6e3i';
    });

    document.querySelector('#setScientificNotationValue').addEventListener('click', function () {
        myCustomElement.value = '34E - 12i';
    });
};
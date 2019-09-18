window.onload = function () {
    const accordion = document.getElementById('accordion'),
        expandModeDropDown = document.getElementById('expandMode');

    expandModeDropDown.addEventListener('change', function (event) {
        accordion.expandMode = event.detail.value;
    });
}
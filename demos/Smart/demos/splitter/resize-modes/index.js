window.onload = function () {
    const radioButtons = document.getElementsByTagName('smart-radio-button'),
	splitter = document.querySelector('smart-splitter');

    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].addEventListener('change', function (event) {
            document.querySelector('smart-splitter').resizeMode = this.textContent.trim();
        });
    }
}
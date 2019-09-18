window.onload = function () {
    const buttons = document.querySelectorAll("smart-radio-button"),
	log = document.querySelector("#log");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('change', function (event) {
            const checkStatus = event.detail.value;
            log.textContent = event.target.innerHTML + " is checked";
        });
    }
};
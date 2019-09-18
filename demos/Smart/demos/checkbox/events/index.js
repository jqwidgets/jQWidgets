window.onload = function () {
    const checkBox = document.querySelector("smart-check-box"),
	log = document.querySelector("#log");
    log.textContent = "Change event. Status: " + false;

    checkBox.addEventListener('change', function (event) {
        const checkStatus = event.detail.value;
		
		log.textContent = "Change event. Status: " + checkStatus;
    });
};
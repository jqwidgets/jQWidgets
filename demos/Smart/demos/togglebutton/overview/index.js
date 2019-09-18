window.onload = function () {
	const toggleButtons = document.getElementsByClassName('exclusive-selection');

	for (let i = 0; i < toggleButtons.length; i++) {
		toggleButtons[i].addEventListener('change', function (event) {
			if (event.detail.value) {
				for (let k = 0; k < toggleButtons.length; k++) {
					if (toggleButtons[k] !== this) {
						toggleButtons[k].checked = false;
					}
				}
			}
		});
	}
}
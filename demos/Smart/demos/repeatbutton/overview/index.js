window.onload = function () {
	let hoverArea = document.getElementById('hover-area'),
		floatingHoverButton = document.getElementById('floating-hover-action'),
		floatingClickButton = document.getElementById('floating-click-action'),
		toggleButtons = document.getElementsByClassName('exclusive-selection'),
		progressBar = document.getElementById('progressBar'),
		circularProgressBar = document.getElementById('progressBarCircular');

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

	document.getElementById('progressUp').addEventListener('click', function () {
		progressBar.value = Math.min(progressBar.max, progressBar.value + 1);
		circularProgressBar.value = Math.min(circularProgressBar.max, circularProgressBar.value + 1);
	});

	document.getElementById('progressDown').addEventListener('click', function () {
		progressBar.value = Math.max(progressBar.min, progressBar.value - 1);
		circularProgressBar.value = Math.max(circularProgressBar.min, circularProgressBar.value - 1);
	});

	document.getElementById('incrementButton').addEventListener('click', function () {
		let progressBar = document.getElementById('progressBarCircularControl');

		progressBar.value = Math.min(progressBar.max, progressBar.value + 1);

	});

	document.getElementById('decrementButton').addEventListener('click', function () {
		let progressBar = document.getElementById('progressBarCircularControl');

		progressBar.value = Math.max(progressBar.min, progressBar.value - 1);
	});
	
}
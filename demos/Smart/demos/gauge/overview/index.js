window.onload = function () {
		const silentLabel = document.getElementById('silentLabel'),
			normalLabel = document.getElementById('normalLabel'),
			maxLabel = document.getElementById('maxLabel');

		document.getElementById('mobileGauge').addEventListener('change', function (event) {
			const value = event.detail.value;

			silentLabel.classList.remove('highlighted');
			normalLabel.classList.remove('highlighted');
			maxLabel.classList.remove('highlighted');

			if (value >= 75) {
				maxLabel.classList.add('highlighted');
			}
			else if (value >= 25) {
				normalLabel.classList.add('highlighted');
			}
			else {
				silentLabel.classList.add('highlighted');
			}
		});
	}
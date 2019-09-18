window.onload = function () {
	 const mediaSlider = document.getElementById('mediaSlider'),
		alarmSlider = document.getElementById('alarmSlider'),
		volumeSlider = document.getElementById('volumeSlider'),
		lowBatterySlider = document.getElementById('lowBatterySlider'),
		powerSaverSlider = document.getElementById('powerSaverSlider');

	function setIcon() {
		let below, above, off;

		switch (this) {
			case mediaSlider:
				below = '<i class="material-icons">&#xE04D;</i>';
				above = '<i class="material-icons">&#xE050;</i>';
				off = '<i class="material-icons">&#xE04F;</i>';
				break;
			case alarmSlider:
				below = above = '<i class="material-icons">&#xE855;</i>';
				off = '<i class="material-icons">&#xE857;</i>';
				break;
			case volumeSlider:
				below = '<i class="material-icons">&#xE7F5;</i>';
				above = '<i class="material-icons">&#xE7F4;</i>';
				off = '<i class="material-icons">&#xE7F6;</i>';
				break;
		}

		if (this.value === this.min) {
			this.previousElementSibling.innerHTML = off;
		}
		else if (this.value < this.max / 2) {
			this.previousElementSibling.innerHTML = below;
		}
		else {
			this.previousElementSibling.innerHTML = above;
		}
	}

	function setBatteryLevel() {
		if (this === lowBatterySlider) {
			document.getElementById('lowBatteryAlert').textContent = this.value;
		}
		else {
			document.getElementById('powerSaver').textContent = this.value;
		}
	}

	mediaSlider.addEventListener('change', setIcon);
	alarmSlider.addEventListener('change', setIcon);
	volumeSlider.addEventListener('change', setIcon);

	lowBatterySlider.addEventListener('change', setBatteryLevel);
	powerSaverSlider.addEventListener('change', setBatteryLevel);
}
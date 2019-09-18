window.onload = function () {
	let cpuTank = document.getElementById('cpuTank'),
		batteryTank = document.getElementById('powerSaverTank');

	function setTemperature() {
		let color = '#0C9F59';

		if (this.value === '0') {
			color = '';
		}
		else if (this.value < this.max * 0.25) {
			color = '#DB4534';
		}
		else if (this.value > this.max * 0.2 && this.value < this.max * 0.70) {
			color = '#FFEB3B';
		}

		this.getElementsByClassName('smart-thumb')[0].style.backgroundColor = this.getElementsByClassName('smart-value')[0].style.backgroundColor = color;
		document.getElementById('powerSaver').innerHTML = this.value;
	}

	cpuTank.labelFormatFunction = ((label) => { return label + '%' });

	powerSaverTank.addEventListener('change', setTemperature);
	

	let cpu = document.getElementById('cpu');

	setInterval(function () {
		cpuTank.value = Math.random() * 100;
		cpu.textContent = cpuTank.value;
	}, 1500);
}
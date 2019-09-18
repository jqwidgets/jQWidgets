window.onload = function () {
	document.getElementById('powerButtonAnimation').addEventListener('change', function (event) {
		document.getElementById('progressBarAnimated').indeterminate = event.detail.value ? false : true;
	});
}
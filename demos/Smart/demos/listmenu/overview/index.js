window.onload = function () {
	const menu1Container =  listMenu2Container = document.getElementById('listMenu2Container');


	let stars = document.querySelectorAll('#listMenu4 .material-icons');

	for (let i = 0; i < stars.length; i++) {
		stars[i].addEventListener('click', function (event) {
			event.stopPropagation();

			if (this.classList.contains('empty')) {
				this.innerHTML = '&#xE838;';
				this.classList.remove('empty');
			}
			else {
				this.innerHTML = '&#xE83A;';
				this.classList.add('empty');
			}
		});
	}
}
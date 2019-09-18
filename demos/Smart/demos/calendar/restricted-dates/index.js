window.onload = function () {
    const restrictedDates = document.querySelector('smart-calendar').restrictedDates,
	calendar = document.querySelector('smart-calendar');

	function formatDate(date) {
	  const monthNames = [
		"January", "February", "March",
		"April", "May", "June", "July",
		"August", "September", "October",
		"November", "December"
	  ];

	  const day = date.getDate();
	  const monthIndex = date.getMonth();
	  const year = date.getFullYear();

	  return day + ' ' + monthNames[monthIndex] + ' ' + year;
	}

    for (let d = 0; d < restrictedDates.length; d++) {
        document.getElementById('restrictedDates').innerHTML += formatDate(restrictedDates[d]) + '</br>';
    }
}
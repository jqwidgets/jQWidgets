window.onload = function () {
    const importantDates = document.querySelector('smart-calendar').importantDates,
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

    for (let d = 0; d < importantDates.length; d++) {
        document.getElementById('importantDates').innerHTML += formatDate(importantDates[d]) + '</br>';
    }

    document.querySelector('smart-calendar').addEventListener('open', function (event) {
        const date = event.detail.owner;

        if (date.value.getFullYear() === 2018) {
            calendar.tooltipPosition = 'top';
            if (date.value.getMonth() === 5 && date.value.getDate() === 9) {
                event.target.innerHTML = 'Ivan\'s Birthday !';
            }
            else if (date.value.getMonth() === 6) {
                if (date.value.getDate() === 1) {
                    event.target.innerHTML = 'Filip\'s Birthday !';
                }
                else {
                    event.target.innerHTML = 'Anthony\'s Birthday !';
                    calendar.tooltipPosition = 'right';
                }
            }
        }
    });
}
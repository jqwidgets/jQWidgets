window.onload = function () {
    const calendar = document.querySelector('smart-calendar'),
        monthSelector = document.getElementById('monthsCountSelector');

    calendar.selectedDates = ["2017-08-17", "2017-09-6", "2017-09-21", "2017-10-31", "2017-11-25", "2017-12-24", "2018-1-7"];

    monthSelector.addEventListener('change', function (event) {
        calendar.months = parseInt(event.target.value);
    });
}
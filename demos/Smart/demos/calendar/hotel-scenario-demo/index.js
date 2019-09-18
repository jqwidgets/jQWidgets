window.onload = function () {
    const calendar = document.getElementById('datePicker'),
        roomPicker = document.getElementById('roomPicker'),
        adultPicker = document.getElementById('adultPicker'),
        childrenPicker = document.getElementById('childrenPicker');

    roomPicker.dataSource = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    adultPicker.dataSource = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    childrenPicker.dataSource = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    calendar.addEventListener('change', function () {
        const summary = document.getElementById('summary');

        summary.innerHTML = "Duration: " + calendar.selectedDates.length + ' days';
        summary.classList.remove('smart-visibility-hidden');
    });
}
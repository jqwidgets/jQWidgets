window.onload = function () {
    const pager = document.querySelector('smart-pager'),
        eventLog = document.getElementById('eventLog');

    pager.addEventListener('change', function (event) {
        const details = event.detail;

        document.getElementById('eventLog').innerHTML = 'Selected item #' + details.index;
        console.log('Selected item #' + details.index);
    });
}
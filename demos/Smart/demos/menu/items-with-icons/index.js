window.onload = function () {
    const menu = document.getElementById('menu');

    menu.addEventListener('itemClick', function (event) {
        window.open('https://en.wikipedia.org/wiki/' + event.detail.value, '_blank');
    });
}
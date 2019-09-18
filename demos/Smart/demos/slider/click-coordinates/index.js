window.onload = function () {
    const slider = document.getElementById('slider'),
        numericTextBox = document.getElementById('numericTextBox'),
        x = document.getElementById('x'),
        y = document.getElementById('y');

    slider.addEventListener('click', function (event) {
        x.innerHTML = event.pageX;
        y.innerHTML = event.pageY;
    });

    numericTextBox.addEventListener('click', function (event) {
        if (event.pageX) {
            x.innerHTML = event.pageX;
            y.innerHTML = event.pageY;
        }
        else {
            x.innerHTML = event.detail.pageX;
            y.innerHTML = event.detail.pageY;
        }
    });
};
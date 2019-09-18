window.onload = function () {
    const gauge = document.getElementById('gauge');

    document.getElementById('fontSizeButton').addEventListener('click', function () {
        gauge.style.fontSize = '20px';
    });

    document.getElementById('colorButton').addEventListener('click', function () {
        const svg = gauge.getElementsByTagName('svg')[0];

        if (svg) {
            svg.style.stroke = 'red';
            svg.style.fill = 'red';
        }
    });

    document.getElementById('resizeButton').addEventListener('click', function () {
        gauge.style.width = '500px';
    });
}
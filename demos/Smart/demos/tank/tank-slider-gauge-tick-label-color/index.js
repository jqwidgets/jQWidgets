window.onload = function () {
    const slider = document.getElementById('slider'),
        tank = document.getElementById('tank'),
        gauge = document.getElementById('gauge');

    document.getElementById('redTicks').addEventListener('click', function () {
        slider.style.setProperty('--smart-tick-color', 'red');
        tank.style.setProperty('--smart-tick-color', 'red');
        gauge.style.setProperty('--smart-tick-color', 'red');
    });

    document.getElementById('blueTicks').addEventListener('click', function () {
        slider.style.setProperty('--smart-tick-color', 'blue');
        tank.style.setProperty('--smart-tick-color', 'blue');
        gauge.style.setProperty('--smart-tick-color', 'blue');
    });

    document.getElementById('redLabels').addEventListener('click', function () {
        slider.style.setProperty('--smart-tick-label-color', 'red');
        tank.style.setProperty('--smart-tick-label-color', 'red');
        gauge.style.setProperty('--smart-tick-label-color', 'red');
    });

    document.getElementById('blueLabels').addEventListener('click', function () {
        slider.style.setProperty('--smart-tick-label-color', 'blue');
        tank.style.setProperty('--smart-tick-label-color', 'blue');
        gauge.style.setProperty('--smart-tick-label-color', 'blue');
    });

    document.getElementById('resize').addEventListener('click', function () {
        slider.style.width = '500px';
        tank.style.height = '100px';
        gauge.style.width = '200px';
    });
};
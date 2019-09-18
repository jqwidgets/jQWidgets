function fuelGaugeLabelFormatFunction(value) {
    switch (value) {
        case '0':
            return 'E';
        case '20':
            return '½';
        case '40':
            return 'F';
        default:
            return ' ';
    }
}

window.onload = function () {
    document.getElementById('needleGauge2').ranges = [
        { startValue: 0, endValue: 25, className: 'range1' },
        { startValue: 25, endValue: 50, className: 'range2' },
        { startValue: 50, endValue: 75, className: 'range3' },
        { startValue: 75, endValue: 100, className: 'range4' }
    ];

    document.getElementById('fillGauge1').ranges = [
        { startValue: 0, endValue: 19.5, className: 'range1' },
        { startValue: 20.5, endValue: 39.5, className: 'range2' },
        { startValue: 40.5, endValue: 59.5, className: 'range3' },
        { startValue: 60.5, endValue: 79.5, className: 'range4' },
        { startValue: 80.5, endValue: 100, className: 'range5' }
    ];

    document.getElementById('fillGauge2').digitalDisplayPosition = 'bottom';
}
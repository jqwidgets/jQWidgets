window.onload = function () {
    const gauges = [].slice.call(document.getElementsByTagName('smart-gauge'));

    // labels
    document.getElementById('all').addEventListener('change', function (event) {
        gauges.map(function (g) { g.labelsVisibility = 'all'; });
    });
    document.getElementById('endPoints').addEventListener('change', function (event) {
        gauges.map(function (g) { g.labelsVisibility = 'endPoints'; });
    });
    document.getElementById('none').addEventListener('change', function (event) {
        gauges.map(function (g) { g.labelsVisibility = 'none'; });
    });

    // ticks
    document.getElementById('major').addEventListener('change', function (event) {
        gauges.map(function (g) { g.ticksVisibility = 'major'; });
    });
    document.getElementById('minor').addEventListener('change', function (event) {
        gauges.map(function (g) { g.ticksVisibility = 'minor'; });
    });
    document.getElementById('noTicks').addEventListener('change', function (event) {
        gauges.map(function (g) { g.ticksVisibility = 'none'; });
    });
}
window.onload = function () {
    const gauges = [].slice.call(document.getElementsByTagName('smart-gauge'));

    document.getElementById('switchWhileDragging').addEventListener('change', function (event) {
        gauges.map(function (g) { g.mechanicalAction = 'switchWhileDragging'; });
    });
    document.getElementById('switchUntilReleased').addEventListener('change', function (event) {
        gauges.map(function (g) { g.mechanicalAction = 'switchUntilReleased'; });
    });
    document.getElementById('switchWhenReleased').addEventListener('change', function (event) {
        gauges.map(function (g) { g.mechanicalAction = 'switchWhenReleased'; });
    });
}
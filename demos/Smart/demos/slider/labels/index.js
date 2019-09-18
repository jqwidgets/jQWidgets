window.onload = function () {
    const horizontalSlider = document.getElementById('horizontalSlider'),
        verticalSlider = document.getElementById('verticalSlider');

    // labels
    document.getElementById('all').addEventListener('change', function (event) {
        horizontalSlider.labelsVisibility = 'all';
        verticalSlider.labelsVisibility = 'all';
    });
    document.getElementById('endPoints').addEventListener('change', function (event) {
        horizontalSlider.labelsVisibility = 'endPoints';
        verticalSlider.labelsVisibility = 'endPoints';
    });
    document.getElementById('none').addEventListener('change', function (event) {
        horizontalSlider.labelsVisibility = 'none';
        verticalSlider.labelsVisibility = 'none';
    });

    // ticks
    document.getElementById('major').addEventListener('change', function (event) {
        horizontalSlider.ticksVisibility = 'major';
        verticalSlider.ticksVisibility = 'major';
    });
    document.getElementById('minor').addEventListener('change', function (event) {
        horizontalSlider.ticksVisibility = 'minor';
        verticalSlider.ticksVisibility = 'minor';
    });
    document.getElementById('noTicks').addEventListener('change', function (event) {
        horizontalSlider.ticksVisibility = 'none';
        verticalSlider.ticksVisibility = 'none';
    });
}
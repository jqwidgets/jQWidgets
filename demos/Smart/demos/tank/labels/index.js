window.onload = function () {
    const horizontalTank = document.getElementById('horizontalTank'),
        verticalTank = document.getElementById('verticalTank'),
        labelsVisibility = document.querySelectorAll('[group-name="labelsVisibility"]'),
        ticksVisibility = document.querySelectorAll('[group-name="ticksVisibility"]');

    labelsVisibility[0].addEventListener('change', function () {
        if (labelsVisibility[0].checked) {
            horizontalTank.labelsVisibility = 'all';
            verticalTank.labelsVisibility = 'all';
        }
    });
    labelsVisibility[1].addEventListener('change', function () {
        if (labelsVisibility[1].checked) {
            horizontalTank.labelsVisibility = 'endPoints';
            verticalTank.labelsVisibility = 'endPoints';
        }
    });
    labelsVisibility[2].addEventListener('change', function () {
        if (labelsVisibility[2].checked) {
            horizontalTank.labelsVisibility = 'none';
            verticalTank.labelsVisibility = 'none';
        }
    });

    ticksVisibility[0].addEventListener('change', function () {
        if (ticksVisibility[0].checked) {
            horizontalTank.ticksVisibility = 'major';
            verticalTank.ticksVisibility = 'major';
        }
    });
    ticksVisibility[1].addEventListener('change', function () {
        if (ticksVisibility[1].checked) {
            horizontalTank.ticksVisibility = 'minor';
            verticalTank.ticksVisibility = 'minor';
        }
    });
    ticksVisibility[2].addEventListener('change', function () {
        if (ticksVisibility[2].checked) {
            horizontalTank.ticksVisibility = 'none';
            verticalTank.ticksVisibility = 'none';
        }
    });
}
window.onload = function () {
    const tank = document.getElementById('tank'),
        checkboxEnableTooltip = document.getElementById('checkboxEnableTooltip'),
        checkboxFarTooltip = document.getElementById('checkboxFarTooltip');

    checkboxEnableTooltip.addEventListener('change', function () {
        tank.showTooltip = checkboxEnableTooltip.checked;
    });
    checkboxFarTooltip.addEventListener('change', function () {
        if (checkboxFarTooltip.checked) {
            tank.tooltipPosition = 'far';
        }
        else {
            tank.tooltipPosition = 'near';
        }
    });
}
let sliders = [];

window.onload = function () {
    sliders.push(document.getElementById('horizontalSlider'));
    sliders.push(document.getElementById('verticalSlider'));
}

function toggleTooltipPosition() {
    for (let i = 0; i < sliders.length; i++) {
        const slider = sliders[i];
        if (slider.tooltipPosition === 'near') {
            slider.tooltipPosition = 'far';
        }
        else {
            slider.tooltipPosition = 'near';
        }
    }
}

function disableTooltips() {
    sliders[0].showTooltip = false;
    sliders[1].showTooltip = false;

    document.getElementById('toggleTooltipPositionButton').disabled = true;
    document.getElementById('disableTooltipsButton').disabled = true;
}
window.onload = function () {
    const sliders = ['horizontalSlider', 'verticalSlider', 'invertedHorizontalSlider', 'invertedVerticalSlider'];

    for (let i = 0; i < sliders.length; i++) {
        const slider = document.getElementById(sliders[i]);

        slider.addEventListener('change', function (event) {
            const value = event.detail.value;
            document.getElementById(this.id + 'Value').innerHTML = parseFloat(value).toFixed(2);
        });
    }
};
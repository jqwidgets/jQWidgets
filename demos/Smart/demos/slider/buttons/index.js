window.onload = function () {
    const horizontalSlider = document.getElementById('horizontalSlider'),
        verticalSlider = document.getElementById('verticalSlider');

    document.getElementById('toggleButtons').addEventListener('change', function (event) {
        horizontalSlider.showButtons = event.detail.value;
        verticalSlider.showButtons = event.detail.value;
    });
}
window.onload = function () {
    const horizontalSlider = document.getElementById('horizontalSlider'),
        verticalSlider = document.getElementById('verticalSlider');

    document.getElementById('setValues').addEventListener('click', function () {
        horizontalSlider.val([55, 100]);
        verticalSlider.val([55, 100]);
    });
}
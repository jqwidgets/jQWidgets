window.onload = function () {
    const horizontalSlider = document.getElementById('horizontalSlider');

    document.getElementById('interval').addEventListener('change', function () {
        horizontalSlider.interval = this.value;
    });

    document.getElementById('toggleCoercion').addEventListener('change', function (event) {
        horizontalSlider.coerce = event.detail.value;
    });

    document.getElementById('setValue').addEventListener('click', function () {
        horizontalSlider.val(99);
    });
}
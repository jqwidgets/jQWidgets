window.onload = function () {
    const slider1 = document.getElementById('slider1'),
        slider2 = document.getElementById('slider2'),
        slider3 = document.getElementById('slider3');

    document.getElementById('toggleCustomInterval').addEventListener('change', function (event) {
        const checked = event.detail.value;

        slider1.customInterval = checked;
        slider2.customInterval = checked;
        slider3.customInterval = checked;
    });

    document.getElementById('toggleCoerce').addEventListener('change', function (event) {
        const checked = event.detail.value;

        slider1.coerce = checked;
        slider2.coerce = checked;
        slider3.coerce = checked;
    });
}
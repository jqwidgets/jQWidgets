window.onload = function () {
    const tank1 = document.getElementById('tank1'),
        tank2 = document.getElementById('tank2'),
        tank3 = document.getElementById('tank3');

    document.getElementById('toggleCustomInterval').addEventListener('change', function (event) {
        const checked = event.detail.value;

        tank1.customInterval = checked;
        tank2.customInterval = checked;
        tank3.customInterval = checked;
    });

    document.getElementById('toggleCoerce').addEventListener('change', function (event) {
        const checked = event.detail.value;

        tank1.coerce = checked;
        tank2.coerce = checked;
        tank3.coerce = checked;
    });
}
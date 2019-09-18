function gauge4LabelFormatFunction(value) {
    return String.fromCharCode(64 + parseFloat(value));
}

window.onload = function () {
    const gauge1 = document.getElementById('gauge1'),
        gauge2 = document.getElementById('gauge2'),
        gauge3 = document.getElementById('gauge3');

    document.getElementById('toggleCustomInterval').addEventListener('change', function (event) {
        const checked = event.detail.value;

        gauge1.customInterval = checked;
        gauge2.customInterval = checked;
        gauge3.customInterval = checked;
    });

    document.getElementById('toggleCoerce').addEventListener('change', function (event) {
        const checked = event.detail.value;

        gauge1.coerce = checked;
        gauge2.coerce = checked;
        gauge3.coerce = checked;
    });
}
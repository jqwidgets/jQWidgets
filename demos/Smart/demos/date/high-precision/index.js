window.onload = function () {
    function updateLogs() {
        document.getElementById('fp').innerHTML = newDateTime.toString('FP');
        document.getElementById('ft').innerHTML = newDateTime.toString('FT');
        document.getElementById('pp').innerHTML = newDateTime.toString('PP');
        document.getElementById('pt').innerHTML = newDateTime.toString('PT');
        document.getElementById('custom').innerHTML = newDateTime.toString('fff:uu:nn');
    }

    const newDateTime = new Smart.Utilities.DateTime(1920, 3, 12, 8, 34, 21, 89, 19, 800, 2, 333, 18, 45, 11);

    updateLogs();

    document.getElementById('microseconds').addEventListener('click', function () {
        newDateTime.addMicroseconds(1, false);
        updateLogs();
    });

    document.getElementById('yoctoseconds').addEventListener('click', function () {
        newDateTime.addYoctoseconds(-2, false);
        updateLogs();
    });

    document.getElementById('now').addEventListener('click', function () {
        newDateTime = new Smart.Utilities.DateTime(new Date());
        updateLogs();
    });
}
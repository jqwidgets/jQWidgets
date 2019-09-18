window.onload = function () {
    const horizontalTank = document.getElementById('horizontalTank'),
        verticalTank = document.getElementById('verticalTank'),
        invertedHorizontalTank = document.getElementById('invertedHorizontalTank'),
        invertedVerticalTank = document.getElementById('invertedVerticalTank'),
        horizontalTankValue = document.getElementById('horizontalTankValue'),
        verticalTankValue = document.getElementById('verticalTankValue'),
        invertedHorizontalTankValue = document.getElementById('invertedHorizontalTankValue'),
        invertedVerticalTankValue = document.getElementById('invertedVerticalTankValue');


    horizontalTank.addEventListener('change', function (event) {
        const value = event.detail.value;
        horizontalTankValue.innerHTML = parseFloat(value).toFixed(2);
    });
    verticalTank.addEventListener('change', function (event) {
        const value = event.detail.value;
        verticalTankValue.innerHTML = parseFloat(value).toFixed(2);
    });
    invertedHorizontalTank.addEventListener('change', function (event) {
        const value = event.detail.value;
        invertedHorizontalTankValue.innerHTML = parseFloat(value).toFixed(2);
    });
    invertedVerticalTank.addEventListener('change', function (event) {
        const value = event.detail.value;
        invertedVerticalTankValue.innerHTML = parseFloat(value).toFixed(2);
    });
};
window.onload = function () {
    const tanks = ['smartTank1', 'smartTank2', 'smartTank3'];

    for (let i = 0; i < tanks.length; i++) {
        const tank = document.getElementById(tanks[i]);

        tank.addEventListener('change', function (event) {
            const value = event.detail.value,
                id = this.id;

            document.getElementById(id + 'Value').innerHTML = parseFloat(value).toFixed(2);
        });
    }
};
window.onload = function () {
    const tank = document.createElement("smart-tank");

    tank.value = "50";
    tank.orientation = "vertical";
    document.body.appendChild(tank);

    tank.focus();
}
window.onload = function () {
    const smartWindow = document.querySelector('smart-window'),
        eventLog = document.getElementById('log');

    function getElement(event) {
        const element = document.createElement('div');

        element.textContent = 'Type: ' + event.type;

        if (event.detail.x) {
            element.textContent += ', X: ' + event.detail.x + ', Y: ' + event.detail.y;
        }

        return element;
    }

    document.getElementById('openButton').addEventListener('click', function () {
        smartWindow.opened ? smartWindow.close() : smartWindow.open();
    });

    smartWindow.addEventListener('resize', function (event) {
        eventLog.appendChild(getElement(event))
    });

    smartWindow.addEventListener('drag', function (event) {
        eventLog.appendChild(getElement(event))
    });

    smartWindow.addEventListener('collapse', function (event) {
        eventLog.appendChild(getElement(event))
    });

    smartWindow.addEventListener('expand', function (event) {
        eventLog.appendChild(getElement(event))
    });

    smartWindow.addEventListener('maximize', function (event) {
        eventLog.appendChild(getElement(event))
    });

    smartWindow.addEventListener('minimize', function (event) {
        eventLog.appendChild(getElement(event))
    });

    smartWindow.addEventListener('restore', function (event) {
        eventLog.appendChild(getElement(event))
    });

    smartWindow.addEventListener('open', function (event) {
        eventLog.appendChild(getElement(event))
    });

    smartWindow.addEventListener('opening', function (event) {
        eventLog.appendChild(getElement(event))
    });

    smartWindow.addEventListener('close', function (event) {
        eventLog.appendChild(getElement(event))
    });

    smartWindow.addEventListener('closing', function (event) {
        eventLog.appendChild(getElement(event))
    });

    smartWindow.addEventListener('dragStart', function (event) {
        eventLog.appendChild(getElement(event))
    });

    smartWindow.addEventListener('dragEnd', function (event) {
        eventLog.appendChild(getElement(event))
    });

    smartWindow.addEventListener('resizeStart', function (event) {
        eventLog.appendChild(getElement(event))
    });

    smartWindow.addEventListener('resizeEnd', function (event) {
        eventLog.appendChild(getElement(event))
    });
}
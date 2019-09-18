window.onload = function () {
    const maxTwoMln = document.getElementById('maxTwoMln'),
        maxTwoThousand = document.getElementById('maxTwoThousand'),
        maxTwenty = document.getElementById('maxTwenty'),
        minTwoMln = document.getElementById('minTwoMln'),
        minTwoThousand = document.getElementById('minTwoThousand'),
        minTwenty = document.getElementById('minTwenty'),
        horizontalOrientation = document.getElementById('horizontalOrientation'),
        verticalOrientation = document.getElementById('verticalOrientation'),
        scaleNear = document.getElementById('scaleNear'),
        scaleFar = document.getElementById('scaleFar'),
        scaleBoth = document.getElementById('scaleBoth'),
        scaleNone = document.getElementById('scaleNone');

    setLog = function (tank) {
        const doc = document,
            trackLog = doc.getElementById('trackSize'),
            scaleWidth = doc.getElementById('scaleWidth'),
            scaleHeight = doc.getElementById('scaleHeight'),
            trackWidth = doc.getElementById('trackWidth'),
            trackHeight = doc.getElementById('trackHeight');

        if (tank.scalePosition === 'far') {
            scaleWidth.innerHTML = window.getComputedStyle(tank.getElementsByClassName('smart-scale')[1]).getPropertyValue('width');
            scaleHeight.innerHTML = window.getComputedStyle(tank.getElementsByClassName('smart-scale')[1]).getPropertyValue('height');
        }
        else {
            scaleWidth.innerHTML = window.getComputedStyle(tank.getElementsByClassName('smart-scale')[0]).getPropertyValue('width');
            scaleHeight.innerHTML = window.getComputedStyle(tank.getElementsByClassName('smart-scale')[0]).getPropertyValue('height');
        }
        trackWidth.innerHTML = window.getComputedStyle(tank.getElementsByClassName('smart-track')[0]).getPropertyValue('width');
        trackHeight.innerHTML = window.getComputedStyle(tank.getElementsByClassName('smart-track')[0]).getPropertyValue('height');
    }
    maxTwoMln.addEventListener('change', function (event) {
        const tank = document.getElementById('tank');

        if (event.detail.value) {
            tank.max = 2000000;
            setLog(tank);

            const size = tank.getOptimalSize();
            tank.style.width = size.width + 'px';
            tank.style.height = size.height + 'px';
        }
    });
    maxTwoThousand.addEventListener('change', function (event) {
        const tank = document.getElementById('tank');

        if (event.detail.value) {
            tank.max = 2000;
            setLog(tank);

            const size = tank.getOptimalSize();
            tank.style.width = size.width + 'px';
            tank.style.height = size.height + 'px';
        }
    });
    maxTwenty.addEventListener('change', function (event) {
        const tank = document.getElementById('tank');

        if (event.detail.value) {
            tank.max = 20;
            setLog(tank);

            const size = tank.getOptimalSize();
            tank.style.width = size.width + 'px';
            tank.style.height = size.height + 'px';
        }
    });
    minTwoMln.addEventListener('change', function (event) {
        const tank = document.getElementById('tank');

        if (event.detail.value) {
            tank.min = -2000000;
            setLog(tank);

            const size = tank.getOptimalSize();
            tank.style.width = size.width + 'px';
            tank.style.height = size.height + 'px';
        }
    });
    minTwoThousand.addEventListener('change', function (event) {
        const tank = document.getElementById('tank');

        if (event.detail.value) {
            tank.min = -2000;
            setLog(tank);

            const size = tank.getOptimalSize();
            tank.style.width = size.width + 'px';
            tank.style.height = size.height + 'px';
        }
    });
    minTwenty.addEventListener('change', function (event) {
        const tank = document.getElementById('tank');

        if (event.detail.value) {
            tank.min = -20;
            setLog(tank);

            const size = tank.getOptimalSize();
            tank.style.width = size.width + 'px';
            tank.style.height = size.height + 'px';
        }
    });
    horizontalOrientation.addEventListener('change', function (event) {
        const tank = document.getElementById('tank');

        if (event.detail.value) {
            tank.orientation = 'horizontal';
            setLog(tank);

            const size = tank.getOptimalSize();
            tank.style.width = size.width + 'px';
            tank.style.height = size.height + 'px';
        }
    });
    verticalOrientation.addEventListener('change', function (event) {
        const tank = document.getElementById('tank');
        if (event.detail.value) {
            tank.orientation = 'vertical';
            setLog(tank);

            const size = tank.getOptimalSize();
            tank.style.width = size.width + 'px';
            tank.style.height = size.height + 'px';
        }
    });
    scaleNear.addEventListener('change', function (event) {
        const tank = document.getElementById('tank');

        if (event.detail.value) {
            tank.scalePosition = 'near';
            setLog(tank);

            const size = tank.getOptimalSize();
            tank.style.width = size.width + 'px';
            tank.style.height = size.height + 'px';
        }
    });
    scaleFar.addEventListener('change', function (event) {
        const tank = document.getElementById('tank');

        if (event.detail.value) {
            tank.scalePosition = 'far';
            setLog(tank);

            const size = tank.getOptimalSize();
            tank.style.width = size.width + 'px';
            tank.style.height = size.height + 'px';
        }
    });
    scaleBoth.addEventListener('change', function (event) {
        const tank = document.getElementById('tank');

        if (event.detail.value) {
            tank.scalePosition = 'both';
            setLog(tank);

            const size = tank.getOptimalSize();
            tank.style.width = size.width + 'px';
            tank.style.height = size.height + 'px';
        }
    });
    scaleNone.addEventListener('change', function (event) {
        const tank = document.getElementById('tank');

        if (event.detail.value) {
            tank.scalePosition = 'none';
            setLog(tank);

            const size = tank.getOptimalSize();
            tank.style.width = size.width + 'px';
            tank.style.height = size.height + 'px';
        }
    });
    turnLabelsOn.addEventListener('change', function (event) {
        const tank = document.getElementById('tank');

        if (event.detail.value) {
            tank.labelsVisibility = 'all';

            const size = tank.getOptimalSize();
            tank.style.width = size.width + 'px';
            tank.style.height = size.height + 'px';
        }
    });
    turnLabelsOff.addEventListener('change', function (event) {
        const tank = document.getElementById('tank');

        if (event.detail.value) {
            tank.labelsVisibility = 'none';

            const size = tank.getOptimalSize();
            tank.style.width = size.width + 'px';
            tank.style.height = size.height + 'px';
        }
    });
}
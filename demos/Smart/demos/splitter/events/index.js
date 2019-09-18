window.onload = function () {
    const smartSplitter = document.querySelector('smart-splitter'),
        eventLog = document.getElementById('log');

    function getElement(event) {
        const element = document.createElement('div');
		
        element.textContent = 'Type: ' + event.type;

        if (event.detail.x) {
            element.textContent += ', X: ' + event.detail.x + ', Y: ' + event.detail.y;
        }

        return element;
    }

    smartSplitter.addEventListener('resize', function (event) {
		if (!event.detail) {
			return;
		}
		
        eventLog.appendChild(getElement(event))
    });

    smartSplitter.addEventListener('expand', function (event) {
        eventLog.appendChild(getElement(event))
    });

    smartSplitter.addEventListener('collapse', function (event) {
        eventLog.appendChild(getElement(event))
    });

    smartSplitter.addEventListener('resizeStart', function (event) {
        eventLog.appendChild(getElement(event))
    });

    smartSplitter.addEventListener('resizeEnd', function (event) {
        eventLog.appendChild(getElement(event))
    });
}
window.onload = function () {
    const accordion = document.getElementById('accordion'),
        log = document.getElementById('log');

    //Expanding event
    accordion.addEventListener('expanding', function (event) {
        updateEventLog(event);
    });

    //Expanded event
    accordion.addEventListener('expanded', function (event) {
        updateEventLog(event);
    });

    //Collapsing event
    accordion.addEventListener('collapsing', function (event) {
        updateEventLog(event);
    });

    //Collapsed event
    accordion.addEventListener('collapsed', function (event) {
        updateEventLog(event);
    });

    //Drag Start event
    accordion.addEventListener('dragStart', function (event) {
        updateEventLog(event);
    });

    //Drag End event
    accordion.addEventListener('dragEnd', function (event) {
        updateEventLog(event);
    });

    function updateEventLog(event) {
        const eventContainer = document.createElement('div'),
            eventType = event.type;

        eventContainer.innerText = eventType + ' item #' + event.detail.index;
        eventContainer.className = eventType === 'expanded' ? 'expanded' : '';
        log.appendChild(eventContainer);
    }
}
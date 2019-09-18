window.onload = function () {
    const button = document.querySelector('smart-button');
	const eventLog = document.querySelector('#log');
	
    button.addEventListener('click', function(event) {
        eventLog.innerHTML = 'Click';
    });

    button.addEventListener('focus', function(event) {
        eventLog.innerHTML = 'Focus';
    });

    button.addEventListener('blur', function(event) {
        eventLog.innerHTML = 'Blur';
    });

    button.addEventListener('mouseenter', function(event) {
        eventLog.innerHTML = 'Mouse Enter';
    });

    button.addEventListener('mouseleave', function(event) {
        eventLog.innerHTML = 'Mouse Leave';
    });
	
}
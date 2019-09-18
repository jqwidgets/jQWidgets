window.onload = function () {
    const fileUpload = document.getElementsByTagName('smart-file-upload')[0];
    eventContainer = document.getElementById('eventContainer');

    fileUpload.addEventListener('fileSelected', event => printEventName(event));
    fileUpload.addEventListener('uploadCanceled', event => printEventName(event));
    fileUpload.addEventListener('uploadCompleted', event => printEventName(event));
    fileUpload.addEventListener('uploadError', event => printEventName(event));
    fileUpload.addEventListener('uploadPaused', event => printEventName(event));
    fileUpload.addEventListener('uploadStarted', event => printEventName(event));
    fileUpload.addEventListener('validationError', event => printEventName(event));

    function printEventName(event) {
        const item = document.createElement('div');

        item.innerHTML = item.innerHTML + event.type + '<br />';
        eventContainer.appendChild(item);
    }
}
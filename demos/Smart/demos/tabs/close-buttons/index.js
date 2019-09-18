window.onload = function () {
    const tabs1 = document.getElementById('tabs1');

    document.getElementById('toggleCloseButtons').addEventListener('change', function () {
        tabs1.closeButtons = this.checked;
    });

    const showCloseButton = document.getElementById('showCloseButton'),
        hideCloseButton = document.getElementById('hideCloseButton');

    tabs1.addEventListener('close', function (event) {
        showCloseButton.disabled = true;
        hideCloseButton.disabled = true;
    });

    showCloseButton.addEventListener('click', function () {
        tabs1.getElementsByTagName('smart-tab-item')[2].closeButtonHidden = false;
        showCloseButton.disabled = true;
        hideCloseButton.disabled = false;
    });

    document.getElementById('hideCloseButton').addEventListener('click', function () {
        tabs1.getElementsByTagName('smart-tab-item')[2].closeButtonHidden = true;
        hideCloseButton.disabled = true;
        showCloseButton.disabled = false;
    });

    document.getElementById('tabs2').addEventListener('closing', function (event) {
        const close = window.confirm('Do you wish to close tab with index ' + event.detail.index + '?');

        if (!close) {
            event.preventDefault();
        }
    });
}
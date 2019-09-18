window.onload = function () {
    const splitter = document.querySelector('smart-splitter');
    let counter = 2;

    splitter.addEventListener('dblclick', function (event) {
        const splitterItem = event.target.closest('smart-splitter-item');

        if (splitterItem) {
            const splitterItemNumber = parseFloat(splitterItem.textContent);

            splitterItem.content = '<smart-splitter>' +
                '<smart-splitter-item>' + splitterItem.innerHTML + '</smart-splitter-item>' +
                '<smart-splitter-item>New Item' + '</smart-splitter-item>' +
                '</smart-splitter>';

            counter = splitterItemNumber;
        }
    });
}
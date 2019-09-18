window.onload = function () {
    const textBox = document.querySelectorAll('smart-multiline-text-box')[0],
        defaultMode = document.getElementById('defaultMode'),
        escapedMode = document.getElementById('escapedMode');

    defaultMode.addEventListener('change', function (event) {
        textBox.displayMode = 'default';
    });

    escapedMode.addEventListener('change', function (event) {
        textBox.displayMode = 'escaped';
    });
};
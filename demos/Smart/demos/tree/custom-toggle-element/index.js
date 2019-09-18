window.onload = function () {
    const tree1 = document.getElementById('tree1'),
        tree2 = document.getElementById('tree2');

    document.getElementById('near').addEventListener('change', function (event) {
        tree1.toggleElementPosition = 'near';
        tree2.toggleElementPosition = 'near';
    });

    document.getElementById('far').addEventListener('change', function () {
        tree1.toggleElementPosition = 'far';
        tree2.toggleElementPosition = 'far';
    });

    document.getElementById('autoHideToggleElement').addEventListener('change', function (event) {
        const autoHideToggleElement = event.detail.value

        tree1.autoHideToggleElement = autoHideToggleElement;
        tree2.autoHideToggleElement = autoHideToggleElement;
    });
}
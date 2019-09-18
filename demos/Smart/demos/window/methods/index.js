window.onload = function () {
    const smartWindow = document.querySelector('smart-window');

    document.getElementById('open').addEventListener('click', function () {
        smartWindow.opened ? smartWindow.close() : smartWindow.open();
    });

    document.getElementById('max').addEventListener('click', function () {
        smartWindow.maximized ? smartWindow.restore() : smartWindow.maximize();
    });

    document.getElementById('min').addEventListener('click', function () {
        smartWindow.minimized ? smartWindow.restore() : smartWindow.minimize();
    });

    document.getElementById('pin').addEventListener('click', function () {
        smartWindow.pinned ? smartWindow.unpin() : smartWindow.pin();
    });

    document.getElementById('collapse').addEventListener('click', function () {
        smartWindow.collapsed ? smartWindow.expand() : smartWindow.collapse();
    });

    document.getElementById('disable').addEventListener('click', function () {
        smartWindow.disabled = !smartWindow.disabled;
    });
}
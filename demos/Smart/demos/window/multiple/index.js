window.onload = function () {
    const smartWindow = document.querySelector('smart-window');

    document.getElementById('openWindows').addEventListener('click', function () {
        const windows = document.getElementsByTagName('smart-window');

        for (let i = 0; i < windows.length; i++) {
            windows[i].open();
        }
    });

    document.getElementById('addWindow').addEventListener('click', function () {
        const newWindow = document.createElement('smart-window'),
            windowCount = document.getElementsByTagName('smart-window').length;

        newWindow.id = newWindow.label = 'Window ' + (windowCount + 1);
        newWindow.content = 'This is the content of Window ' + (windowCount + 1);
        newWindow.opened = true;
        newWindow.resizable = true;
        newWindow.classList.add('animation');

        document.body.appendChild(newWindow);
    });
}
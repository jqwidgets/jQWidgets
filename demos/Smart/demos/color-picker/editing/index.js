window.onload = function () {
    const frame = document.getElementById('frame'),
        frameHeader = document.getElementById('frameHeader'),
        frameContent = document.getElementById('frameContent'),
        headerBackground = document.getElementById('headerBackground'),
        headerColor = document.getElementById('headerColor'),
        background = document.getElementById('background'),
        borderColor = document.getElementById('borderColor'),
        color = document.getElementById('color');

    headerBackground.addEventListener('change', function (event) { frameHeader.style.backgroundColor = event.detail.value; });
    headerColor.addEventListener('change', function (event) { frameHeader.style.color = event.detail.value; });
    background.addEventListener('change', function (event) { frameContent.style.backgroundColor = event.detail.value; });
    color.addEventListener('change', function (event) { frameContent.style.color = event.detail.value; });
    borderColor.addEventListener('change', function (event) { frame.style.borderColor = event.detail.value; });
}
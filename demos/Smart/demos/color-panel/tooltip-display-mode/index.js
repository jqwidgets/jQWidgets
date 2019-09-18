window.onload = function () {
    const colorPanel = document.getElementById('colorPanel');

    document.addEventListener('change', function (event) {
        if (event.target.groupName === 'tooltipDisplayMode') {
            colorPanel.tooltipDisplayMode = event.target.innerHTML;
        }
    });
}
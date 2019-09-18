window.onload = function () {
    const smartDockingLayout = document.querySelector('smart-docking-layout'),
        dropDownList = document.querySelector('smart-drop-down-list');

    smartDockingLayout.layout = [
        {
            type: 'LayoutPanel',
            items: [{
                id: 'A',
                label: 'A',
                content: 'Content of item with id #itemA',
                selected: true
            }],
            autoHide: true,
            autoHidePosition: 'top'
        },
        {
            type: 'LayoutPanel',
            items: [{
                id: 'B',
                label: 'B',
                content: 'Content of item with id #itemB',
            }],
            autoHide: true,
            autoHidePosition: 'left'
        },
        {
            type: 'LayoutPanel',
            items: [{
                id: 'C',
                label: 'C',
                content: 'Content of item with id #itemC'
            }],
            autoHide: true,
            autoHidePosition: 'right'
        },
        {
            type: 'LayoutPanel',
            items: [{
                id: 'D',
                label: 'D',
                content: 'Content of item with id #itemD',
            }],
            autoHide: true,
            autoHidePosition: 'bottom'
        }
    ];

    const input = document.getElementById('indexInput'),
        inputPosition = document.getElementById('positionInput');

    document.getElementById('dock').addEventListener('click', function () {
        smartDockingLayout.dock(dropDownList.selectedValues[0]);
    });

    document.getElementById('undock').addEventListener('click', function () {
        smartDockingLayout.undock(dropDownList.selectedValues[0]);
    });
}
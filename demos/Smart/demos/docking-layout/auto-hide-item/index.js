window.onload = function () {
    const smartDockingLayout = document.querySelector('smart-docking-layout'),
        dropDownList = document.querySelector('smart-drop-down-list');

    smartDockingLayout.layout = [
        {
            type: 'LayoutGroup',
            orientation: 'horizontal',
            items: [
                {
                    type: 'LayoutPanel',
                    label: 'Window A',
                    items: [{
                        id: 'itemA',
                        label: '#itemA',
                        content: 'Content of item with id "itemA"',
                        selected: true
                    }]
                },
                {
                    type: 'LayoutGroup',
                    id: 'verticalGroup',
                    orientation: 'vertical',
                    items: [
                        {
                            type: 'LayoutPanel',
                            label: 'Window B',
                            items: [{
                                id: 'itemB',
                                label: '#itemB',
                                content: 'Content of item with id "itemB"',
                            }]
                        },
                        {
                            type: 'LayoutPanel',
                            label: 'Window C',
                            items: [{
                                id: 'itemC',
                                label: '#itemC',
                                content: 'Content of item with id "itemC"'
                            }]
                        },
                    ]
                },
                {
                    type: 'LayoutPanel',
                    label: 'Window D',
                    items: [{
                        id: 'itemD',
                        label: '#itemD',
                        content: 'Content of item with id "itemD"',
                    }]
                }
            ]
        }
    ];

    document.getElementById('autoHideTop').addEventListener('click', function () {
        smartDockingLayout.autoHideTop(dropDownList.selectedValues[0]);
    });

    document.getElementById('autoHideBottom').addEventListener('click', function () {
        smartDockingLayout.autoHideBottom(dropDownList.selectedValues[0]);
    });

    document.getElementById('autoHideLeft').addEventListener('click', function () {
        smartDockingLayout.autoHideLeft(dropDownList.selectedValues[0]);
    });

    document.getElementById('autoHideRight').addEventListener('click', function () {
        smartDockingLayout.autoHideRight(dropDownList.selectedValues[0]);
    });
}
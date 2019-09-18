window.onload = function () {
    const smartDockingLayout = document.querySelector('smart-docking-layout'),
        dropDownList = document.querySelector('smart-drop-down-list');

    smartDockingLayout.layout = [
        {
            id: 'tab1',
            type: 'LayoutPanel',
            label: 'Tabs 1',
            items: [{
                label: 'Tab 1',
                content: 'Content of Tab 1',
                selected: true
            }]
        },
        {
            id: 'tab2',
            type: 'LayoutPanel',
            label: 'Tabs 2',
            items: [{
                label: 'Tab 2',
                content: 'Content of Tab 2',
            }]
        },
        {
            id: 'tab3',
            type: 'LayoutPanel',
            label: 'Tabs 3',
            items: [{
                label: 'Tab 3',
                content: 'Content of Tab 3'
            }]
        }
    ];

    document.getElementById('update').addEventListener('click', function () {
        const targetItem = document.getElementById(dropDownList.selectedValues[0]);

        smartDockingLayout.update(targetItem,
            {
                size: '33%', label: 'Updated',
                items: [{
                    index: 0, label: 'Updated',
                    content: 'Updated'
                }]
            });
    });
}
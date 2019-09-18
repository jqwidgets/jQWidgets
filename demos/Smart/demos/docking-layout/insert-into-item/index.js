window.onload = function () {
    const smartDockingLayout = document.querySelector('smart-docking-layout'),
        input = document.getElementById('indexInput'),
        dropDownList = document.querySelector('smart-drop-down-list'),
        tabsWindowObject =
            {
                label: 'New Item',
                size: '50%',
                items: [{
                    label: 'New Tab Item',
                    content: 'New Tab Item Content'
                }]
            },
        createListItem = function () {
            const item = document.createElement('smart-list-item');

            item.label = 'Tabs ' + dropDownList.items.length;
            dropDownList.appendChild(item);
        };

    smartDockingLayout.layout = [
        {
            type: 'LayoutPanel',
            label: 'Tabs 0',
            items: [{
                label: 'Tab 0',
                content: 'Content of Tab 0'
            }]
        },
        {
            type: 'LayoutPanel',
            label: 'Tabs 1',
            items: [{
                label: 'Tab 1',
                content: 'Content of Tab 1',
            }]
        }
    ];

    document.getElementById('insertIntoLeft').addEventListener('click', function () {
        smartDockingLayout.insertIntoLeft(dropDownList.selectedIndexes[0], tabsWindowObject);
        createListItem();
    });

    document.getElementById('insertIntoRight').addEventListener('click', function () {
        smartDockingLayout.insertIntoRight(dropDownList.selectedIndexes[0], tabsWindowObject);
        createListItem();
    });

    document.getElementById('insertIntoTop').addEventListener('click', function () {
        smartDockingLayout.insertIntoTop(dropDownList.selectedIndexes[0], tabsWindowObject);
        createListItem();
    });

    document.getElementById('insertIntoBottom').addEventListener('click', function () {
        smartDockingLayout.insertIntoBottom(dropDownList.selectedIndexes[0], tabsWindowObject);
        createListItem();
    });

    smartDockingLayout.addEventListener('stateChange', function () {
        let layoutItems = this.items, index, tabItem, i
        undockedItems = this.undockedItems;

        for (i = 0; i < layoutItems.length; i++) {
            layoutItems[i].label = 'Tabs ' + i;
            layoutItems[i].update(0, 'Tab ' + i, 'Content of Tab ' + i);
        }

        for (i = 0; i < undockedItems.length; i++) {
            undockedItems[i].label = 'Undocked Tabs';
            undockedItems[i].update(0, 'Tab', 'Content of Undocked Tab');
        }
    });
}
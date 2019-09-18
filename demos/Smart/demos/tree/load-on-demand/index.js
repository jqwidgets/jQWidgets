window.onload = function () {
    const tree = document.getElementById('tree');

    tree.addEventListener("expanding", function (event) {
        if (event.detail.label === 'Group 2' && event.detail.children.length === 0) {
            const load = window.confirm('Do you wish to load items dynamically?');

            if (!load) {
                event.preventDefault();
            }
        }
    });

    tree.addEventListener("expand", function (event) {
        if (event.detail.children.length > 0) {
            return;
        }

        tree.displayLoadingIndicator = true;

        setTimeout(function () {
            const newItem1 = document.createElement('smart-tree-item'),
                newItem2 = document.createElement('smart-tree-item');

            newItem1.label = 'Item ' + event.detail.path + '.0';
            newItem2.label = 'Item ' + event.detail.path + '.1';

            tree.addTo(newItem1, event.detail.item);
            tree.addTo(newItem2, event.detail.item);

            if (event.detail.item.level < 4) {
                newItemsGroup = document.createElement('smart-tree-items-group');
                newItemsGroup.label = 'Group ' + event.detail.path + '.2';
                tree.addTo(newItemsGroup, event.detail.item);
            }

            tree.displayLoadingIndicator = false;
        }, 1000);
    });
}
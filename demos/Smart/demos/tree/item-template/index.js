window.onload = function () {
    function handleSwipe(event) {
        const originalTarget = event.originalEvent.target,
            closestItem = originalTarget.closest('smart-tree-item') || originalTarget.closest('smart-tree-items-group');

        if (closestItem && closestItem.level > 1 && closestItem.label !== 'editorTemplate') {
            const remove = window.confirm('Do you wish to remove item "' + closestItem.label + '"?');

            if (remove) {
                tree.removeItem(closestItem);
            }
        }
    }

    const tree = document.getElementById('tree');

    tree.addEventListener('swipeleft', function (event) {
        handleSwipe(event);
    });

    tree.addEventListener('swiperight', function (event) {
        handleSwipe(event);
    });

    tree.addEventListener('click', function (event) {
        const button = event.target.closest('smart-button');

        if (!button) {
            return;
        }

        const input = button.previousElementSibling,
            editorItem = button.closest('smart-tree-item'),
            treeItemsGroup = button.closest('smart-tree-items-group');

        if (input.value) {
            const newItem = document.createElement('smart-tree-item');

            newItem.innerHTML = input.value;
            tree.addBefore(newItem, editorItem);
            input.value = '';
        }
    });
}
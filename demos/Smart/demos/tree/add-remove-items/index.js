window.onload = function () {
    function handleSwipe(event) {
        const originalTarget = event.originalEvent.target,
            closestItem = originalTarget.closest('smart-tree-item') || originalTarget.closest('smart-tree-items-group');

        if (closestItem) {
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

    document.getElementById('addBefore').addEventListener('click', function () {
        const newItem = document.createElement('smart-tree-item');

        newItem.label = 'Y';

        tree.addBefore(newItem, 'zed');
        this.disabled = true;
    });

    document.getElementById('addAfter').addEventListener('click', function () {
        const newItem = document.createElement('smart-tree-item');

        newItem.innerHTML = '0';

        tree.addAfter(newItem, 'three');
        this.disabled = true;
    });

    document.getElementById('addTo').addEventListener('click', function () {
        const newItem = document.createElement('smart-tree-item');

        newItem.innerHTML = 'D';

        tree.addTo(newItem, 'letters');
        this.disabled = true;
    });

    document.getElementById('addGroupTo').addEventListener('click', function () {
        const newItemsGroup = document.createElement('smart-tree-items-group');

        newItemsGroup.innerHTML = 'Capital letters<smart-tree-item>Α</smart-tree-item><smart-tree-item>Γ</smart-tree-item><smart-tree-item>Δ</smart-tree-item><smart-tree-item>Σ</smart-tree-item><smart-tree-item>Β</smart-tree-item>';
        newItemsGroup.expanded = true;

        tree.addTo(newItemsGroup, 'greekLetters');
        this.disabled = true;
    });

    document.getElementById('removeItem').addEventListener('click', function () {
        tree.removeItem('one');
        this.disabled = true;
    });

    document.getElementById('sorted').addEventListener('change', function (event) {
        tree.sorted = event.detail.value;
    });

    document.getElementById('autoSort').addEventListener('change', function (event) {
        tree.autoSort = event.detail.value;
    });
}
window.onload = function () {
    const tree = document.getElementById('tree');

    document.getElementById('moveUp').addEventListener('click', function () {
        const selectedItem = tree.getItem(tree.selectedIndexes[0]);

        tree.moveUp(selectedItem);
    });

    document.getElementById('moveDown').addEventListener('click', function () {
        const selectedItem = tree.getItem(tree.selectedIndexes[0]);

        tree.moveDown(selectedItem);
    });
}
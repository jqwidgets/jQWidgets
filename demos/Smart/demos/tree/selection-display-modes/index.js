window.onload = function () {
    document.getElementById('row').addEventListener('change', function () {
        tree.selectionDisplayMode = 'row';
    });

    document.getElementById('label').addEventListener('change', function () {
        tree.selectionDisplayMode = 'label';
    });
}
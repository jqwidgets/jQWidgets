window.onload = function () {
    var dropDownButton = document.querySelector('smart-drop-down-button'),
        tree = dropDownButton.querySelector('smart-tree');

    //Get the label of the selected tree item
    dropDownButton.placeholder = tree.querySelector('smart-tree-item[selected], smart-tree-items-group[selected]').label;

    dropDownButton.addEventListener('change', function () {
        this.placeholder = event.detail.item.label;
    });
}
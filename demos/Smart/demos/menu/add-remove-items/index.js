window.onload = function () {
    const menu = document.getElementById('menu');
    let itemCount = 1,
        subItemCount = 0;

    document.getElementById('addItem').addEventListener('click', function () {
        itemCount++;

        const newItem = document.createElement('smart-menu-item');

        newItem.innerHTML = 'Item ' + itemCount;

        menu.addItem(newItem);
    });

    document.getElementById('addSubItem').addEventListener('click', function () {
        subItemCount++;

        const newItem = document.createElement('smart-menu-item');

        newItem.innerHTML = 'Item 0.' + subItemCount;

        menu.addItem(newItem, '0');
    });

    document.getElementById('removeItem').addEventListener('click', function () {
        menu.removeItem('1');
        this.disabled = true;
    });
}
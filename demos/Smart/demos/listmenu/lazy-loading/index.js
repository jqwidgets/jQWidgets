window.onload = function () {
    const listMenu = document.getElementById('listMenu');

    listMenu.addEventListener("scrollBottomReached", function () {
        listMenu.displayLoadingIndicator = true;

        setTimeout(function () {
            for (let i = 0; i < 5; i++) {
                const newItem = document.createElement('smart-menu-items-group');

                newItem.value = 'emptyItem';

                listMenu.addItem(newItem);
            }

            listMenu.displayLoadingIndicator = false;
        }, 1000);
    });

    listMenu.addEventListener("expand", function (event) {
        if (event.detail.value === 'emptyItem') {
            listMenu.displayLoadingIndicator = true;

            setTimeout(function () {
                for (let i = 0; i < 3; i++) {
                    const newItem = document.createElement('smart-menu-item');

                    listMenu.addItem(newItem, event.detail.path);
                }

                listMenu.displayLoadingIndicator = false;
            }, 1000);

            event.detail.item.value = 'populatedItem';
        }
    });
}
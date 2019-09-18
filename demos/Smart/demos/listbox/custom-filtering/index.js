window.onload = function () {
    document.querySelector('smart-list-box').filterCallback = function (item, searchQuery) {
        return item.value.toLowerCase() === searchQuery.toLowerCase();
    }
}
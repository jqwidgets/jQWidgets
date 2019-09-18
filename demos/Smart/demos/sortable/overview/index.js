window.onload = function () {
    const sortable = document.getElementById('sortable');

    document.getElementById('handle').addEventListener('change', function () {
        if (event.detail.value) {
            sortable.dragMode = 'handle';
            sortable.handleVisibility = 'visible';
        }
        else {
            sortable.dragMode = 'item';
        }
    });
};

window.onload = function () {
    const tree = document.getElementById('tree');

    tree.addEventListener('collapse', function () {
        console.log('collapse');
    });
    tree.addEventListener('expand', function () {
        console.log('expand');
    });

    document.getElementById('getState').addEventListener('click', function () {
        const state = tree.getState();

        alert(JSON.stringify(state));
    });

    document.getElementById('loadState').addEventListener('click', function () {
        tree.loadState();

        document.getElementById('sorted').checked = tree.sorted;
    });

    document.getElementById('saveState').addEventListener('click', function () {
        tree.saveState();
        document.getElementById('loadState').disabled = false;
    });

    document.getElementById('sorted').addEventListener('change', function (event) {
        document.getElementById('tree').sorted = event.detail.value;
    });
}
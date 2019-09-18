window.onload = function () {
    document.getElementById('none').addEventListener('change', function () {
        tree.selectionMode = 'none';
    });

    document.getElementById('one').addEventListener('change', function () {
        tree.selectionMode = 'one';
    });

    document.getElementById('zeroOrOne').addEventListener('change', function () {
        tree.selectionMode = 'zeroOrOne';
    });

    document.getElementById('zeroOrMany').addEventListener('change', function () {
        tree.selectionMode = 'zeroOrMany';
    });

    document.getElementById('oneOrMany').addEventListener('change', function () {
        tree.selectionMode = 'oneOrMany';
    });

    document.getElementById('oneOrManyExtended').addEventListener('change', function () {
        tree.selectionMode = 'oneOrManyExtended';
    });

    document.getElementById('checkBox').addEventListener('change', function () {
        tree.selectionMode = 'checkBox';
    });

    document.getElementById('radioButton').addEventListener('change', function () {
        tree.selectionMode = 'radioButton';
    });


    document.getElementById('dblclick').addEventListener('change', function () {
        tree.toggleMode = 'dblclick';
    });

    document.getElementById('click').addEventListener('change', function () {
        tree.toggleMode = 'click';
    });

    document.getElementById('arrow').addEventListener('change', function () {
        tree.toggleMode = 'arrow';
    });
}
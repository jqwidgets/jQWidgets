window.onload = function () {
    const tree1 = document.getElementById('tree1'),
        tree2 = document.getElementById('tree2');

    document.getElementById('auto').addEventListener('change', function () {
        tree1.overflow = 'auto';
        tree2.overflow = 'auto';
    });

    document.getElementById('hidden').addEventListener('change', function () {
        tree1.overflow = 'hidden';
        tree2.overflow = 'hidden';
    });

    document.getElementById('scroll').addEventListener('change', function () {
        tree1.overflow = 'scroll';
        tree2.overflow = 'scroll';
    });
}
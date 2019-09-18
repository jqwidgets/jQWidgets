window.onload = function () {
    const tabs = document.getElementById('tabs'),
        index = document.getElementById('index');

    document.getElementById('insert').addEventListener('click', function () {
        tabs.insert(index.value, { label: 'New TAB', content: 'New content' });
    });

    document.getElementById('remove').addEventListener('click', function () {
        tabs.remove(index.value);
    });

    document.getElementById('update').addEventListener('click', function () {
        tabs.update(index.value, 'Updated TAB', 'Updated content');
    });
}
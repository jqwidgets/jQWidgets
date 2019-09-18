window.onload = function () {
    const splitter = document.querySelector('smart-splitter');

    splitter.dataSource = [
        {
            id: 'item0',
            content: '<smart-splitter id="verticalSplitter">' +
            '<smart-splitter-item collapsible id="item1">Item 1</smart-splitter-item>' +
            '<smart-splitter-item id="item2">Item 2</smart-splitter-item>' +
            '<smart-splitter-item collapsible id="item3">Item 3</smart-splitter-item>' +
            '</smart-splitter>'
        },
        {
            id: 'item4',
            content: 'Item 4',
        },
        {
            id: 'item5',
            content: 'Item 5'
        }
    ];
}
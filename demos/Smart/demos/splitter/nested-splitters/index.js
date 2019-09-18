window.onload = function () {
    const splitter0 = document.getElementById('splitter0')

    splitter0.dataSource = [
        {
            id: 'item00',
            collapsible: true,
            content: `Left Pane`,
			size: 200
        },
        {
            id: 'item01',
            content: '<smart-splitter id="nestedSplitter0" orientation="horizontal">' +
                            '<smart-splitter-item size=200 collapsible id="item02" collapsible>Nested Splitter Top Pane</smart-splitter-item>' +
                            '<smart-splitter-item id="item03">Nested Splitter Bottom Content</smart-splitter-item>' +
                        '</smart-splitter>'
        }
    ]; 
}
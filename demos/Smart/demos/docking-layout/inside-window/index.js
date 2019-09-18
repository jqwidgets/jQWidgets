window.onload = function () {
    const layout = document.getElementById('layout');
    const tree = `<smart-tree id="tree" filterable>
                                <smart-tree-items-group>
                                    <i class="material-icons">folder</i> Attractions
                                    <smart-tree-item>Movies</smart-tree-item>
                                    <smart-tree-item>Circus</smart-tree-item>
                                    <smart-tree-item>Concerts</smart-tree-item>
                                    <smart-tree-item>Monuments</smart-tree-item>
                                </smart-tree-items-group>
                                <smart-tree-items-group>
                                    <i class="material-icons">folder</i> Dining
                                    <smart-tree-item>Restaurants</smart-tree-item>
                                    <smart-tree-item>Caf&eacute;s</smart-tree-item>
                                    <smart-tree-item>Bars</smart-tree-item>
                                </smart-tree-items-group>
                                <smart-tree-items-group>
                                    <i class="material-icons">folder</i> Education
                                    <smart-tree-item>Schools</smart-tree-item>
                                    <smart-tree-item>Colleges</smart-tree-item>
                                    <smart-tree-item>Universities</smart-tree-item>
                                    <smart-tree-item>Educational courses</smart-tree-item>
                                </smart-tree-items-group>
                                <smart-tree-items-group>
                                    <i class="material-icons">folder</i> Family
                                    <smart-tree-item>Babysitting</smart-tree-item>
                                    <smart-tree-item>Family trips</smart-tree-item>
                                    <smart-tree-item>Theme parks</smart-tree-item>
                                </smart-tree-items-group>
                                <smart-tree-items-group>
                                    <i class="material-icons">folder</i> Health
                                    <smart-tree-item>Hospitals</smart-tree-item>
                                    <smart-tree-item>Family physicians</smart-tree-item>
                                    <smart-tree-item>Optics</smart-tree-item>
                                </smart-tree-items-group>
                            </smart-tree>`,
        multiLine = `
             <smart-multiline-text-box id="editor1">
                      <smart-tree id="tree" filterable>
                            <smart-tree-items-group>
                                <i class="material-icons">folder</i> Attractions
                                <smart-tree-item>Movies</smart-tree-item>
                                <smart-tree-item>Circus</smart-tree-item>
                                <smart-tree-item>Concerts</smart-tree-item>
                                <smart-tree-item>Monuments</smart-tree-item>
                            </smart-tree-items-group>
                            <smart-tree-items-group>
                                <i class="material-icons">folder</i> Dining
                                <smart-tree-item>Restaurants</smart-tree-item>
                                <smart-tree-item>Caf&eacute;s</smart-tree-item>
                                <smart-tree-item>Bars</smart-tree-item>
                            </smart-tree-items-group>
                            <smart-tree-items-group>
                                <i class="material-icons">folder</i> Education
                                <smart-tree-item>Schools</smart-tree-item>
                                <smart-tree-item>Colleges</smart-tree-item>
                                <smart-tree-item>Universities</smart-tree-item>
                                <smart-tree-item>Educational courses</smart-tree-item>
                            </smart-tree-items-group>
                            <smart-tree-items-group>
                                <i class="material-icons">folder</i> Family
                                <smart-tree-item>Babysitting</smart-tree-item>
                                <smart-tree-item>Family trips</smart-tree-item>
                                <smart-tree-item>Theme parks</smart-tree-item>
                            </smart-tree-items-group>
                            <smart-tree-items-group>
                                <i class="material-icons">folder</i> Health
                                <smart-tree-item>Hospitals</smart-tree-item>
                                <smart-tree-item>Family physicians</smart-tree-item>
                                <smart-tree-item>Optics</smart-tree-item>
                            </smart-tree-items-group>
                    </smart-tree>
                </smart-multiline-text-box>
`;

    layout.layout = [
        {
            id: 'item0',
            label: 'Tabs 0',
            items: [{
                label: 'Tab A',
                selected: true,
                content: 'This is the first item of the Tabs 0.'
            },
            {
                label: 'Tab B',
                content: '<smart-text-box>Some Text Inside the Text Box</smart-text-box>'
            }],
            autoHide: true,
            autoHidePosition: 'left'
        },
        {
            id: 'item1',
            label: 'Tabs 1',
            items: [{
                label: 'Tab 1',
                selected: true,
                content: multiLine
            },
            {
                label: 'Tab 2',
                content: '<smart-multiline-text-box id="editor2">File Editor 2</smart-multiline-text-box>'
            },
            {
                label: 'Tab 3',
                content: '<smart-multiline-text-box id="editor3">File Editor 3</smart-multiline-text-box>'
            }],
            headerPosition: 'none',
            tabCloseButtons: true

        },
        {
            id: 'item2',
            label: 'Solution Explorer',
            items: [{
                label: 'Tab 4',
                content: tree
            }],
            tabPosition: 'hidden'
        },
        {
            id: 'item3',
            label: 'Tabs 3',
            items: [{
                label: 'Tab 4',
                selected: true,
                content: '<smart-gauge></smart-gauge>'
            },
            {
                label: 'Tab 5',
                content: 'Contents of Tab Item 5.'
            }],
            autoHide: true,
            autoHidePosition: 'top'
        }];
}
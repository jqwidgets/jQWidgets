window.onload = function () {
    const layout = document.querySelector('smart-docking-layout'),
	tree = `<smart-tree id="tree" filterable>
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
			<smart-multiline-text-box>
			 window.onload = function() {
					const button = document.querySelector('smart-button');

					buttons.addEventListener('click', function() {
						alert('Hello World!');
					});
				}
				</smart-multiline-text-box>
 `;

    const multiLineContent2 = `
				smart-button {
				}
         `;

    const multiLineContent3 = `<smart-button>Click Me</smart-button> `;

    layout.layout = [
        {
            id: 'item0',
            label: 'View',
            items: [{
                label: 'Team Explorer',
                selected: true,
                content: 'This is the first item of the Tabs 0.'
            },
            {
                label: 'Server Explorer',
                content: '<smart-text-box>Some Text Inside the Text Box</smart-text-box>'
            }],
            autoHide: true,
            autoHidePosition: 'left'
        },
        {
            type: 'LayoutGroup',
            items: [
                {
                    type: 'LayoutPanel',
                    id: 'tabPanel',
                    label: 'Tabs 1',
                    items: [{
                        label: 'helloWorld.js',
                        selected: true,
                        content: multiLine
                    },
                    {
                        label: 'helloWorld.css',
                        content: '<smart-multiline-text-box id="editor2">' + multiLineContent2 + '</smart-multiline-text-box>'
                    },
                    {
                        label: 'helloWorld.html',
                        content: '<smart-multiline-text-box id="editor3">' + multiLineContent3 + '</smart-multiline-text-box>'
                    }],
                    headerPosition: 'none',
                    tabCloseButtons: true,
                    panelContainerSettings: {
                        size: '75%'
                    }
                },
                {
                    type: 'LayoutPanel',
                    label: 'Output',
                    items: [
                        {
                            label: 'Output',
                            headerPosition: 'none',
                            content: 'All files are up to date.'
                        }
                    ],
                    headerPosition: 'none'
                }
            ],
            orientation: 'horizontal'
        },
        {
            id: 'item2',
            label: 'Solution Explorer',
            items: [{
                label: 'Solution Explorer',
                content: tree
            }],
            tabPosition: 'hidden'
        },
       ];
}
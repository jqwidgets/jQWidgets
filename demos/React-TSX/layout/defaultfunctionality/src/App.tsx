import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import JqxLayout, { ILayoutProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlayout';
import JqxTree from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

class App extends React.PureComponent<{}, ILayoutProps> {

    constructor(props: {}) {
        super(props);

        const source: any[] = [{
            expanded: true,
            icon: 'https://www.jqwidgets.com/react/images/earth.png',
            items: [{
                expanded: true,
                icon: 'https://www.jqwidgets.com/react/images/folder.png',
                items: [{
                    icon: 'https://www.jqwidgets.com/react/images/nav1.png',
                    label: 'jqx.base.css'
                }, {
                    icon: 'https://www.jqwidgets.com/react/images/nav1.png',
                    label: 'jqx.energyblue.css'
                }, {
                    icon: 'https://www.jqwidgets.com/react/images/nav1.png',
                    label: 'jqx.orange.css'
                }],
                label: 'css'
            }, {
                icon: 'https://www.jqwidgets.com/react/images/folder.png',
                items: [{
                    icon: 'https://www.jqwidgets.com/react/images/nav1.png',
                    label: 'jqxcore.js'
                }, {
                    icon: 'https://www.jqwidgets.com/react/images/nav1.png',
                    label: 'jqxdata.js'
                }, {
                    icon: 'https://www.jqwidgets.com/react/images/nav1.png',
                    label: 'jqxgrid.js'
                }],
                label: 'scripts'
            }, {
                icon: 'https://www.jqwidgets.com/react/images/nav1.png',
                label: 'index.htm'
            }],
            label: 'Project'
        }];

        this.state = {
            layout: [{
                items: [{
                    alignment: 'left',
                    items: [{
                        contentContainer: 'ToolboxPanel',
                        title: 'Toolbox',
                        type: 'layoutPanel'
                    }, {
                        contentContainer: 'HelpPanel',
                        title: 'Help',
                        type: 'layoutPanel'
                    }],
                    type: 'autoHideGroup',
                    unpinnedWidth: 200,
                    width: 80
                }, {
                    items: [{
                        height: 400,
                        items: [{
                            contentContainer: 'Document1Panel',
                            title: 'Document 1',
                            type: 'documentPanel'
                        }, {
                            contentContainer: 'Document2Panel',
                            title: 'Document 2',
                            type: 'documentPanel'
                        }],
                        minHeight: 200,
                        type: 'documentGroup'
                    }, {
                        height: 200,
                        items: [{
                            contentContainer: 'ErrorListPanel',
                            title: 'Error List',
                            type: 'layoutPanel'
                        }, {
                            contentContainer: 'OutputPanel',
                            selected: true,
                            title: 'Output',
                            type: 'layoutPanel'
                        }],
                        pinnedHeight: 30,
                        type: 'tabbedGroup'
                    }],
                    orientation: 'vertical',
                    type: 'layoutGroup',
                    width: 500
                }, {
                    items: [{
                        contentContainer: 'SolutionExplorerPanel',
                        initContent: () => {
                            ReactDOM.render(
                                <JqxTree theme={'material-purple'} width={'100%'} height={'99%'} source={source} />,
                                document.getElementById('treeContainer')
                            );
                        },
                        title: 'Solution Explorer',
                        type: 'layoutPanel'
                    },
                    {
                        contentContainer: 'PropertiesPanel',
                        title: 'Properties',
                        type: 'layoutPanel'
                    }],
                    minWidth: 200,
                    type: 'tabbedGroup',
                    width: 220
                }],
                orientation: 'horizontal',
                type: 'layoutGroup'
            }]
        }
    }

    public render() {
        return (
            <JqxLayout theme={'material-purple'}
                // @ts-ignore
                width={'100%'} height={600} layout={this.state.layout}>
                {/* The panel content divs can have a flat structure */}
                {/* autoHideGroup*/}
                <div data-container="ToolboxPanel">
                    List of tools
                </div>
                <div data-container="HelpPanel">
                    Help topics
                </div>
                {/* documentGroup  */}
                <div data-container="Document1Panel">
                    Document 1 content
                </div>
                <div data-container="Document2Panel">
                    Document 2 content
                </div>
                {/* bottom tabbedGroup  */}
                <div data-container="ErrorListPanel">
                    List of errors
                </div>
                <div data-container="OutputPanel">
                    Output
                </div>
                {/* right tabbedGroup  */}
                <div data-container="SolutionExplorerPanel">
                    <div id="treeContainer" style={{ border: 'none', height: '100%', width: '99%' }} />
                </div>
                <div data-container="PropertiesPanel">
                    List of properties
                </div>
            </JqxLayout>
        );
    }
}

export default App;
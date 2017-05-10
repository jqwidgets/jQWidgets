import React from 'react';
import ReactDOM from 'react-dom';

import JqxLayout from '../../../jqwidgets-react/react_jqxlayout.js';
import JqxTree from '../../../jqwidgets-react/react_jqxtree.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        let savedLayout;
        this.refs.saveLayoutButton.on('click', () => {
            savedLayout = this.refs.myLayout.saveLayout();
            this.refs.loadLayoutButton.disabled(false);
        });
        this.refs.loadLayoutButton.on('click', () => {
            this.refs.myLayout.loadLayout(savedLayout);
            this.refs.loadLayoutButton.disabled(true);
        });
    }
    render() {
        let layout = [{
            type: 'layoutGroup',
            orientation: 'horizontal',
            items: [{
                type: 'autoHideGroup',
                alignment: 'left',
                width: 80,
                unpinnedWidth: 200,
                items: [{
                    type: 'layoutPanel',
                    title: 'Toolbox',
                    contentContainer: 'ToolboxPanel'
                }, {
                    type: 'layoutPanel',
                    title: 'Help',
                    contentContainer: 'HelpPanel'
                }]
            }, {
                type: 'layoutGroup',
                orientation: 'vertical',
                width: 500,
                items: [{
                    type: 'documentGroup',
                    height: 400,
                    minHeight: 200,
                    items: [{
                        type: 'documentPanel',
                        title: 'Document 1',
                        contentContainer: 'Document1Panel'
                    }, {
                        type: 'documentPanel',
                        title: 'Document 2',
                        contentContainer: 'Document2Panel'
                    }]
                }, {
                    type: 'tabbedGroup',
                    height: 200,
                    pinnedHeight: 30,
                    items: [{
                        type: 'layoutPanel',
                        title: 'Error List',
                        contentContainer: 'ErrorListPanel'
                    }, {
                        type: 'layoutPanel',
                        title: 'Output',
                        contentContainer: 'OutputPanel',
                        selected: true
                    }]
                }]
            }, {
                type: 'tabbedGroup',
                width: 220,
                minWidth: 200,
                items: [{
                    type: 'layoutPanel',
                    title: 'Solution Explorer',
                    contentContainer: 'SolutionExplorerPanel',
                    initContent: () => {
                        // initialize a jqxTree inside the Solution Explorer Panel
                        let source = [{
                            icon: '../../../images/earth.png',
                            label: 'Project',
                            expanded: true,
                            items: [{
                                icon: '../../../images/folder.png',
                                label: 'css',
                                expanded: true,
                                items: [{
                                    icon: '../../../images/nav1.png',
                                    label: 'jqx.base.css'
                                }, {
                                    icon: '../../../images/nav1.png',
                                    label: 'jqx.energyblue.css'
                                }, {
                                    icon: '../../../images/nav1.png',
                                    label: 'jqx.orange.css'
                                }]
                            }, {
                                icon: '../../../images/folder.png',
                                label: 'scripts',
                                items: [{
                                    icon: '../../../images/nav1.png',
                                    label: 'jqxcore.js'
                                }, {
                                    icon: '../../../images/nav1.png',
                                    label: 'jqxdata.js'
                                }, {
                                    icon: '../../../images/nav1.png',
                                    label: 'jqxgrid.js'
                                }]
                            }, {
                                icon: '../../../images/nav1.png',
                                label: 'index.htm'
                            }]
                        }];
                        ReactDOM.render(<JqxTree source={source} width={200} />, document.getElementById('solutionExplorerTree'));
                    }
                }, {
                    type: 'layoutPanel',
                    title: 'Properties',
                    contentContainer: 'PropertiesPanel'
                }]
            }]
        }];
        return (
            <div>
                <JqxLayout ref='myLayout' width={800} height={600} layout={layout} contextMenu={true}>
                    <div data-container='ToolboxPanel'>List of tools</div>
                    <div data-container='HelpPanel'>Help topics</div>

                    <div data-container='Document1Panel'>Document 1 content</div>
                    <div data-container='Document2Panel'>Document 2 content</div>

                    <div data-container='ErrorListPanel'>List of errors</div>
                    <div data-container='OutputPanel'>Output</div>

                    <div data-container='SolutionExplorerPanel'>
                        <div id='solutionExplorerTree' />
                    </div>
                    <div data-container='PropertiesPanel'>List of properties</div>
                </JqxLayout>
                <div style={{ marginTop: 25 }}>
                    <JqxButton ref='saveLayoutButton' style={{ float: 'left', marginRight: 10 }}
                        value={'Save Layout'}
                    />
                    <JqxButton ref='loadLayoutButton' style={{ float: 'left' }}
                        value={'Load Layout'} disabled={true}
                    />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

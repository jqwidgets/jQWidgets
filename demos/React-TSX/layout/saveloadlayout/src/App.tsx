import * as React from 'react';
import * as ReactDOM from 'react-dom';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxLayout, { ILayoutProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlayout';
import JqxTree from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

const App = () => {
    const myLayout = React.useRef<JqxLayout>(null);
    const myLoadLayoutBtn = React.useRef<JqxButton>(null);
    const savedLayout = React.useRef<any>(null);
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

    const [layout, setLayout] = React.useState<ILayoutProps['layout']>([{
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
    }]);
    const [loadDisabled, setLoadDisabled] = React.useState(true);

    const saveLayoutBtnOnClick = React.useCallback(() => {
        if (myLayout.current) {
            savedLayout.current = myLayout.current.saveLayout();
            setLoadDisabled(false);
        }
    }, []);

    const loadLayoutBtnOnClick = React.useCallback(() => {
        if (myLayout.current && savedLayout.current) {
            myLayout.current.loadLayout(savedLayout.current);
            setLoadDisabled(true);
        }
    }, []);

    const style: React.CSSProperties = { display: 'inline-block' };

    return (
        <div>
            <JqxLayout
                theme={'material-purple'}
                ref={myLayout}
                width={'100%'}
                height={600}
                layout={layout}
            >
                <div data-container="ToolboxPanel">
                    List of tools
                </div>
                <div data-container="HelpPanel">
                    Help topics
                </div>
                <div data-container="Document1Panel">
                    Document 1 content
                </div>
                <div data-container="Document2Panel">
                    Document 2 content
                </div>
                <div data-container="ErrorListPanel">
                    List of errors
                </div>
                <div data-container="OutputPanel">
                    Output
                </div>
                <div data-container="SolutionExplorerPanel">
                    <div id="treeContainer" style={{ border: 'none', height: '100%', width: '99%' }} />
                </div>
                <div data-container="PropertiesPanel">
                    List of properties
                </div>
            </JqxLayout>
            <div style={{ marginTop: '25px' }}>
                <JqxButton theme={'material-purple'} style={style} onClick={saveLayoutBtnOnClick} width={100}>Save Layout</JqxButton>
                <JqxButton theme={'material-purple'} ref={myLoadLayoutBtn} style={style} onClick={loadLayoutBtnOnClick} disabled={loadDisabled} width={100}>Load Layout</JqxButton>
            </div>
        </div>
    );
};

export default App;
import * as React from 'react';
 


import './App.css';

import JqxDockingLayout, { IDockingLayoutProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdockinglayout';

class App extends React.PureComponent<{}, IDockingLayoutProps> {

    constructor(props: {}) {
        super(props);

        const layout: IDockingLayoutProps['layout'] = [
            {
                items: [{
                    items: [{
                        height: '50%',
                        items: [{
                            contentContainer: 'Document1Panel',
                            title: 'Document 1',
                            type: 'documentPanel'
                        }, {
                            contentContainer: 'Document2Panel',
                            title: 'Document 2',
                            type: 'documentPanel'
                        }],
                        minHeight: '25%',
                        type: 'documentGroup'
                    }, {
                        height: '50%',
                        items: [{
                            contentContainer: 'ErrorListPanel',
                            title: 'Error List',
                            type: 'layoutPanel',
                        }, {
                            contentContainer: 'OutputPanel',
                            selected: true,
                            title: 'Output',
                            type: 'layoutPanel'
                        }],
                        pinnedHeight: '10%',
                        type: 'tabbedGroup'
                    }],
                    orientation: 'vertical',
                    type: 'layoutGroup',
                    width: '60%'
                }, {
                    items: [{
                        contentContainer: 'SolutionExplorerPanel',
                        title: 'Solution Explorer',
                        type: 'layoutPanel'
                    }, {
                        contentContainer: 'PropertiesPanel',
                        title: 'Properties',
                        type: 'layoutPanel'
                    }],
                    type: 'tabbedGroup',
                    width: '40%'
                }],
                orientation: 'horizontal',
                type: 'layoutGroup'
            }
        ];

        this.state = {
            layout
        }
    }

    public render() {
        return (
            // @ts-ignore
            <JqxDockingLayout theme={'material-purple'} width={'100%'} height={'90%'} layout={this.state.layout} >
                {/*The panel content divs can have a flat structure*/}
                {/*documentGroup*/}
                <div data-container={'Document1Panel'}>
                    Document 1 content
                </div>
                <div data-container={'Document2Panel'}>
                    Document 2 content
                </div>
                {/*bottom tabbedGroup*/}
                <div data-container={'ErrorListPanel'}>
                    List of errors
                </div>
                <div data-container={'OutputPanel'}>
                    Output
                </div>
                {/*right tabbedGroup*/}
                <div data-container={'SolutionExplorerPanel'}>
                    Solution structure
                </div>
                <div data-container={'PropertiesPanel'}>
                    List of properties
                </div>
            </JqxDockingLayout>
        );
    }
}

export default App;
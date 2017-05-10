import React from 'react';
import ReactDOM from 'react-dom';

import JqxDockingLayout from '../../../jqwidgets-react/react_jqxdockinglayout.js';

class App extends React.Component {
    render() {
        var layout = [{
            type: 'layoutGroup',
            orientation: 'horizontal',
            items: [{
                type: 'layoutGroup',
                orientation: 'vertical',
                width: '60%',
                items: [{
                    type: 'documentGroup',
                    height: '50%',
                    minHeight: '25%',
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
                    height: '50%',
                    pinnedHeight: '10%',
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
                width: '40%',
                items: [{
                    type: 'layoutPanel',
                    title: 'Solution Explorer',
                    contentContainer: 'SolutionExplorerPanel'
                }, {
                    type: 'layoutPanel',
                    title: 'Properties',
                    contentContainer: 'PropertiesPanel'
                }]
            }]
        }];
        return (
            <JqxDockingLayout width={'100%'} height={'100%'} layout={layout}>
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
                    Solution structure
                </div>
                <div data-container="PropertiesPanel">
                    List of properties
                </div>
            </JqxDockingLayout>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';

import JqxDockingLayout from '../../../jqwidgets-react/react_jqxdockinglayout.js';
import JqxTree from '../../../jqwidgets-react/react_jqxtree.js';

class App extends React.Component {
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
                        ReactDOM.render(
                            <JqxTree style={{ border: 'none' }} width={190} source={source} />
                            ,document.getElementById('solutionExplorerTree'));
                    }
                }, {
                    type: 'layoutPanel',
                    title: 'Properties',
                    contentContainer: 'PropertiesPanel'
                }]
            }]
        }, {
            type: 'floatGroup',
            width: 500,
            height: 300,
            position: {
                x: 350,
                y: 250
            },
            items: [{
                type: 'layoutPanel',
                title: 'Output',
                contentContainer: 'OutputPanel',
                selected: true
            }]
        }];
        return (
            <JqxDockingLayout width={800} height={600} layout={layout}>
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
                <div data-container="SolutionExplorerPanel">
                    <div id="solutionExplorerTree" />
                </div>
                <div data-container="PropertiesPanel">
                    List of properties
                </div>
                <div data-container="OutputPanel">
                    <div style={{ fontFamily: 'Consolas' }}>
                        <p>
                            Themes installation complete.
                        </p>
                        <p>
                            List of installed stylesheet files. Include at least one stylesheet Theme file and
                        the images folder:
                        </p>
                        <ul>
                            <li>styles/jqx.base.css: Stylesheet for the base Theme. The jqx.base.css file should
                            be always included in your project.</li>
                            <li>styles/jqx.arctic.css: Stylesheet for the Arctic Theme</li>
                            <li>styles/jqx.web.css: Stylesheet for the Web Theme</li>
                            <li>styles/jqx.bootstrap.css: Stylesheet for the Bootstrap Theme</li>
                            <li>styles/jqx.classic.css: Stylesheet for the Classic Theme</li>
                            <li>styles/jqx.darkblue.css: Stylesheet for the DarkBlue Theme</li>
                            <li>styles/jqx.energyblue.css: Stylesheet for the EnergyBlue Theme</li>
                            <li>styles/jqx.shinyblack.css: Stylesheet for the ShinyBlack Theme</li>
                            <li>styles/jqx.office.css: Stylesheet for the Office Theme</li>
                            <li>styles/jqx.metro.css: Stylesheet for the Metro Theme</li>
                            <li>styles/jqx.metrodark.css: Stylesheet for the Metro Dark Theme</li>
                            <li>styles/jqx.orange.css: Stylesheet for the Orange Theme</li>
                            <li>styles/jqx.summer.css: Stylesheet for the Summer Theme</li>
                            <li>styles/jqx.black.css: Stylesheet for the Black Theme</li>
                            <li>styles/jqx.fresh.css: Stylesheet for the Fresh Theme</li>
                            <li>styles/jqx.highcontrast.css: Stylesheet for the HighContrast Theme</li>
                            <li>styles/jqx.blackberry.css: Stylesheet for the Blackberry Theme</li>
                            <li>styles/jqx.android.css: Stylesheet for the Android Theme</li>
                            <li>styles/jqx.mobile.css: Stylesheet for the Mobile Theme</li>
                            <li>styles/jqx.windowsphone.css: Stylesheet for the Windows Phone Theme</li>
                            <li>styles/jqx.ui-darkness.css: Stylesheet for the UI Darkness Theme</li>
                            <li>styles/jqx.ui-lightness.css: Stylesheet for the UI Lightness Theme</li>
                            <li>styles/jqx.ui-le-frog.css: Stylesheet for the UI Le Frog Theme</li>
                            <li>styles/jqx.ui-overcast.css: Stylesheet for the UI Overcast Theme</li>
                            <li>styles/jqx.ui-redmond.css: Stylesheet for the UI Redmond Theme</li>
                            <li>styles/jqx.ui-smoothness.css: Stylesheet for the UI Smoothness Theme</li>
                            <li>styles/jqx.ui-start.css: Stylesheet for the UI Start Theme</li>
                            <li>styles/jqx.ui-sunny.css: Stylesheet for the UI Sunny Theme</li>
                            <li>styles/images: contains images referenced in the stylesheet files</li>
                        </ul>
                    </div>
                </div>

            </JqxDockingLayout>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

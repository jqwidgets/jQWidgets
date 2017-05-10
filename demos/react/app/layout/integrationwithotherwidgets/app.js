import React from 'react';
import ReactDOM from 'react-dom';

import JqxLayout from '../../../jqwidgets-react/react_jqxlayout.js';
import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';
import JqxTextArea from '../../../jqwidgets-react/react_jqxtextarea.js';
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
                        title: 'index.htm',
                        contentContainer: 'Document1Panel',
                        initContent: () => {
                            let textArea = ReactDOM.render(<JqxTextArea width={'100%'} height={400} />, document.getElementById('Document1TextArea'));
                            textArea.val('<!DOCTYPE html>\n<html>\n\t<head>\n\t<title>Page Title</title>\n\t</head>\n\t<body>\n\t\t<h1>This is a Heading</h1>\n\t\t<p>This is a paragraph.</p>\n\t</body>\n</html>');
                        }
                    }, {
                        type: 'documentPanel',
                        title: 'New Document',
                        contentContainer: 'Document2Panel',
                        initContent: () => {
                            ReactDOM.render(<JqxTextArea width={'100%'} height={400} placeHolder={'Blank document'} />, document.getElementById('Document2TextArea'));
                        }
                    }]
                }, {
                    type: 'tabbedGroup',
                    height: 200,
                    minHeight: 200,
                    pinnedHeight: 30,
                    items: [{
                        type: 'layoutPanel',
                        title: 'Error List',
                        contentContainer: 'ErrorListPanel'
                    }, {
                        type: 'layoutPanel',
                        title: 'Performance',
                        contentContainer: 'PerformancePanel',
                        selected: true,
                        initContent: () => {
                            var data = [1, 5, 12, 5, 33, 38, 40, 42, 18, 18, 70, 76, 75, 99, 100, 88, 64, 13, 19, 15];
                            let padding = {
                                left: 0,
                                top: 10,
                                right: 0,
                                bottom: 0
                            }
                            let titlePadding = {
                                left: 0,
                                top: 0,
                                right: 0,
                                bottom: 0
                            }
                            let xAxis = {
                                visible: false,
                                valuesOnTicks: false
                            }
                            let seriesGroups = [{
                                type: 'line',
                                columnsGapPercent: 0,
                                columnsMaxWidth: 2,
                                valueAxis: {
                                    minValue: 0,
                                    visible: false
                                },
                                series: [{
                                    linesUnselectMode: 'click',
                                    colorFunction: (value, itemIndex, serie, group) => {
                                        if (value <= 33) {
                                            return '#32CD32';
                                        } else if (value <= 66) {
                                            return '#FFD700';
                                        } else {
                                            return '#AA4643';
                                        }
                                    }
                                }]
                            }];

                            ReactDOM.render(
                                <JqxChart style={{ width: '99%', height: 100 }} 
                                    title={'CPU Usage'} description={''} showLegend={false}
                                    enableAnimations={false} showBorderLine={false} showToolTips={false}
                                    backgroundColor={'transparent'} padding={padding} titlePadding={titlePadding}
                                    xAxis={xAxis} colorScheme={'scheme01'} seriesGroups={seriesGroups} source={data}
                                />, document.getElementById('cpuUsage'));
                        }
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
            <JqxLayout width={800} height={600} layout={layout} contextMenu={true}>
                <div data-container='ToolboxPanel'>List of tools</div>
                <div data-container='HelpPanel'>Help topics</div>

                <div data-container='Document1Panel'>
                    <div style={{ padding: 5 }}>
                        <div id="Document1TextArea" style={{ margin: 5 }} />
                    </div>
                </div>
                <div data-container='Document2Panel'>
                    <div style={{ padding: 5 }}>
                        <div id="Document2TextArea" style={{ margin: 5 }} />
                    </div>
                </div>

                <div data-container='ErrorListPanel'>List of errors</div>
                <div data-container='PerformancePanel'>
                    <div id='cpuUsage' />
                </div>

                <div data-container='SolutionExplorerPanel'>
                    <div id='solutionExplorerTree' />
                </div>
                <div data-container='PropertiesPanel'>List of properties</div>
            </JqxLayout>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

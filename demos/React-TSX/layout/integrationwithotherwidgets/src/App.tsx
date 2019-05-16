import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxLayout, { ILayoutProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlayout';
import JqxTextArea from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtextarea';
import JqxTree from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

class App extends React.PureComponent<{}, ILayoutProps> {

    private myTextArea = React.createRef<JqxTextArea>();

    constructor(props: {}) {
        super(props);

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
                            initContent: (): void => {
                                ReactDOM.render(
                                    <JqxTextArea theme={'material-purple'} ref={this.myTextArea} width={'100%'} height={340} />,
                                    document.getElementById('Document1TextArea'),
                                    () => { this.myTextArea.current!.val('<!DOCTYPE html>\n<html>\n\t<head>\n\t<title>Page Title</title>\n\t</head>\n\t<body>\n\t\t<h1>This is a Heading</h1>\n\t\t<p>This is a paragraph.</p>\n\t</body>\n</html>'); }
                                );                                
                            },
                            title: 'index.htm',
                            type: 'documentPanel'
                        }, {
                            contentContainer: 'Document2Panel',
                            initContent: (): void => {
                                ReactDOM.render(
                                    <JqxTextArea theme={'material-purple'} width={'100%'} height={340} placeHolder={'Blank document'} />,
                                    document.getElementById('Document2TextArea')
                                );
                            },
                            title: 'New Document',
                            type: 'documentPanel'
                        }],
                        minHeight: 200,
                        type: 'documentGroup',
                    }, {
                        height: 200,
                        items: [{
                            contentContainer: 'ErrorListPanel',
                            title: 'Error List',
                            type: 'layoutPanel'
                        }, {
                            contentContainer: 'PerformancePanel',
                            initContent: (): void => {
                                const data = [1, 5, 12, 5, 33, 38, 40, 42, 18, 18, 70, 76, 75, 99, 100, 88, 64, 13, 19, 15];
                                const padding = { left: 0, top: 10, right: 0, bottom: 0 };
                                const titlePadding = { left: 0, top: 0, right: 0, bottom: 0 };
                                const xAxis = { visible: false, valuesOnTicks: false };
                                const seriesGroups: IChartProps['seriesGroups'] = [{

                                    columnsGapPercent: 0,
                                    columnsMaxWidth: 2,
                                    series: [{
                                        colorFunction: (value: number | string, itemIndex: number, serie: any, group: any): string => {
                                            if (value <= 33) {
                                                return '#32CD32';
                                            } else if (value <= 66) {
                                                return '#FFD700';
                                            } else {
                                                return '#AA4643';
                                            }
                                        },
                                        linesUnselectMode: 'click'
                                    }],
                                    type: 'line',
                                    valueAxis: {
                                        minValue: 0,
                                        visible: false
                                    }
                                }];

                                ReactDOM.render(
                                    <JqxChart theme={'material-purple'} style={{ width: '100%', height: '100%' }}
                                        title={'CPU Usage'} description={''} showLegend={false} enableAnimations={false}
                                        showBorderLine={false} showToolTips={false} backgroundColor={'transparent'} padding={padding}
                                        titlePadding={titlePadding} source={data} xAxis={xAxis} colorScheme={'scheme01'} seriesGroups={seriesGroups} />,
                                    document.getElementById('cpuUsage')
                                );
                            },
                            selected: true,
                            title: 'Performance',
                            type: 'layoutPanel'
                        }],
                        minHeight: 200,
                        pinnedHeight: 30,
                        type: 'tabbedGroup'
                    }],
                    orientation: 'vertical',
                    type: 'layoutGroup',
                    width: 500
                }, {
                    items: [{
                        contentContainer: 'SolutionExplorerPanel',
                        initContent: (): void => {
                            // initialize a jqxTree inside the Solution Explorer Panel
                            const source = [{
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
                                    label: 'scripts',
                                }, {
                                    icon: 'https://www.jqwidgets.com/react/images/nav1.png',
                                    label: 'index.htm'
                                }],
                                label: 'Project'
                            }];

                            ReactDOM.render(
                                <JqxTree theme={'material-purple'} width={'100%'} height={'99%'} source={source} />,
                                document.getElementById('solutionExplorerTree')
                            );
                        },
                        title: 'Solution Explorer',
                        type: 'layoutPanel'
                    }, {
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
                width={'100%'} height={600} layout={this.state.layout} contextMenu={true}>
                <div data-container="ToolboxPanel">List of tools</div>
                <div data-container="HelpPanel">Help topics</div>

                <div data-container="Document1Panel">
                    <div style={{ padding: '5px' }}>
                        <div id="Document1TextArea" style={{ margin: '5px' }} />
                    </div>
                </div>
                <div data-container="Document2Panel">
                    <div style={{ padding: '5px' }}>
                        <div id="Document2TextArea" style={{ margin: '5px' }} />
                    </div>
                </div>

                <div data-container="ErrorListPanel">List of errors</div>
                <div data-container="PerformancePanel">
                    <div id="cpuUsage" style={{ width: '99%', height: '100px' }} />
                </div>

                <div data-container="SolutionExplorerPanel">
                    <div id="solutionExplorerTree" style={{ border: 'none', width: '99%', height: '100%' }} />
                </div>
                <div data-container="PropertiesPanel">List of properties</div>
            </JqxLayout>
        );
    }
}

export default App;
import * as React from 'react';
import { useRef, useState } from 'react';
import * as ReactDOM from 'react-dom';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxDockingLayout, { IDockingLayoutProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdockinglayout';
import JqxTextArea from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtextarea';
import JqxTree from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

const App = () => {
    const myDockingLayout = useRef<JqxDockingLayout>(null);
    const textArea1 = useRef<JqxTextArea>(null);
    const viewServerExplorerBtn = useRef<JqxButton>(null);

    const layout: IDockingLayoutProps['layout'] = [{
        items: [{
            alignment: 'left',
            items: [{
                contentContainer: 'ToolboxPanel',
                title: 'Toolbox',
                type: 'layoutPanel'
            }, {
                contentContainer: 'HelpPanel',
                title: 'Help',
                type: 'layoutPanel',
            }],
            type: 'autoHideGroup',
            unpinnedWidth: 200,
            width: 80
        }, {
            items: [{
                height: 400,
                items: [{
                    contentContainer: 'Document1Panel',
                    initContent: () => {
                        ReactDOM.render(<JqxTextArea ref={textArea1} width={'100%'} height={400} />, document.querySelector('#Document1TextArea'), () => {
                            textArea1.current!.val('<!DOCTYPE html>\n<html>\n\t<head>\n\t<title>Page Title</title>\n\t</head>\n\t<body>\n\t\t<h1>This is a Heading</h1>\n\t\t<p>This is a paragraph.</p>\n\t</body>\n</html>');
                        });
                    },
                    title: 'index.htm',
                    type: 'documentPanel'
                }, {
                    contentContainer: 'Document2Panel',
                    initContent: () => {
                        ReactDOM.render(<JqxTextArea width={'100%'} height={400} placeHolder={'Blank document'} />, document.querySelector('#Document2TextArea'));
                    },
                    title: 'New Document',
                    type: 'documentPanel'
                }],
                minHeight: 200,
                type: 'documentGroup'
            }, {
                height: 200,
                items: [{
                    contentContainer: 'ErrorListPanel',
                    title: 'Error List',
                    type: 'layoutPanel',
                }, {
                    contentContainer: 'PerformancePanel',
                    initContent: () => {
                        const data = [1, 5, 12, 5, 33, 38, 40, 42, 18, 18, 70, 76, 75, 99, 100, 88, 64, 13, 19, 15];
                        const padding = { left: 0, top: 10, right: 0, bottom: 0 };
                        const titlePadding = { left: 0, top: 0, right: 0, bottom: 0 };
                        const xAxis = { visible: false, valuesOnTicks: false };
                        const seriesGroups: IChartProps['seriesGroups'] = [{
                            columnsGapPercent: 0,
                            columnsMaxWidth: 2,
                            series: [{
                                colorFunction(value: any) {
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
                                title={'CPU Usage'} description={''} enableAnimations={false} showBorderLine={false} showLegend={false}
                                showToolTips={false} backgroundColor={'transparent'} padding={padding} titlePadding={titlePadding}
                                source={data} colorScheme={'scheme01'} xAxis={xAxis} seriesGroups={seriesGroups} />,
                            document.querySelector('#cpuUsage')
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
                initContent: () => {
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
                            label: 'index.htm',
                            selected: true
                        }],
                        label: 'Project'
                    }];
                    ReactDOM.render(<JqxTree width={'100%'} height={'99%'} source={source} />, document.querySelector('#solutionExplorerTree'));
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
    }];

    const [dockingLayoutState] = useState<IDockingLayoutProps>({ layout });

    const viewServerExplorerBtnOnClick = () => {
        myDockingLayout.current!.addFloatGroup(300, 200, { x: 500, y: 200 }, 'layoutPanel', 'Server Explorer', '<div id="serverExplorerTree" style="width: 100%; height: 100%" />',
            (): void => {
                const source = [{
                    expanded: true,
                    icon: 'https://www.jqwidgets.com/react/images/dataadapter.png',
                    items: [{
                        icon: 'https://www.jqwidgets.com/react/images/validator.png',
                        label: 'northwinddatabase.mdf'
                    }],
                    label: 'Data Connections'
                }, {
                    icon: 'https://www.jqwidgets.com/react/images/nav1.png',
                    items: [{
                        icon: 'https://www.jqwidgets.com/react/images/nav1.png',
                        label: 'WorkStation3-PC'
                    }, {
                        icon: 'https://www.jqwidgets.com/react/images/dragdrop.png',
                        label: 'SharePoint Connections'
                    }],
                    label: 'Servers'
                }];
                ReactDOM.render(<JqxTree width={'99%'} height={'99%'} source={source} />, document.querySelector('#serverExplorerTree'));
            }
        );
        viewServerExplorerBtn.current!.setOptions({ disabled: true });
    };

    return (
        <div>
            <JqxDockingLayout theme={'material-purple'} Layout ref={myDockingLayout}
                // @ts-ignore
                width={'100%'} height={600} layout={dockingLayoutState.layout}>
                <div data-container={'ToolboxPanel'}>
                    List of tools
                </div>
                <div data-container={'HelpPanel'}>
                    Help topics
                </div>
                <div data-container={'Document1Panel'}>
                    <div style={{ padding: '5px' }}>
                        <div id="Document1TextArea" style={{ margin: '5px' }} />
                    </div>
                </div>
                <div data-container={'Document2Panel'}>
                    <div style={{ padding: '5px' }}>
                        <div id="Document2TextArea" style={{ margin: '5px' }} />
                    </div>
                </div>
                <div data-container={'ErrorListPanel'}>
                    No errors.
                </div>
                <div data-container={'PerformancePanel'}>
                    <div id="cpuUsage"
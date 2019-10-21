import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
	
	getWidth() : any {
		if (document.body.offsetWidth < 800) {
			return '90%';
		}
		
		return 800;
	}

    layout: any[] =
    [{
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
                    initContent: (): void => {
                        let textArea = jqwidgets.createInstance('#Document1TextArea', 'jqxTextArea', { width: '100%', height: 400 });
                        textArea.val('<!DOCTYPE html>\n<html>\n\t<head>\n\t<title>Page Title</title>\n\t</head>\n\t<body>\n\t\t<h1>This is a Heading</h1>\n\t\t<p>This is a paragraph.</p>\n\t</body>\n</html>');
                    }
                }, {
                    type: 'documentPanel',
                    title: 'New Document',
                    contentContainer: 'Document2Panel',
                    initContent: (): void => {
                        jqwidgets.createInstance('#Document2TextArea', 'jqxTextArea', { width: '100%', height: 400, placeHolder: 'Blank document' });
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
                    initContent: (): void => {
                        let data = [1, 5, 12, 5, 33, 38, 40, 42, 18, 18, 70, 76, 75, 99, 100, 88, 64, 13, 19, 15];
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
                                colorFunction: (value: number | string, itemIndex: number, serie: any, group: any): string => {
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
                    let options =
                        {
                            title: 'CPU Usage',
                            description: '',
                            showLegend: false,
                            enableAnimations: false,
                            showBorderLine: false,
                            showToolTips: false,
                            backgroundColor: 'transparent',
                            padding: {
                                left: 0,
                                top: 10,
                                right: 0,
                                bottom: 0
                            },
                            titlePadding: {
                                left: 0,
                                top: 0,
                                right: 0,
                                bottom: 0
                            },
                            source: data,
                            xAxis: {
                                visible: false,
                                valuesOnTicks: false
                            },
                            colorScheme: 'scheme01',
                            seriesGroups: [{
                                type: 'line',
                                columnsGapPercent: 0,
                                columnsMaxWidth: 2,
                                valueAxis: {
                                    minValue: 0,
                                    visible: false
                                },
                                series: [{
                                    linesUnselectMode: 'click',
                                    colorFunction: (value: number | string, itemIndex: number, serie: any, group: any): string => {
                                        if (value <= 33) {
                                            return '#32CD32';
                                        } else if (value <= 66) {
                                            return '#FFD700';
                                        } else {
                                            return '#AA4643';
                                        }
                                    }
                                }]
                            }]
                        };
                    jqwidgets.createInstance('#cpuUsage', 'jqxChart', options);
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
            initContent: (): void => {
                // initialize a jqxTree inside the Solution Explorer Panel
                let source = [{
                    icon: './../../../images/earth.png',
                    label: 'Project',
                    expanded: true,
                    items: [{
                        icon: './../../../images/folder.png',
                        label: 'css',
                        expanded: true,
                        items: [{
                            icon: './../../../images/nav1.png',
                            label: 'jqx.base.css'
                        }, {
                            icon: './../../../images/nav1.png',
                            label: 'jqx.energyblue.css'
                        }, {
                            icon: './../../../images/nav1.png',
                            label: 'jqx.orange.css'
                        }]
                    }, {
                        icon: './../../../images/folder.png',
                        label: 'scripts',
                        items: [{
                            icon: './../../../images/nav1.png',
                            label: 'jqxcore.js'
                        }, {
                            icon: './../../../images/nav1.png',
                            label: 'jqxdata.js'
                        }, {
                            icon: './../../../images/nav1.png',
                            label: 'jqxgrid.js'
                        }]
                    }, {
                        icon: './../../../images/nav1.png',
                        label: 'index.htm'
                    }]
                }];
                jqwidgets.createInstance('#solutionExplorerTree', 'jqxTree', { width: '100%', height: '99%', source: source });
            }
        }, {
            type: 'layoutPanel',
            title: 'Properties',
            contentContainer: 'PropertiesPanel'
        }]
    }]
    }];
}
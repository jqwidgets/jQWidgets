import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDockingLayoutComponent } from 'jqwidgets-ng/jqxdockinglayout';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    @ViewChild('myDockingLayout', { static: false }) myDockingLayout: jqxDockingLayoutComponent;

    ngAfterViewInit(): void {
        this.myDockingLayout.createComponent({ width: 800, height: 600, layout: this.layout() })
    }

	getWidth() : any {
		if (document.body.offsetWidth < 800) {
			return '90%';
		}
		
		return 800;
	}

    layout(): any[] {
        let layout = [
            {
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
                },
                {
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
                        },
                        {
                            type: 'documentPanel',
                            title: 'Document 2',
                            contentContainer: 'Document2Panel'
                        }]
                    },
                    {
                        type: 'tabbedGroup',
                        height: 200,
                        pinnedHeight: 30,
                        items: [{
                            type: 'layoutPanel',
                            title: 'Error List',
                            contentContainer: 'ErrorListPanel'
                        }]
                    }]
                },
                {
                    type: 'tabbedGroup',
                    width: 220,
                    minWidth: 200,
                    items: [
                        {
                            type: 'layoutPanel',
                            title: 'Solution Explorer',
                            contentContainer: 'SolutionExplorerPanel',
                            initContent: () => {
                                // initialize a jqxTree inside the Solution Explorer Panel
                                let source = [{
                                    icon: './../../../images/earth.png',
                                    label: 'Project',
                                    expanded: true,
                                    items: [
                                        {
                                            icon: './../../../images/folder.png',
                                            label: 'css',
                                            expanded: true,
                                            items: [{
                                                icon: './../../../images/nav1.png',
                                                label: 'jqx.base.css'
                                            },
                                            {
                                                icon: './../../../images/nav1.png',
                                                label: 'jqx.energyblue.css'
                                            }, {
                                                icon: './../../../images/nav1.png',
                                                label: 'jqx.orange.css'
                                            }]
                                        },
                                        {
                                            icon: './../../../images/folder.png',
                                            label: 'scripts',
                                            items: [{
                                                icon: './../../../images/nav1.png',
                                                label: 'jqxcore.js'
                                            },
                                            {
                                                icon: './../../../images/nav1.png',
                                                label: 'jqxdata.js'
                                            }, {
                                                icon: './../../../images/nav1.png',
                                                label: 'jqxgrid.js'
                                            }]
                                        },
                                        {
                                            icon: './../../../images/nav1.png',
                                            label: 'index.htm'
                                        }]
                                }];

                                jqwidgets.createInstance('#treeContainer', 'jqxTree', { width: '100%', height: '99%', source: source })
                            }
                        },
                        {
                            type: 'layoutPanel',
                            title: 'Properties',
                            contentContainer: 'PropertiesPanel'
                        }]
                }]
            },
            {
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
        return layout;
    }
}

/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createLayout(selector, additionalSelector) {
    // the 'layout' JSON array defines the internal structure of the layout
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
                    initContent: function () {
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

                        // options for the jqxTree
                        let treeOptions: jqwidgets.TreeOptions = {
                            source: source,
                            width: 190
                        };

                        // create an instance of the jqxTree
                        let myTree: jqwidgets.jqxTree = jqwidgets.createInstance(additionalSelector, 'jqxTree', treeOptions);
                    }
                }, {
                        type: 'layoutPanel',
                        title: 'Properties',
                        contentContainer: 'PropertiesPanel'
                    }]
            }]
    }];

    // initialization options - validated in typescript
    // jqwidgets.LayoutOptions has generated TS definition
    let options: jqwidgets.LayoutOptions = {
        width: 800,
        height: 600,
        layout: layout
    };

    // create an instance of the Layout
    let myTree: jqwidgets.jqxLayout = jqwidgets.createInstance(selector, 'jqxLayout', options);
}
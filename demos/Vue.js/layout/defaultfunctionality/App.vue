<template>
    <JqxLayout :width="getWidth" :height="600" :layout="layout">
        <!--The panel content divs can have a flat structure-->
        <!--autoHideGroup-->
        <div data-container="ToolboxPanel">
            List of tools
        </div>
        <div data-container="HelpPanel">
            Help topics
        </div>
        <!--documentGroup-->
        <div data-container="Document1Panel">
            Document 1 content
        </div>
        <div data-container="Document2Panel">
            Document 2 content
        </div>
        <!--bottom tabbedGroup-->
        <div data-container="ErrorListPanel">
            List of errors
        </div>
        <div data-container="OutputPanel">
            Output
        </div>
        <!--right tabbedGroup-->
        <div data-container="SolutionExplorerPanel">
            <div id="treeContainer" style="border: none;"></div>
        </div>
        <div data-container="PropertiesPanel">
            List of properties
        </div>
    </JqxLayout>

</template>
<script>
    import JqxLayout from "jqwidgets-scripts/jqwidgets-vue/vue_jqxlayout.vue";
    import JqxTree from "jqwidgets-scripts/jqwidgets-vue/vue_jqxtree.vue";

    export default {
        components: {
            JqxLayout
        },
        data: function () {
            return {
                getWidth: '90%',
                layout: [{
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
                            initContent: () => {
                                jqwidgets.createInstance('#treeContainer', 'jqxTree', { source: this.source, height: '99%', width: '100%' })
                            }
                        },
                        {
                            type: 'layoutPanel',
                            title: 'Properties',
                            contentContainer: 'PropertiesPanel'
                        }]
                    }]
                }]
            }
        },
        beforeCreate: function () {
            this.source = [{
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
        }
    }
</script>

<style>
    .jqx-layout-group-auto-hide-content-vertical {
        width: 200px;
    }
</style>

<template>
    <JqxDockingLayout :width="'100%'" :height="'90%'" :layout="layout">
        <!--The panel content divs can have a flat structure-->
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
            Solution structure
        </div>
        <div data-container="PropertiesPanel">
            List of properties
        </div>
    </JqxDockingLayout>
</template>

<script>
    import JqxDockingLayout from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdockinglayout.vue";

    export default {
        components: {
            JqxDockingLayout
        },
        data: function () {
            return {
                layout: [
                    {
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
                    }
                ]
            }
        }
    };
</script>

<style>
    .jqx-layout-group-auto-hide-content-vertical {
        width: 200px;
    }

    html, body {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
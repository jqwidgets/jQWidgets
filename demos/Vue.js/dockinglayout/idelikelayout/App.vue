<template>
    <div>
        <JqxDockingLayout ref="myDockingLayout" :width="getWidth" :height="600" :layout="layout">
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
                <div style="padding: 5px;">
                    <textarea id="Document1TextArea" style="margin: 5px;"></textarea>
                </div>
            </div>
            <div data-container="Document2Panel">
                <div style="padding: 5px;">
                    <textarea id="Document2TextArea" style="margin: 5px;"></textarea>
                </div>
            </div>
            <!--bottom tabbedGroup-->
            <div data-container="ErrorListPanel">
                No errors.
            </div>
            <div data-container="PerformancePanel">
                <div id="cpuUsage" style="width: 99%; height: 100px;">
                </div>
            </div>
            <!--right tabbedGroup-->
            <div data-container="SolutionExplorerPanel">
                <div id="solutionExplorerTree" style="border: none;">
                </div>
            </div>
            <div data-container="PropertiesPanel">
                List of properties
            </div>
        </JqxDockingLayout>

        <br />

        <JqxButton ref="viewServerExplorerBtn" :width="200"
                   @click="viewServerExplorerBtnOnClick()">
            View Server Explorer
        </JqxButton>
    </div>
</template>

<script>
    import JqxDockingLayout from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdockinglayout.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";
    import JqxTextArea from "jqwidgets-scripts/jqwidgets-vue/vue_jqxtextarea.vue";
    import JqxChart from "jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue";
    import JqxTree from "jqwidgets-scripts/jqwidgets-vue/vue_jqxtree.vue";

    export default {
        components: {
            JqxDockingLayout,
            JqxButton
        },
        data: function () {
            return {
                getWidth: '90%',
                layout: [
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
                                        let textArea = jqwidgets.createInstance('#Document1TextArea', 'jqxTextArea', { width: '100%', height: 400 });
                                        textArea.val('<!DOCTYPE html>\n<html>\n\t<head>\n\t<title>Page Title</title>\n\t</head>\n\t<body>\n\t\t<h1>This is a Heading</h1>\n\t\t<p>This is a paragraph.</p>\n\t</body>\n</html>');
                                    }
                                }, {
                                    type: 'documentPanel',
                                    title: 'New Document',
                                    contentContainer: 'Document2Panel',
                                    initContent: () => {
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
                                    initContent: () => {
                                        let data = [1, 5, 12, 5, 33, 38, 40, 42, 18, 18, 70, 76, 75, 99, 100, 88, 64, 13, 19, 15];

                                        let chartOptions = {
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
                                                    colorFunction: function (value, itemIndex, serie, group) {
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
                                        jqwidgets.createInstance('#cpuUsage', 'jqxChart', chartOptions);
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
                                            label: 'index.htm',
                                            selected: true
                                        }]
                                    }];
                                    jqwidgets.createInstance('#solutionExplorerTree', 'jqxTree', { width: 190, height: '99%', source: source });
                                }
                            }, {
                                type: 'layoutPanel',
                                title: 'Properties',
                                contentContainer: 'PropertiesPanel'
                            }]
                        }]
                    }
                ]
            }
        },
        methods: {
            viewServerExplorerBtnOnClick: function () {
                this.$refs.myDockingLayout.addFloatGroup(300, 200, { x: 500, y: 200 }, 'layoutPanel', 'Server Explorer', '<div id="serverExplorerTree" />',
                    () => {
                        let source = [{
                            icon: '../../../images/dataadapter.png',
                            label: 'Data Connections',
                            expanded: true,
                            items: [{
                                icon: '../../../images/validator.png',
                                label: 'northwinddatabase.mdf'
                            }]
                        }, {
                            icon: '../../../images/nav1.png',
                            label: 'Servers',
                            items: [{
                                icon: '../../../images/nav1.png',
                                label: 'WorkStation3-PC'
                            }, {
                                icon: '../../../images/dragdrop.png',
                                label: 'SharePoint Connections'
                            }]
                        }];
                        jqwidgets.createInstance('#serverExplorerTree', 'jqxTree', { width: '99%', height: '99%', source: source });
                    }
                );
                this.$refs.viewServerExplorerBtn.disabled = true;
            }
        }
    };
</script>

<style>
    .jqx-layout-group-auto-hide-content-vertical {
        width: 200px;
    }
</style>
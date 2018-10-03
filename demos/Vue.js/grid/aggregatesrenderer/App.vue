<template>
    <JqxGrid :width="getWidth" :source="dataAdapter" :showstatusbar="true"
             :editable="true" :showaggregates="true" :statusbarheight="50"
             :columns="columns" :selectionmode="'singlecell'">
    </JqxGrid>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";

    export default {
        components: {
            JqxGrid
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    {
                        text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 190,
                        aggregatesrenderer: (aggregates, column, element) => {
                            let renderstring = '<div class="jqx-widget-content jqx-widget-content" style="float: left; width: 100%; height: 100%; "/>';
                            return renderstring;
                        }
                    },
                    {
                        text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 190,
                        aggregatesrenderer: (aggregates, column, element) => {
                            let renderstring = '<div class="jqx-widget-content jqx-widget-content" style="float: left; width: 100%; height: 100%; "/>';
                            return renderstring;
                        }
                    },
                    {
                        text: 'Product', datafield: 'productname', width: 170,
                        aggregatesrenderer: (aggregates, column, element) => {
                            let renderstring = '<div class="jqx-widget-content jqx-widget-content" style="float: left; width: 100%; height: 100%; "/>';
                            return renderstring;
                        }
                    },
                    {
                        text: 'Quantity', datafield: 'quantity', width: 85, cellsalign: 'right', cellsformat: 'n2', aggregates: ['min', 'max'],
                        aggregatesrenderer: (aggregates, column, element) => {
                            let renderstring = '<div class="jqx-widget-content jqx-widget-content" style="float: left; width: 100%; height: 100%; ">';
                            for (let obj in aggregates) {
                                let name = obj == 'min' ? 'Min' : 'Max';
                                let color = obj == 'max' ? 'green' : 'red';
                                let value = aggregates[obj];
                                renderstring += '<div style="color: ' + color + '; position: relative; margin: 6px; text-align: right; overflow: hidden">' + name + ': ' + value + '</div>';
                            }
                            renderstring += '</div>';
                            return renderstring;
                        }
                    },
                    {
                        text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum', 'avg'],
                        aggregatesrenderer: (aggregates, column, element, summaryData) => {
                            let renderstring = '<div class="jqx-widget-content jqx-widget-content" style="float: left; width: 100%; height: 100%;">';
                            for (let obj in aggregates) {
                                let name = obj == 'sum' ? 'Sum' : 'Avg';
                                let color = 'green';
                                let value = aggregates[obj];

                                if (obj == 'sum' && summaryData['sum'] < 650) {
                                    color = 'red';
                                }
                                if (obj == 'avg' && summaryData['avg'] < 4) {
                                    color = 'red';
                                }

                                renderstring += '<div style="color: ' + color + '; position: relative; margin: 6px; text-align: right; overflow: hidden;">' + name + ': ' + value + '</div>';
                            }
                            renderstring += '</div>';
                            return renderstring;
                        }
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(200, false),
                datatype: 'array',
                updaterow: (rowid, rowdata, commit) => {
                    // synchronize with the server - send update command
                    commit(true);
                },
                datafields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'available', type: 'bool' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' }
                    ]
            };
        }
    }
</script>

<style>
</style>
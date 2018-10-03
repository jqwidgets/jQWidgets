<template>
    <JqxDataTable :width="getWidth" :source="dataAdapter" :columns="columns"
                  :altRows="true" :pageable="true" :showAggregates="true"
                  :pagerButtonsCount="10" :aggregatesHeight="25">
    </JqxDataTable>
</template>

<script>
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";

    export default {
        components: {
            JqxDataTable
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 90 },
                    { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 90 },
                    { text: 'Product', datafield: 'productname', width: 170 },
                    { text: 'Quantity', datafield: 'quantity', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'n2' },
                    {
                        text: 'Price', datafield: 'price', cellsAlign: 'right', align: 'right', cellsFormat: 'c2',
                        aggregates:
                            [{
                                'Total': (aggregatedValue, currentValue, column, record) => {
                                    let total = currentValue * parseInt(record['quantity']);
                                    return aggregatedValue + total;
                                }
                            }],
                        aggregatesRenderer: (aggregates, column, element) => {
                            let renderString = '<div style="margin: 4px; float: right;  height: 100%;">';
                            renderString += '<strong>Total: </strong>' + aggregates.Total + '</div>';
                            return renderString;
                        }
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localData: generatedata(200, false),
                dataType: 'array',
                datafields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' }
                    ],
                updateRow: function (rowid, rowdata, commit) {
                    // synchronize with the server - send update command
                    commit(true);
                }
            };
        }
    };
</script>

<style>
</style>
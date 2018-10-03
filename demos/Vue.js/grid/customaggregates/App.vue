<template>
    <JqxGrid ref="myGrid"
             :width="getWidth" :source="dataAdapter" :columns="columns"
             :showstatusbar="true" :altrows="true" :showaggregates="true"
             :statusbarheight="25">
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
                    { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 150 },
                    { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 150 },
                    { text: 'Product', datafield: 'productname', width: 200 },
                    { text: 'Quantity', datafield: 'quantity', width: 100, cellsalign: 'right', cellsformat: 'n2' },
                    {
                        text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2',
                        aggregates: [{
                            '<b>Total</b>': (aggregatedValue, currentValue, column, record) => {
                                let total = currentValue * parseInt(record['quantity']);
                                return aggregatedValue + total;
                            }
                        }]
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(200, false),
                datatype: 'array',
                datafields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' }
                    ],
                updaterow: (rowid, rowdata, commit) => {
                    // synchronize with the server - send update command
                    commit(true);
                }
            }
        }
    }
</script>

<style>
</style>
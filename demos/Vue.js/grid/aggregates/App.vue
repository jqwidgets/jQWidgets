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
                    { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 170 },
                    { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 170 },
                    {
                        text: 'Product', datafield: 'productname', width: 170,
                        aggregates: ['count',
                            {
                                'Cappuccino Items':
                                    (aggregatedValue, currentValue) => {
                                        if (currentValue == 'Cappuccino') {
                                            return aggregatedValue + 1;
                                        }
                                        return aggregatedValue;
                                    }
                            }
                        ]
                    },
                    {
                        text: 'In Stock', datafield: 'available', columntype: 'checkbox', width: 125,
                        aggregates: [{
                            'In Stock':
                                (aggregatedValue, currentValue) => {
                                    if (currentValue) {
                                        return aggregatedValue + 1;
                                    }
                                    return aggregatedValue;
                                }
                        },
                        {
                            'Not In Stock':
                                (aggregatedValue, currentValue) => {
                                    if (!currentValue) {
                                        return aggregatedValue + 1;
                                    }
                                    return aggregatedValue;
                                }
                        }
                        ]
                    },
                    {
                        text: 'Quantity', datafield: 'quantity', width: 85, cellsalign: 'right', cellsformat: 'n2', aggregates: ['min', 'max'],
                        aggregatesrenderer: (aggregates) => {
                            let renderstring = '';
                            for (let obj in aggregates) {
                                let name = obj == 'min' ? 'Min' : 'Max';
                                let value = aggregates[obj];
                                renderstring += '<div style="position: relative; margin: 4px; overflow: hidden;">' + name + ': ' + value + '</div>';
                            }
                            return renderstring;
                        }
                    },
                    { text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum', 'avg'] }
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
                        { name: 'available', type: 'bool' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' }
                    ],
                updaterow: (rowid, rowdata) => {
                    // synchronize with the server - send update command
                }
            };
        }
    }
</script>

<style>
</style>
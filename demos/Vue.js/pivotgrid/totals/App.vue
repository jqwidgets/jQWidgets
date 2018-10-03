<template>
    <div>
        <JqxPivotGrid style="width: 800px; height: 400px;"
                      ref="pivotGrid"
                      :source="pivotDataSource"
                      :treeStyleRows="false"
                      :autoResize="false"
                      :multipleSelectionEnabled="true">
        </JqxPivotGrid>
    </div>
</template>

<script>
    import JqxPivotGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxpivotgrid.vue';

    export default {
        components: {
            JqxPivotGrid
        },
        data: function () {
            return {
                pivotDataSource: this.pivotDataSource
            }
        },
        beforeCreate: function () {

            const createPivotDataSource = function () {
                // prepare sample data
                let data = new Array();

                let firstNames =
                    [
                        "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter"
                    ];

                let lastNames =
                    [
                        "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson"
                    ];

                let productNames =
                    [
                        "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Cramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"
                    ];

                let priceValues =
                    [
                        "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
                    ];

                for (let i = 0; i < 200; i++) {
                    let row = {};
                    let productindex = Math.floor(Math.random() * productNames.length);
                    let price = parseFloat(priceValues[productindex]);
                    let quantity = 1 + Math.round(Math.random() * 10);

                    row["firstname"] = firstNames[Math.floor(Math.random() * firstNames.length)];
                    row["lastname"] = lastNames[Math.floor(Math.random() * lastNames.length)];
                    row["productname"] = productNames[productindex];
                    row["price"] = price;
                    row["quantity"] = quantity;
                    row["total"] = price * quantity;

                    data[i] = row;
                }

                // create a data source and data adapter
                let source =
                    {
                        localdata: data,
                        datatype: "array",
                        datafields:
                            [
                                { name: 'firstname', type: 'string' },
                                { name: 'lastname', type: 'string' },
                                { name: 'productname', type: 'string' },
                                { name: 'quantity', type: 'number' },
                                { name: 'price', type: 'number' },
                                { name: 'total', type: 'number' }
                            ]
                    };

                let dataAdapter = new jqx.dataAdapter(source);
                dataAdapter.dataBind();

                // create a pivot data source from the dataAdapter
                let pivotDataSource = new jqx.pivot(
                    dataAdapter,
                    {
                        pivotValuesOnRows: false,
                        totals: { rows: { subtotals: true, grandtotals: true }, columns: { subtotals: false, grandtotals: true } },
                        rows: [{ dataField: 'firstname' }, { dataField: 'lastname' }],
                        columns: [{ dataField: 'productname' }],
                        values: [
                            { dataField: 'price', 'function': 'sum', text: 'sum', width: NamedNodeMap, formatSettings: { prefix: '$', decimalPlaces: 2 } },
                            { dataField: 'price', 'function': 'count', text: 'count' },
                            { dataField: 'price', 'function': 'average', text: 'average', formatSettings: { prefix: '$', decimalPlaces: 2 } }
                        ]
                    }
                );

                return pivotDataSource;		

            }
            this.pivotDataSource = createPivotDataSource();
        },
        mounted: function () {
            this.$refs.pivotGrid.getPivotRows().items[0].expand();
            this.$refs.pivotGrid.refresh();
        }
    }
</script>
<style>
</style>
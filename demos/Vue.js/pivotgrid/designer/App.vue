<template>
    <table>
        <tr>
            <td>
                <JqxPivotDesigner style="width: 250px; height: 400px;"
                                  ref="pivotDesigner" 
                                  :type="'pivotGrid'">
                </JqxPivotDesigner>
            </td>
            <td>
                <JqxPivotGrid style="width: 550px; height: 400px;"
                              ref="pivotGrid" 
                              :source="pivotDataSource"
                              :treeStyleRows="false"
                              :autoResize="false"
                              :multipleSelectionEnabled="true">
                </JqxPivotGrid>
            </td>
        </tr>
    </table>
</template>

<script>
    import JqxPivotGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxpivotgrid.vue';
    import JqxPivotDesigner from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxpivotdesigner.vue';

    export default {
        components: {
            JqxPivotGrid,
            JqxPivotDesigner
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
                        "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
                    ];

                let lastNames =
                    [
                        "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
                    ];

                let productNames =
                    [
                        "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Cramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"
                    ];

                let priceValues =
                    [
                        "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
                    ];

                for (let i = 0; i < 500; i++) {
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
                        customAggregationFunctions: {
                            'var': function (values) {
                                if (values.length <= 1)
                                    return 0;

                                // sample's mean
                                var mean = 0;
                                for (var i = 0; i < values.length; i++)
                                    mean += values[i];

                                mean /= values.length;

                                // calc squared sum
                                var ssum = 0;
                                for (var i = 0; i < values.length; i++)
                                    ssum += Math.pow(values[i] - mean, 2)

                                // calc the variance
                                var variance = ssum / values.length;

                                return variance;
                            }
                        },
                        pivotValuesOnRows: false,
                        rows: [{ dataField: 'firstname', text: 'First Name' }, { dataField: 'lastname' }],
                        columns: [{ dataField: 'productname', align: 'left' }],
                        filters: [
                            {
                                dataField: 'productname',
                                text: 'Product name',
                                filterFunction: function (value) {
                                    if (value == "Black Tea" || value == "Green Tea")
                                        return true;

                                    return false;
                                }
                            }
                        ],
                        values: [
                            { dataField: 'price', 'function': 'sum', text: 'Sum', align: 'left', formatSettings: { prefix: '$', decimalPlaces: 2, align: 'center' }, cellsClassName: 'myItemStyle', cellsClassNameSelected: 'myItemStyleSelected' },
                            { dataField: 'price', 'function': 'count', text: 'Count', className: 'myItemStyle', classNameSelected: 'myItemStyleSelected' }
                        ]
                    }
                );

                return pivotDataSource;
            };

            this.pivotDataSource = createPivotDataSource();
        },
        mounted: function() {
            let pivotGridComponent = this.$refs.pivotGrid;
            let pivotGridInstance = pivotGridComponent.getInstance();

            this.$refs.pivotDesigner.target = pivotGridInstance;
            this.$refs.pivotDesigner.refresh();
        }
    }
</script>
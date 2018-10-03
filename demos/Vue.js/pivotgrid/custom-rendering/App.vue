<template>
    <JqxPivotGrid style="width: 800px; height: 400px;"
                  :source="pivotDataSource"
                  :itemsRenderer="myItemsRenderer"
                  :cellsRenderer="myCellsRenderer"
                  :treeStyleRows="false"
                  :autoResize="false"
                  :multipleSelectionEnabled="true">
    </JqxPivotGrid>
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
                        pivotValuesOnRows: false,
                        rows: [{ dataField: 'firstname' }, { dataField: 'lastname' }],
                        columns: [{ dataField: 'productname' }],
                        filters: [
                            {
                                dataField: 'productname',
                                filterFunction: function (value) {
                                    if (value == "Black Tea" || value == "Green Tea")
                                        return true;

                                    return false;
                                }
                            }
                        ],
                        values: [
                            { dataField: 'price', 'function': 'sum', text: 'Sum', formatSettings: { prefix: '$', decimalPlaces: 2 } },
                            { dataField: 'price', 'function': 'count', text: 'Count' },
                            { dataField: 'price', 'function': 'average', text: 'Average', formatSettings: { prefix: '$', decimalPlaces: 2 } }
                        ]
                    }
                );

                return pivotDataSource;
            }

            this.pivotDataSource = createPivotDataSource();
        },
        methods: {
            myItemsRenderer: function(pivotItem) {
                let backgroundColor = pivotItem.isColumn ? 'rgba(187, 232, 227, 255)' : 'rgba(203, 254, 187, 255)';
                if (pivotItem.isSelected)
                    backgroundColor = pivotItem.isColumn ? 'rgba(167, 212, 207, 255)' : 'rgba(183, 234, 157, 255)';

                let sortElement = '';
                if (pivotItem.hierarchy.getSortItem() == pivotItem) {
                    let elementClass = pivotItem.hierarchy.getSortOrder() == 'desc' ? "jqx-icon-arrow-down" : "jqx-icon-arrow-up";
                    sortElement = "<div id='sortElement' class='" + elementClass + "' style='position: relative; float: right; margin-right: 0px; width: 16px; height: 100%; line-height: 100%;'></div>";
                }

                return "<div style='background: "
                    + backgroundColor
                    + "; width: calc(100% - 8px); height: calc(100% - 8px); padding: 4px;'>"
                    + pivotItem.text
                    + sortElement
                    + "</div>";
            },
            myCellsRenderer: function(pivotCell) {

                let colors = ['rgba(248, 105, 107, 255)', 'rgba(250,170,120,255)', 'rgba(255,230,130,255)', 'rgba(175,215,130,255)', 'rgba(100,190,120,255)'];
                let selectedColors = ['rgba(228, 85, 87, 255)', 'rgba(230,150,100,255)', 'rgba(235,210,110,255)', 'rgba(155,195,110,255)', 'rgba(80,170,100,255)'];

                let val = Math.min(pivotCell.value, 20);
                let backgroundColor = pivotCell.isSelected ? selectedColors[Math.round(val / 5)] : colors[Math.round(val / 5)];

                if (pivotCell.pivotColumn.text != 'Sum')
                    backgroundColor = pivotCell.isSelected ? 'rgba(225, 225, 225, 255)' : 'rgba(255, 255, 255, 255)';

                if (pivotCell.isSelected)
                    backgroundColor

                let cellText = pivotCell.value == 0 ? '' : pivotCell.formattedValue;

                return "<div style='background: " + backgroundColor + "; width: calc(100%-8px); height: 100%; padding: 4px; margin: 0px;'>" + cellText + "</div>";
            }
        }
    }
</script>
<template>
    <div>
        <JqxPivotGrid style="width: 800px; height: 400px;"
                      ref="pivotGrid"         
                      @pivotcelldblclick="onPivotCellDblClick($event)"
                      :source="pivotDataSource"
                      :treeStyleRows="true"
                      :autoResize="false"
                      :multipleSelectionEnabled="true">
        </JqxPivotGrid>
        <JqxWindow ref="drillThroughWindow"
                   :autoOpen="false"
                   :width="500"
                   :height="300"
                   :maxHeight="400"
                   :minHeight="200"
                   :maxWidth="700"
                   :minWidth="200"
                   :showCollapseButton="true">
            <div>
                Drillthrough records
            </div>
            <div style="overflow: hidden;">
                <JqxDataTable ref="tableSrcRecords"
                              :width="'100%'"
                              :height="'100%'"
                              :pageable="true"
                              :pagerButtonsCount="10"
                              :columns="tableSrcRecordsColumns"
                              :columnsResize="true">
                </JqxDataTable>
            </div>
        </JqxWindow>
    </div>
</template>

<script>
    import JqxPivotGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxpivotgrid.vue';
    import JqxWindow from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxwindow.vue';
    import JqxDataTable from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue';

    export default {
        components: {
            JqxPivotGrid,
            JqxWindow,
            JqxDataTable
        },
        data: function () {
            return {
                pivotDataSource: this.pivotDataSource,
                tableSrcRecordsColumns: [
                    { text: 'First name', dataField: 'firstname', width: 200 },
                    { text: 'Last name', dataField: 'lastname', width: 200 },
                    { text: 'Product', editable: false, dataField: 'productname', width: 180 },
                    { text: 'Quantity', dataField: 'quantity', width: 80, cellsAlign: 'right', align: 'right' },
                    { text: 'Unit Price', dataField: 'price', width: 90, cellsAlign: 'right', align: 'right', cellsFormat: 'c2' },
                    { text: 'Total', dataField: 'total', cellsAlign: 'right', align: 'right', cellsFormat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {

            this.sampleData = null;

            const createPivotDataSource = () => {
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
                        "Black Tea", "Green Tea", "Caffe Espresso"
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

                this.sampleData = data;

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
                            { dataField: 'price', 'function': 'sum', text: 'sum', formatSettings: { prefix: '$', decimalPlaces: 2 } },
                            { dataField: 'price', 'function': 'count', text: 'count' },
                            { dataField: 'price', 'function': 'average', text: 'average', formatSettings: { prefix: '$', decimalPlaces: 2 } }
                        ]
                    }
                );

                return pivotDataSource;     
            };

            this.pivotDataSource = createPivotDataSource();
        },
        mounted: function() {
            let pivotRow = this.$refs.pivotGrid.getPivotRows().items[0];
            let pivotColumn = this.$refs.pivotGrid.getPivotColumns().items[0].valueItems[0];

            this.drillThrough(pivotRow, pivotColumn);
        },
        methods: {
            drillThrough: function (pivotRow, pivotColumn) {
                let pivotGridInstance = this.$refs.pivotGrid.getInstance();
                let rows = pivotGridInstance.getPivotCells().drillThroughCell(pivotRow, pivotColumn);

                let drillThroughRows = [];
                for (let i = 0; i < rows.length; i++)
                    drillThroughRows[i] = this.sampleData[rows[i]]

                let drillThroughSrc =
                    {
                        localData: drillThroughRows,
                        dataType: "array",
                        dataFields:
                            [
                                { name: 'firstname', type: 'string' },
                                { name: 'lastname', type: 'string' },
                                { name: 'productname', type: 'string' },
                                { name: 'quantity', type: 'number' },
                                { name: 'price', type: 'number' },
                                { name: 'total', type: 'number' }
                            ]
                    };

                let drillThroughDataAdapter = new jqx.dataAdapter(drillThroughSrc);
                this.$refs.tableSrcRecords.source = drillThroughDataAdapter;

                this.$refs.drillThroughWindow.open();
            },
            onPivotCellDblClick: function (event) {
                var args = event.args;
                this.drillThrough(args.pivotRow, args.pivotColumn);
            }
        }
    }
</script>
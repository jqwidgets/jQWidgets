<template>
    <JqxDataTable :width="getWidth" :source="dataAdapter" :columns="columns"
                  :altRows="true" :pageable="true" :sortable="true"
                  :enableHover="false" :selectionMode="'none'">
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
                    { text: 'Product Name', dataField: 'ProductName', width: 200 },
                    { text: 'Quantity per Unit', dataField: 'QuantityPerUnit', cellClassName: this.cellClass, cellsAlign: 'right', align: 'right', width: 200 },
                    { text: 'Unit Price', dataField: 'UnitPrice', align: 'right', cellClassName: this.cellClass, cellsAlign: 'right', cellsformat: 'c2', width: 200 },
                    { text: 'Units In Stock', dataField: 'UnitsInStock', cellsAlign: 'right', width: 250, align: 'right', cellClassName: this.cellClass }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                dataType: 'xml',
                dataFields: [
                    { name: 'ProductName', type: 'string' },
                    { name: 'QuantityPerUnit', type: 'int' },
                    { name: 'UnitPrice', type: 'float' },
                    { name: 'UnitsInStock', type: 'float' },
                    { name: 'Discontinued', type: 'bool' }
                ],
                root: 'Products',
                record: 'Product',
                id: 'ProductID',
                url: 'products.xml'
            };
        },
        methods: {
            cellClass: function (row, dataField, cellText, rowData) {
                let cellValue = rowData[dataField];
                switch (dataField) {
                    case 'QuantityPerUnit':
                        if (cellValue < 11) {
                            return 'min';
                        }
                        if (cellValue < 14) {
                            return 'minavg';
                        }
                        if (cellValue < 50) {
                            return 'avg';
                        }
                        return 'max';
                    case 'UnitPrice':
                        if (cellValue < 20) {
                            return 'min';
                        }
                        if (cellValue < 30) {
                            return 'minavg';
                        }
                        if (cellValue < 50) {
                            return 'avg';
                        }
                        return 'max';
                    case 'UnitsInStock':
                        if (cellValue < 20) {
                            return 'min';
                        }
                        if (cellValue < 30) {
                            return 'minavg';
                        }
                        if (cellValue < 50) {
                            return 'avg';
                        }
                        return 'max';
                }
            }
        }
    };
</script>

<style>

    .max:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected), .jqx-widget .max:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected) {
        color: black;
        background-color: #63be7b;
    }

    .avg:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected), .jqx-widget .avg:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected) {
        color: black;
        background-color: #f8e984;
    }

    .minavg:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected), .jqx-widget .minavg:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected) {
        color: black;
        background-color: #f9806f;
    }

    .min:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected), .jqx-widget .min:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected) {
        color: black;
        background-color: #f8696b;
    }
</style>
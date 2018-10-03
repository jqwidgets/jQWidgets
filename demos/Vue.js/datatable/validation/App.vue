<template>
    <div>
        <JqxDataTable :width="650" :source="dataAdapter" :columns="columns"
                      :altRows="true" :pageable="true" :sortable="true"
                      :editable="true" :pagerButtonsCount="8">
        </JqxDataTable>
    </div>
</template>

<script>
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";

    export default {
        components: {
            JqxDataTable
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Order ID', editable: false, dataField: 'OrderID', width: 100 },
                    {
                        text: 'Freight', dataField: 'Freight', cellsFormat: 'f2', cellsAlign: 'right', align: 'right', width: 100,
                        validation: (cell, value) => {
                            if (value > 1000 || value < 0) return { message: 'Freight should be in the 0-1000 interval', result: false };
                            return true;
                        }
                    },
                    {
                        text: 'Ship Country', dataField: 'ShipCountry', width: 150,
                        validation: (cell, value) => {
                            if (value.length < 5) return { message: 'Ship Country should be minimum 5 characters', result: false };
                            return true;
                        }
                    },
                    {
                        text: 'Shipped Date', dataField: 'ShippedDate', cellsAlign: 'right', align: 'right', cellsFormat: 'dd/MM/yyyy',
                        validation: (cell, value) => {
                            let date = new Date(value);
                            if (date.getFullYear() > 2014 || date.getFullYear() < 1990) {
                                return { message: 'Shipped Date should be in the 1990 - 2014 interval', result: false };
                            }
                            return true;
                        }
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                dataFields: [
                    { name: 'OrderID', type: 'int' },
                    { name: 'Freight', type: 'float' },
                    { name: 'ShipName', type: 'string' },
                    { name: 'ShipAddress', type: 'string' },
                    { name: 'ShipCity', type: 'string' },
                    { name: 'ShipCountry', type: 'string' },
                    { name: 'ShippedDate', type: 'date' }
                ],
                root: 'Orders',
                record: 'Order',
                dataType: 'xml',
                id: 'OrderID',
                url: 'orderdetails.xml'
            };
        }
    };
</script>

<style>
</style>
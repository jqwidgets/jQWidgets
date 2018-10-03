<template>
    <JqxDataTable :width="getWidth" :source="source" :columns="columns"
                  :pageable="true" :sortable="true" :columnsResize="true"
                  :pagerButtonsCount="10">
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
                source: {
                    dataType: 'xml',
                    dataFields: [
                        { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
                        { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
                        { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
                        { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress' },
                        { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
                        { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
                    ],
                    root: 'entry',
                    record: 'content',
                    id: 'm\\:properties>d\\:OrderID',
                    url: 'orders.xml'
                },
                columns: [
                    { text: 'Ship Name', dataField: 'ShipName', pinned: true, width: 300 },
                    { text: 'Ship City', dataField: 'ShipCity', width: 250 },
                    { text: 'Ship Address', dataField: 'ShipAddress', width: 350 },
                    { text: 'Ship Country', dataField: 'ShipCountry', width: 150 },
                    { text: 'Shipped Date', dataField: 'ShippedDate', width: 250, cellsFormat: 'D' },
                    { text: 'Freight', dataField: 'Freight', width: 100, cellsFormat: 'f2', cellsalign: 'right' }
                ]
            }
        }
    };
</script>

<style>
</style>
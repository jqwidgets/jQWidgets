<template>
    <div style="font-size: 13px; font-family: Verdana; float: left">

        <JqxGrid :width="getWidth" height="450" :source="dataAdapter" :columns="columns"
                 :filterable="true" :sortable="true" :altrows="true" :selectionmode="'checkbox'">
        </JqxGrid>

    </div>
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
                    { text: 'Ship Name', datafield: 'ShipName', width: 250 },
                    { text: 'Shipped Date', datafield: 'ShippedDate', width: 100, cellsformat: 'yyyy-MM-dd' },
                    { text: 'Freight', datafield: 'Freight', width: 150, cellsformat: 'F2', cellsalign: 'right' },
                    { text: 'Ship City', datafield: 'ShipCity', width: 150 },
                    { text: 'Ship Country', datafield: 'ShipCountry' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'xml',
                datafields: [
                    { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
                    { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
                    { name: 'ShipName', map: 'm\\:properties>d\\:ShipName', type: 'string' },
                    { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress', type: 'string' },
                    { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity', type: 'string' },
                    { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry', type: 'string' }
                ],
                root: 'entry',
                record: 'content',
                id: 'm\\:properties>d\\:OrderID',
                url: 'orders.xml'
            };
        }
    }
</script>

<style>
</style>
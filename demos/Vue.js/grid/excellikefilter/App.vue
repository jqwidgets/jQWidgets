<template>
    <JqxGrid :width="getWidth" :source="dataAdapter" :columns="columns"
             :filterable="true" :sortable="true" :columnsresize="true"
             :autoshowfiltericon="true" :filtermode="'excel'">
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
                    { text: 'Ship Name', datafield: 'ShipName', width: 250 },
                    { text: 'Ship City', datafield: 'ShipCity', width: 250 },
                    { text: 'Ship Country', datafield: 'ShipCountry', width: 200 },
                    { text: 'Freight', datafield: 'Freight', width: 130, cellsformat: 'F2', cellsalign: 'right' },
                    { text: 'Ship Address', datafield: 'ShipAddress', width: 350 }
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
<template>
    <div style="font-size: 13px; font-family: Verdana; float: left;">

        <JqxGrid ref="myGrid"
                 :width="getWidth" :source="dataAdapter" :columns="columns">
        </JqxGrid>

        <div style="margin-top: 30px">

            <JqxButton @click="btnOnClick()" :width="150">Auto Resize Columns</JqxButton>

        </div>

    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxGrid,
            JqxButton
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Ship Name', datafield: 'ShipName', width: 50 },
                    { text: 'Shipped Date', datafield: 'ShippedDate', width: 30, cellsformat: 'D' },
                    { text: 'Freight', datafield: 'Freight', width: 30, cellsformat: 'F2', cellsalign: 'right' },
                    { text: 'Ship Address', datafield: 'ShipAddress', width: 50 },
                    { text: 'Ship City', datafield: 'ShipCity', width: 100 },
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
        },
        methods: {
            btnOnClick: function () {
                this.$refs.myGrid.autoresizecolumns();
            }
        }
    }
</script>
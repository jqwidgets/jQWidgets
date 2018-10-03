<template>
    <div style="font-size: 13px; font-family: Verdana; float: left">

        <JqxGrid ref="myGrid" @sort="myGridOnSort($event)"
                 :width="850" :height="450" :source="dataAdapter" :columns="columns"
                 :sortable="true" :altrows="true" :filterable="true"
                 :selectionmode="'multiplecellsadvanced'">
        </JqxGrid>

        <div style="margin-top: 30px">
            <div style="float: left; margin-right: 10px">

                <JqxButton @click="removeSortBtnOnClick()" :height="20">Remove Sort</JqxButton>

                <div style="margin-top: 10px"></div>

                <JqxCheckBox @change="sortBackGroundBtn($event)" :height="25" :checked="true">Sort Background</JqxCheckBox>

            </div>

            <div style="margin-left: 100px; float: left">
                Event Log:

                <JqxPanel ref="myPanel" :width="300" :height="80"></JqxPanel>

            </div>
        </div>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";
    import JqxCheckBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue";
    import JqxPanel from "jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue";

    export default {
        components: {
            JqxGrid,
            JqxButton,
            JqxCheckBox,
            JqxPanel
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Ship Name', datafield: 'ShipName', width: 250 },
                    { text: 'Shipped Date', datafield: 'ShippedDate', width: 100, cellsformat: 'yyyy-MM-dd' },
                    { text: 'Freight', datafield: 'Freight', width: 80, cellsformat: 'F2', cellsalign: 'right' },
                    { text: 'Ship Address', datafield: 'ShipAddress', width: 350 },
                    { text: 'Ship City', datafield: 'ShipCity', width: 100 },
                    { text: 'Ship Country', datafield: 'ShipCountry', width: 101 }
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
                id: { name: 'OrderID', map: 'm\\:properties>d\\:OrderID' },
                url: 'orders.xml',
                sortcolumn: 'ShipName',
                sortdirection: 'asc'
            };
        },
        methods: {
            myGridOnSort: function(event) {
                this.$refs.myPanel.clearcontent();
                let sortinformation = event.args.sortinformation;
                let sortdirection = sortinformation.sortdirection.ascending ? 'ascending' : 'descending';
                if (!sortinformation.sortdirection.ascending && !sortinformation.sortdirection.descending) {
                    sortdirection = 'null';
                }
                let eventData = 'Triggered "sort" event <div>Column:' + sortinformation.sortcolumn + ', Direction: ' + sortdirection + '</div>';
                this.$refs.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
            },
            removeSortBtnOnClick: function () {
                this.$refs.myGrid.removesort();
            },
            sortBackGroundBtn: function(event) {
                this.$refs.myGrid.showsortcolumnbackground = event.args.checked;
            }
        }
    }
</script>

<style>
    .jqx-panel {
        border: none
    }
</style>
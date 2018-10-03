<template>
    <div style="font-size: 13px; font-family: Verdana; float: left">
        <JqxGrid ref="myGrid"
                 :width="getWidth" :source="dataAdapter" :columns="columns"
                 :pageable="true" :sortable="true" :columnsresize="true"
                 :autoheight="true" :pagermode="'simple'" :selectionmode="'multiplerowsextended'">
        </JqxGrid>
        <div style="margin-top: 30px">
            <div style="float: left">
                Pager Settings:
                <JqxDropDownList @select="myListOnSelect($event)"
                                 :width="150" :height="25" :selectedIndex="1"
                                 :autoDropDownHeight="true" :source="['Default', 'Simple']">
                </JqxDropDownList>
            </div>
        </div>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";

    export default {
        components: {
            JqxGrid,
            JqxDropDownList
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Ship Name', datafield: 'ShipName', width: 250 },
                    { text: 'Shipped Date', datafield: 'ShippedDate', width: 230, cellsformat: 'D' },
                    { text: 'Freight', datafield: 'Freight', width: 130, cellsformat: 'F2', cellsalign: 'right' },
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
                    { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
                    { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress' },
                    { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
                    { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
                ],
                root: 'entry',
                record: 'content',
                id: 'm\\:properties>d\\:OrderID',
                url: 'orders.xml'
            };
        },
        methods: {
            myListOnSelect: function(event) {
                if (event.args.index === 0) {
                    this.$refs.myGrid.pagermode = 'default';
                }
                else {
                    this.$refs.myGrid.pagermode = 'simple';
                }
            }
        }
    }
</script>

<style>
</style>
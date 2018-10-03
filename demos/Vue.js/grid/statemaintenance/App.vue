<template>
    <div style="font-size: 13px; font-family: Verdana; float: left">

        <JqxGrid ref="myGrid"
                 :width="getWidth" :source="dataAdapter" :columns="columns"
                 :pageable="true" :sortable="true" :altrows="true" :filterable="true"
                 :columnsreorder="true" :autoloadstate="true" :autosavestate="true"
                 :autoheight="true" :editable="true" :columnsresize="true"
                 :showfilterrow="true" :selectionmode="'multiplerowsextended'">
        </JqxGrid>

        <div style="margin-top: 30px; float: left">

            <JqxButton @click="saveStatebtn()">Save State</JqxButton>

            <JqxButton @click="loadStateBtn()">Load State</JqxButton>

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
                    { text: 'Ship Name', filtercondition: 'starts_with', datafield: 'ShipName', width: 250 },
                    { text: 'Ship City', datafield: 'ShipCity', width: 200 },
                    { text: 'Ship Country', datafield: 'ShipCountry' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'xml',
                datafields: [
                    { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
                    { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
                    { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
                ],
                root: 'entry',
                record: 'content',
                id: 'm\\:properties>d\\:OrderID',
                url: 'orders.xml',
            };

            this.state = null;
        },
        methods: {
            saveStatebtn: function () {
                this.state = this.$refs.myGrid.savestate();
            },
            loadStateBtn: function() {
                if (this.state) {
                    this.$refs.myGrid.loadstate(this.state);
                }
                else {
                    this.$refs.myGrid.loadstate({});
                }
            }
        }
    }
</script>

<style>
    .jqx-button{
        display: inline-block;
        margin-right: 5px;
    }
</style>
<template>
    <div>
        <JqxGrid @columnresized="myGridOnColumnResized($event)"
                 :width="getWidth" :source="dataAdapter" :columns="columns"
                 :autoheight="true" :columnsresize="true">
        </JqxGrid>

        <div ref="eventLog" style="margin-top: 30px"></div>
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
                    { text: 'First Name', datafield: 'firstname', width: 100 },
                    { text: 'Last Name', datafield: 'lastname', width: 100 },
                    { text: 'Product', datafield: 'productname', width: 180 },
                    { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                    { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                    { text: 'Total', datafield: 'total', minwidth: 100, resizable: false, width: 'auto', cellsalign: 'right', cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(10, false),
                datafields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'available', type: 'bool' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' },
                        { name: 'total', type: 'number' }
                    ],
                datatype: 'array'
            };
        },
        methods: {
            myGridOnColumnResized: function (event) {
                let column = event.args.columntext;
                let newwidth = event.args.newwidth
                let oldwidth = event.args.oldwidth;
                this.$refs.eventLog.innerHTML = `Column: ${column}, New Width: ${newwidth}, Old Width ${oldwidth}`;
            }
        }
    }
</script>

<style>
</style>
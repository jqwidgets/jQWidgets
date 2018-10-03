<template>
    <div>
        <JqxGrid @columnreordered="myGridOnColumnReordered($event)"
                 :width="getWidth" :source="dataAdapter" :columns="columns"
                 :columnsresize="true" :columnsreorder="true">
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
                    { text: 'Name', datafield: 'name', width: 200 },
                    { text: 'Beverage Type', datafield: 'type', width: 200 },
                    { text: 'Calories', datafield: 'calories', width: 100 },
                    { text: 'Total Fat', datafield: 'totalfat' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'json',
                datafields: [
                    { name: 'name' },
                    { name: 'type' },
                    { name: 'calories', type: 'int' },
                    { name: 'totalfat' },
                    { name: 'protein' }
                ],
                id: 'id',
                url: 'beverages.txt'
            };
        },
        methods: {
            myGridOnColumnReordered: function (event) {
                let column = event.args.columntext;
                let newindex = event.args.newindex
                let oldindex = event.args.oldindex;
                this.$refs.eventLog.innerHTML = `Column: ${column}, New Index: ${newindex}, Old Index: ${oldindex}`;
            }
        }
    }
</script>

<style>
</style>
<template>
    <JqxDataTable :width="getWidth" :source="dataAdapter" :columns="columns"
                  :columnsResize="true" :pageable="true" :pagerButtonsCount="10">
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
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Name', dataField: 'name', width: 300 },
                    { text: 'Beverage Type', dataField: 'type', width: 300 },
                    { text: 'Calories', dataField: 'calories', width: 180 },
                    { text: 'Total Fat', dataField: 'totalfat', width: 120 },
                    { text: 'Protein', dataField: 'protein' }
                ]
            }
        },
        beforeCreate: function () {

            this.source = {
                dataType: 'json',
                dataFields: [
                    { name: 'name', type: 'string' },
                    { name: 'type', type: 'string' },
                    { name: 'calories', type: 'int' },
                    { name: 'totalfat', type: 'string' },
                    { name: 'protein', type: 'string' }
                ],
                id: 'id',
                url: 'beverages.txt'
            };
        }
    };
</script>

<style>
</style>
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
                    { text: 'Year', dataField: 'Year', width: 200 },
                    { text: 'HPI', dataField: 'HPI', cellsFormat: 'f2', width: 200 },
                    { text: 'Build Cost', dataField: 'BuildCost', cellsFormat: 'f2', width: 180 },
                    { text: 'Population', dataField: 'Population', cellsFormat: 'f2', width: 100 },
                    { text: 'Rate', dataField: 'Rate', cellsFormat: 'f5' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'tab',
                datafields: [
                    { name: 'Year', type: 'int' },
                    { name: 'HPI', type: 'float' },
                    { name: 'BuildCost', type: 'float' },
                    { name: 'Population', type: 'float' },
                    { name: 'Rate', type: 'float' }
                ],
                url: 'homeprices.txt'
            };
        }
    };
</script>

<style>
</style>
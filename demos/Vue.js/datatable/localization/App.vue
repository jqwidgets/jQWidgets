<template>
    <JqxDataTable :width="getWidth" :source="dataAdapter" :columns="columns"
                  :pageable="true" :editable="true" :filterable="true"
                  :localization="localizationObject">
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
                    { text: 'Name', dataField: 'name', width: 215 },
                    { text: 'Produkt', dataField: 'productname', width: 220 },
                    { text: 'Datum', dataField: 'date', width: 210, cellsAlign: 'right', cellsFormat: 'd' },
                    { text: 'Qt.', dataField: 'quantity', cellsAlign: 'right', width: 60 },
                    { text: 'Preis', dataField: 'price', cellsFormat: "c2", cellsAlign: 'right' }
                ],
                localizationObject: getLocalization('de')
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(250, false),
                dataFields:
                    [
                        { name: 'name', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'available', type: 'bool' },
                        { name: 'date', type: 'date' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' }
                    ],
                datatype: 'array'
            };
        }
    };
</script>

<style>
</style>
<template>
    <JqxGrid
             :width="getWidth" :source="dataAdapter" :columns="columns"
             :pageable="true" :showfilterrow="true" :filterable="true"
             :autoheight="true" :editable="true" :selectionmode="'singlecell'"
             :localization="localization">
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
                    { text: 'Name', columntype: 'textbox', filtertype: 'textbox', datafield: 'name', width: 180 },
                    { text: 'Produkt', filtertype: 'textbox', datafield: 'productname', width: 220 },
                    { text: 'Datum', datafield: 'date', columntype: 'datetimeinput', filtertype: 'date', width: 210, cellsalign: 'right', cellsformat: 'd' },
                    { text: 'Qt.', datafield: 'quantity', columntype: 'numberinput', filtertype: 'textbox', cellsalign: 'right', width: 60 },
                    { text: 'Preis', datafield: 'price', columntype: 'numberinput', filtertype: 'textbox', cellsformat: 'c2', cellsalign: 'right' }
                ],
                localization: getLocalization('de')
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(250, false),
                datafields:
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
    }
</script>

<style>
</style>
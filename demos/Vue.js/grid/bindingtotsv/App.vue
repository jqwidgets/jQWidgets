<template>
    <JqxGrid :width="getWidth" :source="dataAdapter" :columns="columns" :columnsresize="true">
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
                    { text: 'Year', datafield: 'Year', width: 200 },
                    { text: 'HPI', datafield: 'HPI', cellsformat: 'f2', width: 200 },
                    { text: 'Build Cost', datafield: 'BuildCost', cellsformat: 'f2', width: 180 },
                    { text: 'Population', datafield: 'Population', cellsformat: 'f2', width: 100 },
                    { text: 'Rate', datafield: 'Rate', cellsformat: 'f5', minwidth: 100 }
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
    }
</script>

<style>
</style>
<template>
    <div style="font-size: 13px; font-family: Verdana; float: left">
        <JqxGrid :width="getWidth" :source="dataAdapter" :columns="columns">
        </JqxGrid>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";

    export default {
        components: {
            JqxGrid,
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Name', datafield: 'name', width: '30%' },
                    { text: 'Beverage Type', datafield: 'type', width: '25%' },
                    { text: 'Calories', datafield: 'calories', width: '15%' },
                    { text: 'Total Fat', datafield: 'totalfat', width: '15%' },
                    { text: 'Protein', datafield: 'protein', width: '15%' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'json',
                datafields: [
                    { name: 'name', type: 'string' },
                    { name: 'type', type: 'string' },
                    { name: 'calories', type: 'int' },
                    { name: 'totalfat', type: 'string' },
                    { name: 'protein', type: 'string' },
                ],
                id: 'id',
                url: 'beverages.txt'
            };
        }
    }
</script>

<style>
</style>
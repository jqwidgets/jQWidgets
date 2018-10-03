<template>
    <JqxTreeGrid ref="myTreeGrid"
        :width="width"
        :height="400"
        :ready="ready"
        :columns="columns"
        :source="dataAdapter">
    </JqxTreeGrid>
</template>

<script>
    import JqxTreeGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtreegrid.vue';

    export default {
        components: {
            JqxTreeGrid
        },
        data: function () {
            return {
                width: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),                
                columns: [
                    { text: 'Location Name', dataField: "Name", align: 'center', width: '50%' },
                    { text: 'Population', dataField: "Population", align: 'center', width: '50%'}
                ]
            }
        },        
        beforeCreate: function () {
            this.source = {
                dataType: "tab",
                dataFields: [
                    { name: "Id", type: "number" },
                    { name: "Name", type: "string" },
                    { name: "ParentID", type: "number" },
                    { name: "Population", type: "number" }
                ],
                hierarchy:
                {
                    keyDataField: { name: 'Id' },
                    parentDataField: { name: 'ParentID' }
                },
                id: 'Id',
                url: 'locations.tsv'
            };                  
        },
        methods: {
            ready: function () {
                this.$refs.myTreeGrid.expandRow(34);
            }
        }
    }
</script>

<style>
</style>

<template>
    <JqxTreeGrid ref="treeGrid"                 
                 :width="getWidth" 
                 :height="400" 
                 :source="dataAdapter"
                 :pageable="true"
                 :pageSize="25"
                 :showAggregates="true"
                 :showSubAggregates="true"
                 :aggregatesHeight="70"
                 :sortable="true"
                 :columns="columns"
                 :ready="ready">
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
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Location Name', dataField: 'Name', align: 'center', width: '50%' },
                    { text: 'Population', dataField: 'Population', align: 'center', width: '50%', aggregates: ['min', 'max', 'count'] }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                dataType: 'tab',
                dataFields: [
                    { name: 'Id', type: 'number' },
                    { name: 'Name', type: 'string' },
                    { name: 'ParentID', type: 'number' },
                    { name: 'Population', type: 'number' }
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
            ready: function() {
                this.$refs.treeGrid.expandRow(34);
            }
        }
    }
</script>

<style>
    html, body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
    }

    .jqx-grid-cell-pinned {
        border-right: 0;
    }
</style>
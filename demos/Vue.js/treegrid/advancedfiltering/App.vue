<template>
    <JqxTreeGrid ref="treeGrid"
                 :width="getWidth"
                 :source="dataAdapter"
                 :pageable="true"
                 :columnsResize="true"
                 :sortable="true"
                 :filterable="true"
                 :filterMode="'advanced'"
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
                    { text: 'FirstName', dataField: 'FirstName', minWidth: 100, width: 180 },
                    { text: 'LastName', dataField: 'LastName', width: 180 },
                    { text: 'Department Name', dataField: 'DepartmentName', width: 180 },
                    { text: 'Title', dataField: 'Title', width: 300 },
                    { text: 'Birth Date', dataField: 'BirthDate', cellsFormat: 'd', width: 150 },
                    { text: 'Hire Date', dataField: 'HireDate', cellsFormat: 'd', width: 150 },
                    { text: 'Phone', dataField: 'Phone', cellsFormat: 'd', width: 150 }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                    dataType: 'csv',
                    dataFields: [
                        { name: 'EmployeeKey', type: 'number' },
                        { name: 'ParentEmployeeKey', type: 'number' },
                        { name: 'FirstName', type: 'string' },
                        { name: 'LastName', type: 'string' },
                        { name: 'Title', type: 'string' },
                        { name: 'HireDate', type: 'date' },
                        { name: 'BirthDate', type: 'date' },
                        { name: 'Phone', type: 'string' },
                        { name: 'Gender', type: 'string' },
                        { name: 'DepartmentName', type: 'string' }
                    ],
                    hierarchy:
                        {
                            keyDataField: { name: 'EmployeeKey' },
                            parentDataField: { name: 'ParentEmployeeKey' }
                        },
                    id: 'EmployeeKey',
                    url: 'employeesadv.csv'
                };
        },
        methods: {
            ready: function() {
                this.$refs.treeGrid.expandRow(32);
                this.$refs.treeGrid.expandRow(112);
            }
        }
    }
</script>

<style>
</style>
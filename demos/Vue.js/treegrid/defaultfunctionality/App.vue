<template>
    <JqxTreeGrid ref="myTreeGrid"
        :width="width" 
        :pageable="true"
        :columnsResize="true"
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
                    { text: 'FirstName', dataField: 'FirstName', minWidth: 100, width: 200 },
                    { text: 'LastName',  dataField: 'LastName', width: 200 },
                    { text: 'Department Name', dataField: 'DepartmentName', width: 150 },
                    { text: 'Title', dataField: 'Title', width: 300 },
                    { text: 'Birth Date', dataField: 'BirthDate', cellsFormat: 'd', width: 120 },
                    { text: 'Hire Date', dataField: 'HireDate', cellsFormat: 'd', width: 120 },
                    { text: 'Phone', dataField: 'Phone', cellsFormat: 'd', width: 120 }
                ]
            }
        },        
        beforeCreate: function () {
            this.source = {
                dataType: "csv",
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
            ready: function () {  
                // expand row with 'EmployeeKey = 32'
                this.$refs.myTreeGrid.expandRow(32);                
            }
        }
    }
</script>

<style>
</style>

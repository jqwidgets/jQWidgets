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
                ready: () => {
                    // expand row with 'EmployeeKey = 2'
                    this.$refs.myTreeGrid.expandRow(2);                    
                },
                columns: [
                    { text: 'FirstName', dataField: 'FirstName', minWidth: 100, width: 200 },
                    { text: 'LastName', dataField: 'LastName', width: 200 },
                    { text: 'Title', dataField: 'Title', width: 300 },
                    { text: 'Address', dataField: 'Address', width: 200 },
                    { text: 'City', dataField: 'City', width: 150 },
                    { text: 'Birth Date', dataField: 'BirthDate', cellsFormat: 'd', width: 120 },
                    { text: 'Hire Date', dataField: 'HireDate', cellsFormat: 'd', width: 120 }
                ]
            }
        },        
        beforeCreate: function () {
            let url = 'employees.xml';
            this.source = {
                dataType: "xml",
                dataFields: [
                    { name: 'EmployeeID', type: 'number' },
                    { name: 'ReportsTo', type: 'number' },
                    { name: 'FirstName', type: 'string' },
                    { name: 'LastName', type: 'string' },
                    { name: 'City', type: 'string' },
                    { name: 'Address', type: 'string' },
                    { name: 'Title', type: 'string' },
                    { name: 'HireDate', type: 'date' },
                    { name: 'BirthDate', type: 'date' }
                ],
                hierarchy:
                {
                    keyDataField: { name: 'EmployeeID' },
                    parentDataField: { name: 'ReportsTo' }
                },
                id: 'EmployeeID',
                root: 'Employees',
                record: 'Employee',
                url: url
            };                  
        }
    }
</script>

<style>
</style>

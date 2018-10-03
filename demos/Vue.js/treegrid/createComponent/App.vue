<template>
    <JqxTreeGrid ref="myTreeGrid" :autoCreate="false">
    </JqxTreeGrid>
</template>

<script>
    import JqxTreeGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtreegrid.vue';

    export default {
        components: {
            JqxTreeGrid
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
        mounted: function () {
            const settings = {
                width: '90%',
                pageable: "true",
                columnsResize: "true",
                ready: this.ready,
                source: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'FirstName', dataField: 'FirstName', minWidth: 100, width: 200 },
                    { text: 'LastName', dataField: 'LastName', width: 200 },
                    { text: 'Department Name', dataField: 'DepartmentName', width: 150 },
                    { text: 'Title', dataField: 'Title', width: 300 },
                    { text: 'Birth Date', dataField: 'BirthDate', cellsFormat: 'd', width: 120 },
                    { text: 'Hire Date', dataField: 'HireDate', cellsFormat: 'd', width: 120 },
                    { text: 'Phone', dataField: 'Phone', cellsFormat: 'd', width: 120 }
                ]
            };

            this.$refs.myTreeGrid.createComponent(settings);
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

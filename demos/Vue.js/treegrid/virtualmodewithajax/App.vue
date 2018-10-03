<template>
    <div>
        <h3 style="font-size: 16px; font-family: Verdana;">Data Source: "http://services.odata.org"</h3>
        <JqxTreeGrid ref="treeGrid"
                     :width="getWidth"
                     :virtualModeCreateRecords="virtualModeCreateRecords"
                     :virtualModeRecordCreating="virtualModeRecordCreating"
                     :columns="columns">
        </JqxTreeGrid>
    </div>
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
                columns: [
                    { text: 'FirstName', columnGroup: 'Name', dataField: 'FirstName', width: 150 },
                    { text: 'LastName', columnGroup: 'Name', dataField: 'LastName', width: 150 },
                    { text: 'Title', dataField: 'Title', width: 200 },
                    { text: 'Birth Date', dataField: 'BirthDate', cellsFormat: 'd' }
                ]
            }
        },
        beforeCreate: function () {

            this.source = {
                dataType: 'json',
                dataFields: [
                    { name: 'EmployeeID', type: 'number' },
                    { name: 'ReportsTo', type: 'number' },
                    { name: 'FirstName', type: 'string' },
                    { name: 'LastName', type: 'string' },
                    { name: 'Country', type: 'string' },
                    { name: 'City', type: 'string' },
                    { name: 'Address', type: 'string' },
                    { name: 'Title', type: 'string' },
                    { name: 'HireDate', type: 'date' },
                    { name: 'BirthDate', type: 'date' }
                ],
                timeout: 10000,
                hierarchy:
                    {
                        keyDataField: { name: 'EmployeeID' },
                        parentDataField: { name: 'ReportsTo' }
                    },
                id: 'EmployeeID',
                root: 'value',
                url: 'http://services.odata.org/V3/Northwind/Northwind.svc/Employees?$format=json&$callback=?'
            };
        },
        methods: {
            virtualModeCreateRecords: function (expandedRecord, done) {
                let dataAdapter = new jqx.dataAdapter(this.source,
                    {
                        formatData: (data) => {
                            if (expandedRecord == null) {
                                data.$filter = '(ReportsTo eq null)'
                            }
                            else {
                                data.$filter = '(ReportsTo eq ' + expandedRecord.EmployeeID + ')'
                            }
                            return data;
                        },
                        loadComplete: () => {
                            done(dataAdapter.records);
                        },
                        loadError: (xhr, status, error) => {
                            done(false);
                            throw new Error('http://services.odata.org: ' + error.toString());
                        }
                    }
                );
                dataAdapter.dataBind();
            },
            virtualModeRecordCreating: function (record) {
                // record is creating.
            }
        }
    }
</script>

<style>
</style>
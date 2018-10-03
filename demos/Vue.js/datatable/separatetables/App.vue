<template>
    <div>
        <h3>Employees</h3>

        <JqxDataTable ref="masterDataTable" @rowSelect="masterTableOnRowSelect($event)"
                      :width="getWidth" :source="employeesData" :columns="masterColumns"
                      :pageable="true" :sortable="true" :pageSize="5">
        </JqxDataTable>

        <h3>Orders by Employee</h3>

        <JqxDataTable ref="detailsDataTable"
                      :width="getWidth" :columns="detailsColumns"
                      :pageable="true" :pageSize="5">
        </JqxDataTable>
    </div>
</template>

<script>
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";

    export default {
        components: {
            JqxDataTable
        },
        data: function () {
            return {
                getWidth: '90%',
                employeesData: this.employeesData,
                ordersData: this.ordersData,
                detailsColumns: [
                    { text: 'Employee Name', dataField: 'EmployeeName', width: 300 },
                    { text: 'Ship Name', dataField: 'ShipName', width: 300 },
                    { text: 'Ship Address', dataField: 'ShipAddress', width: 300 },
                    { text: 'Ship City', dataField: 'ShipCity', width: 150 },
                    { text: 'Ship Country', dataField: 'ShipCountry', width: 150 },
                    { text: 'Shipped Date', dataField: 'ShippedDate', cellsFormat: 'd', width: 200 }
                ],
                masterColumns: [
                    { text: 'First Name', dataField: 'FirstName', width: 250 },
                    { text: 'Last Name', dataField: 'LastName', width: 250 },
                    { text: 'Title', dataField: 'Title' }
                ]
            }

        },
        beforeCreate: function () {
            const employeesDataGenerator = () => {
                const source = {
                    dataFields: [
                        { name: 'EmployeeID', type: 'number' },
                        { name: 'FirstName', type: 'string' },
                        { name: 'LastName', type: 'string' },
                        { name: 'Title', type: 'string' },
                        { name: 'Address', type: 'string' },
                        { name: 'City', type: 'string' }
                    ],
                    root: 'Employees',
                    record: 'Employee',
                    id: 'EmployeeID',
                    dataType: 'xml',
                    url: 'employees.xml',
                    async: false
                };

                const employeesAdapter = new jqx.dataAdapter(source, {
                    autoBind: true,
                    beforeLoadComplete: (records) => {
                        // add 'EmployeeName' data field.
                        for (let i = 0; i < records.length; i++) {
                            records[i]['EmployeeName'] = records[i].FirstName + ' ' + records[i].LastName;
                        }
                        return records;
                    }
                });

                return employeesAdapter;
            };

            const ordersDataGenerator = () => {
                const ordersSource =
                    {
                        dataFields: [
                            { name: 'EmployeeID', type: 'number' },
                            { name: 'EmployeeName', value: 'EmployeeID', type: 'string', values: { source: this.employeesData.records, value: 'EmployeeID', name: 'EmployeeName' } },
                            { name: 'ShipName', type: 'string' },
                            { name: 'ShipAddress', type: 'string' },
                            { name: 'ShipCity', type: 'string' },
                            { name: 'ShipCountry', type: 'string' },
                            { name: 'ShippedDate', type: 'date' }
                        ],
                        root: 'Orders',
                        record: 'Order',
                        dataType: 'xml',
                        url: 'orderdetails.xml',
                        async: false
                    };
                // create orders DataAdapter.
                const ordersDataAdapter = new jqx.dataAdapter(ordersSource, { autoBind: true });

                return ordersDataAdapter.records;
            }

            this.employeesData = employeesDataGenerator();
            this.ordersData = ordersDataGenerator();
        },
        mounted: function () {
            this.$refs.masterDataTable.selectRow(0);
        },
        methods: {

            masterTableOnRowSelect: function (event) {
                const key = event.args.key;
                const filterGroup = new jqx.filter();
                const filter_or_operator = 1;
                const filterValue = key;
                const filterCondition = 'equal';
                // create string filter
                const filter = filterGroup.createfilter('stringfilter', filterValue, filterCondition);
                // fill the orders depending on the id.
                const ordersbyid = [];
                // filter all orders by EmployeeID.
                for (let m = 0; m < this.ordersData.length; m++) {
                    const result = filter.evaluate(this.ordersData[m]['EmployeeID']);
                    if (result) {
                        ordersbyid.push(this.ordersData[m]);
                    }
                }
                const detailsSource = {
                    dataFields: [
                        { name: 'EmployeeID', type: 'number' },
                        { name: 'EmployeeName', type: 'string' },
                        { name: 'ShipName', type: 'string' },
                        { name: 'ShipAddress', type: 'string' },
                        { name: 'ShipCity', type: 'string' },
                        { name: 'ShipCountry', type: 'string' },
                        { name: 'ShippedDate', type: 'date' }
                    ],
                    id: 'OrderID',
                    localdata: ordersbyid
                }
                // update the details DataTable.
                const detailsAdapter = new jqx.dataAdapter(detailsSource);
                this.$refs.detailsDataTable.source = detailsAdapter;
            }
        }
    };
</script>

<style>
</style>
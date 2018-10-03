<template>
    <JqxDataTable ref="myDataTable"
                  :width="getWidth" :source="source" :columns="columns"
                  :pageable="true" :rowDetails="true" :pageSize="3"
                  :initRowDetails="initRowDetails" :ready="ready">
    </JqxDataTable>
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
                source: {
                    dataFields: [
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
                    url: 'employees.xml'
                },
                columns: [
                    { text: 'First Name', dataField: 'FirstName', width: 250 },
                    { text: 'Last Name', dataField: 'LastName', width: 250 },
                    { text: 'Title', dataField: 'Title' }
                ]
            }
        },
        beforeCreate: function () {

            this.count = 0;
            this.nestedTables = [];

            const ordersSource = {
                dataFields: [
                    { name: 'EmployeeID', type: 'string' },
                    { name: 'ShipName', type: 'string' },
                    { name: 'ShipAddress', type: 'string' },
                    { name: 'ShipCity', type: 'string' },
                    { name: 'ShipCountry', type: 'string' },
                    { name: 'ShippedDate', type: 'date' }
                ],
                root: 'Orders',
                record: 'Order',
                dataType: 'xml',
                url: 'orderdetails.xml'
            };

            this.ordersDataAdapter = new jqx.dataAdapter(ordersSource, { autoBind: true });
        },
        methods: {
            initRowDetails: function (id, row, element, rowinfo) {
                let container = document.createElement('div');
                container.style.margin = '10px';
                element[0].appendChild(container);

                let nestedDataTable = element[0].children[0];
                let containerID = `nestedDataTable${this.count}`;
                nestedDataTable.id = containerID;

                let filterGroup = new jqx.filter();
                let filter_or_operator = 1;
                let filterValue = id;
                let filterCondition = 'equal';
                let filter = filterGroup.createfilter('stringfilter', filterValue, filterCondition);
                // fill the orders depending on the id.
                let orders = this.ordersDataAdapter.records;
                let ordersbyid = [];
                for (let m = 0; m < orders.length; m++) {
                    let result = filter.evaluate(orders[m]['EmployeeID']);
                    if (result)
                        ordersbyid.push(orders[m]);
                }
                let ordersSource = {
                    dataFields: [
                        { name: 'EmployeeID', type: 'string' },
                        { name: 'ShipName', type: 'string' },
                        { name: 'ShipAddress', type: 'string' },
                        { name: 'ShipCity', type: 'string' },
                        { name: 'ShipCountry', type: 'string' },
                        { name: 'ShippedDate', type: 'date' }
                    ],
                    id: 'OrderID',
                    localdata: ordersbyid
                }
                if (nestedDataTable != null) {
                    let nestedDataTableAdapter = new jqx.dataAdapter(ordersSource);
                    let columns = [
                        { text: 'Ship Name', dataField: 'ShipName', width: 200 },
                        { text: 'Ship Address', dataField: 'ShipAddress', width: 200 },
                        { text: 'Ship City', dataField: 'ShipCity', width: 150 },
                        { text: 'Ship Country', dataField: 'ShipCountry', width: 150 },
                        { text: 'Shipped Date', dataField: 'ShippedDate', cellsFormat: 'd', width: 200 }
                    ];

                    let options =
                        {
                            width: 820, height: 180, columns: columns,
                            pageable: true, source: nestedDataTableAdapter
                        };

                    jqwidgets.createInstance(`#${containerID}`, 'jqxDataTable', options);

                    // store the nested Data Tables and use the Employee ID as a key.
                    this.nestedTables[id] = nestedDataTable;
                    this.count++;
                }
            },
            ready: function () {
                this.$refs.myDataTable.showDetails(1);
            }
        }
    };
</script>

<style>
</style>
<template>
    <JqxGrid ref="myGrid"
             :width="getWidth" :height="365" :source="employeesAdapter" :columns="columns"
             :rowdetails="true" :rowsheight="35" :initrowdetails="initRowDetails"
             :ready="ready" :rowdetailstemplate="rowdetailstemplate">
    </JqxGrid>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";

    export default {
        components: {
            JqxGrid
        },
        data: function () {
            return {
                getWidth: '90%',
                employeesAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Photo', width: 50, cellsrenderer: this.photoRenderer },
                    { text: 'First Name', datafield: 'FirstName', width: 100, cellsrenderer: this.renderer },
                    { text: 'Last Name', datafield: 'LastName', width: 100, cellsrenderer: this.renderer },
                    { text: 'Title', datafield: 'Title', width: 180, cellsrenderer: this.renderer },
                    { text: 'Address', datafield: 'Address', width: 300, cellsrenderer: this.renderer },
                    { text: 'City', datafield: 'City', width: 170, cellsrenderer: this.renderer }
                ],
                rowdetailstemplate: {
                    rowdetails: '<div id="nestedGrid" style="margin: 10px;"></div>', rowdetailsheight: 220, rowdetailshidden: true
                }
            }
        },
        beforeCreate: function () {
            this.source = {
                datafields: [
                    { name: 'FirstName' },
                    { name: 'LastName' },
                    { name: 'Title' },
                    { name: 'Address' },
                    { name: 'City' }
                ],
                root: 'Employees',
                record: 'Employee',
                id: 'EmployeeID',
                datatype: 'xml',
                url: 'employees.xml'
            };

            const ordersSource = {
                    datafields: [
                        { name: 'EmployeeID', type: 'string' },
                        { name: 'ShipName', type: 'string' },
                        { name: 'ShipAddress', type: 'string' },
                        { name: 'ShipCity', type: 'string' },
                        { name: 'ShipCountry', type: 'string' },
                        { name: 'ShippedDate', type: 'date' }
                    ],
                    root: 'Orders',
                    record: 'Order',
                    datatype: 'xml',
                    url: 'orderdetails.xml'
                }

            this.ordersDataAdapter = new jqx.dataAdapter(ordersSource, { autoBind: true });
            this.nestedGrids = [];
        },
        methods: {
            initRowDetails: function (index, parentElement, gridElement, record) {
                let id = record.uid.toString();
                let nestedGridContainer = parentElement.children[0];
                this.nestedGrids[index] = nestedGridContainer;
                let filtergroup = new jqx.filter();
                let filter_or_operator = 1;
                let filtervalue = id;
                let filtercondition = 'equal';
                let filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
                // fill the orders depending on the id.
                let orders = this.ordersDataAdapter.records;
                let ordersbyid = [];
                for (let i = 0; i < orders.length; i++) {
                    let result = filter.evaluate(orders[i]['EmployeeID']);
                    if (result)
                        ordersbyid.push(orders[i]);
                }
                let ordersSource = {
                    datafields: [
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
                let nestedGridAdapter = new jqx.dataAdapter(ordersSource);
                if (nestedGridContainer != null) {

                    let settings = {
                        width: 780,
                        height: 200,
                        source: nestedGridAdapter,
                        columns: [
                            { text: 'Ship Name', datafield: 'ShipName', width: 200 },
                            { text: 'Ship Address', datafield: 'ShipAddress', width: 200 },
                            { text: 'Ship City', datafield: 'ShipCity', width: 150 },
                            { text: 'Ship Country', datafield: 'ShipCountry', width: 150 },
                            { text: 'Shipped Date', datafield: 'ShippedDate', width: 200 }
                        ]
                    };

                    jqwidgets.createInstance(`#${nestedGridContainer.id}`, 'jqxGrid', settings);
                }
            },
            photoRenderer: function (row, column, value) {
                let name = this.$refs.myGrid.getrowdata(row).FirstName;
                let imgurl = '../../../images/' + name.toLowerCase() + '.png';
                let img = '<div style="background: white;"><img style="margin: 2px; margin-left: 10px;" width="32" height="32" src="' + imgurl + '"></div>';
                return img;
            },
            renderer: function(row, column, value) {
                return '<span style="margin-left: 4px; margin-top: 9px; float: left;">' + value + '</span>';
            },
            ready: function() {
                this.$refs.myGrid.showrowdetails(1);
            }
        }
    }
</script>

<style>
</style>
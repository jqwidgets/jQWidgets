<template>
    <div style="font-size: 13px; font-family: Verdana; float: left">
        <h3>Customers</h3>

        <JqxGrid ref="customersGrid" @rowselect="customersGridOnRowSelect($event)"
                 :width="getWidth" :height="250" :source="dataAdapter"
                 :keyboardnavigation="false" :columns="columns">
        </JqxGrid>

        <h3>Orders by Customer</h3>

        <JqxGrid ref="ordersGrid"
                 :width="getWidth" :height="250"
                 :keyboardnavigation="false" :columns="columns2">
        </JqxGrid>

    </div>
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
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Company Name', datafield: 'CompanyName', width: 250 },
                    { text: 'Contact Name', datafield: 'ContactName', width: 150 },
                    { text: 'Contact Title', datafield: 'ContactTitle', width: 180 },
                    { text: 'City', datafield: 'City', width: 120 },
                    { text: 'Country', datafield: 'Country' }
                ],
                columns2: [
                    { text: 'OrderID', datafield: 'OrderID', width: 100 },
                    { text: 'OrderDate', datafield: 'OrderDate', cellsformat: 'd', width: 150 },
                    { text: 'Shipped Date', datafield: 'ShippedDate', cellsformat: 'd', width: 150 },
                    { text: 'Ship Name', datafield: 'ShipName' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datafields: [
                    { name: 'CustomerID' },
                    { name: 'CompanyName' },
                    { name: 'ContactName' },
                    { name: 'ContactTitle' },
                    { name: 'Address' },
                    { name: 'City' },
                    { name: 'Country' }
                ],
                localdata: [
                    { 'CustomerID': 'AAA', 'CompanyName': 'Alfreds Futterkiste', 'ContactName': 'Maria Anders', 'ContactTitle': 'Sales Representative', 'City': 'Berlin', 'Country': 'Germany' },
                    { 'CustomerID': 'BBB', 'CompanyName': 'Trujillo Emparedados', 'ContactName': 'Gerry Trujillo', 'ContactTitle': 'Owner', 'City': 'Paris', 'Country': 'France' },
                    { 'CustomerID': 'CCC', 'CompanyName': 'Moreno Taquera', 'ContactName': 'Antonio Moreno', 'ContactTitle': 'Manager', 'City': 'Mxico D.F.', 'Country': 'Mexico' }
                ]
            };

            this.dataFields2 = [
                { name: 'CustomerID' },
                { name: 'OrderID' },
                { name: 'OrderDate', type: 'date' },
                { name: 'ShippedDate', type: 'date' },
                { name: 'ShipName' },
                { name: 'ShipCountry' }
            ];

            const source2 = {
                datafields: this.dataFields2,
                localdata: [
                    { 'OrderID': 10248, 'CustomerID': 'AAA', 'OrderDate': '1996-07-04 00:00:00', 'ShippedDate': '1996-07-16 00:00:00', 'ShipName': 'Vins et alcools Chevalier' },
                    { 'OrderID': 10249, 'CustomerID': 'AAA', 'OrderDate': '1996-07-05 00:00:00', 'ShippedDate': '1996-07-17 00:00:00', 'ShipName': 'Toms Spezialitten' },
                    { 'OrderID': 10250, 'CustomerID': 'AAA', 'OrderDate': '1996-07-06 00:00:00', 'ShippedDate': '1996-07-18 00:00:00', 'ShipName': 'Hanari Carnes' },
                    { 'OrderID': 10251, 'CustomerID': 'BBB', 'OrderDate': '1996-07-07 00:00:00', 'ShippedDate': '1996-07-19 00:00:00', 'ShipName': 'Lady Of Seas' },
                    { 'OrderID': 10252, 'CustomerID': 'BBB', 'OrderDate': '1996-07-08 00:00:00', 'ShippedDate': '1996-07-20 00:00:00', 'ShipName': 'Queen Victoria' },
                    { 'OrderID': 10253, 'CustomerID': 'BBB', 'OrderDate': '1996-07-09 00:00:00', 'ShippedDate': '1996-07-21 00:00:00', 'ShipName': 'Poseidon' },
                    { 'OrderID': 10254, 'CustomerID': 'CCC', 'OrderDate': '1996-07-10 00:00:00', 'ShippedDate': '1996-07-22 00:00:00', 'ShipName': 'Wreckno' },
                    { 'OrderID': 10255, 'CustomerID': 'CCC', 'OrderDate': '1996-07-11 00:00:00', 'ShippedDate': '1996-07-23 00:00:00', 'ShipName': 'Flash' },
                    { 'OrderID': 10256, 'CustomerID': 'CCC', 'OrderDate': '1996-07-12 00:00:00', 'ShippedDate': '1996-07-24 00:00:00', 'ShipName': 'Titan' }
                ]
            }

            this.dataAdapter2 = new jqx.dataAdapter(source2, { autoBind: true });
        },
        methods: {
            customersGridOnRowSelect: function(event) {
                let customerID = event.args.row.CustomerID;
                let records = new Array();
                let dataAdapter = this.dataAdapter2;
                let length = dataAdapter.records.length;

                for (let i = 0; i < length; i++) {
                    let record = dataAdapter.records[i];
                    if (record.CustomerID == customerID) {
                        records[records.length] = record;
                    }
                }
                let dataSource = {
                    datafields: this.dataFields2,
                    localdata: records
                }

                let adapter = new jqx.dataAdapter(dataSource);

                this.$refs.ordersGrid.source = adapter;
            }
        }
    }
</script>

<style>
</style>
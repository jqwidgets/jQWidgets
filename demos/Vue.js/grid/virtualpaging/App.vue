<template>
    <div style="font-size: 13px; font-family: Verdana; float: left">

        <JqxGrid :width="getWidth" :source="dataAdapter" :columns="columns"
                 :autoheight="true" :virtualmode="true" :pageable="true"
                 :rendergridrows="rendergridrows">
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
                    { text: 'Id', datafield: 'id', width: 50 },
                    { text: 'First Name', datafield: 'firstname', width: 120 },
                    { text: 'Last Name', datafield: 'lastname', width: 120 },
                    { text: 'Product', datafield: 'productname', width: 180 },
                    { text: 'Quantity', datafield: 'quantity', width: 100, cellsalign: 'right' },
                    { text: 'Unit Price', datafield: 'price', width: 100, cellsalign: 'right', cellsformat: 'c2' },
                    { text: 'Total', datafield: 'total', cellsrenderer: this.totalcolumnrenderer, cellsalign: 'right' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'array',
                localdata: {},
                totalrecords: 1000000
            }

            this.firstNames = [
                'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'
            ];

            this.lastNames = [
                'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'
            ];

            this.productNames = [
                'Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'
            ];

            this.priceValues = [
                '2.25', '1.5', '3.0', '3.3', '4.5', '3.6', '3.8', '2.5', '5.0', '1.75', '3.25', '4.0'
            ];
        },
        methods: {
            generateData: function(startindex, endindex) {
                let data = {};
                for (let i = startindex; i < endindex; i++) {
                    let row = {};
                    let productindex = Math.floor(Math.random() * this.productNames.length);
                    let price = parseFloat(this.priceValues[productindex]);
                    let quantity = 1 + Math.round(Math.random() * 10);
                    row['id'] = i;
                    row['firstname'] = this.firstNames[Math.floor(Math.random() * this.firstNames.length)];
                    row['lastname'] = this.lastNames[Math.floor(Math.random() * this.lastNames.length)];
                    row['productname'] = this.productNames[productindex];
                    row['price'] = price;
                    row['quantity'] = quantity;
                    row['total'] = price * quantity;
                    data[i] = row;
                }
                return data;
            },
            rendergridrows: function (params) {
                let data = this.generateData(params.startindex, params.endindex);
                return data;
            },
            totalcolumnrenderer: function (row, column, cellvalue) {
                let newCellValue = jqx.dataFormat.formatnumber(cellvalue, 'c2');
                return '<span style="margin: 6px 3px; font-size: 12px; float: right; font-weight: bold;">' + newCellValue + '</span>';
            }
        }
    }
</script>

<style>
</style>
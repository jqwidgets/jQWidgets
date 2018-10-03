<template>
    <JqxGrid ref="myGrid"
             :width="getWidth" :height="350" :source="dataAdapter" :columns="columns"
             :showtoolbar="true" :rendertoolbar="rendertoolbar">
    </JqxGrid>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxGrid
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'First Name', datafield: 'firstname', width: 200 },
                    { text: 'Last Name', datafield: 'lastname', width: 200 },
                    { text: 'Product', datafield: 'productname', width: 180 },
                    { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                    { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                    { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {

            const firstNames =
                [
                    'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'
                ];

            const lastNames =
                [
                    'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'
                ];

            const productNames =
                [
                    'Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'
                ];

            const priceValues =
                [
                    '2.25', '1.5', '3.0', '3.3', '4.5', '3.6', '3.8', '2.5', '5.0', '1.75', '3.25', '4.0'
                ];

            this.generaterow = () => {
                let row = {};
                let productindex = Math.floor(Math.random() * productNames.length);
                let price = parseFloat(priceValues[productindex]);
                let quantity = 1 + Math.round(Math.random() * 10);
                row['firstname'] = firstNames[Math.floor(Math.random() * firstNames.length)];
                row['lastname'] = lastNames[Math.floor(Math.random() * lastNames.length)];
                row['productname'] = productNames[productindex];
                row['price'] = price;
                row['quantity'] = quantity;
                row['total'] = price * quantity;
                return row;
            }

            generateData = () => {
                let data = {};

                for (let i = 0; i < 10; i++) {
                    let row = this.generaterow();
                    data[i] = row;
                }
                return data;
            }

            this.source = {
                localdata: generatedata(10),
                datatype: 'local',
                datafields: [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'total', type: 'number' }
                ]
            }
        },
        methods: {
            rendertoolbar: function (toolbar) {
                let container = document.createElement('div');
                container.style.margin = '5px';

                let buttonContainer1 = document.createElement('div');
                let buttonContainer2 = document.createElement('div');
                let buttonContainer3 = document.createElement('div');
                let buttonContainer4 = document.createElement('div');

                buttonContainer1.id = 'buttonContainer1';
                buttonContainer2.id = 'buttonContainer2';
                buttonContainer3.id = 'buttonContainer3';
                buttonContainer4.id = 'buttonContainer4';

                buttonContainer1.style.cssText = 'float: left';
                buttonContainer2.style.cssText = 'float: left; margin-left: 5px';
                buttonContainer3.style.cssText = 'float: left; margin-left: 5px';
                buttonContainer4.style.cssText = 'float: left; margin-left: 5px';

                container.appendChild(buttonContainer1);
                container.appendChild(buttonContainer2);
                container.appendChild(buttonContainer3);
                container.appendChild(buttonContainer4);
                toolbar[0].appendChild(container);

                let addRowButton = jqwidgets.createInstance('#buttonContainer1', 'jqxButton', { width: 105, value: 'Add New Row' });
                let addMultipleRowsButton = jqwidgets.createInstance('#buttonContainer2', 'jqxButton', { width: 170, value: 'Add Multiple New Rows' });
                let deleteRowButton = jqwidgets.createInstance('#buttonContainer3', 'jqxButton', { width: 150, value: 'Delete Selected Row' });
                let updateRowButton = jqwidgets.createInstance('#buttonContainer4', 'jqxButton', { width: 155, value: 'Update Selected Row' });

                addRowButton.addEventHandler('click', () => {
                    let datarow = this.generaterow();
                    this.$refs.myGrid.addrow(null, datarow);
                });

                addMultipleRowsButton.addEventHandler('click', () => {
                    this.$refs.myGrid.beginupdate();
                    for (let i = 0; i < 10; i++) {
                        let datarow = this.generaterow();
                        this.$refs.myGrid.addrow(null, datarow);
                    }
                    this.$refs.myGrid.endupdate();
                });

                deleteRowButton.addEventHandler('click', () => {
                    let selectedrowindex = this.$refs.myGrid.getselectedrowindex();
                    let rowscount = this.$refs.myGrid.getdatainformation().rowscount;
                    if (selectedrowindex >= 0 && selectedrowindex < parseFloat(rowscount)) {
                        let id = this.$refs.myGrid.getrowid(selectedrowindex);
                        this.$refs.myGrid.deleterow(id);
                    }
                });

                updateRowButton.addEventHandler('click', () => {
                    let datarow = this.generaterow();
                    let selectedrowindex = this.$refs.myGrid.getselectedrowindex();
                    let rowscount = this.$refs.myGrid.getdatainformation().rowscount;
                    if (selectedrowindex >= 0 && selectedrowindex < parseFloat(rowscount)) {
                        let id = this.$refs.myGrid.getrowid(selectedrowindex);
                        this.$refs.myGrid.updaterow(id, datarow);
                        this.$refs.myGrid.ensurerowvisible(selectedrowindex);
                    }
                });
            }
        }
    }
</script>

<style>
</style>
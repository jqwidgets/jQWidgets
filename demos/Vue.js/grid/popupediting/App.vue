<template>
    <div>
        <JqxGrid ref="myGrid" class="grid"
                 :width="getWidth" :source="dataAdapter" :pageable="true"
                 :autoheight="true" :columns="columns">
        </JqxGrid>

        <JqxWindow ref="myWindow" :width="250" :height="230" :resizable="false" :isModal="false" :autoOpen="false">
            <div>Edit</div>
            <div style="overflow: hidden;">
                <table>
                    <tr>
                        <td align="right">First Name:</td>
                        <td align="left">

                            <JqxInput ref="firstname" :width="150" :height="23"></JqxInput>

                        </td>
                    </tr>
                    <tr>
                        <td align="right">Last Name:</td>
                        <td align="left">

                            <JqxInput ref="lastname" :width="150" :height="23"></JqxInput>

                        </td>
                    </tr>
                    <tr>
                        <td align="right">Product:</td>
                        <td align="left">

                            <JqxInput ref="product" :width="150" :height="23"></JqxInput>

                        </td>
                    </tr>
                    <tr>
                        <td align="right">Quantity:</td>
                        <td align="left">

                            <JqxNumberInput ref="quantity"
                                            :width="150" :height="23" :decimalDigits="0"
                                            :min="0" :spinButtons="true" :spinMode="'simple'">
                            </JqxNumberInput>

                        </td>
                    </tr>
                    <tr>
                        <td align="right">Price:</td>
                        <td align="left">

                            <JqxNumberInput ref="price"
                                            :width="150" :height="23" :symbol="'$'"
                                            :min="0" :spinButtons="true" :spinMode="'simple'">
                            </JqxNumberInput>

                        </td>
                    </tr>
                    <tr style="text-align: center;">
                        <td style="padding-top: 10px;">
                            <JqxButton @click="saveBtn()">
                                Save
                            </JqxButton>
                        </td>
                        <td style="padding-top: 10px;">
                            <JqxButton @click="cancelBtn()">
                                Cancel
                            </JqxButton>
                        </td>
                    </tr>
                </table>
            </div>
        </JqxWindow>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxWindow from "jqwidgets-scripts/jqwidgets-vue/vue_jqxwindow.vue";
    import JqxInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue";
    import JqxNumberInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxnumberinput.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxGrid,
            JqxWindow,
            JqxInput,
            JqxNumberInput,
            JqxButton
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'First Name', datafield: 'firstname', width: 200 },
                    { text: 'Last Name', datafield: 'lastname', width: 200 },
                    { text: 'Product', datafield: 'productname', width: 190 },
                    { text: 'Quantity', datafield: 'quantity', width: 90, cellsalign: 'right' },
                    { text: 'Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                    {
                        text: 'Edit', datafield: 'Edit', columntype: 'button',
                        cellsrenderer: () => {
                            return 'Edit';
                        },
                        buttonclick: (row) => {
                            //get the data and append in to the inputs
                            this.editrow = row;
                            let dataRecord = this.$refs.myGrid.getrowdata(this.editrow);
                            this.$refs.firstname.val(dataRecord.firstname);
                            this.$refs.lastname.val(dataRecord.lastname);
                            this.$refs.product.val(dataRecord.productname);
                            this.$refs.quantity.decimal = dataRecord.quantity;
                            this.$refs.price.decimal = dataRecord.price;
                            // show the popup window.
                            this.$refs.myWindow.position = { x: 68, y: 368 };
                            this.$refs.myWindow.open();
                        }
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(200, false),
                datatype: 'array',
                datafields: [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' }
                ]
            };

            this.editrow = -1;
        },
        methods: {
            saveBtn: function () {
                if (this.editrow >= 0) {
                    let row =
                        {
                            firstname: this.$refs.firstname.val(),
                            lastname: this.$refs.lastname.val(),
                            productname: this.$refs.product.val(),
                            quantity: parseInt(this.$refs.quantity.decimal),
                            price: parseFloat(this.$refs.price.decimal)
                        };
                    let rowID = this.$refs.myGrid.getrowid(this.editrow);
                    this.$refs.myGrid.updaterow(rowID, row);
                    this.$refs.myWindow.hide();
                }
            },
            cancelBtn: function () {
                this.$refs.myWindow.hide();
            }
        }
    }
</script>

<style>
</style>
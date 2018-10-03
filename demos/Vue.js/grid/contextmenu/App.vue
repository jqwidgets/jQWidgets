<template>
    <div>
        <JqxGrid ref="myGrid" @contextmenu="myGridOnContextMenu()" @rowclick="myGridOnRowClick($event)"
                 :width="getWidth" :source="dataAdapter" :pageable="true"
                 :autoheight="true" :columns="columns">
        </JqxGrid>

        <div style="margin-top: 30px">
            <div id="cellbegineditevent"></div>
            <div style="margin-top: 10px" id="cellendeditevent"></div>
        </div>

        <JqxWindow ref="myWindow"
                   :width="250" :height="230" :modalOpacity="'0.01'"
                   :resizable="false" :isModal="true" :autoOpen="false">
            <div>Edit</div>
            <div style="overflow: hidden">
                <table>
                    <tbody>
                        <tr>
                            <td align="right">First Name:</td>
                            <td align="left"><JqxInput ref="firstName" :width="150" :height="23"></JqxInput></td>
                        </tr>
                        <tr>
                            <td align="right">Last Name:</td>
                            <td align="left"><JqxInput ref="lastName" :width="150" :height="23"></JqxInput></td>
                        </tr>
                        <tr>
                            <td align="right">Product:</td>
                            <td align="left"><JqxInput ref="product" :width="150" :height="23"></JqxInput></td>
                        </tr>
                        <tr>
                            <td align="right">Quantity:</td>
                            <td align="left">
                                <JqxNumberInput ref="quantity"
                                                :width="150" :height="23" :decimalDigits="0" :spinButtons="true">
                                </JqxNumberInput>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">Price:</td>
                            <td align="left">
                                <JqxNumberInput ref="price"
                                                :width="150" :height="23" :symbol="'$'" :spinButtons="true">
                                </JqxNumberInput>
                            </td>
                        </tr>
                        <tr>
                            <td align="right"></td>
                            <td style="padding-top: 10px" align="right">
                                <JqxButton ref="SaveBtn" style="margin-right: 5px; float: left" @click="saveBtnOnClick()">Save</JqxButton>
                                <JqxButton ref="CancelBtn" style="float: left" @click="cancelBtnOnClick()">Cancel</JqxButton>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </JqxWindow>

        <JqxMenu ref="myMenu" @itemclick="myMenuOnItemClick($event)"
                 :width="200" :height="58" :mode="'popup'" :autoOpenPopup="false">
            <ul>
                <li>Edit Selected Row</li>
                <li>Delete Selected Row</li>
            </ul>
        </JqxMenu>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxWindow from "jqwidgets-scripts/jqwidgets-vue/vue_jqxwindow.vue";
    import JqxInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue";
    import JqxNumberInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxnumberinput.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";
    import JqxMenu from "jqwidgets-scripts/jqwidgets-vue/vue_jqxmenu.vue";

    export default {
        components: {
            JqxGrid,
            JqxWindow,
            JqxInput,
            JqxNumberInput,
            JqxButton,
            JqxMenu
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
                    { text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(25, false),
                datatype: 'array',
                datafields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' }
                    ]
            }

            this.editrow = -1;
        },
        mounted: function () {
            document.addEventListener('contextmenu', event => event.preventDefault());
        },
        methods: {
            myGridOnContextMenu: function () {
                return false;
            },
            myGridOnRowClick: function (event) {
                if (event.args.rightclick) {
                    this.$refs.myGrid.selectrow(event.args.rowindex);
                    let scrollTop = window.scrollY;
                    let scrollLeft = window.scrollX;
                    this.$refs.myMenu.open(parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);
                    return false;
                }
            },
            myMenuOnItemClick: function (event) {
                let args = event.args;
                let rowindex = this.$refs.myGrid.getselectedrowindex();
                if (args.innerHTML == 'Edit Selected Row') {
                    this.editrow = rowindex;
                    this.$refs.myWindow.position = { x: 60, y: 60 };
                    // get the clicked row's data and initialize the input fields.
                    let dataRecord = this.$refs.myGrid.getrowdata(this.editrow);
                    this.$refs.firstName.value = dataRecord.firstname;
                    this.$refs.lastName.value = dataRecord.lastname;
                    this.$refs.product.value = dataRecord.productname;
                    this.$refs.quantity.decimal = dataRecord.quantity;
                    this.$refs.price.decimal = dataRecord.price;
                    // show the popup window.
                    this.$refs.myWindow.open();
                }
                else {
                    let rowid = this.$refs.myGrid.getrowid(rowindex);
                    this.$refs.myGrid.deleterow(rowid);
                }
            },
            saveBtnOnClick: function () {
                if (this.editrow >= 0) {
                    let row = {
                        firstname: this.$refs.firstName.value, lastname: this.$refs.lastName.value, productname: this.$refs.product.value,
                        quantity: parseInt(this.$refs.quantity.decimal), price: parseFloat(this.$refs.price.decimal)
                    };
                    let rowid = this.$refs.myGrid.getrowid(this.editrow);
                    this.$refs.myGrid.updaterow(rowid, row);
                    this.$refs.myWindow.hide();
                }
            },
            cancelBtnOnClick: function () {
                this.$refs.myWindow.hide();
            }
        }
    }
</script>

<style>
</style>
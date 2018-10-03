<template>
    <div style="font-size: 13px; font-family: Verdana; float: left">

        <JqxGrid ref="myGrid"
                 :width="getWidth" :source="dataAdapter" :columns="columns"
                 :editable="true" :editmode="'click'" :selectionmode="'singlecell'">
        </JqxGrid>


        <div style="margin-top: 20px">
            <div style="float: left; margin-top: 10px">
                <span>Edit Mode:</span>

                <JqxDropDownList ref="myDropDownList" @select="myDropDownListOnSelect($event)"
                                 :width="150" :height="25" :selectedIndex="0"
                                 :dropDownWidth="150" :autoDropDownHeight="true"
                                 :source="['Click','Double-Click','Selected Cell Click']">
                </JqxDropDownList>

            </div>
            <div style="float: left; margin-left: 20px; margin-top: 10px">
                <span>Editable Columns:</span>
                <div>
                    <div style="float: left">

                        <JqxCheckBox @change="firstnameOnChange($event)" :checked="true">First Name</JqxCheckBox>
                        <JqxCheckBox @change="lastnameOnChange($event)" :checked="true">Last Name</JqxCheckBox>
                        <JqxCheckBox @change="quantityOnChange($event)" :checked="true">Quantity</JqxCheckBox>

                    </div>
                    <div style="float: left; margin-left: 20px">

                        <JqxCheckBox @change="productnameOnChange($event)" :checked="true">Product</JqxCheckBox>
                        <JqxCheckBox @change="availableOnChange($event)" :checked="true">Available</JqxCheckBox>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";
    import JqxCheckBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue";

    export default {
        components: {
            JqxGrid,
            JqxDropDownList,
            JqxCheckBox
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 90 },
                    { text: 'Last Name', datafield: 'lastname', width: 90 },
                    { text: 'Product', datafield: 'productname' },
                    { text: 'Quantity', datafield: 'quantity', width: 70, cellsalign: 'right' },
                    { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 }
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
                    { name: 'available', type: 'bool' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' }
                ]
            };
        },
        methods: {
            myDropDownListOnSelect: function (event) {
                let index = event.args.index;
                let editMode = index == 0 ? 'click' : index == 1 ? 'dblclick' : 'selectedcell';
                this.$refs.myGrid.editmode = editMode;
            },
            firstnameOnChange: function (event) {
                this.$refs.myGrid.setcolumnproperty('firstname', 'editable', event.args.checked);
            },
            lastnameOnChange: function (event) {
                this.$refs.myGrid.setcolumnproperty('lastname', 'editable', event.args.checked);
            },
            quantityOnChange: function (event) {
                this.$refs.myGrid.setcolumnproperty('quantity', 'editable', event.args.checked);
            },
            productnameOnChange: function (event) {
                this.$refs.myGrid.setcolumnproperty('productname', 'editable', event.args.checked);
            },
            availableOnChange: function (event) {
                this.$refs.myGrid.setcolumnproperty('available', 'editable', event.args.checked);
            }
        }
    }
</script>

<style>
</style>
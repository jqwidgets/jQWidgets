<template>
    <div>
        <JqxGrid ref="myGrid"
                 :width="getWidth" :source="dataAdapter" :columns="columns"
                 :filterable="true" :showeverpresentrow="true" :editable="true"
                 :everpresentrowposition="'top'" :selectionmode="'multiplecellsadvanced'">
        </JqxGrid>

        <br />

        <JqxRadioButton @checked="topBtnOnChecked()" :checked="true">Add New Row to Top</JqxRadioButton>

        <JqxRadioButton @checked="bottomBtnOnChecked()">Add New Row to Bottom</JqxRadioButton>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxRadioButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxradiobutton.vue";

    export default {
        components: {
            JqxGrid,
            JqxRadioButton
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    {
                        text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215,
                        validateEverPresentRowWidgetValue: this.validateFunc
                    },
                    {
                        text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220,
                        validateEverPresentRowWidgetValue: this.validateFunc
                    },
                    {
                        text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd',
                        validateEverPresentRowWidgetValue: this.validateFunc
                    },
                    {
                        text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right',
                        validateEverPresentRowWidgetValue: this.validateFunc
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(10, false),
                datafields:
                    [
                        { name: 'name', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'available', type: 'bool' },
                        { name: 'date', type: 'date' },
                        { name: 'quantity', type: 'number' }
                    ],
                datatype: 'array'
            }
        },
        methods: {
            validateFunc: function(datafield, value) {
                switch (datafield) {
                    case 'name':
                        if (value.length < 5) {
                            return { message: 'Entered value should be more than 5 characters', result: false };
                        }
                        return true;
                    case 'productname':
                        if (value.length == 0) {
                            return { message: 'Entered field should be more than 0 characters', result: false };
                        }
                        return true;
                    case 'quantity':
                        if (value < 0) {
                            return { message: 'Entered quantity should be positive number', result: false };
                        }
                        return true;
                    case 'date':
                        if ((new Date(value).toString()) == 'Invalid Date') {
                            return { message: 'Entered date should be valid', result: false };
                        }
                        return true;
                }
                return true;
            },
            topBtnOnChecked: function() {
                this.$refs.myGrid.everpresentrowactions = 'add reset';
            },
            bottomBtnOnChecked: function() {
                this.$refs.myGrid.everpresentrowactions = 'addBottom reset';
            }
        }
    }
</script>

<style>
</style>
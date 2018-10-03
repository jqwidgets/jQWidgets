<template>
    <div>
        <JqxGrid ref="myGrid"
                 :width="getWidth" :source="dataAdapter" :columns="columns"
                 :filterable="true" :showeverpresentrow="true" :editable="true"
                 :everpresentrowposition="'top'" :everpresentrowactionsmode="'columns'"
                 :selectionmode="'multiplecellsadvanced'">
        </JqxGrid>

        <br />

        <JqxRadioButton @checked="topRadioBtnOnChecked()" :checked="true">Add New Row to Top</JqxRadioButton>
        <JqxRadioButton @checked="bottomRadioBtnOnChecked()">Add New Row to Bottom</JqxRadioButton>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxRadioButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxradiobutton.vue";
    import JqxInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue";
    import JqxDropdownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";
    import JqxDateTimeInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatetimeinput.vue";
    import JqxNumberInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxnumberinput.vue";

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
                        createEverPresentRowWidget: (datafield, htmlElement, popup, addCallback) => {
                            let container = document.createElement('input');
                            container.id = 'myInput';
                            container.style.border = 'none';
                            htmlElement[0].appendChild(container);

                            let options = {
                                width: '100%', height: 30, source: this.getSourceAdapter('name'),
                                popupZIndex: 999999, placeHolder: 'Enter Name: ', displayMember: 'name'
                            };

                            this.myInput = jqwidgets.createInstance('#myInput', 'jqxInput', options);

                            return container;
                        },
                        initEverPresentRowWidget: (datafield, htmlElement) => {
                        },
                        getEverPresentRowWidgetValue: (datafield, htmlElement, validate) => {
                            let value = this.myInput.val();
                            return value;
                        },
                        resetEverPresentRowWidgetValue: (datafield, htmlElement) => {
                            this.myInput.val('');
                        }
                    },
                    {
                        text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220,
                        createEverPresentRowWidget: (datafield, htmlElement, popup, addCallback) => {
                            let container = document.createElement('div');
                            container.id = 'myDropDownList';
                            container.style.border = 'none';
                            htmlElement[0].appendChild(container);

                            let options = {
                                width: '100%', height: 30, source: this.getSourceAdapter('productname'),
                                popupZIndex: 999999, placeHolder: 'Enter Product: ', displayMember: 'productname'
                            };

                            this.myDropDownList = jqwidgets.createInstance('#myDropDownList', 'jqxDropDownList', options);

                            return container;
                        },
                        getEverPresentRowWidgetValue: (datafield, htmlElement, validate) => {
                            let selectedItem = this.myDropDownList.getSelectedItem();
                            if (!selectedItem)
                                return '';
                            let value = selectedItem.label;
                            return value;
                        },
                        resetEverPresentRowWidgetValue: (datafield, htmlElement) => {
                            this.myDropDownList.clearSelection();
                        }
                    },
                    {
                        text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd',
                        createEverPresentRowWidget: (datafield, htmlElement, popup, addCallback) => {
                            let container = document.createElement('div');
                            container.id = 'myDateTimeInput';
                            container.style.border = 'none';
                            htmlElement[0].appendChild(container);

                            let options = {
                                width: '100%', height: 30, value: null,
                                popupZIndex: 999999, placeHolder: 'Enter Date: '
                            };

                            this.myDateTimeInput = jqwidgets.createInstance('#myDateTimeInput', 'jqxDateTimeInput', options);

                            return container;
                        },
                        initEverPresentRowWidget: (datafield, htmlElement) => {
                        },
                        getEverPresentRowWidgetValue: (datafield, htmlElement, validate) => {
                            let value = this.myDateTimeInput.val();
                            return value;
                        },
                        resetEverPresentRowWidgetValue: (datafield, htmlElement) => {
                            this.myDateTimeInput.val(null);
                        }
                    },
                    {
                        text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right',
                        createEverPresentRowWidget: (datafield, htmlElement, popup, addCallback) => {
                            let container = document.createElement('div');
                            container.id = 'myNumberInput';
                            container.style.border = 'none';
                            htmlElement[0].appendChild(container);

                            let options = {
                                width: '100%', height: 30, decimalDigits: 0, inputMode: 'simple'
                            };

                            this.myNumberInput = jqwidgets.createInstance('#myNumberInput', 'jqxNumberInput', options);

                            return container;
                        },
                        initEverPresentRowWidget: (datafield, htmlElement) => {
                        },
                        getEverPresentRowWidgetValue: (datafield, htmlElement, validate) => {
                            let value = this.myNumberInput.val();
                            if (value == '') value = 0;
                            return parseInt(value);
                        },
                        resetEverPresentRowWidgetValue: (datafield, htmlElement) => {
                            this.myNumberInput.val('');
                        }
                    },
                    { text: '', datafield: 'addButtonColumn', width: 50 },
                    { text: '', datafield: 'resetButtonColumn', width: 50 }
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
            };

            this.myInput;
            this.myDropDownList;
            this.myDateTimeInput;
            this.myNumberInput;
        },
        methods: {
            getSourceAdapter: function (name) {
                let source =
                    {
                        localdata: generatedata(10, false),
                        datafields:
                            [
                                { name: 'name', type: 'string' },
                                { name: 'productname', type: 'string' }
                            ],
                        datatype: 'array'
                    };
                let fields = new Array();
                fields.push(name);
                let dataAdapter = new jqx.dataAdapter(source, { autoBind: true, autoSort: true, uniqueDataFields: fields, autoSortField: name });
                return dataAdapter.records;
            },
            topRadioBtnOnChecked: function () {
                this.$refs.myGrid.everpresentrowactions = 'add reset';
            },
            bottomRadioBtnOnChecked: function () {
                this.$refs.myGrid.everpresentrowactions = 'addBottom reset';
            }
        }
    }
</script>

<style>
</style>
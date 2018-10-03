<template>
    <div>
        <div style="float: left">
            <div>Filter By:</div>

            <JqxDropDownList ref="myDropDownList" @select="dropDownListOnSelect($event)"
                             :width="160" :height="25" :source="dropDownListSource"
                             :selectedIndex="0" :autoDropDownHeight="true">
            </JqxDropDownList>

            <JqxListBox ref="myListBox" style="margin-top: 10px"
                        @checkChange="listBoxOnCheckChange($event)"
                        :width="160" :height="250" :checkboxes="true">
            </JqxListBox>

            <div style="margin-top: 10px; margin-right: 5px; float: left">

                <JqxButton @click="applyFilterBtnOnClick()">
                    Apply Filter
                </JqxButton>

                <JqxButton @click="clearfilterBtnOnClick()">
                    Clear Filter
                </JqxButton>

            </div>
        </div>
        <JqxDataTable ref="myDataTable" style="float: left; margin-left: 20px"
                      :width="650" :source="dataAdapter" :columns="columns"
                      :altRows="true" :pageable="true" :pagerButtonsCount="4">
        </JqxDataTable>
    </div>
</template>

<script>
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";
    import JqxListBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxDataTable,
            JqxDropDownList,
            JqxListBox,
            JqxButton
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'First Name', dataField: 'firstname', width: 190 },
                    { text: 'Last Name', dataField: 'lastname', width: 190 },
                    { text: 'Product', dataField: 'productname', width: 170 },
                    { text: 'Quantity', dataField: 'quantity', cellsAlign: 'right' }
                ],
                dropDownListSource: [
                    { label: 'First Name', value: 'firstname' },
                    { label: 'Last Name', value: 'lastname' },
                    { label: 'Product', value: 'productname' },
                    { label: 'Quantity', value: 'quantity' }
                ]
            }
        },
        beforeCreate: function () {

            this.handleCheckChange = true;

            this.source = {
                localData: generatedata(200, false),
                dataFields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'quantity', type: 'number' }
                    ],
                dataType: 'array'
            };
        },
        mounted: function () {
            this.updateMyListBox('firstname');
        },
        methods: {
            updateMyListBox: function (dataField) {
                this.$refs.myDataTable.clearFilters();
                let myListBoxAdapter = new jqx.dataAdapter(this.source,
                    {
                        uniqueDataFields: [dataField],
                        autoBind: true
                    });
                let uniqueRecords = myListBoxAdapter.records;
                uniqueRecords.splice(0, 0, '(Select All)');
                this.$refs.myListBox.setOptions({ source: uniqueRecords, displayMember: dataField });
                this.$refs.myListBox.checkAll();
            },
            applyFilter: function (dataField) {
                this.$refs.myDataTable.clearFilters();
                let filtertype = 'stringfilter';
                if (dataField == 'date') filtertype = 'datefilter';
                if (dataField == 'price' || dataField == 'quantity') filtertype = 'numericfilter';
                // create a new group of filters.
                let filtergroup = new jqx.filter();
                // get listbox's checked items.
                let checkedItems = this.$refs.myListBox.getCheckedItems();
                if (checkedItems.length === 0) {
                    let filter_or_operator = 1;
                    let filtervalue = 'Empty';
                    let filtercondition = 'equal';
                    let filter = filtergroup.createfilter(filtertype, filtervalue, filtercondition);
                    filtergroup.addfilter(filter_or_operator, filter);
                }
                else {
                    for (let i = 0; i < checkedItems.length; i++) {
                        let filter_or_operator = 1;
                        // set filter's value.
                        let filtervalue = checkedItems[i].label;
                        // set filter's condition.
                        let filtercondition = 'equal';
                        // create new filter.
                        let filter = filtergroup.createfilter(filtertype, filtervalue, filtercondition);
                        // add the filter to the filter group.
                        filtergroup.addfilter(filter_or_operator, filter);
                    }
                }
                // add the filters.
                this.$refs.myDataTable.addFilter(dataField, filtergroup);
                // apply the filters.
                this.$refs.myDataTable.applyFilters();
            },
            listBoxOnCheckChange: function (event) {

                if (!this.handleCheckChange)
                    return;

                if (event.args.label !== '(Select All)') {
                    // update the state of the 'Select All' listbox item.
                    this.handleCheckChange = false;
                    this.$refs.myListBox.checkIndex(0);
                    let checkedItems = this.$refs.myListBox.getCheckedItems();
                    let items = this.$refs.myListBox.getItems();
                    if (checkedItems.length == 1) {
                        this.$refs.myListBox.uncheckIndex(0);
                    }
                    else if (items.length != checkedItems.length) {
                        this.$refs.myListBox.indeterminateIndex(0);
                    }
                    this.handleCheckChange = true;
                }
                else {
                    // check/uncheck all items if 'Select All' is clicked.
                    this.handleCheckChange = false;
                    if (event.args.checked) {
                        this.$refs.myListBox.checkAll();
                    }
                    else {
                        this.$refs.myListBox.uncheckAll();
                    }
                    this.handleCheckChange = true;
                }
            },
            // handle columns selection.
            dropDownListOnSelect: function (event) {
                this.updateMyListBox(event.args.item.value);
            },
            // applies the filter.
            applyFilterBtnOnClick: function () {
                let dataField = this.$refs.myDropDownList.getSelectedItem().value;
                this.applyFilter(dataField);
            },
            // clears the filter.
            clearfilterBtnOnClick: function () {
                this.$refs.myDataTable.clearFilters();
            }
        }
    };
</script>

<style>
    .jqx-button {
        display: inline-block;
        margin-right: 3px;
    }
</style>
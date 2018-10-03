<template>
    <div>
        <JqxDataTable ref="myDataTable" style="float: left"
                      :width="650" :source="dataAdapter" :columns="columns"
                      :altRows="true" :pageable="true" :sortable="true">
        </JqxDataTable>

        <div style="float: left; margin-left: 10px">
            <table>
                <tbody>
                    <tr>
                        <td align="right">
                            <div><strong>Settings</strong></div>
                        </td>
                        <td align="left"></td>
                    </tr>
                    <tr>
                        <td align="right">Column:</td>
                        <td align="left">

                            <JqxDropDownList ref="columnName"
                                             :width="100" :selectedIndex="0" :autoDropDownHeight="true"
                                             :source="['Name','Last Name','Product','Quantity','Unit Price','Total']">
                            </JqxDropDownList>

                        </td>
                    </tr>
                    <tr>
                        <td align="right">Sort Order:</td>
                        <td align="left">

                            <JqxDropDownList ref="sortOrder"
                                             :width="100" :selectedIndex="0" :autoDropDownHeight="true"
                                             :source="['Ascending','Descending']">
                            </JqxDropDownList>

                        </td>
                    </tr>
                    <tr>
                        <td align="right"></td>
                        <td align="left">
                            <JqxButton style="float: left" @click="sortBtnOnClick()" :width="50">Sort</JqxButton>
                            <JqxButton style="float: left; margin-left: 5px" @click="clearBtnOnClick()" :width="50">Clear</JqxButton>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxDataTable,
            JqxDropDownList,
            JqxButton
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Name', dataField: 'firstname', width: 200 },
                    { text: 'Last Name', dataField: 'lastname', width: 200 },
                    { text: 'Product', editable: false, dataField: 'productname', width: 180 },
                    { text: 'Quantity', dataField: 'quantity', width: 80, align: 'right', cellsalign: 'right' },
                    { text: 'Unit Price', dataField: 'price', width: 90, align: 'right', cellsalign: 'right', cellsFormat: 'c2' },
                    { text: 'Total', dataField: 'total', width: 100, align: 'right', cellsalign: 'right', cellsFormat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(85, false),
                datatype: 'array',
                datafields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' },
                        { name: 'total', type: 'number' }
                    ],
                sortcolumn: 'firstname',
                sortdirection: 'asc'
            };
        },
        methods: {
            sortBtnOnClick: function () {
                let columnIndex = this.$refs.columnName.selectedIndex;
                let sortOrder = this.$refs.sortOrder.selectedIndex == 0 ? 'asc' : 'desc';
                this.$refs.myDataTable.sortBy(this.columns[columnIndex].dataField, sortOrder);
            },
            clearBtnOnClick: function () {
                this.$refs.myDataTable.sortBy('firstname', null);
            }
        }
    };
</script>

<style>
</style>
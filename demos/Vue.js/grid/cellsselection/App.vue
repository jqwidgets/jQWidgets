<template>
    <div style="font-size: 13px; font-family: Verdana; float: left">

        <JqxGrid ref="myGrid" @cellselect="myGridOnCellSelect($event)" @cellunselect="myGridOnCellUnselect($event)"
                 :width="getWidth" :source="dataAdapter"
                 :columns="columns" :selectionmode="'singlecell'">
        </JqxGrid>

        <div style="margin-top: 20px">
            <div style="float: left">
                <div>
                    <JqxInput ref="myInput1" style="float: left; margin-right: 5px"
                              :width="50" :height="20" :value="100">
                    </JqxInput>

                    <JqxButton style="float: left" @click="scrollToBtnOnClick()">Scroll to Row</JqxButton>
                </div>
                <div style="clear: both"></div>
                <div style="margin-top: 10px;">
                </div>
                <JqxCheckBox :checked="true" @change="myCheckBoxOnChange($event)">Enable Hover</JqxCheckBox>
                <div style="margin-top: 10px">
                    <span>Selection Mode</span>

                    <JqxDropDownList style="margin-top: 5px" @select="myDropDownListOnSelect($event)"
                                     :width="120" :height="25" :selectedIndex="1" :dropDownWidth="200"
                                     :autoDropDownHeight="true" :source="dropDownSource1">
                    </JqxDropDownList>

                </div>
            </div>
            <div style="float: left; margin-left: 20px">
                <div>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td align="right">Row</td>
                                    <td>
                                        <JqxInput ref="myInput2" style="float: left" :width="50" :value="0"></JqxInput>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">Column:</td>
                                    <td>
                                        <JqxDropDownList ref="myDropDownList"
                                                         :width="120" :height="25" :selectedIndex="1"
                                                         :autoDropDownHeight="true" :source="dropDownSource2">
                                        </JqxDropDownList>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <JqxButton style="float: left; margin-right: 5px" @click="clearBtnOnClick()">Clear Selection</JqxButton>
                                    </td>
                                    <td>
                                        <JqxButton style="float: left" @click="selectBtnOnClick()">Select Cell</JqxButton>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div style="float: left; margin-left: 20px">
                <span>Selection Log:</span>
                <div style="margin-top: 10px">
                    <span>Selected Cell:</span>
                    <span ref="selectedCell"></span>
                    <br />
                    <span>Unselected Cell:</span>
                    <span ref="unselectedCell"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";
    import JqxCheckBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue";
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";

    export default {
        components: {
            JqxGrid,
            JqxInput,
            JqxButton,
            JqxCheckBox,
            JqxDropDownList
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
                    { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
                ],
                dropDownSource1: ['none', 'single cell', 'multiple cells', 'multiple cells extended', 'multiple cells advanced'],
                dropDownSource2: ['First Name', 'Last Name', 'Product Name', 'Quantity', 'Unit Price', 'Total']
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(200, false),
                datafields:
                    [
                        { name: 'id', type: 'number' },
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'available', type: 'bool' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' },
                        { name: 'total', type: 'number' }
                    ],
                datatype: 'array'
            };
        },
        mounted: function () {
            this.$refs.myGrid.selectcell(2, 'lastname');
        },
        methods: {
            scrollToBtnOnClick: function () {

                let index = parseInt(this.$refs.myInput1.value);
                if (!isNaN(index)) {
                    this.$refs.myGrid.ensurerowvisible(index);
                }
            },
            clearBtnOnClick: function () {
                this.$refs.myGrid.clearselection();
            },
            selectBtnOnClick: function () {
                let index = parseInt(this.$refs.myInput2.val());
                let columnindex = this.$refs.myDropDownList.getSelectedIndex();
                let columndatafield = this.$refs.myGrid.getcolumnat(columnindex).datafield;
                if (!isNaN(index)) {
                    this.$refs.myGrid.selectcell(index, columndatafield);
                }
            },
            // enable or disable the selection.
            myDropDownListOnSelect: function (event) {
                let index = event.args.index;
                switch (index) {
                    case 0:
                        this.$refs.myGrid.selectionmode = 'none';
                        break;
                    case 1:
                        this.$refs.myGrid.selectionmode = 'singlecell';
                        break;
                    case 2:
                        this.$refs.myGrid.selectionmode = 'multiplecells';
                        break;
                    case 3:
                        this.$refs.myGrid.selectionmode = 'multiplecellsextended';
                        break;
                    case 4:
                        this.$refs.myGrid.selectionmode = 'multiplecellsadvanced';
                        break;
                }
            },
            // enable or disable the hover state.
            myCheckBoxOnChange: function (event) {
                this.$refs.myGrid.enablehover = event.args.checked;
            },
            // display selected row index.
            myGridOnCellSelect: function (event) {
                let columnheader = this.$refs.myGrid.getcolumn(event.args.datafield).text;
                this.$refs.selectedCell.innerHTML = 'Row: ' + event.args.rowindex + ', Column: ' + columnheader;
            },
            // display unselected row index.
            myGridOnCellUnselect: function (event) {
                let columnheader = this.$refs.myGrid.getcolumn(event.args.datafield).text;
                this.$refs.unselectedCell.innerHTML = 'Row: ' + event.args.rowindex + ', Column: ' + columnheader;
            }
        }
    }
</script>

<style>
</style>
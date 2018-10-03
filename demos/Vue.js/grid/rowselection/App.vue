<template>
    <div style="font-size: 13px; font-family: Verdana; float: left">

        <JqxGrid ref="myGrid" @rowselect="myGridOnRowSelect($event)" @rowunselect="myGridOnRowUnselect($event)"
                 :width="getWidth" :height="350" :source="dataAdapter" :columns="columns">
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

                    <JqxInput ref="myInput2" style="float: left" :width="50" :value="0"></JqxInput>

                    <JqxButton ref="mySelectRowBtn" style="float: left; margin-left: 5px" @click="selectRowBtnOnClick()">Select Row</JqxButton>

                    <JqxButton style="float: left; margin-left: 5px" @click="clearSelectionBtnOnClick()">Clear Selection</JqxButton>

                </div>
                <div style="clear: both"></div>

                <div style="margin-top: 10px;">
                    <JqxCheckBox :checked="true" @change="enableHoverOnChange($event)">Enable Hover</JqxCheckBox>
                </div>

                <div style="margin-top: 10px">
                    <span>Selection Mode:</span>

                    <JqxDropDownList style="margin-top: 5px" @select="enableSelectionOnSelect($event)"
                                     :width="120" :height="25" :selectedIndex="1" :dropDownWidth="200"
                                     :autoDropDownHeight="true" :source="dropDownSource">
                    </JqxDropDownList>

                    <div style="margin-top: 10px; font-size: 12px; font-family: Verdana">
                        Selection Modes:
                        <ul>
                            <li>'none' - disables the selection. Selection is possible only through the API.</li>
                            <li>'singlerow' - full row selection. Each click changes the selected row.</li>
                            <li>'multiplerows' - each click selects a new row. Click on a selected row unselects it.</li>
                            <li>'multiplerowsextended' - users can select multiple rows with drag and drop or<br /> by clicking on rows while holding Ctrl or Shift.</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div style="clear: both; font-size: 12px; font-family: Verdana;">
                <span>Selection Log:</span>
                <div style="margin-top: 10px">
                    <span>Selected Row Index:</span>
                    <span ref="selectedRowIndex"></span>
                    <br />
                    <span>Unselected Row Index:</span>
                    <span ref="unselectedRowIndex"></span>
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
                dropDownSource: ['none', 'single row', 'multiple rows', 'multiple rows extended', 'multiple rows advanced']
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
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' },
                        { name: 'total', type: 'number' }
                    ],
                datatype: 'array'
            };
        },
        mounted: function () {
            this.$refs.myGrid.selectrow(2);
        },
        methods: {
            scrollToBtnOnClick: function() {
                let index = parseInt(this.$refs.myInput1.val());
                if (!isNaN(index)) {
                    this.$refs.myGrid.ensurerowvisible(index);
                }
            },
            selectRowBtnOnClick: function() {
                let index = parseInt(this.$refs.myInput2.val());
                if (!isNaN(index)) {
                    this.$refs.myGrid.selectrow(index);
                }
            },
            clearSelectionBtnOnClick: function() {
                this.$refs.myGrid.clearselection();
            },
            enableSelectionOnSelect: function(event) {
                let index = event.args.index;
                this.$refs.mySelectRowBtn.disabled = false;
                switch (index) {
                    case 0:
                        this.$refs.myGrid.selectionmode = 'none';
                        this.$refs.mySelectRowBtn.disabled = true;
                        break;
                    case 1:
                        this.$refs.myGrid.selectionmode = 'singlerow';
                        break;
                    case 2:
                        this.$refs.myGrid.selectionmode = 'multiplerows';
                        break;
                    case 3:
                        this.$refs.myGrid.selectionmode = 'multiplerowsextended';
                        break;
                    case 4:
                        this.$refs.myGrid.selectionmode = 'multiplerowsadvanced';
                        break;
                }
            },
            enableHoverOnChange: function(event) {
                this.$refs.myGrid.enablehover = event.args.checked;
            },
            myGridOnRowSelect: function(event) {
                this.$refs.selectedRowIndex.innerHTML = event.args.rowindex;
            },
            myGridOnRowUnselect: function(event) {
                this.$refs.unselectedRowIndex.innerHTML = event.args.rowindex;
            }
        }
    }
</script>

<style>
</style>
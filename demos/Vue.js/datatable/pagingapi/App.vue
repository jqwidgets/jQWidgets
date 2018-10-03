<template>
    <div>
        <JqxDataTable ref="myDataTable" style="float: left"
                      @pageChanged="tableOnPageChanged($event)" @pageSizeChanged="tableOnPageSizeChanged($event)"
                      :width="650" :source="source" :columns="columns"
                      :pageable="true" :altRows="true" :pagerPosition="'both'">
        </JqxDataTable>

        <div style="font-size: 13px; font-family: Verdana; float: left; margin-left: 30px">
            <div><strong>Settings</strong></div>
            <div style="margin-top: 10px">
                <div>Pager Mode:</div>

                <JqxDropDownList style="margin-top: 5px" @select="pagerModeListOnSelect($event)"
                                 :width="120" :height="25" :selectedIndex="0"
                                 :source="['default','advanced']" :autoDropDownHeight="true">
                </JqxDropDownList>

                <div style="margin-top: 10px">Pager Position:</div>

                <JqxDropDownList style="margin-top: 5px" @select="pagerPositionListOnSelect($event)"
                                 :width="120" :height="25" :selectedIndex="2"
                                 :source="['top','bottom','both']" :autoDropDownHeight="true">
                </JqxDropDownList>

                <div style="margin-top: 10px">Go to Page:</div>

                <JqxInput ref="myInput" style="margin-top: 5px; margin-right: 5px; float: left"
                          :width="120" :height="25" :value="1">
                </JqxInput>

                <div style="margin-top: 6px; float: left">
                    <JqxButton @click="btnOnClick()" :height="18" :width="40">
                        Apply
                    </JqxButton>
                </div>


            </div>
            <div style="clear: both;"></div>
            <div style="margin-top: 10px;">
                <div>Event Log:</div>

                <JqxPanel ref="myPanel" style="margin-top: 5px"
                          :width="150" :height="150">
                </JqxPanel>

            </div>
        </div>
    </div>
</template>

<script>
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";
    import JqxInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";
    import JqxPanel from "jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue";

    export default {
        components: {
            JqxDataTable,
            JqxDropDownList,
            JqxInput,
            JqxButton,
            JqxPanel
        },
        data: function () {
            return {
                source: {
                    localData: generatedata(200, false),
                    dataType: 'array',
                    datafields:
                        [
                            { name: 'firstname', type: 'string' },
                            { name: 'lastname', type: 'string' },
                            { name: 'productname', type: 'string' },
                            { name: 'quantity', type: 'number' },
                            { name: 'price', type: 'number' },
                            { name: 'total', type: 'number' }
                        ]
                },
                columns: [
                    { text: 'Name', dataField: 'firstname', width: 200 },
                    { text: 'Last Name', dataField: 'lastname', width: 200 },
                    { text: 'Product', editable: false, dataField: 'productname', width: 180 },
                    { text: 'Quantity', dataField: 'quantity', width: 80, cellsalign: 'right' },
                    { text: 'Unit Price', dataField: 'price', width: 80, cellsalign: 'right', cellsFormat: 'c2' },
                    { text: 'Total', dataField: 'total', width: 80, cellsalign: 'right', cellsFormat: 'c2' }
                ]
            }
        },
        methods: {
            pagerModeListOnSelect: function (event) {
                if (event.args.index == 0) {
                    this.$refs.myDataTable.pagerMode = 'default';
                }
                else {
                    this.$refs.myDataTable.pagerMode = 'advanced';
                }
            },
            pagerPositionListOnSelect: function (event) {
                if (event.args.index == 0) {
                    this.$refs.myDataTable.pagerPosition = 'top';
                }
                else if (event.args.index == 1) {
                    this.$refs.myDataTable.pagerPosition = 'bottom';
                }
                else {
                    this.$refs.myDataTable.pagerPosition = 'both';
                }
            },
            btnOnClick: function () {
                let page = parseInt(this.$refs.myInput.val());
                if (!isNaN(page)) {
                    page--;
                    if (page < 0) page = 0;
                    this.$refs.myDataTable.goToPage(page);
                }
            },
            tableOnPageChanged: function (event) {
                let panel = this.$refs.myPanel.$el;
                let count = panel.getElementsByClassName('logged');
                if (count.length >= 5) {
                    this.$refs.myPanel.clearcontent();
                }
                let args = event.args;
                let eventData = '<div>Page:' + (1 + args.pagenum) + ', Page Size: ' + args.pageSize + '</div>';
                this.$refs.myPanel.prepend('<div class="logged" style="margin-top: 5px;">' + eventData + '</div>');
            },
            tableOnPageSizeChanged: function (event) {
                this.$refs.myPanel.clearcontent();
                let args = event.args;
                let eventData = '<div>Page:' + (1 + args.pagenum) + ', Page Size: ' + args.pageSize + ', Old Page Size: ' + args.oldpageSize + '</div>';
                this.$refs.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
            }
        }
    };
</script>

<style>
</style>
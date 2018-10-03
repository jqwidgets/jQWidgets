<template>
    <div>
        <div style="float: left">
            <JqxTreeGrid ref="myTreeGrid"
                         @pageChanged="myTreeGridOnPageChanged($event)"
                         @pageSizeChanged="myTreeGridOnPageSizeChanged($event)"
                         :width="560" :source="dataAdapter" :columns="columns"
                         :sortable="true" :pageable="true" :pagerMode="'advanced'" 
                         :ready="ready" :autoRowHeight="false" :pagerPosition="'both'">
            </JqxTreeGrid>
        </div>

        <div style="float: left; font-size: 13px; font-family: Verdana; margin-left: 30px">
            <div><strong>Settings</strong></div>
            <div style="margin-top: 10px">
                <div>Pager Mode:</div>

                <JqxDropDownList style="margin-top: 5px"
                                 @select="pagerModeDropDownListOnSelect($event)"
                                 :width="120" :height="25" :selectedIndex="1"
                                 :source="['default','advanced']" :autoDropDownHeight="true">
                </JqxDropDownList>

                <div style="margin-top: 10px">Pager Position:</div>

                <JqxDropDownList style="margin-top: 5px"
                                 @select="pagerPositionDropDownListOnSelect($event)"
                                 :width="120" :height="25" :selectedIndex="2"
                                 :source="['top','bottom','both']" :autoDropDownHeight="true">
                </JqxDropDownList>


                <div style="margin-top: 10px">Go to Page:</div>

                <JqxInput ref="myInput" style="margin-top: 5px; float: left" :width="120" :height="25" :value="1"></JqxInput>
                <JqxButton @click="btnOnClick()" style="margin: 7px 0 0 5px; float: left">Apply</JqxButton>

            </div>
            <div style="margin-top: 10px; display: inline-block">
                <div>Event Log:</div>
                <JqxPanel ref="myPanel" style="margin-top: 5px" :width="150" :height="150"></JqxPanel>
            </div>
        </div>

    </div>
</template>

<script>
    import JqxTreeGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtreegrid.vue';
    import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue';
    import JqxInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';
    import JqxPanel from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue';

    export default {
        components: {
            JqxTreeGrid,
            JqxDropDownList,
            JqxInput,
            JqxButton,
            JqxPanel
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Order Name', dataField: 'name', align: 'center', width: 250 },
                    { text: 'Customer', dataField: 'customer', align: 'center', width: 250 },
                    { text: 'Price', dataField: 'price', cellsFormat: 'c2', align: 'center', cellsAlign: 'right', width: 80 },
                    {
                        text: 'Order Date', dataField: 'date', align: 'center', cellsFormat: 'dd-MMMM-yyyy hh:mm',
                        cellsRenderer: (rowKey, column, cellValue, rowData, cellText) => {
                            if (rowData.level === 0) {
                                return this.dataAdapter.formatDate(cellValue, 'dd-MMMM-yyyy');
                            }
                            return cellText;
                        }
                    }
                ]
            }
        },
        beforeCreate: function () {

            this.source = {
                dataType: 'array',
                dataFields: [
                    { name: 'name', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'id', type: 'number' },
                    { name: 'parentid', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'date', type: 'date' },
                    { name: 'customer', type: 'string' }
                ],
                hierarchy:
                    {
                        keyDataField: { name: 'id' },
                        parentDataField: { name: 'parentid' }
                    },
                id: 'id',
                localData: generateordersdata(10)
            };

            this.loop = 0;
        },
        methods: {
            ready: function () {
                this.$refs.myTreeGrid.expandRow(2);
            },
            pagerModeDropDownListOnSelect: function(event) {
                if (event.args.index == 0) {
                    this.$refs.myTreeGrid.pagerMode = 'default';
                }
                else {
                    this.$refs.myTreeGrid.pagerMode = 'advanced';
                }
            },
            pagerPositionDropDownListOnSelect: function (event) {
                if (event.args.index == 0) {
                    this.$refs.myTreeGrid.pagerPosition = 'top';
                }
                else if (event.args.index == 1) {
                    this.$refs.myTreeGrid.pagerPosition = 'bottom';
                }
                else {
                    this.$refs.myTreeGrid.pagerPosition = 'both';
                }
            },
            btnOnClick: function () {
                let page = parseInt(this.$refs.myInput.val());
                if (!isNaN(page)) {
                    page--;
                    if (page < 0) page = 0;
                    this.$refs.myTreeGrid.goToPage(page);
                }
            },
            myTreeGridOnPageChanged: function (event) {
                if (this.loop >= 5) {
                    this.$refs.myPanel.clearcontent();
                    this.loop = 0;
                }

                this.loop++;
                let args = event.args;
                let eventData = "<div>Page:" + (1 + args.pagenum) + ", Page Size: " + args.pageSize + "</div>";
                this.$refs.myPanel.prepend('<div class="logged" style="margin-top: 5px;">' + eventData + '</div>');
            },
            myTreeGridOnPageSizeChanged: function (event) {
                this.$refs.myPanel.clearcontent();
                let args = event.args;
                let eventData = "<div>Page: " + (1 + args.pagenum) + ", Page Size: " + args.pageSize + ", Old Page Size: " + args.oldpageSize + "</div>";
                this.$refs.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
            }
        }
    }
</script>

<style>
</style>
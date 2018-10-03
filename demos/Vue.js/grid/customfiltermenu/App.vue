<template>
    <div style="font-size: 13px; font-family: Verdana; float: left">
        <JqxGrid ref="myGrid" @filter="myGridOnFilter()"
                 :width="getWidth" :source="dataAdapter" :columns="columns"
                 :sortable="true" :filterable="true"
                 :autoshowfiltericon="true" :columnmenuopening="columnmenuopening">
        </JqxGrid>

        <div style="margin-top: 30px">
            <div style="width: 200px; float: left; margin-right: 10px">

                <JqxButton :height="22" @click="removeFilterBtnOnClick()">Remove Filter</JqxButton>

                <JqxCheckBox @change="filterBackgroundCheckBoxOnChange($event)"
                             :height="25" :checked="true">
                    Filter Background
                </JqxCheckBox>

                <JqxCheckBox :height="25" @change="filterIconsCheckBoxOnChange($event)">
                    Show All Filter Icons
                </JqxCheckBox>

            </div>
            <div style="float: left">
                Event Log:

                <JqxPanel ref="myPanel" :width="300" :height="80"></JqxPanel>

            </div>
        </div>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";
    import JqxCheckBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue";
    import JqxPanel from "jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue";
    import JqxInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue";

    export default {
        components: {
            JqxGrid,
            JqxButton,
            JqxCheckBox,
            JqxPanel
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    {
                        text: 'First Name', datafield: 'firstname', width: 160,
                        filtertype: 'custom',
                        createfilterpanel: (datafield, filterPanel) => {
                            this.buildFilterPanel(filterPanel, datafield);
                        }
                    },
                    {
                        text: 'Last Name', datafield: 'lastname',
                        filtertype: 'custom',
                        createfilterpanel: (datafield, filterPanel) => {
                            this.buildFilterPanel(filterPanel, datafield);
                        },
                        width: 160
                    },
                    { text: 'Product', datafield: 'productname', filtertype: 'checkedlist', width: 170 },
                    { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
                    { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                    { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(500, false),
                datafields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'date', type: 'date' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' }
                    ],
                datatype: 'array'
            };
        },
        methods: {
            buildFilterPanel: function (filterPanel, datafield) {

                let inputContainer = document.createElement('input');
                inputContainer.id = 'inputContainer';
                inputContainer.style.margin = '5px';

                let buttonsContainer = document.createElement('div');
                buttonsContainer.className = 'filter';
                Object.assign(buttonsContainer.style, { height: '25px', marginLeft: '20px', marginTop: '7px' })

                let filterButtonContainer = document.createElement('div');
                let filterClearButtonContainer = document.createElement('div');

                filterButtonContainer.style.cssText = 'margin-left: 16px; float: left';
                filterClearButtonContainer.style.cssText = 'margin-left: 12px; float: left';

                filterButtonContainer.id = 'filterButtonContainer';
                filterClearButtonContainer.id = 'filterClearButtonContainer';

                buttonsContainer.appendChild(filterButtonContainer);
                buttonsContainer.appendChild(filterClearButtonContainer);

                filterPanel[0].appendChild(inputContainer);
                filterPanel[0].appendChild(buttonsContainer);

                let filterButtonOptions = { width: 45, height: 25, value: 'Filter' };
                let filterButton = jqwidgets.createInstance('#filterButtonContainer', 'jqxButton', filterButtonOptions);

                let filterClearButtonOptions = { width: 45, height: 25, value: 'Clear' };
                let filterClearButton = jqwidgets.createInstance('#filterClearButtonContainer', 'jqxButton', filterClearButtonOptions);

                let dataSource =
                    {
                        localdata: this.dataAdapter.records,
                        datatype: 'array',
                        async: false
                    }
                let dataadapter = new jqx.dataAdapter(dataSource,
                    {
                        autoBind: false,
                        autoSort: true,
                        autoSortField: datafield,
                        async: false,
                        uniqueDataFields: [datafield]
                    });

                let column = this.$refs.myGrid.getcolumn(datafield);

                let inputOptions = {
                    width: 175, height: 20, source: dataadapter,
                    displayMember: 'datafield', popupZIndex: 99999,
                    placeHolder: `Enter ${column.text}`
                };

                let input = jqwidgets.createInstance('#inputContainer', 'jqxInput', inputOptions);

                filterButton.addEventHandler('click', () => {
                    let filtergroup = new jqx.filter();
                    let filter_or_operator = 1;
                    let filtervalue = input.val();
                    let filtercondition = 'contains';
                    let filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
                    filtergroup.addfilter(filter_or_operator, filter1);
                    // add the filters.
                    this.$refs.myGrid.addfilter(datafield, filtergroup);
                    // apply the filters.
                    this.$refs.myGrid.applyfilters();
                    this.$refs.myGrid.closemenu();
                });

                filterClearButton.addEventHandler('click', () => {
                    this.$refs.myGrid.removefilter(datafield, false);
                    // apply the filters.
                    this.$refs.myGrid.applyfilters();
                    this.$refs.myGrid.closemenu();
                });
            },
            columnmenuopening: function (menu, datafield, height) {
                let column = this.$refs.myGrid.getcolumn(datafield);
                if (column.filtertype === 'custom') {
                    menu.height(155);
                    setTimeout(() => {
                        menu.find('input').focus();
                    }, 25);
                }
                else menu.height(height);
            },
            myGridOnFilter: function () {
                this.$refs.myPanel.clearcontent();
                let filterinfo = this.$refs.myGrid.getfilterinformation();
                let eventData = 'Triggered "filter" event';
                for (let i = 0; i < filterinfo.length; i++) {
                    let eventData = 'Filter Column: ' + filterinfo[i].filtercolumntext;
                    this.$refs.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
                }
            },
            removeFilterBtnOnClick: function () {
                this.$refs.myGrid.clearfilters();
            },
            filterBackgroundCheckBoxOnChange: function (event) {
                this.$refs.myGrid.showfiltercolumnbackground = event.args.checked;
            },
            filterIconsCheckBoxOnChange: function (event) {
                this.$refs.myGrid.autoshowfiltericon = !event.args.checked;
            }
        }
    }
</script>

<style>
    .jqx-button {
        width: fit-content;
        padding-bottom: 0;
    }

    .jqx-panel {
        border: none;
    }
</style>
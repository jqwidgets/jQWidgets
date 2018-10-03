<template>
    <div>
        <JqxGrid ref="myGrid"
                 :width="getWidth" :source="dataAdapter" :showstatusbar="true"
                 :renderstatusbar="createButtonsContainers" :columns="columns">
        </JqxGrid>

        <JqxWindow ref="myWindow" :width="210" :height="180" :autoOpen="false" :resizable="false">
            <div>Find Record</div>
            <div style="overflow: hidden">
                <div>Find what:</div>
                <div style="margin-top: 5px">

                    <JqxInput ref="myInput" :width="194" :height="23"></JqxInput>

                </div>
                <div style="margin-top: 7px; clear: both">Look in:</div>
                <div style="margin-top: 5px">

                    <JqxDropDownList ref="myDropDownList"
                                     :width="200" :height="23" :selectedIndex="0"
                                     :source="dropDownSource" :autoDropDownHeight="true">
                    </JqxDropDownList>

                </div>
                <div>

                    <JqxButton style="margin-top: 15px; margin-left: 50px; float: left"
                               @click="findBtnOnClick()" :width="70">
                        Find
                    </JqxButton>

                    <JqxButton style="margin-left: 5px; margin-top: 15px; float: left"
                               @click="clearBtnOnClick()" :width="70">
                        Clear
                    </JqxButton>

                </div>
            </div>
        </JqxWindow>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxWindow from "jqwidgets-scripts/jqwidgets-vue/vue_jqxwindow.vue";
    import JqxInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue";
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxGrid,
            JqxWindow,
            JqxInput,
            JqxDropDownList,
            JqxButton
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: this.getAdapter(),
                columns: [
                    { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 120 },
                    { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 120 },
                    { text: 'Product', datafield: 'productname', width: 170 },
                    { text: 'In Stock', datafield: 'available', columntype: 'checkbox', width: 125 },
                    { text: 'Quantity', datafield: 'quantity', width: 85, cellsalign: 'right', cellsformat: 'n2' },
                    { text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
                ],
                dropDownSource: ['First Name', 'Last Name', 'Product', 'Quantity', 'Price']
            }
        },
        mounted: function () {
            this.createButtons();
        },
        methods: {
            getAdapter: function() {
                let source =
                    {
                        localdata: generatedata(15),
                        datatype: 'array',
                        datafields:
                            [
                                { name: 'firstname', type: 'string' },
                                { name: 'lastname', type: 'string' },
                                { name: 'productname', type: 'string' },
                                { name: 'quantity', type: 'number' },
                                { name: 'price', type: 'number' },
                                { name: 'available', type: 'bool' }
                            ],
                        updaterow: (rowid, rowdata, commit) => {
                            // synchronize with the server - send update command
                            // call commit with parameter true if the synchronization with the server is successful 
                            // and with parameter false if the synchronization failed.
                            commit(true);
                        }
                    };

                let dataAdapter = new jqx.dataAdapter(source);

                return dataAdapter;
            },
            createButtonsContainers: function (statusbar) {
                let buttonsContainer = document.createElement('div');
                buttonsContainer.style.cssText = 'overflow: hidden; position: relative; margin: 5px;';

                let addButtonContainer = document.createElement('div');
                let deleteButtonContainer = document.createElement('div');
                let reloadButtonContainer = document.createElement('div');
                let searchButtonContainer = document.createElement('div');

                addButtonContainer.id = 'addButton';
                deleteButtonContainer.id = 'deleteButton';
                reloadButtonContainer.id = 'reloadButton';
                searchButtonContainer.id = 'searchButton';

                addButtonContainer.style.cssText = 'float: left; margin-left: 5px;';
                deleteButtonContainer.style.cssText = 'float: left; margin-left: 5px;';
                reloadButtonContainer.style.cssText = 'float: left; margin-left: 5px;';
                searchButtonContainer.style.cssText = 'float: left; margin-left: 5px;';

                buttonsContainer.appendChild(addButtonContainer);
                buttonsContainer.appendChild(deleteButtonContainer);
                buttonsContainer.appendChild(reloadButtonContainer);
                buttonsContainer.appendChild(searchButtonContainer);

                statusbar[0].appendChild(buttonsContainer);
            },
            createButtons: function() {
                let addButtonOptions = {
                    width: 80, height: 25, value: 'Add',
                    imgSrc: '../../../images/add.png',
                    imgPosition: 'center', textPosition: 'center',
                    textImageRelation: 'imageBeforeText'
                }
                let addButton = jqwidgets.createInstance('#addButton', 'jqxButton', addButtonOptions);

                let deleteButtonOptions = {
                    width: 80, height: 25, value: 'Delete',
                    imgSrc: '../../../images/close.png',
                    imgPosition: 'center', textPosition: 'center',
                    textImageRelation: 'imageBeforeText'
                }
                let deleteButton = jqwidgets.createInstance('#deleteButton', 'jqxButton', deleteButtonOptions);

                let reloadButtonOptions = {
                    width: 80, height: 25, value: 'Reload',
                    imgSrc: '../../../images/refresh.png',
                    imgPosition: 'center', textPosition: 'center',
                    textImageRelation: 'imageBeforeText'
                }
                let reloadButton = jqwidgets.createInstance('#reloadButton', 'jqxButton', reloadButtonOptions);

                let searchButtonOptions = {
                    width: 80, height: 25, value: 'Find',
                    imgSrc: '../../../images/search.png',
                    imgPosition: 'center', textPosition: 'center',
                    textImageRelation: 'imageBeforeText'
                }
                let searchButton = jqwidgets.createInstance('#searchButton', 'jqxButton', searchButtonOptions);

                // add new row.
                addButton.addEventHandler('click', (event) => {
                    let datarow = generatedata(1);
                    this.$refs.myGrid.addrow(null, datarow[0]);
                });
                // delete selected row.
                deleteButton.addEventHandler('click', (event) => {
                    let selectedrowindex = this.$refs.myGrid.getselectedrowindex();
                    let rowscount = this.$refs.myGrid.getdatainformation().rowscount;
                    let id = this.$refs.myGrid.getrowid(selectedrowindex);
                    this.$refs.myGrid.deleterow(id);
                });
                // reload grid data.
                reloadButton.addEventHandler('click', (event) => {
                    this.$refs.myGrid.source = this.getAdapter();
                });
                // search for a record.
                searchButton.addEventHandler('click', (event) => {
                    this.$refs.myWindow.open();
                    this.$refs.myWindow.move(60, 60);
                });
            },
            findBtnOnClick: function() {
                this.$refs.myGrid.clearfilters();
                let searchColumnIndex = this.$refs.myDropDownList.selectedIndex;
                let datafield = '';
                switch (searchColumnIndex) {
                    case 0:
                        datafield = 'firstname';
                        break;
                    case 1:
                        datafield = 'lastname';
                        break;
                    case 2:
                        datafield = 'productname';
                        break;
                    case 3:
                        datafield = 'quantity';
                        break;
                    case 4:
                        datafield = 'price';
                        break;
                }
                let searchText = this.$refs.myInput.val();
                let filtergroup = new jqx.filter();
                let filter_or_operator = 1;
                let filtervalue = searchText;
                let filtercondition = 'contains';
                let filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
                filtergroup.addfilter(filter_or_operator, filter);
                this.$refs.myGrid.addfilter(datafield, filtergroup);
                // apply the filters.
                this.$refs.myGrid.applyfilters();
            },
            clearBtnOnClick: function() {
                this.$refs.myGrid.clearfilters();
            }
        }
    }
</script>

<style>
</style>
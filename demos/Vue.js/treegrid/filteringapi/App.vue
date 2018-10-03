<template>
    <div>
        <div style="float: left; margin-right: 20px;">
            <div>Filter By:</div>

            <JqxDropDownList ref="myDropDownList" 
                             @select="myDropDownListOnSelect($event)"
                             :width="100" 
                             :selectedIndex="0" 
                             :autoDropDownHeight="true" 
                             :source="listSource">
            </JqxDropDownList>

            <div style="margin-top: 10px"></div>

            <JqxListBox ref="myListBox" 
                        @checkChange="myListBoxOnCheckChange($event)"
                        :width="160" 
                        :height="250" 
                        :checkboxes="true">
            </JqxListBox>

            <div style="margin-top: 10px">
                <JqxButton @click="applyBtnOnClick()">Apply Filter</JqxButton>
                <JqxButton @click="clearBtnOnClick()">Clear Filter</JqxButton>
            </div>
        </div>

        <JqxTreeGrid ref="myTreeGrid"
                     :width="600" 
                     :source="dataAdapter" 
                     :columns="columns"
                     :sortable="true" 
                     :ready="ready">
        </JqxTreeGrid>
    </div>
</template>

<script>
    import JqxTreeGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtreegrid.vue';
    import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue';
    import JqxListBox from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';

    export default {
        components: {
            JqxTreeGrid,
            JqxDropDownList,
            JqxListBox,
            JqxButton
        },
        data: function () {
            return {
                listSource: [
                    { label: 'First Name', value: 'FirstName' },
                    { label: 'Last Name', value: 'LastName' },
                    { label: 'City', value: 'City' }
                ],
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'First Name', dataField: 'FirstName', minWidth: 100, width: 200 },
                    { text: 'Last Name', dataField: 'LastName', width: 200 },
                    { text: 'City', dataField: 'City' }
                ]
            }
        },
        beforeCreate: function () {

            this.handleCheckChange = true;

            const employees = [
                { 'EmployeeID': 1, 'FirstName': 'Nancy', 'LastName': 'Davolio', 'ReportsTo': 2, 'Country': 'USA', 'Title': 'Sales Representative', 'HireDate': '1992-05-01 00:00:00', 'BirthDate': '1948-12-08 00:00:00', 'City': 'Seattle', 'Address': '507 - 20th Ave. E.Apt. 2A' },
                { 'EmployeeID': 2, 'FirstName': 'Andrew', 'LastName': 'Fuller', 'ReportsTo': null, 'Country': 'USA', 'Title': 'Vice President, Sales', 'HireDate': '1992-08-14 00:00:00', 'BirthDate': '1952-02-19 00:00:00', 'City': 'Tacoma', 'Address': '908 W. Capital Way' },
                { 'EmployeeID': 3, 'FirstName': 'Janet', 'LastName': 'Leverling', 'ReportsTo': 2, 'Country': 'USA', 'Title': 'Sales Representative', 'HireDate': '1992-04-01 00:00:00', 'BirthDate': '1963-08-30 00:00:00', 'City': 'Kirkland', 'Address': '722 Moss Bay Blvd.' },
                { 'EmployeeID': 4, 'FirstName': 'Margaret', 'LastName': 'Peacock', 'ReportsTo': 2, 'Country': 'USA', 'Title': 'Sales Representative', 'HireDate': '1993-05-03 00:00:00', 'BirthDate': '1937-09-19 00:00:00', 'City': 'Redmond', 'Address': '4110 Old Redmond Rd.' },
                { 'EmployeeID': 5, 'FirstName': 'Steven', 'LastName': 'Buchanan', 'ReportsTo': 2, 'Country': 'UK', 'Title': 'Sales Manager', 'HireDate': '1993-10-17 00:00:00', 'BirthDate': '1955-03-04 00:00:00', 'City': 'London', 'Address': '14 Garrett Hill' },
                { 'EmployeeID': 6, 'FirstName': 'Michael', 'LastName': 'Suyama', 'ReportsTo': 5, 'Country': 'UK', 'Title': 'Sales Representative', 'HireDate': '1993-10-17 00:00:00', 'BirthDate': '1963-07-02 00:00:00', 'City': 'London', 'Address': 'Coventry House Miner Rd.' },
                { 'EmployeeID': 7, 'FirstName': 'Robert', 'LastName': 'King', 'ReportsTo': 5, 'Country': 'UK', 'Title': 'Sales Representative', 'HireDate': '1994-01-02 00:00:00', 'BirthDate': '1960-05-29 00:00:00', 'City': 'London', 'Address': 'Edgeham Hollow Winchester Way' },
                { 'EmployeeID': 8, 'FirstName': 'Laura', 'LastName': 'Callahan', 'ReportsTo': 2, 'Country': 'USA', 'Title': 'Inside Sales Coordinator', 'HireDate': '1994-03-05 00:00:00', 'BirthDate': '1958-01-09 00:00:00', 'City': 'Seattle', 'Address': '4726 - 11th Ave. N.E.' },
                { 'EmployeeID': 9, 'FirstName': 'Anne', 'LastName': 'Dodsworth', 'ReportsTo': 5, 'Country': 'UK', 'Title': 'Sales Representative', 'HireDate': '1994-11-15 00:00:00', 'BirthDate': '1966-01-27 00:00:00', 'City': 'London', 'Address': '7 Houndstooth Rd.' }
            ];

            this.source = {
                dataType: 'json',
                dataFields: [
                    { name: 'EmployeeID', type: 'number' },
                    { name: 'ReportsTo', type: 'number' },
                    { name: 'FirstName', type: 'string' },
                    { name: 'LastName', type: 'string' },
                    { name: 'Country', type: 'string' },
                    { name: 'City', type: 'string' },
                    { name: 'Address', type: 'string' },
                    { name: 'Title', type: 'string' },
                    { name: 'HireDate', type: 'date' },
                    { name: 'BirthDate', type: 'date' }
                ],
                hierarchy:
                    {
                        keyDataField: { name: 'EmployeeID' },
                        parentDataField: { name: 'ReportsTo' }
                    },
                id: 'EmployeeID',
                localData: employees
            };
        },
        methods: {
            ready: function() {
                this.$refs.myTreeGrid.expandRow(2);
                this.updatemyListBox('FirstName');
            },
            updatemyListBox: function(dataField) {
                this.$refs.myTreeGrid.clearFilters();
                let myListBoxAdapter = new jqx.dataAdapter(this.source,
                    {
                        uniqueDataFields: [dataField],
                        async: false,
                        autoBind: true
                    });
                let uniqueRecords = myListBoxAdapter.records;
                uniqueRecords.splice(0, 0, '(Select All)');
                this.$refs.myListBox.setOptions({ source: uniqueRecords, displayMember: dataField });
                this.$refs.myListBox.checkAll();
            },
            applyFilter: function(dataField) {
                this.$refs.myTreeGrid.clearFilters();
                let filtertype = 'stringfilter';
                // create a new group of filters.
                let filtergroup = new jqx.filter();
                // get listbox's checked items.
                let checkedItems = this.$refs.myListBox.getCheckedItems();
                if (checkedItems.length == 0) {
                    let filter_or_operator = 1;
                    let filtervalue = "Empty";
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
                this.$refs.myTreeGrid.addFilter(dataField, filtergroup);
                // apply the filters.
                this.$refs.myTreeGrid.applyFilters();
            },
            myListBoxOnCheckChange: function(event) {
                if (!this.handleCheckChange)
                    return;

                if (event.args.label != '(Select All)') {
                    // update the state of the "Select All" listbox item.
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
                    // check/uncheck all items if "Select All" is clicked.
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
            myDropDownListOnSelect: function(event) {
                this.updatemyListBox(event.args.item.value);
            },
            applyBtnOnClick: function() {
                let dataField = this.$refs.myDropDownList.getSelectedItem().value;
                this.applyFilter(dataField);
            },
            clearBtnOnClick: function() {
                this.$refs.myTreeGrid.clearFilters();
            }
        }
    }
</script>

<style>
    .jqx-button{
        width: fit-content;
        display: inline-block;
        margin-right: 5px;
    }
</style>
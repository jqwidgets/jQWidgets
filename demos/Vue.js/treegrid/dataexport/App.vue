<template>
    <div>
        <JqxTreeGrid ref="treeGrid"
                     :width="getWidth"
                     :source="dataAdapter"
                     :columns="columns"
                     :ready="ready">
        </JqxTreeGrid>

        <div style="margin-top: 20px;">
            <div style="float: left;">
                <JqxButton @click="excelExportClick()">Export to Excel</JqxButton>
                <br />
                <br />
                <JqxButton @click="xmlExportClick()">Export to XML</JqxButton>
            </div>
            <div style="float: left; margin-left: 10px;">
                <JqxButton @click="csvExportClick()">Export to CSV</JqxButton>
                <br />
                <br />
                <JqxButton @click="tsvExportClick()">Export to TSV</JqxButton>
            </div>
            <div style="float: left; margin-left: 10px;">
                <JqxButton @click="htmlExportClick()">Export to HTML</JqxButton>
                <br />
                <br />
                <JqxButton @click="jsonExportClick()">Export to JSON</JqxButton>
            </div>
            <div style="float: left; margin-left: 10px;">
                <JqxButton @click="pdfExportClick()">Export to PDF</JqxButton>
            </div>
        </div>
    </div>
</template>

<script>
    import JqxTreeGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtreegrid.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';

    export default {
        components: {
            JqxTreeGrid,
            JqxButton
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'First Name', dataField: 'FirstName', width: 200 },
                    { text: 'Last Name', dataField: 'LastName', width: 150 },
                    { text: 'Title', dataField: 'Title', width: 160 },
                    { text: 'Birth Date', dataField: 'BirthDate', cellsFormat: 'd', width: 120 },
                    { text: 'Hire Date', dataField: 'HireDate', cellsFormat: 'd', width: 120 },
                    { text: 'Address', dataField: 'Address', width: 250 },
                    { text: 'City', dataField: 'City', width: 120 },
                    { text: 'Country', dataField: 'Country', width: 120 } 
                ]
            }
        },
        beforeCreate: function () {

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
            ready: function () {
                this.$refs.treeGrid.expandRow(2);
            },
            excelExportClick: function() {
                this.$refs.treeGrid.exportData('xls');
            },
            xmlExportClick: function() {
                this.$refs.treeGrid.exportData('xml');
            },
            csvExportClick: function() {
                this.$refs.treeGrid.exportData('csv');
            },
            tsvExportClick: function() {
                this.$refs.treeGrid.exportData('tsv');
            },
            htmlExportClick: function() {
                this.$refs.treeGrid.exportData('html');
            },
            jsonExportClick: function() {
                this.$refs.treeGrid.exportData('json');
            },
            pdfExportClick: function() {
                this.$refs.treeGrid.exportData('pdf');
            }
        }
    }
</script>

<style>
</style>
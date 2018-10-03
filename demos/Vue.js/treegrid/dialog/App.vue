<template>
    <div>
        <JqxTreeGrid ref="myTreeGrid"
            @rowDoubleClick="onRowDoubleClick($event)"
            :width="width"
            :sortable="true"
            :altRows="true"
            :ready="ready"
            :columns="columns"
            :source="dataAdapter">
        </JqxTreeGrid>

        <JqxWindow ref="dialog"
            @close="onClose()"
            :resizable="false"
            :autoOpen="false"
            :width="270">
            <div>Edit Dialog</div>
            <div style="overflow: hidden;">
                <table style="table-layout: fixed; border-style: none;">
                    <tr>
                        <td align="right">Employee ID:
                        </td>
                        <td align="left">
                            <input id="EmployeeID" type="text" readonly="true" disabled="disabled" />
                        </td>
                    </tr>
                    <tr>
                        <td align="right">Title:
                        </td>
                        <td align="left">
                            <input id="Title" />
                        </td>
                    </tr>
                    <tr>
                        <td align="right">Country:
                        </td>
                        <td align="left">
                            <input id="Country" />
                        </td>
                    </tr>
                    <tr>
                        <td align="right">Birth Date:</td>
                        <td align="left">
                            <div id="BirthDate"></div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" align="right">
                            <br />
                            <button id="save">Save</button>
                            <button style="margin-left: 5px;" id="cancel">Cancel</button></td>
                    </tr>
                </table>
            </div>
        </JqxWindow>
    </div>
</template>

<script>
    import JqxTreeGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtreegrid.vue';
    import JqxWindow from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxwindow.vue';
    import JqxInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue';
    import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdatetimeinput.vue';
    
    export default {
        components: {
            JqxTreeGrid,
            JqxWindow,
            JqxInput,
            JqxDateTimeInput
        },
        data: function () {
            return {
                width: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Employee ID', editable: false, dataField: 'EmployeeID', width: 150 },
                    { text: 'Title', dataField: 'Title', width: 250 },
                    { text: 'Country', dataField: 'Country', width: 150 },
                    { text: 'Bith Date', dataField: 'BirthDate', cellsAlign: 'right', align: 'right', cellsFormat: 'd' }
                ]
            }
        },        
        beforeCreate: function () {
            this.rowKey;

            this.myCancelButton;
            this.mySaveButton;
            this.myEmployeeIdInput;
            this.myTitleInput;
            this.myCountryInput;
            this.myBirthDateInput;

            let employees = [{ "EmployeeID": 1, "FirstName": "Nancy", "LastName": "Davolio", "ReportsTo": 2, "Country": "USA", "Title": "Sales Representative", "HireDate": "1992-05-01 00:00:00", "BirthDate": "1948-12-08 00:00:00", "City": "Seattle", "Address": "507 - 20th Ave. E.Apt. 2A" }, { "EmployeeID": 2, "FirstName": "Andrew", "LastName": "Fuller", "ReportsTo": null, "Country": "USA", "Title": "Vice President, Sales", "HireDate": "1992-08-14 00:00:00", "BirthDate": "1952-02-19 00:00:00", "City": "Tacoma", "Address": "908 W. Capital Way" }, { "EmployeeID": 3, "FirstName": "Janet", "LastName": "Leverling", "ReportsTo": 2, "Country": "USA", "Title": "Sales Representative", "HireDate": "1992-04-01 00:00:00", "BirthDate": "1963-08-30 00:00:00", "City": "Kirkland", "Address": "722 Moss Bay Blvd." }, { "EmployeeID": 4, "FirstName": "Margaret", "LastName": "Peacock", "ReportsTo": 2, "Country": "USA", "Title": "Sales Representative", "HireDate": "1993-05-03 00:00:00", "BirthDate": "1937-09-19 00:00:00", "City": "Redmond", "Address": "4110 Old Redmond Rd." }, { "EmployeeID": 5, "FirstName": "Steven", "LastName": "Buchanan", "ReportsTo": 2, "Country": "UK", "Title": "Sales Manager", "HireDate": "1993-10-17 00:00:00", "BirthDate": "1955-03-04 00:00:00", "City": "London", "Address": "14 Garrett Hill" }, { "EmployeeID": 6, "FirstName": "Michael", "LastName": "Suyama", "ReportsTo": 5, "Country": "UK", "Title": "Sales Representative", "HireDate": "1993-10-17 00:00:00", "BirthDate": "1963-07-02 00:00:00", "City": "London", "Address": "Coventry House Miner Rd." }, { "EmployeeID": 7, "FirstName": "Robert", "LastName": "King", "ReportsTo": 5, "Country": "UK", "Title": "Sales Representative", "HireDate": "1994-01-02 00:00:00", "BirthDate": "1960-05-29 00:00:00", "City": "London", "Address": "Edgeham Hollow Winchester Way" }, { "EmployeeID": 8, "FirstName": "Laura", "LastName": "Callahan", "ReportsTo": 2, "Country": "USA", "Title": "Inside Sales Coordinator", "HireDate": "1994-03-05 00:00:00", "BirthDate": "1958-01-09 00:00:00", "City": "Seattle", "Address": "4726 - 11th Ave. N.E." }, { "EmployeeID": 9, "FirstName": "Anne", "LastName": "Dodsworth", "ReportsTo": 5, "Country": "UK", "Title": "Sales Representative", "HireDate": "1994-11-15 00:00:00", "BirthDate": "1966-01-27 00:00:00", "City": "London", "Address": "7 Houndstooth Rd." }];
            
            // prepare the data
            this.source = {
                dataType: "json",
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
                this.$refs.myTreeGrid.expandRow(2);
                this.$refs.myTreeGrid.expandRow(5);

                let buttonOptions = { height: 30, width: 80 };
                let saveButton = document.getElementById('save');
                let cancelButton = document.getElementById('cancel');
                let employeeIdInput = document.getElementById('EmployeeID');
                let titleInput = document.getElementById('Title');
                let countryInput = document.getElementById('Country');
                let birthDateInput = document.getElementById('BirthDate');
                
                let width = 150;
                let height = 30;
                let countries = new Array("Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe");

                this.myEmployeeIdInput = jqwidgets.createInstance(employeeIdInput, 'jqxInput', { disabled: true, width: width, height: height });
                this.myTitleInput = jqwidgets.createInstance(titleInput, 'jqxInput', { width: width, height: height });
                this.myCountryInput = jqwidgets.createInstance(countryInput, 'jqxInput', { source: countries, width: width, height: height });
                this.myBirthDateInput = jqwidgets.createInstance(birthDateInput, 'jqxDateTimeInput', { formatString: 'd', width: width, height: height });
                this.mySaveButton = jqwidgets.createInstance(saveButton, 'jqxButton', buttonOptions);
                this.myCancelButton = jqwidgets.createInstance(cancelButton, 'jqxButton', buttonOptions);

                this.myCancelButton.addEventHandler('click', (event) => {
                    this.$refs.dialog.close();
                });
                
                this.mySaveButton.addEventHandler('click', (event) => {
                    if(!!this.rowKey) {
                        let rowData = {
                            EmployeeID: this.myEmployeeIdInput.val(),
                            Title: this.myTitleInput.val(),
                            Country: this.myCountryInput.val(),
                            BirthDate: this.myBirthDateInput.val()
                        };
                        this.$refs.myTreeGrid.updateRow(this.rowKey, rowData)
                        this.$refs.dialog.close();
                    }
                });

            },
            onClose: function () {
                this.$refs.myTreeGrid.disabled = false;
            },
            onRowDoubleClick: function (event) {
                let args = event.args;
                let key = args.key;
                let row = args.row;
                // update the widgets inside jqxWindow.
                this.$refs.dialog.setTitle("Edit Row: " + row.EmployeeID);
                this.$refs.dialog.open();
                this.rowKey = parseInt(key);
                this.myEmployeeIdInput.val(row.EmployeeID);
                this.myTitleInput.val(row.Title);
                this.myCountryInput.val(row.Country);
                this.myBirthDateInput.val(row.BirthDate);
                // disable jqxTreeGrid.
                this.$refs.myTreeGrid.disabled = true;
            }
        }
    }
</script>

<style>
</style>

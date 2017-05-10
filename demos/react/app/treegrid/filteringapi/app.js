import React from 'react';
import ReactDOM from 'react-dom';

import JqxTreeGrid from '../../../jqwidgets-react/react_jqxtreegrid.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxListBox from '../../../jqwidgets-react/react_jqxlistbox.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    componentDidMount () {
        this.refs.myTreeGrid.expandRow(2);

        // updates the listbox with unique records depending on the selected column.
        let updateFilterBox = (dataField) => {
            this.refs.myTreeGrid.clearFilters();
            let filterBoxAdapter = new $.jqx.dataAdapter(this.getSource(),
            {
                uniqueDataFields: [dataField],
                async: false,
                autoBind: true
            });
            let uniqueRecords = filterBoxAdapter.records;
            uniqueRecords.splice(0, 0, '(Select All)');
            this.refs.filterbox.setOptions({ source: uniqueRecords, displayMember: dataField });
            this.refs.filterbox.checkAll();
        }
        updateFilterBox('FirstName');

        // handle select all item.
        let handleCheckChange = true;
        this.refs.filterbox.on('checkChange', (event) => {
            if (!handleCheckChange)
                return;

            if (event.args.label != '(Select All)') {
                // update the state of the "Select All" listbox item.
                handleCheckChange = false;
                this.refs.filterbox.checkIndex(0);
                let checkedItems = this.refs.filterbox.getCheckedItems();
                let items = this.refs.filterbox.getItems();
                if (checkedItems.length == 1) {
                    this.refs.filterbox.uncheckIndex(0);
                }
                else if (items.length != checkedItems.length) {
                    this.refs.filterbox.indeterminateIndex(0);
                }

                handleCheckChange = true;
            }
            else {
                // check/uncheck all items if "Select All" is clicked.
                handleCheckChange = false;
                if (event.args.checked) {
                    this.refs.filterbox.checkAll();
                }
                else {
                    this.refs.filterbox.uncheckAll();
                }
                handleCheckChange = true;
            }
        });

        // handle columns selection.
        this.refs.columnchooser.on('select', (event) => {
            updateFilterBox(event.args.item.value);
        });

        // builds and applies the filter.
        let applyFilter = (dataField) => {
            this.refs.myTreeGrid.clearFilters();
            let filtertype = 'stringfilter';         
            // create a new group of filters.
            let filtergroup = new $.jqx.filter();
            // get listbox's checked items.
            let checkedItems = this.refs.filterbox.getCheckedItems();
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
            this.refs.myTreeGrid.addFilter(dataField, filtergroup);
            // apply the filters.
            this.refs.myTreeGrid.applyFilters();
        }

        // clears the filter.
        this.refs.clearfilter.on('click', () => {
            this.refs.myTreeGrid.clearFilters();
        });

        // applies the filter.
        this.refs.applyFilter.on('click', () => {
            let dataField = this.refs.columnchooser.getSelectedItem().value;
            applyFilter(dataField);
        });
    }

    getDataEmployees () {
        let employees = [{ 'EmployeeID': 1, 'FirstName': 'Nancy', 'LastName': 'Davolio', 'ReportsTo': 2, 'Country': 'USA', 'Title': 'Sales Representative', 'HireDate': '1992-05-01 00:00:00', 'BirthDate': '1948-12-08 00:00:00', 'City': 'Seattle', 'Address': '507 - 20th Ave. E.Apt. 2A' }, { 'EmployeeID': 2, 'FirstName': 'Andrew', 'LastName': 'Fuller', 'ReportsTo': null, 'Country': 'USA', 'Title': 'Vice President, Sales', 'HireDate': '1992-08-14 00:00:00', 'BirthDate': '1952-02-19 00:00:00', 'City': 'Tacoma', 'Address': '908 W. Capital Way' }, { 'EmployeeID': 3, 'FirstName': 'Janet', 'LastName': 'Leverling', 'ReportsTo': 2, 'Country': 'USA', 'Title': 'Sales Representative', 'HireDate': '1992-04-01 00:00:00', 'BirthDate': '1963-08-30 00:00:00', 'City': 'Kirkland', 'Address': '722 Moss Bay Blvd.' }, { 'EmployeeID': 4, 'FirstName': 'Margaret', 'LastName': 'Peacock', 'ReportsTo': 2, 'Country': 'USA', 'Title': 'Sales Representative', 'HireDate': '1993-05-03 00:00:00', 'BirthDate': '1937-09-19 00:00:00', 'City': 'Redmond', 'Address': '4110 Old Redmond Rd.' }, { 'EmployeeID': 5, 'FirstName': 'Steven', 'LastName': 'Buchanan', 'ReportsTo': 2, 'Country': 'UK', 'Title': 'Sales Manager', 'HireDate': '1993-10-17 00:00:00', 'BirthDate': '1955-03-04 00:00:00', 'City': 'London', 'Address': '14 Garrett Hill' }, { 'EmployeeID': 6, 'FirstName': 'Michael', 'LastName': 'Suyama', 'ReportsTo': 5, 'Country': 'UK', 'Title': 'Sales Representative', 'HireDate': '1993-10-17 00:00:00', 'BirthDate': '1963-07-02 00:00:00', 'City': 'London', 'Address': 'Coventry House Miner Rd.' }, { 'EmployeeID': 7, 'FirstName': 'Robert', 'LastName': 'King', 'ReportsTo': 5, 'Country': 'UK', 'Title': 'Sales Representative', 'HireDate': '1994-01-02 00:00:00', 'BirthDate': '1960-05-29 00:00:00', 'City': 'London', 'Address': 'Edgeham Hollow Winchester Way' }, { 'EmployeeID': 8, 'FirstName': 'Laura', 'LastName': 'Callahan', 'ReportsTo': 2, 'Country': 'USA', 'Title': 'Inside Sales Coordinator', 'HireDate': '1994-03-05 00:00:00', 'BirthDate': '1958-01-09 00:00:00', 'City': 'Seattle', 'Address': '4726 - 11th Ave. N.E.' }, { 'EmployeeID': 9, 'FirstName': 'Anne', 'LastName': 'Dodsworth', 'ReportsTo': 5, 'Country': 'UK', 'Title': 'Sales Representative', 'HireDate': '1994-11-15 00:00:00', 'BirthDate': '1966-01-27 00:00:00', 'City': 'London', 'Address': '7 Houndstooth Rd.' }];
        return employees;
    }

    getSource () {
        let source =
        {
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
            localData: this.getDataEmployees()
        };
        return source;
    }

    render () {        
        let dataAdapter = new $.jqx.dataAdapter(this.getSource());
        // create Tree Grid
        let columns = [
            { text: 'First Name', dataField: 'FirstName', minWidth: 100, width: 200 },
            { text: 'Last Name', dataField: 'LastName', width: 200 },
            { text: 'City', dataField: 'City' }
        ];

        return (
            <div style={{ float: 'left' }}>

                <div style={{ float: 'left' }}>
                    <div>Filter By:</div>
                    <JqxDropDownList ref='columnchooser'
                        width={100} selectedIndex={0} autoDropDownHeight={true}
                        source={[{ label: 'First Name', value: 'FirstName' },
                            { label: 'Last Name', value: 'LastName' },
                            { label: 'City', value: 'City' }]}
                     />
                    <JqxListBox ref='filterbox' style={{ marginTop: 10 }}
                        width={160} height={250}
                        checkboxes={true}
                    />
                    <div style={{ marginTop: 10 }}>
                        <JqxButton ref='applyFilter' value='Apply Filter' style={{ float: 'left' }}/>
                        <JqxButton ref='clearfilter' value='Clear Filter' style={{ float: 'left' }}/>
                    </div>
                </div>

                <JqxTreeGrid ref='myTreeGrid' style={{ float: 'left', marginLeft: 20 }}
                    width={600}
                    source={dataAdapter}
                    sortable={true}
                    columns={columns}
                />

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';
import JqxListBox from '../../../jqwidgets-react/react_jqxlistbox.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.updateFilterBox('firstname');
        let handleCheckChange = true;

        this.refs.filterbox.on('checkChange', (event) => {
            if (!handleCheckChange)
                return;

            if (event.args.label != '(Select All)') {
                // update the state of the 'Select All' listbox item.
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
                // check/uncheck all items if 'Select All' is clicked.
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
            this.updateFilterBox(event.args.item.value);
        });

        // clears the filter.
        this.refs.clearfilter.on('click', () => {
            this.refs.myDataTable.clearFilters();
        });
        // applies the filter.
        this.refs.applyFilter.on('click', () => {
            let dataField = this.refs.columnchooser.getSelectedItem().value;
            this.applyFilter(dataField);
        });
    }
    updateFilterBox(dataField) {
        this.refs.myDataTable.clearFilters();
        let filterBoxAdapter = new $.jqx.dataAdapter(this.source(),
            {
                uniqueDataFields: [dataField],
                autoBind: true
            });
        let uniqueRecords = filterBoxAdapter.records;
        uniqueRecords.splice(0, 0, '(Select All)');
        this.refs.filterbox.setOptions({ source: uniqueRecords, displayMember: dataField });
        this.refs.filterbox.checkAll();
    }

    // builds and applies the filter.
    applyFilter(dataField) {
        this.refs.myDataTable.clearFilters();
        let filtertype = 'stringfilter';
        if (dataField == 'date') filtertype = 'datefilter';
        if (dataField == 'price' || dataField == 'quantity') filtertype = 'numericfilter';
        // create a new group of filters.
        let filtergroup = new $.jqx.filter();
        // get listbox's checked items.
        let checkedItems = this.refs.filterbox.getCheckedItems();
        if (checkedItems.length == 0) {
            let filter_or_operator = 1;
            let filtervalue = 'Empty';
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
        this.refs.myDataTable.addFilter(dataField, filtergroup);
        // apply the filters.
        this.refs.myDataTable.applyFilters();
    }
    source() {
        let data = generatedata(200);

        let source = {
            localData: data,
            dataFields:
            [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' }
            ],
            dataType: 'array'
        };
        return source;
    }
    render() {
        

        let dataAdapter = new $.jqx.dataAdapter(this.source());

        let columns =
            [
                { text: 'First Name', dataField: 'firstname', width: 190 },
                { text: 'Last Name', dataField: 'lastname', width: 190 },
                { text: 'Product', dataField: 'productname', width: 170 },
                { text: 'Quantity', dataField: 'quantity', cellsAlign: 'right' }
            ];

        let dropDownListSource =
            [
                { label: 'First Name', value: 'firstname' },
                { label: 'Last Name', value: 'lastname' },
                { label: 'Product', value: 'productname' },
                { label: 'Quantity', value: 'quantity' }
            ];
        return (
            <div>
                <div style={{ float: 'left' }}>
                    <div>Filter By:</div>
                    <JqxDropDownList ref='columnchooser'
                        width={160} height={25} source={dropDownListSource}
                        selectedIndex={0} autoDropDownHeight={true}
                    />
                    <JqxListBox style={{ marginTop: 10 }} ref='filterbox'
                        width={160} height={250} checkboxes={true}
                    />
                    <div style={{ marginTop: 10 }}>
                        <JqxButton ref='applyFilter' value='Apply Filter'
                            style={{ marginRight: 5, float: 'left' }}
                        />
                        <JqxButton ref='clearfilter' value='Clear Filter' />
                    </div>
                </div>
                <JqxDataTable ref='myDataTable' style={{ marginLeft: 20, float: 'left' }}
                    width={650} source={dataAdapter} altRows={true}
                    pageable={true} pagerButtonsCount={4} columns={columns}
                />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));

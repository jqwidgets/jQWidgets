import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
    componentDidMount() {

        let addfilter = () => {
            let filtergroup = new $.jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = 'Andrew';
            let filtercondition = 'equal';
            let filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);

            filtergroup.addfilter(filter_or_operator, filter1);
            // add the filters.
            this.refs.myGrid.addfilter('firstname', filtergroup);
            // apply the filters.
            this.refs.myGrid.applyfilters();
        }

        addfilter();

        let localizationObject = {
            filterstringcomparisonoperators: ['contains', 'does not contain'],
            // filter numeric comparison operators.
            filternumericcomparisonoperators: ['less than', 'greater than'],
            // filter date comparison operators.
            filterdatecomparisonoperators: ['less than', 'greater than'],
            // filter bool comparison operators.
            filterbooleancomparisonoperators: ['equal', 'not equal']
        }

        this.refs.myGrid.localizestrings(localizationObject);

        this.refs.myGrid.on('filter', (event) => {
            this.refs.myPanel.clearcontent();
            let filterinfo = this.refs.myGrid.getfilterinformation();
            let eventData = 'Triggered "filter" event';
            for (i = 0; i < filterinfo.length; i++) {
                let eventData = 'Filter Column: ' + filterinfo[i].filtercolumntext;
                this.refs.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
            }
        });

        this.refs.clearfilteringbutton.on('click', () => {
            this.refs.myGrid.clearfilters();
        });

        this.refs.filterbackground.on('change', (event) => {
            this.refs.myGrid.showfiltercolumnbackground(event.args.checked);
        });

        this.refs.filtericons.on('change', (event) => {
            this.refs.myGrid.autoshowfiltericon(!event.args.checked);
        });
    }
    render() {
        let data = generatedata(500);

        let source =
            {
                localdata: data,
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'date', type: 'date' },
                    { name: 'quantity', type: 'number' }
                ],
                datatype: 'array'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'First Name', datafield: 'firstname', width: 200 },
                { text: 'Last Name', datafield: 'lastname', width: 200 },
                { text: 'Product', datafield: 'productname', width: 180 },
                { text: 'Order Date', datafield: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
                { text: 'Quantity', datafield: 'quantity', cellsalign: 'right' }
            ];

        let updatefilterconditions = (type, defaultconditions) => {
            let stringcomparisonoperators = ['CONTAINS', 'DOES_NOT_CONTAIN'];
            let numericcomparisonoperators = ['LESS_THAN', 'GREATER_THAN'];
            let datecomparisonoperators = ['LESS_THAN', 'GREATER_THAN'];
            let booleancomparisonoperators = ['EQUAL', 'NOT_EQUAL'];
            switch (type) {
                case 'stringfilter':
                    return stringcomparisonoperators;
                case 'numericfilter':
                    return numericcomparisonoperators;
                case 'datefilter':
                    return datecomparisonoperators;
                case 'booleanfilter':
                    return booleancomparisonoperators;
            }
        };

        let updatefilterpanel = (filtertypedropdown1, filtertypedropdown2, filteroperatordropdown, filterinputfield1, filterinputfield2, filterbutton, clearbutton, columnfilter, filtertype, filterconditions) => {
            let index1 = 0;
            let index2 = 0;
            if (columnfilter != null) {
                let filter1 = columnfilter.getfilterat(0);
                let filter2 = columnfilter.getfilterat(1);
                if (filter1) {
                    index1 = filterconditions.indexOf(filter1.comparisonoperator);
                    let value1 = filter1.filtervalue;
                    filterinputfield1.val(value1);
                }
                if (filter2) {
                    index2 = filterconditions.indexOf(filter2.comparisonoperator);
                    let value2 = filter2.filtervalue;
                    filterinputfield2.val(value2);
                }
            }
            filtertypedropdown1.jqxDropDownList({ autoDropDownHeight: true, selectedIndex: index1 });
            filtertypedropdown2.jqxDropDownList({ autoDropDownHeight: true, selectedIndex: index2 });
        };

        return (
            <div style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>
                <JqxGrid ref='myGrid'
                    width={850} source={dataAdapter} columns={columns}
                    sortable={true} filterable={true} autoshowfiltericon={true}
                    updatefilterconditions={updatefilterconditions}
                />
                <div id='eventslog' style={{ marginTop: 30 }}>
                    <div style={{ width: 200, float: 'left', marginRight: 10 }}>
                        <JqxButton value='Remove Filter' ref='clearfilteringbutton' height={25} />
                        <JqxCheckBox style={{ marginTop: 10 }} ref='filterbackground'
                            value='Filter Background' height={25} checked={true}
                        />
                        <JqxCheckBox style={{ marginTop: 10 }} ref='filtericons'
                            value='Show All Filter Icons' height={25} checked={false}
                        />
                    </div>
                    <div style={{ float: 'left' }}>
                        Event Log:
                        <JqxPanel style={{ border: 'none' }} ref='myPanel'
                            width={300} height={80}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

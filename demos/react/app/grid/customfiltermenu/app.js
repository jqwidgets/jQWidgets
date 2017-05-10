import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';


class App extends React.Component {
    componentDidMount() {
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
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' }
                ],
                datatype: 'array'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                {
                    text: 'First Name', datafield: 'firstname', width: 160,
                    filtertype: 'custom',
                    createfilterpanel: (datafield, filterPanel) => {
                        buildFilterPanel(filterPanel, datafield);
                    }
                },
                {
                    text: 'Last Name', datafield: 'lastname',
                    filtertype: 'custom',
                    createfilterpanel: (datafield, filterPanel) => {
                        buildFilterPanel(filterPanel, datafield);
                    },
                    width: 160
                },
                { text: 'Product', datafield: 'productname', filtertype: 'checkedlist', width: 170 },
                { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
                { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
            ];

        let columnmenuopening = (menu, datafield, height) => {
            let column = this.refs.myGrid.getcolumn(datafield);
            if (column.filtertype === 'custom') {
                menu.height(155);
                setTimeout(() => {
                    menu.find('input').focus();
                }, 25);
            }
            else menu.height(height);
        };

        let buildFilterPanel = (filterPanel, datafield) => {

            let inputContainer = document.createElement('div');

            let buttonsContainer = document.createElement('div');
            buttonsContainer.className = 'filter';
            Object.assign(buttonsContainer.style, { height: '25px', marginLeft: '20px', marginTop: '7px' })

            let filterButtonContainer = document.createElement('div');
            let filterClearButtonContainer = document.createElement('div');

            buttonsContainer.appendChild(filterButtonContainer);
            buttonsContainer.appendChild(filterClearButtonContainer);

            filterPanel[0].appendChild(inputContainer);
            filterPanel[0].appendChild(buttonsContainer);

            let filterButton = ReactDOM.render(<JqxButton style={{ marginLeft: 16, float: 'left' }}
                width={45} height={25} value='Filter' />, filterButtonContainer);

            let filterClearButton = ReactDOM.render(<JqxButton style={{ marginLeft: 12, float: 'left' }}
                width={45} height={25} value='Clear' />, filterClearButtonContainer);

            let dataSource =
                {
                    localdata: dataAdapter.records,
                    datatype: 'array',
                    async: false
                }
            let dataadapter = new $.jqx.dataAdapter(dataSource,
                {
                    autoBind: false,
                    autoSort: true,
                    autoSortField: datafield,
                    async: false,
                    uniqueDataFields: [datafield]
                });

            let column = this.refs.myGrid.getcolumn(datafield);


            let input = ReactDOM.render(<JqxInput style={{ margin: 5 }}
                width={175} height={20} source={dataadapter}
                displayMember={datafield} popupZIndex={9999999}
                placeHolder={'Enter ' + column.text} />, inputContainer);

            filterButton.on('click', () => {
                let filtergroup = new $.jqx.filter();
                let filter_or_operator = 1;
                let filtervalue = input.val();
                let filtercondition = 'contains';
                let filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
                filtergroup.addfilter(filter_or_operator, filter1);
                // add the filters.
                this.refs.myGrid.addfilter(datafield, filtergroup);
                // apply the filters.
                this.refs.myGrid.applyfilters();
                this.refs.myGrid.closemenu();
            });
            filterClearButton.on('click', () => {
                this.refs.myGrid.removefilter(datafield);
                // apply the filters.
                this.refs.myGrid.applyfilters();
                this.refs.myGrid.closemenu();
            });
        }

        return (
            <div style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>
                <JqxGrid ref='myGrid'
                    width={850} source={dataAdapter} columns={columns}
                    sortable={true} filterable={true}
                    autoshowfiltericon={true} columnmenuopening={columnmenuopening}
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

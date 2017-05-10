import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.pagerModeDropDownList.on('select', (event) => {
            if (event.args.index == 0) {
                this.refs.myDataTable.pagerMode('default');
            }
            else {
                this.refs.myDataTable.pagerMode('advanced');
            }
        });

        this.refs.pagerPositionDropDownList.on('select', (event) => {
            if (event.args.index == 0) {
                this.refs.myDataTable.pagerPosition('top');
            }
            else if (event.args.index == 1) {
                this.refs.myDataTable.pagerPosition('bottom');
            }
            else {
                this.refs.myDataTable.pagerPosition('both');
            }
        });

        this.refs.applyPage.on('click', () => {
            let page = parseInt(this.refs.gotopage.val());
            if (!isNaN(page)) {
                page--;
                if (page < 0) page = 0;
                this.refs.myDataTable.goToPage(page);
            }
        });

        this.refs.myDataTable.on('pageChanged', (event) => {
            let panel = document.getElementsByClassName('myPanel')[0];
            let count = panel.getElementsByClassName('logged');
            if (count.length >= 5) {
                this.refs.events.clearcontent();
            }
            let args = event.args;
            let eventData = '<div>Page:' + (1 + args.pagenum) + ', Page Size: ' + args.pageSize + '</div>';
            this.refs.events.prepend('<div class="logged" style="margin-top: 5px;">' + eventData + '</div>');
        });

        this.refs.myDataTable.on('pageSizeChanged', (event) => {
            this.refs.events.clearcontent();
            let args = event.args;
            let eventData = '<div>Page:' + (1 + args.pagenum) + ', Page Size: ' + args.pageSize + ', Old Page Size: ' + args.oldPageSize + '</div>';
            this.refs.events.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
        });
    }
    render() {
        let source =
            {
                localData: generatedata(200),
                dataType: 'array',
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'total', type: 'number' }
                ]
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Name', dataField: 'firstname', width: 200 },
                { text: 'Last Name', dataField: 'lastname', width: 200 },
                { text: 'Product', editable: false, dataField: 'productname', width: 180 },
                { text: 'Quantity', dataField: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', dataField: 'price', width: 80, cellsalign: 'right', cellsFormat: 'c2' },
                { text: 'Total', dataField: 'total', width: 80, cellsalign: 'right', cellsFormat: 'c2' }
            ];

        return (
            <div>
                <JqxDataTable ref='myDataTable' style={{ float: 'left' }}
                    width={650} source={dataAdapter} altRows={true}
                    pageable={true} pagerPosition={'both'} columns={columns}
                />
                <div style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left', marginLeft: 30 }}>
                    <div><strong>Settings</strong></div>
                    <div style={{ marginTop: 10 }}>
                        <div>Pager Mode:</div>
                        <JqxDropDownList ref='pagerModeDropDownList' style={{ marginTop: 5 }}
                            width={120} height={25} selectedIndex={0}
                            source={['default', 'advanced']} autoDropDownHeight={true}
                        />
                        <div style={{ marginTop: 10 }}>Pager Position:</div>
                        <JqxDropDownList ref='pagerPositionDropDownList' style={{ marginTop: 5 }}
                            width={120} height={25} selectedIndex={2}
                            source={['top', 'bottom', 'both']} autoDropDownHeight={true}
                        />
                        <div style={{ marginTop: 10 }}>Go to Page:</div>
                        <JqxInput ref='gotopage' style={{ marginTop: 5, float: 'left', marginRight: 5 }}
                            value='1' width={120} height={25}
                        />
                        <JqxButton ref='applyPage' value='Apply' height={25} style={{ marginTop: 6 }} />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <div>Event Log:</div>
                        <JqxPanel ref='events' className='myPanel' style={{ marginTop: 5 }}
                            width={150} height={150}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

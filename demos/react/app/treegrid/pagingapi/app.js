import React from 'react';
import ReactDOM from 'react-dom';

import JqxTreeGrid from '../../../jqwidgets-react/react_jqxtreegrid.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myTreeGrid.expandRow(2);
        this.refs.gotopage.val(1);

        this.refs.pagerModeDropDownList.on('select', (event) => {
            if (event.args.index == 0) {
                this.refs.myTreeGrid.pagerMode('default');
            }
            else {
                this.refs.myTreeGrid.pagerMode('advanced');
            }
        });

        this.refs.pagerPositionDropDownList.on('select', (event) => {
            if (event.args.index == 0) {
                this.refs.myTreeGrid.pagerPosition('top' );
            }
            else if (event.args.index == 1) {
                this.refs.myTreeGrid.pagerPosition('bottom' );
            }
            else {
                this.refs.myTreeGrid.pagerPosition('both' );
            }
        });

        this.refs.applyPage.on('click', () => {
            let page = parseInt(this.refs.gotopage.val());
            if (!isNaN(page)) {
                page--;
                if (page < 0) page = 0;
                this.refs.myTreeGrid.goToPage(page);
            }
        });

        // raised when a page is changed.
        let loop = 0;
        this.refs.myTreeGrid.on('pageChanged', (event) => {
            if (loop >= 5) {
                this.refs.events.clearcontent();
                loop = 0;
            }

            loop++;
            let args = event.args;
            let eventData = "<div>Page:" + (1 + args.pagenum) + ", Page Size: " + args.pageSize + "</div>";
            this.refs.events.prepend('<div class="logged" style="margin-top: 5px;">' + eventData + '</div>');
        });

        // raised when the size of a page is changed.
        this.refs.myTreeGrid.on('pageSizeChanged', (event) => {
            this.refs.events.clearcontent();
            let args = event.args;
            let eventData = "<div>Page: " + (1 + args.pagenum) + ", Page Size: " + args.pageSize + ", Old Page Size: " + args.oldpageSize + "</div>";
            this.refs.events.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
        });
    }
    render () {
        // prepare the data
        let source = {
            dataType: 'array',
            dataFields: [
                { name: 'name', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'id', type: 'number' },
                { name: 'parentid', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'date', type: 'date' },
                { name: 'customer', type: 'string' }
            ],
            hierarchy:
            {
                keyDataField: { name: 'id' },
                parentDataField: { name: 'parentid' }
            },
            id: 'id',
            localData: generateordersdata()
        };
        let dataAdapter = new $.jqx.dataAdapter(source);
        // create Tree Grid
        let columns = [
            { text: 'Order Name', dataField: 'name', align: 'center', width: 250 },
            { text: 'Customer', dataField: 'customer', align: 'center', width: 250 },
            { text: 'Price', dataField: 'price', cellsFormat: 'c2', align: 'center', cellsAlign: 'right', width: 80 },
            {
                text: 'Order Date', dataField: 'date', align: 'center', cellsFormat: 'dd-MMMM-yyyy hh:mm', cellsRenderer: (rowKey, column, cellValue, rowData, cellText) => {
                    if (rowData.level === 0) {
                        return dataAdapter.formatDate(cellValue, 'dd-MMMM-yyyy');
                    }
                    return cellText;
                }
            }
        ];
        return (
            <div>

                <JqxTreeGrid ref='myTreeGrid' style={{ float: 'left' }}
                    width={560}
                    source={dataAdapter}
                    sortable={true}
                    pageable={true}
                    autoRowHeight={false}
                    pagerPosition={'both'}
                    pagerMode={'advanced'}
                    columns={columns}
                />

                <div style={{ float: 'left', fontSize: '13px', fontFamily: 'Verdana', marginLeft: 30 }} >
                    <div><strong>Settings</strong></div>
                    <div style={{ marginTop: 10 }}>
                        <div>Pager Mode:</div>
                        <JqxDropDownList ref='pagerModeDropDownList' style={{ marginTop: 5 }}
                            width={120} height={25} selectedIndex={1} autoDropDownHeight={true}
                            source={['default', 'advanced']}
                         />

                        <div style={{ marginTop: 10 }}>Pager Position:</div>
                        <JqxDropDownList ref='pagerPositionDropDownList' style={{ marginTop: 5 }}
                            width={120} height={25} selectedIndex={2} autoDropDownHeight={true}
                            source={['top', 'bottom', 'both']}
                         />

                        <div style={{ marginTop: 10 }}>Go to Page:</div>
                        <JqxInput ref='gotopage' width={120} height={25}  style={{ marginTop: 5, float: 'left' }}/>
                        <JqxButton ref='applyPage' value='Apply' style={{ margin: '7px 0 0 5px', float: 'left' }} />
                    </div>
                    <div style={{ marginTop: 10, display: 'inline-block' }}>
                        <div>Event Log:</div>
                        <JqxPanel ref='events' style={{ marginTop: 5 }} width={150} height={150} />
                    </div>    
                </div>
                
            </div>            
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

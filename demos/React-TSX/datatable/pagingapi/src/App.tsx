import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

export interface IState extends IDataTableProps {
    pagerModeSelected: IDropDownListProps['selectedIndex'];
    pagerPositionSelected: IDropDownListProps['selectedIndex'];
}

class App extends React.PureComponent<{}, IState> {

    private myDataTable = React.createRef<JqxDataTable>();
    private myInput = React.createRef<JqxInput>();
    private myPanel = React.createRef<JqxPanel>();

    constructor(props: {}) {
        super(props);
        this.pagerModeListOnSelect = this.pagerModeListOnSelect.bind(this);
        this.pagerPositionListOnSelect = this.pagerPositionListOnSelect.bind(this);
        this.btnOnClick = this.btnOnClick.bind(this);
        this.tableOnPageChanged = this.tableOnPageChanged.bind(this);
        this.tableOnPageSizeChanged = this.tableOnPageSizeChanged.bind(this);

        const source = {
            dataFields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
            dataType: 'array',
            localData: generatedata(200, false)
        };

        this.state = {
            columns: [
                { text: 'Name', dataField: 'firstname', width: 200 },
                { text: 'Last Name', dataField: 'lastname', width: 200 },
                { text: 'Product', editable: false, dataField: 'productname', width: 180 },
                { text: 'Quantity', dataField: 'quantity', width: 80, cellsAlign: 'right' },
                { text: 'Unit Price', dataField: 'price', width: 80, cellsAlign: 'right', cellsFormat: 'c2' },
                { text: 'Total', dataField: 'total', cellsAlign: 'right', cellsFormat: 'c2' }
            ],
            pagerMode: 'default',
            pagerModeSelected: 0,
            pagerPosition: 'both',
            pagerPositionSelected: 2,
            source: new jqx.dataAdapter(source)
        };
    }

    public render() {
        return (
            <div>
                <JqxDataTable theme={'material-purple'} ref={this.myDataTable} style={{ float: 'left' }}
                    onPageChanged={this.tableOnPageChanged} onPageSizeChanged={this.tableOnPageSizeChanged}
                    // @ts-ignore 
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    pageable={true} altRows={true} pagerPosition={this.state.pagerPosition} pagerMode={this.state.pagerMode} />

                <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left', marginLeft: '30px' }}>
                    <div><strong>Settings</strong></div>
                    <div style={{ marginTop: '10px' }}>
                        <div>Pager Mode:</div>

                        <JqxDropDownList theme={'material-purple'} style={{ marginTop: '5px' }} onSelect={this.pagerModeListOnSelect}
                            width={120} height={25} selectedIndex={this.state.pagerModeSelected}
                            source={['default', 'advanced']} autoDropDownHeight={true} />

                        <div style={{ marginTop: '10px' }}>Pager Position:</div>

                        <JqxDropDownList theme={'material-purple'} style={{ marginTop: '5px' }} onSelect={this.pagerPositionListOnSelect}
                            width={120} height={25} selectedIndex={this.state.pagerPositionSelected}
                            source={['top', 'bottom', 'both']} autoDropDownHeight={true} />

                        <div style={{ marginTop: '10px' }}>Go to Page:</div>

                        <div style={{ marginTop: '5px', marginRight: '5px', float: 'left' }}>
                            <JqxInput theme={'material-purple'} ref={this.myInput}
                                width={120} height={25} value={1} />
                        </div>

                        <div style={{ marginTop: '6px', float: 'left' }}>
                            <JqxButton theme={'material-purple'} onClick={this.btnOnClick} height={20}>
                                Apply
                            </JqxButton>
                        </div>

                    </div>
                    <div style={{ clear: 'both' }} />
                    <div style={{ marginTop: '10px' }}>
                        <div>Event Log:</div>
                        <JqxPanel theme={'material-purple'} ref={this.myPanel} style={{ marginTop: '5px' }}
                            width={155} height={150} />
                    </div>
                </div>
            </div>
        );
    }

    private pagerModeListOnSelect(event: any): void {
        let newPagerMode: IDataTableProps['pagerMode'];
        const index = event.args.index;

        if (index === 0) {
            newPagerMode = 'default';
        }
        else {
            newPagerMode = 'advanced';
        }

        this.setState({
            pagerMode: newPagerMode,
            pagerModeSelected: index
        });
    };

    private pagerPositionListOnSelect(event: any): void {
        let newPagerPosition: IDataTableProps['pagerPosition'];
        const index = event.args.index;

        if (index === 0) {
            newPagerPosition = 'top';
        }
        else if (event.args.index === 1) {
            newPagerPosition = 'bottom';
        }
        else {
            newPagerPosition = 'both';
        }

        this.setState({
            pagerPosition: newPagerPosition,
            pagerPositionSelected: index
        });
    };

    private btnOnClick(): void {
        let page = parseInt(this.myInput.current!.getOptions('value'), 10);
        if (!isNaN(page)) {
            page--;
            if (page < 0) {
                page = 0;
            }
            this.myDataTable.current!.goToPage(page);
        }
    };

    private tableOnPageChanged(event: any): void {
        const count = document.getElementsByClassName('logged');
        if (count.length >= 5) {
            this.myPanel.current!.clearcontent();
        }
        const args = event.args;
        const eventData = '<div>Page:' + (1 + args.pagenum) + ', Page Size: ' + args.pageSize + '</div>';
        this.myPanel.current!.prepend('<div class="logged" style="margin-top: 5px;">' + eventData + '</div>');
    };

    private tableOnPageSizeChanged(event: any): void {
        this.myPanel.current!.clearcontent();
        const args = event.args;
        const eventData = '<div>Page:' + (1 + args.pagenum) + ', Page Size: ' + args.pageSize + ', Old Page Size: ' + args.oldPageSize + '</div>';
        this.myPanel.current!.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
    };
}

export default App;
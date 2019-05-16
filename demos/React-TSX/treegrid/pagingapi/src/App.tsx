import * as React from 'react';
 


import { generateordersdata } from './../public/generatedata';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

class App extends React.PureComponent<{}, ITreeGridProps> {
    private myTreeGrid = React.createRef<JqxTreeGrid>();
    private myPanel = React.createRef<JqxPanel>();
    private myInput = React.createRef<JqxInput>();

    private loop: number = 0;

    constructor(props: {}) {
        super(props);

        this.myTreeGridOnPageChanged = this.myTreeGridOnPageChanged.bind(this);
        this.myTreeGridOnPageSizeChanged = this.myTreeGridOnPageSizeChanged.bind(this);
        this.pagerModeDropDownListOnSelect = this.pagerModeDropDownListOnSelect.bind(this);
        this.pagerPositionDropDownListOnSelect = this.pagerPositionDropDownListOnSelect.bind(this);
        this.btnOnClick = this.btnOnClick.bind(this);

        const source: any = {
            dataFields: [
                { name: 'name', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'id', type: 'string' },
                { name: 'parentid', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'date', type: 'date' },
                { name: 'customer', type: 'string' }
            ],
            dataType: 'array',
            hierarchy:
            {
                keyDataField: { name: 'id' },
                parentDataField: { name: 'parentid' }
            },
            id: 'id',
            localData: generateordersdata(10)
        };

        const dataAdapter: any = new jqx.dataAdapter(source);

        this.state = {
            columns: [
                { align: "center", dataField: "name", text: "Order Name", width: 250 },
                { align: "center", dataField: "customer", text: "Customer", width: 250 },
                { align: "center", cellsAlign: "right", cellsFormat: "c2", dataField: "price", text: "Price", width: 80 },
                {
                    align: "center", cellsFormat: "dd-MMMM-yyyy hh:mm",
                    cellsRenderer: (rowKey?: number, column?: any, cellValue?: any, rowData?: any, cellText?: any) => {
                        if (rowData.level === 0) {
                            return dataAdapter.formatDate(cellValue, 'dd-MMMM-yyyy');
                        }

                        return cellText;
                    },
                    dataField: "date",
                    text: "Order Date"
                }
            ],
            pagerMode: "advanced",
            pagerPosition: "both",
            ready: (): void => {
                setTimeout(() => {
                    this.myTreeGrid.current!.expandRow(1);
                }, 0);
            },
            source: dataAdapter
        }
    }

    public render() {
        const styleDivs: React.CSSProperties = { marginTop: 10 };
        return (
            <div>
                <div style={{ float: "left" }}>
                    <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid}
                        onPageChanged={this.myTreeGridOnPageChanged}
                        onPageSizeChanged={this.myTreeGridOnPageSizeChanged}
                        width={560}
                        source={this.state.source}
                        sortable={true}
                        pageable={true}
                        pagerMode={this.state.pagerMode}
                        pagerPosition={this.state.pagerPosition}
                        autoRowHeight={false}
                        columns={this.state.columns}
                        ready={this.state.ready}
                    />
                </div>

                <div style={{ float: 'left', fontSize: '13px', fontFamily: 'Verdana', marginLeft: '30px' }}>
                    <div><strong>Settings</strong></div>
                    <div style={styleDivs}>
                        <div>Pager Mode:</div>
                        <JqxDropDownList theme={'material-purple'}
                            onSelect={this.pagerModeDropDownListOnSelect}
                            width={120} height={25} selectedIndex={1}
                            source={['default', 'advanced']} autoDropDownHeight={true}
                        />

                        <div style={styleDivs}>Pager Position:</div>
                        <JqxDropDownList theme={'material-purple'}
                            onSelect={this.pagerPositionDropDownListOnSelect}
                            width={120} height={25} selectedIndex={2}
                            source={['top', 'bottom', 'both']} autoDropDownHeight={true}
                        />

                        <div style={styleDivs}>Go to Page:</div>
                        <div style={{ marginTop: 8, float: "left" }}>
                            <JqxInput theme={'material-purple'} ref={this.myInput} style={{ float: "left" }}
                                width={120}
                                height={25}
                                value={1}
                            />
                        </div>
                        <JqxButton theme={'material-purple'} style={{ margin: '7px 5px 0 5px', float: "left" }} onClick={this.btnOnClick}>
                            Apply
                        </JqxButton>
                    </div>
                    <div style={{ marginTop: '10px', display: 'inline-block' }}>
                        <div>Event Log:</div>
                        <JqxPanel theme={'material-purple'} ref={this.myPanel} style={{ marginTop: 5 }}
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
            </div>
        );
    }

    // Event handling
    private myTreeGridOnPageChanged(event: any): void {
        if (this.loop >= 5) {
            this.myPanel.current!.clearcontent();
            this.loop = 0;
        }

        this.loop++;
        const args = event.args;
        const eventData = "<div>Page:" + (1 + args.pagenum) + ", Page Size: " + args.pageSize + "</div>";
        this.myPanel.current!.prepend('<div class="logged" style="margin-top: 5px;">' + eventData + '</div>');
    }

    private myTreeGridOnPageSizeChanged(event: any): void {
        this.myPanel.current!.clearcontent();
        const args = event.args;
        const eventData = "<div>Page: " + (1 + args.pagenum) + ", Page Size: " + args.pageSize + ", Old Page Size: " + args.oldpageSize + "</div>";
        this.myPanel.current!.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
    }

    private pagerModeDropDownListOnSelect(event: any): void {
        if (event.args.index === 0) {
            this.myTreeGrid.current!.setOptions({ pagerMode: "default" });
        }
        else {
            this.myTreeGrid.current!.setOptions({ pagerMode: "advanced" });

        }
    }

    private pagerPositionDropDownListOnSelect(event: any): void {
        if (event.args.index === 0) {
            this.myTreeGrid.current!.setOptions({ pagerPosition: "top" });
        }
        else if (event.args.index === 1) {
            this.myTreeGrid.current!.setOptions({ pagerPosition: "bottom" });
        }
        else {
            this.myTreeGrid.current!.setOptions({ pagerPosition: "both" });
        }
    }

    private btnOnClick(): void {
        let page = parseInt(this.myInput.current!.getOptions('value'), 10);

        if (!isNaN(page)) {
            page--;
            if (page < 0) {
                page = 0;
            }

            this.myTreeGrid.current!.goToPage(page);
        }
    }
}

export default App;

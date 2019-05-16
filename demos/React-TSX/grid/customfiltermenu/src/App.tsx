import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import './App.css'; 

import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();
    private myPanel = React.createRef<JqxPanel>();
    private myInput = React.createRef<JqxInput>();

    constructor(props: {}) {
        super(props);
        this.myGridOnFilter = this.myGridOnFilter.bind(this);
        this.removeFilterBtnOnClick = this.removeFilterBtnOnClick.bind(this);
        this.filterBackgroundCheckBoxOnChange = this.filterBackgroundCheckBoxOnChange.bind(this);
        this.filterIconsCheckBoxOnChange = this.filterIconsCheckBoxOnChange.bind(this);

        const source: any = {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'date', type: 'date' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(500, false)
        };

        const dataAdapter = new jqx.dataAdapter(source);

        const buildFilterPanel = (filterPanel: any, datafield: string): void => {

            const dataSource = {
                async: false,
                datatype: 'array',
                localdata: dataAdapter.records
            }
            const inputDataAdapter = new jqx.dataAdapter(dataSource,
                {
                    async: false,
                    autoBind: false,
                    autoSort: true,
                    autoSortField: datafield,
                    uniqueDataFields: [datafield]
                }
            );
            const column = this.myGrid.current!.getcolumn(datafield);

            const filterButtonClick = () => {
                const filtergroup = new jqx.filter();
                const filterOrOperator = 1;
                const filtervalue = this.myInput.current!.getOptions('value');
                const filtercondition = 'contains';
                const filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
                filtergroup.addfilter(filterOrOperator, filter1);
                // add the filters.
                this.myGrid.current!.addfilter(datafield, filtergroup);
                // apply the filters.
                this.myGrid.current!.applyfilters();
                this.myGrid.current!.closemenu();
            };

            const filterClearButtonClick = () => {
                this.myGrid.current!.removefilter(datafield, false);
                // apply the filters.
                this.myGrid.current!.applyfilters();
                this.myGrid.current!.closemenu();
            }

            ReactDOM.render(
                <div>
                    <JqxInput theme={'material-purple'} ref={this.myInput} style={{ margin: '5px' }}
                        width={175} height={20} source={inputDataAdapter}
                        displayMember={'datafield'} popupZIndex={99999} placeHolder={`Enter ${column.text}`} />

                    <div style={{ height: '25px', marginLeft: '20px', marginTop: '7px' }}>
                        <JqxButton theme={'material-purple'} style={{ marginLeft: '16px', float: 'left' }}
                            onClick={filterButtonClick}
                            width={45} height={25} value={'Filter'} />
                        <JqxButton theme={'material-purple'} style={{ marginLeft: '12px', float: 'left' }}
                            onClick={filterClearButtonClick}
                            width={45} height={25} value={'Clear'} />
                    </div>
                </div>,
                filterPanel[0]
            );
        };

        const columnmenuopening = (menu: any, datafield: any, height: any): void => {
            const column: any = this.myGrid.current!.getcolumn(datafield);
            if (column.filtertype === 'custom') {
                menu.height(155);
                setTimeout(() => {
                    menu.find('input').focus();
                }, 25);
            }
            else {
                menu.height(height);
            }
        };

        this.state = {
            columnmenuopening,
            columns: [
                {
                    createfilterpanel: (datafield: string, filterPanel: any): void => {
                        buildFilterPanel(filterPanel, datafield);
                    },
                    datafield: 'firstname', filtertype: 'custom', text: 'First Name', width: 160
                },
                {
                    createfilterpanel: (datafield: string, filterPanel: any): void => {
                        buildFilterPanel(filterPanel, datafield);
                    },
                    datafield: 'lastname', filtertype: 'custom', text: 'Last Name', width: 160
                },
                { text: 'Product', datafield: 'productname', filtertype: 'checkedlist', width: 170 },
                { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
                { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
            ],
            source: dataAdapter
        }
    }

    public render() {
        return (
            <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>

                <JqxGrid theme={'material-purple'} ref={this.myGrid} onFilter={this.myGridOnFilter}
                    // @ts-ignore
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    sortable={true} filterable={true} autoshowfiltericon={true}
                    columnmenuopening={this.state.columnmenuopening} />

                <div style={{ marginTop: '30px' }}>
                    <div style={{ width: '200px', float: 'left', marginRight: '10px' }}>
                        <JqxButton theme={'material-purple'} width={120} height={20} onClick={this.removeFilterBtnOnClick}>Remove Filter</JqxButton>
                        <JqxCheckBox theme={'material-purple'} onChange={this.filterBackgroundCheckBoxOnChange}
                            height={25} checked={true}>
                            Filter Background
                        </JqxCheckBox>

                        <JqxCheckBox theme={'material-purple'} height={25} onChange={this.filterIconsCheckBoxOnChange}>
                            Show All Filter Icons
                        </JqxCheckBox>
                    </div>
                    <div style={{ float: 'left' }}>
                        Event Log:
                        <JqxPanel theme={'material-purple'} ref={this.myPanel} width={300} height={80} />
                    </div>
                </div>
            </div>
        );
    }

    private myGridOnFilter(): void {
        this.myPanel.current!.clearcontent();
        const filterinfo = this.myGrid.current!.getfilterinformation();
        for (const filterinfoItem of filterinfo) {
            const eventData = 'Filter Column: ' + filterinfoItem.filtercolumntext;
            this.myPanel.current!.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
        }
    };

    private removeFilterBtnOnClick(): void {
        this.myGrid.current!.clearfilters();
    };

    private filterBackgroundCheckBoxOnChange(event: any): void {
        this.myGrid.current!.setOptions({ showfiltercolumnbackground: event.args.checked });
    };

    private filterIconsCheckBoxOnChange(event: any): void {
        this.myGrid.current!.setOptions({ autoshowfiltericon: !event.args.checked });
    };
}

export default App;
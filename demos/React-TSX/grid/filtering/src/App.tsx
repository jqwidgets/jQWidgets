import * as React from 'react';
 


import './App.css';

import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();
    private myPanel = React.createRef<JqxPanel>();
    private count: number = 0;

    constructor(props: {}) {
        super(props);
        this.onFilter = this.onFilter.bind(this);
        this.clearFilteringBtnOnClick = this.clearFilteringBtnOnClick.bind(this);
        this.filterBackgroundOnChange = this.filterBackgroundOnChange.bind(this);
        this.filterIconsOnChange = this.filterIconsOnChange.bind(this);

        const source: any = {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'date', type: 'date' },
                { name: 'quantity', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(500, false)
        };

        const addfilter = (): void => {
            const filtergroup = new jqx.filter();
            const filterOrOperator = 1;
            let filtervalue = 'Beate';
            let filtercondition = 'contains';
            const filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtervalue = 'Andrew';
            filtercondition = 'starts_with';
            const filter2 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.addfilter(filterOrOperator, filter1);
            filtergroup.addfilter(filterOrOperator, filter2);
            this.myGrid.current!.addfilter('firstname', filtergroup, true);
            this.myGrid.current!.applyfilters();
        }

        this.state = {
            columns: [
                { text: 'First Name', datafield: 'firstname', width: 160 },
                { text: 'Last Name', datafield: 'lastname', width: 160 },
                { text: 'Product', datafield: 'productname', width: 170 },
                { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
                { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
            ],
            ready: (): void => {
                setTimeout(() => {
                    addfilter();
                });
            },
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div>
                <JqxGrid theme={'material-purple'} ref={this.myGrid} onFilter={this.onFilter}
                    // @ts-ignore
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    filterable={true} sortable={true} ready={this.state.ready} autoshowfiltericon={true} />

                <div style={{ marginTop: '30px' }}>
                    <div style={{ width: '200px', float: 'left', marginRight: '10px' }}>
                        <JqxButton theme={'material-purple'} onClick={this.clearFilteringBtnOnClick} width={100} height={20}>Remove Filter</JqxButton>

                        <JqxCheckBox theme={'material-purple'} onChange={this.filterBackgroundOnChange} height={25} checked={true}>Filter Background</JqxCheckBox>

                        <JqxCheckBox theme={'material-purple'} onChange={this.filterIconsOnChange} height={25}> Show All Filter Icons</JqxCheckBox>
                    </div>
                    <div style={{ float: 'left' }}>
                        Event Log:
                        <JqxPanel theme={'material-purple'} ref={this.myPanel} width={300} height={80} />
                    </div>
                </div>
            </div>
        );
    }

    private onFilter(event: any): void {
        if (this.count > 1) {
        this.myPanel.current!.clearcontent();
        const filterinfo = this.myGrid.current!.getfilterinformation();
        for (const info of filterinfo) {
            const eventData = 'Filter Column: ' + info.filtercolumntext;
            this.myPanel.current!.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
            }
        }
        this.count++;
    };

    private clearFilteringBtnOnClick(): void {
        this.myGrid.current!.clearfilters();
    };

    private filterBackgroundOnChange(event: any): void {
        this.myGrid.current!.setOptions({ showfiltercolumnbackground: event.args.checked });
    };

    private filterIconsOnChange(event: any): void {
        this.myGrid.current!.setOptions({ autoshowfiltericon: !event.args.checked });
    };
}

export default App;
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
    private flag: boolean = false;

    constructor(props: {}) {
        super(props);
        this.myGridOnFilter = this.myGridOnFilter.bind(this);
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
            filtercondition = 'contains';
            const filter2 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.addfilter(filterOrOperator, filter1);
            filtergroup.addfilter(filterOrOperator, filter2);
            // add the filters.
            this.myGrid.current!.addfilter('firstname', filtergroup);
            // apply the filters.
            this.myGrid.current!.applyfilters();
        }

        const updatefilterconditions = (type: string, defaultconditions: any): string[] => {
            const stringcomparisonoperators = ['CONTAINS', 'DOES_NOT_CONTAIN'];
            const numericcomparisonoperators = ['LESS_THAN', 'GREATER_THAN'];
            const datecomparisonoperators = ['LESS_THAN', 'GREATER_THAN'];
            const booleancomparisonoperators = ['EQUAL', 'NOT_EQUAL'];
            switch (type) {
                case 'stringfilter':
                    return stringcomparisonoperators;
                case 'numericfilter':
                    return numericcomparisonoperators;
                case 'datefilter':
                    return datecomparisonoperators;
                case 'booleanfilter':
                    return booleancomparisonoperators;
                default:
                    return [];
            }
        };

        const updatefilterpanel = (filtertypedropdown1: any, filtertypedropdown2: any, filteroperatordropdown: any, filterinputfield1: any,
            filterinputfield2: any, filterbutton: any, clearbutton: any, columnfilter: any, filtertype: any, filterconditions: any): void => {
            let index1 = 0;
            let index2 = 0;
            if (columnfilter != null) {
                const filter1 = columnfilter.getfilterat(0);
                const filter2 = columnfilter.getfilterat(1);
                if (filter1) {
                    index1 = filterconditions.indexOf(filter1.comparisonoperator);
                    const value1 = filter1.filtervalue;
                    filterinputfield1.val(value1);
                }
                if (filter2) {
                    index2 = filterconditions.indexOf(filter2.comparisonoperator);
                    const value2 = filter2.filtervalue;
                    filterinputfield2.val(value2);
                }
            }
            filtertypedropdown1.jqxDropDownList({ autoDropDownHeight: true, selectedIndex: index1 });
            filtertypedropdown2.jqxDropDownList({ autoDropDownHeight: true, selectedIndex: index2 });
        };

        const ready = (): void => {
            setTimeout(() => {
                addfilter();
                const localizationObject = {
                    // filter bool comparison operators.
                    filterbooleancomparisonoperators: ['equal', 'not equal'],
                    // filter date comparison operators.
                    filterdatecomparisonoperators: ['less than', 'greater than'],
                    // filter numeric comparison operators.
                    filternumericcomparisonoperators: ['less than', 'greater than'],
                    filterstringcomparisonoperators: ['contains', 'does not contain']
                }
                this.myGrid.current!.setOptions({ localization: localizationObject });
            });            
        };

        this.state = {
            columns: [
                { text: 'First Name', datafield: 'firstname', width: 200 },
                { text: 'Last Name', datafield: 'lastname', width: 200 },
                { text: 'Product', datafield: 'productname', width: 180 },
                { text: 'Order Date', datafield: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
                { text: 'Quantity', datafield: 'quantity', cellsalign: 'right' }
            ],
            ready,
            source: new jqx.dataAdapter(source),
            updatefilterconditions,
            updatefilterpanel
        }
    }

    public render() {
        return (
            <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>

                <JqxGrid theme={'material-purple'} ref={this.myGrid} onFilter={this.myGridOnFilter}
                    // @ts-ignore
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    ready={this.state.ready} sortable={true} filterable={true} autoshowfiltericon={true}
                    updatefilterconditions={this.state.updatefilterconditions} updatefilterpanel={this.state.updatefilterpanel} />

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

    private myGridOnFilter(event: any): void {
        if (this.flag) {
        this.myPanel.current!.clearcontent();
        const filterinfo = this.myGrid.current!.getfilterinformation();

        for (const info of filterinfo) {
            const eventData = 'Filter Column: ' + info.filtercolumntext;
            this.myPanel.current!.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
            }
        }
        this.flag = true;
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
import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private beginEdit = React.createRef<HTMLDivElement>();
    private endEdit = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.cellBeginEditEvent = this.cellBeginEditEvent.bind(this);
        this.cellEndEditEvent = this.cellEndEditEvent.bind(this);

        const source: any = {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'date', type: 'date' }
            ],
            datatype: 'array',
            localdata: generatedata(500, false)
        };

        const columns: IGridProps['columns'] = [
            { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 120 },
            { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 120 },
            { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 195 },
            { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 },
            {
                align: 'right', cellsalign: 'right', cellsformat: 'd', columntype: 'datetimeinput', datafield: 'date', text: 'Ship Date',  
                validation: (cell: any, value: any): any => {
                    if (value === '') {
                        return true;
                    }
                    const year = value.getFullYear();
                    if (year >= 2017) {
                        return { result: false, message: 'Ship Date should be before 1/1/2017' };
                    }
                    return true;
                },
                width: 110
            },
            {
                align: 'right', cellsalign: 'right', columntype: 'numberinput',
                createeditor: (row: number, cellvalue: any, editor: any): void => {
                    editor.jqxNumberInput({ decimalDigits: 0, digits: 3 });
                },
                datafield: 'quantity', text: 'Quantity',   
                validation: (cell: any, value: number): any => {
                    if (value < 0 || value > 150) {
                        return { result: false, message: 'Quantity should be in the 0-150 interval' };
                    }
                    return true;
                },
                width: 70
            },
            {
                align: 'right', cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput',
                createeditor: (row: number, cellvalue: any, editor: any): void => {
                    editor.jqxNumberInput({ digits: 3 });
                },
                datafield: 'price', text: 'Price',                
                validation: (cell: any, value: number): any => {
                    if (value < 0 || value > 15) {
                        return { result: false, message: 'Price should be in the 0-15 interval' };
                    }
                    return true;
                }                
            }
        ];

        this.state = {
            columns,
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div>
                <JqxGrid theme={'material-purple'} onCellbeginedit={this.cellBeginEditEvent} onCellendedit={this.cellEndEditEvent}
                    // @ts-ignore
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    editable={true} enabletooltips={true} selectionmode={'multiplecellsadvanced'} />

                <div style={{ fontSize: '12px', fontFamily: 'Verdana', marginTop: '30px' }}>
                    <div ref={this.beginEdit} />
                    <div ref={this.endEdit} style={{ marginTop: '10px' }} />
                </div>
            </div>
        );
    }

    private cellBeginEditEvent(event: any): void {
        const args = event.args;
        this.beginEdit.current!.innerHTML = 'Event Type: cellbeginedit, Column: ' + args.datafield + ', Row: ' + (1 + args.rowindex) + ', Value: ' + args.value;
    }

    private cellEndEditEvent(event: any): void {
        const args = event.args;
        this.endEdit.current!.innerHTML = 'Event Type: cellendedit, Column: ' + args.datafield + ', Row: ' + (1 + args.rowindex) + ', Value: ' + args.value;
    }
}

export default App;
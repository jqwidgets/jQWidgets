import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private cellBeginEditLog = React.createRef<HTMLDivElement>();
    private cellEndEditLog = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.myGridOnCellBeginEdit = this.myGridOnCellBeginEdit.bind(this);
        this.myGridOnCellEndEdit = this.myGridOnCellEndEdit.bind(this);

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
            localdata: generatedata(200, false),
            updaterow: (rowid: any, rowdata: any, commit: any): void => {
                // synchronize with the server - send update command   
                commit(true);
            }
        };

        const cellbeginedit = (row: number, datafield: string, columntype: any, value: any): boolean => {
            if (row === 0 || row === 2 || row === 5) {
                return false;
            }
            return true;
        };

        const cellsrenderer = (row: number, column: any, value: any, defaultHtml: string): string => {
            if (row === 0 || row === 2 || row === 5) {
                const element = defaultHtml.substring(0, 61) + "; color: #999" + defaultHtml.substring(61);
                return element;
            }
            return defaultHtml;
        };

        const columns: IGridProps['columns'] = [
            { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 80, cellbeginedit, cellsrenderer },
            { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 80, cellbeginedit, cellsrenderer },
            { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 190, cellbeginedit, cellsrenderer },
            { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67, cellbeginedit },
            {
                cellbeginedit, cellsalign: 'right', cellsformat: 'd',cellsrenderer, columntype: 'datetimeinput', datafield: 'date', text: 'Ship Date',
                validation: (cell: any, value: any): any => {
                    const year = value.getFullYear();
                    if (year >= 2015) {
                        return { result: false, message: 'Ship Date should be before 1/1/2015' };
                    }
                    return true;
                }, 
                width: 110, 
            },
            {
                cellbeginedit, cellsalign: 'right', cellsrenderer, columntype: 'numberinput', datafield: 'quantity', 
                initeditor: (row: number, cellvalue: any, editor: any): void => {
                    editor.jqxNumberInput({ decimalDigits: 0, digits: 3 });
                }, 
                text: 'Quantity', 
                validation: (cell: any, value: number): any => {
                    if (value < 0 || value > 150) {
                        return { result: false, message: 'Quantity should be in the 0-150 interval' };
                    }
                    return true;
                },          
                width: 70
            },
            {
                cellbeginedit, cellsalign: 'right', cellsformat: 'c2', cellsrenderer, columntype: 'numberinput', datafield: 'price',
                initeditor: (row: number, cellvalue: any, editor: any): void => {
                    editor.jqxNumberInput({ digits: 3 });
                }, 
                text: 'Price', 
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
                <JqxGrid theme={'material-purple'} onCellbeginedit={this.myGridOnCellBeginEdit} onCellendedit={this.myGridOnCellEndEdit}
                    // @ts-ignore
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    editable={true} selectionmode={'singlecell'} />

                <div style={{ marginTop: '30px' }}>
                    <div ref={this.cellBeginEditLog} />
                    <div ref={this.cellEndEditLog} style={{ marginTop: '10px' }} />
                </div>
            </div>
        );
    }

    private myGridOnCellBeginEdit(event: any): void {
        const args = event.args;
        this.cellBeginEditLog.current!.innerHTML = 'Event Type: cellbeginedit, Column: ' + args.datafield + ', Row: ' + (1 + args.rowindex) + ', Value: ' + args.value;
    };

    private myGridOnCellEndEdit(event: any): void {
        const args = event.args;
        this.cellEndEditLog.current!.innerHTML = 'Event Type: cellendedit, Column: ' + args.datafield + ', Row: ' + (1 + args.rowindex) + ', Value: ' + args.value;
    };
}

export default App;
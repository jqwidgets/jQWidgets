import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    constructor(props: {}) {
        super(props);

        const source: any = {
            datafields: [
                { name: 'name', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'date', type: 'date' },
                { name: 'quantity', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(10, false)
        };

        this.state = {
            columns: [
                {
                    columntype: 'textbox', datafield: 'name', filtertype: 'input', text: 'Name',              
                    validateeverpresentrowwidgetvalue: (displayField: string, value: string, rowData: any): any => {
                        if (value.length < 5) {
                            return { message: 'Entered value should be more than 5 characters', result: false };
                        }
                        return true;
                    },
                    width: 215
                },
                { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220 },
                { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
                { text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right' }
            ],
            localization: {
                addrowstring: 'Apply',                
                deleterowstring: 'Delete',                
                everpresentrowplaceholder: 'Type: ',
                resetrowstring: 'Clear',
                updaterowstring: 'Update'
            },
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'}
                // @ts-ignore
                width={'100%'} source={this.state.source} columns={this.state.columns}
                filterable={true} showeverpresentrow={true} editable={true}
                everpresentrowposition={'top'} localization={this.state.localization}
                selectionmode={'multiplecellsadvanced'}/>
        );
    }
}

export default App;
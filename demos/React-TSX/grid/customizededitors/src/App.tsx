import * as React from 'react';
 


import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';


class App extends React.PureComponent<{}, IGridProps> {

    constructor(props: {}) {
        super(props);

        const source: any = {
            datafields: [
                { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
                { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
                { name: 'ShipName', map: 'm\\:properties>d\\:ShipName', type: 'string' },
                { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress', type: 'string' },
                { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity', type: 'string' },
                { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry', type: 'string' }
            ],
            datatype: 'xml',
            id: 'm\\:properties>d\\:OrderID',
            record: 'content',
            root: 'entry',
            url: 'orders.xml'
        };

        this.state = {
            columns: [
                {
                    // update the editor's value before saving it.
                    cellvaluechanging: (row: number, column: any, columntype: any, oldvalue: any, newvalue: any): any => {
                        // return the old value, if the new value is empty.
                        if (newvalue === '') {
                            return oldvalue;
                        }
                    },
                    columntype: 'combobox',
                    createeditor: (row: number, column: any, editor: any): void => {
                        // assign a new data source to the combobox.
                        const list = ['Stuttgart', 'Rio de Janeiro', 'Strasbourg'];
                        editor.jqxComboBox({ autoDropDownHeight: true, source: list, promptText: 'Please Choose:' });
                    },
                    datafield: 'ShipCity', text: 'Ship City', width: 150
                },
                {
                    // update the editor's value before saving it.
                    cellvaluechanging: (row: number, column: any, columntype: any, oldvalue: any, newvalue: any): any => {
                        // return the old value, if the new value is empty.
                        if (newvalue === '') {
                            return oldvalue;
                        }
                    },
                    columntype: 'dropdownlist',
                    createeditor: (row: number, column: any, editor: any): void => {
                        // assign a new data source to the dropdownlist.
                        const list = ['Germany', 'Brazil', 'France'];
                        editor.jqxDropDownList({ autoDropDownHeight: true, source: list });
                    },
                    datafield: 'ShipCountry', text: 'Ship Country', width: 150
                },
                { text: 'Ship Name', datafield: 'ShipName', columntype: 'combobox' }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'}
                // @ts-ignore
                width={'100%'} source={this.state.source} columns={this.state.columns}
                pageable={true} autoheight={true} editable={true} selectionmode={'singlecell'} />
        );
    }
}

export default App;
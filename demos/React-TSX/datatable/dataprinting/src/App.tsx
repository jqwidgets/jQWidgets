import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

class App extends React.PureComponent<{}, IDataTableProps> {

    private myDataTable = React.createRef<JqxDataTable>();

    constructor(props: {}) {
        super(props);
        this.printBtnOnClick = this.printBtnOnClick.bind(this);

        const source: any = {
            dataFields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'date', type: 'date' }
            ],
            dataType: 'array',
            localData: generatedata(10, false)
        };

        this.state = {
            columns: [
                { text: 'First Name', dataField: 'firstname', width: 150 },
                { text: 'Last Name', dataField: 'lastname', width: 150 },
                { text: 'Product', dataField: 'productname', width: 200 },
                { text: 'Ship Date', dataField: 'date', width: 150, align: 'right', cellsAlign: 'right', cellsFormat: 'd' },
                { text: 'Quantity', dataField: 'quantity', width: 100, align: 'right', cellsAlign: 'right' },
                { text: 'Price', dataField: 'price', width: 100, cellsAlign: 'right', align: 'right', cellsFormat: 'c2' }
            ],
            exportSettings: {
                fileName: null
            },
            source: new jqx.dataAdapter(source)
        };
    }

    public render() {
        return (
            <div>
                <JqxDataTable theme={'material-purple'} ref={this.myDataTable}
                    // @ts-ignore 
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    altRows={true} sortable={true} exportSettings={this.state.exportSettings} />

                <div style={{ marginTop: '20px' }}>
                    <div style={{ marginLeft: '10px', float: 'left' }}>
                        <JqxButton theme={'material-purple'} onClick={this.printBtnOnClick} width={80}>Print</JqxButton>
                    </div>                   
                </div>
            </div>
        );
    }

    private printBtnOnClick(): void {
        const gridContent = this.myDataTable.current!.exportData('html');
        const newWindow = window.open('', '', 'width=800, height=500');
        const document = newWindow!.document.open();
        const pageContent =
                '<!DOCTYPE html>' +
                '<html>' +
                '<head>' +
                '<meta charset="utf-8" />' +
                '<title>jQWidgets DataTable</title>' +
                '</head>' +
                '<body>' + gridContent + '</body></html>';
        document.write(pageContent);
        document.close();
        newWindow!.print();
    };
}

export default App;
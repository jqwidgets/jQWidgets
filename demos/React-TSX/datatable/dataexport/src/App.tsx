import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

class App extends React.PureComponent<{}, IDataTableProps> {

    private myDataTable = React.createRef<JqxDataTable>();

    constructor(props: {}) {
        super(props);
        this.excelExport = this.excelExport.bind(this);
        this.xmlExport = this.xmlExport.bind(this);
        this.csvExport = this.csvExport.bind(this);
        this.tsvExport = this.tsvExport.bind(this);
        this.htmlExport = this.htmlExport.bind(this);
        this.jsonExport = this.jsonExport.bind(this);
        this.pdfExport = this.pdfExport.bind(this);

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
            localData: generatedata(100, false)
        };

        this.state = {
            columns: [
                { text: 'First Name', dataField: 'firstname', width: 190 },
                { text: 'Last Name', dataField: 'lastname', width: 190 },
                { text: 'Product', dataField: 'productname', width: 177 },
                { text: 'Available', dataField: 'available', width: 67, cellsAlign: 'center', align: 'center' },
                { text: 'Ship Date', dataField: 'date', width: 90, align: 'right', cellsAlign: 'right', cellsFormat: 'd' },
                { text: 'Quantity', dataField: 'quantity', width: 70, align: 'right', cellsAlign: 'right' },
                { text: 'Price', dataField: 'price', cellsAlign: 'right', width: 100, align: 'right', cellsFormat: 'c2' }
            ],
            source: new jqx.dataAdapter(source)
        };
    }

    public render() {
        return (
            <div>
                <JqxDataTable theme={'material-purple'} ref={this.myDataTable}
                    // @ts-ignore 
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    altRows={true} pageable={true} sortable={true} />

                <div style={{ marginTop: '20px' }}>
                    <div style={{ float: 'left' }}>
                        <JqxButton theme={'material-purple'} onClick={this.excelExport} width={110}>Export to Excel</JqxButton>
                        <br />
                        <br />
                        <JqxButton theme={'material-purple'} onClick={this.xmlExport} width={110}>Export to XML</JqxButton>
                    </div>
                    <div style={{ marginLeft: '10px', float: 'left' }}>
                        <JqxButton theme={'material-purple'} onClick={this.csvExport} width={110}>Export to CSV</JqxButton>
                        <br />
                        <br />
                        <JqxButton theme={'material-purple'} onClick={this.tsvExport} width={110}>Export to TSV</JqxButton>
                    </div>
                    <div style={{ marginLeft: '10px', float: 'left' }}>
                        <JqxButton theme={'material-purple'} onClick={this.htmlExport} width={110}>Export to HTML</JqxButton>
                        <br />
                        <br />
                        <JqxButton theme={'material-purple'} onClick={this.jsonExport} width={110}> Export to JSON</JqxButton>
                    </div>
                    <div style={{ marginLeft: '10px', float: 'left' }}>
                        <JqxButton theme={'material-purple'} onClick={this.pdfExport} width={110}>Export to PDF</JqxButton>
                    </div>
                </div>
            </div>
        );
    }

    private excelExport(): void {
        this.myDataTable.current!.exportData('xls');
    };

    private xmlExport(): void {
        this.myDataTable.current!.exportData('xml');
    };

    private csvExport(): void {
        this.myDataTable.current!.exportData('csv');
    };

    private tsvExport(): void {
        this.myDataTable.current!.exportData('tsv');
    };

    private htmlExport(): void {
        this.myDataTable.current!.exportData('html');
    };

    private jsonExport(): void {
        this.myDataTable.current!.exportData('json');
    };

    private pdfExport(): void {
        this.myDataTable.current!.exportData('pdf');
    };
}

export default App;
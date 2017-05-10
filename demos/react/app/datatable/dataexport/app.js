import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.excelExport.on('click', () => {
            this.refs.myDataTable.exportData('xls');
        });
        this.refs.xmlExport.on('click', () => {
            this.refs.myDataTable.exportData('xml');
        });
        this.refs.csvExport.on('click', () => {
            this.refs.myDataTable.exportData('csv');
        });
        this.refs.tsvExport.on('click', () => {
            this.refs.myDataTable.exportData('tsv');
        });
        this.refs.htmlExport.on('click', () => {
            this.refs.myDataTable.exportData('html');
        });
        this.refs.jsonExport.on('click', () => {
            this.refs.myDataTable.exportData('json');
        });
        this.refs.pdfExport.on('click', () => {
            this.refs.myDataTable.exportData('pdf');
        });
    }
    render() {
        let data = generatedata(100);

        let source =
            {
                localData: data,
                dataType: 'array',
                dataFields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'date', type: 'date' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' }
                ]
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'First Name', dataField: 'firstname', width: 190 },
                { text: 'Last Name', dataField: 'lastname', width: 190 },
                { text: 'Product', dataField: 'productname', width: 177 },
                { text: 'Available', dataField: 'available', width: 67, cellsAlign: 'center', align: 'center' },
                { text: 'Ship Date', dataField: 'date', width: 90, align: 'right', cellsAlign: 'right', cellsFormat: 'd' },
                { text: 'Quantity', dataField: 'quantity', width: 70, align: 'right', cellsAlign: 'right' },
                { text: 'Price', dataField: 'price', cellsAlign: 'right', align: 'right', cellsFormat: 'c2' }
            ];

        return (
            <div>
                <JqxDataTable ref='myDataTable'
                    width={450} source={dataAdapter} altRows={true}
                    pageable={true} sortable={true} columns={columns}
                />
                <div style={{ marginTop: 20 }}>
                    <div style={{ float: 'left' }}>
                        <JqxButton value='Export to Excel' ref='excelExport' width={110} />
                        <br />
                        <br />
                        <JqxButton value='Export to XML' ref='xmlExport' width={110} />
                    </div>
                    <div style={{ marginLeft: 10, float: 'left' }}>
                        <JqxButton value='Export to CSV' ref='csvExport' width={110} />
                        <br />
                        <br />
                        <JqxButton value='Export to TSV' ref='tsvExport' width={110} />
                    </div>
                    <div style={{ marginLeft: 10, float: 'left' }}>
                        <JqxButton value='Export to HTML' ref='htmlExport' width={110} />
                        <br />
                        <br />
                        <JqxButton value='Export to JSON' ref='jsonExport' width={110} />
                    </div>
                    <div style={{ marginLeft: 10, float: 'left' }}>
                        <JqxButton value='Export to PDF' ref='pdfExport' width={110} />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.excelExport.on('click', () => {
            this.refs.myGrid.exportdata('xls', 'jqxGrid');
        });
        this.refs.xmlExport.on('click', () => {
            this.refs.myGrid.exportdata('xml', 'jqxGrid');
        });
        this.refs.csvExport.on('click', () => {
            this.refs.myGrid.exportdata('csv', 'jqxGrid');
        });
        this.refs.tsvExport.on('click', () => {
            this.refs.myGrid.exportdata('tsv', 'jqxGrid');
        });
        this.refs.htmlExport.on('click', () => {
            this.refs.myGrid.exportdata('html', 'jqxGrid');
        });
        this.refs.jsonExport.on('click', () => {
            this.refs.myGrid.exportdata('json', 'jqxGrid');
        });
        this.refs.pdfExport.on('click', () => {
            this.refs.myGrid.exportdata('pdf', 'jqxGrid');
        });
    }
    render() {
        let data = generatedata(100);

        let source =
            {
                localdata: data,
                datatype: 'array',
                datafields:
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
                { text: 'First Name', datafield: 'firstname', width: 130 },
                { text: 'Last Name', datafield: 'lastname', width: 130 },
                { text: 'Product', datafield: 'productname', width: 200 },
                { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67, cellsalign: 'center', align: 'center' },
                { text: 'Ship Date', datafield: 'date', width: 120, align: 'right', cellsalign: 'right', cellsformat: 'd' },
                { text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right' },
                { text: 'Price', datafield: 'price', cellsalign: 'right', align: 'right', cellsformat: 'c2' }
            ];

        return (
            <div style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>
                <JqxGrid ref='myGrid'
                    width={850} source={dataAdapter}
                    sortable={true} altrows={true} columns={columns}
                    selectionmode={'multiplecellsadvanced'}
                />
                <div style={{ marginTop: 20 }}>
                    <div style={{ float: 'left' }}>
                        <JqxButton value='Export to Excel' ref='excelExport' />
                        <br /><br />
                        <JqxButton value='Export to XML' ref='xmlExport' />
                    </div>
                    <div style={{ float: 'left', marginLeft: 10 }}>
                        <JqxButton value='Export to CSV' ref='csvExport' />
                        <br /><br />
                        <JqxButton value='Export to TSV' ref='tsvExport' />
                    </div>
                    <div style={{ float: 'left', marginLeft: 10 }}>
                        <JqxButton value='Export to HTML' ref='htmlExport' />
                        <br /><br />
                        <JqxButton value='Export to JSON' ref='jsonExport' />
                    </div>
                    <div style={{ float: 'left', marginLeft: 10 }}>
                        <JqxButton value='Export to PDF' ref='pdfExport' />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

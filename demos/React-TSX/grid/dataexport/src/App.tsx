import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();

    constructor(props: {}) {
        super(props);
        this.excelBtnOnClick = this.excelBtnOnClick.bind(this);
        this.xmlBtnOnClick = this.xmlBtnOnClick.bind(this);
        this.csvBtnOnClick = this.csvBtnOnClick.bind(this);
        this.tsvBtnOnClick = this.tsvBtnOnClick.bind(this);
        this.htmlBtnOnClick = this.htmlBtnOnClick.bind(this);
        this.jsonBtnOnClick = this.jsonBtnOnClick.bind(this);
        this.pdfBtnOnClick = this.pdfBtnOnClick.bind(this);

        const source: any = {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'date', type: 'date' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(100, false)
        };

        this.state = {
            columns: [
                { text: 'First Name', datafield: 'firstname', width: 130 },
                { text: 'Last Name', datafield: 'lastname', width: 130 },
                { text: 'Product', datafield: 'productname', width: 200 },
                { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67, cellsalign: 'center', align: 'center' },
                { text: 'Ship Date', datafield: 'date', width: 120, align: 'right', cellsalign: 'right', cellsformat: 'd' },
                { text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right' },
                { text: 'Price', datafield: 'price', cellsalign: 'right', align: 'right', cellsformat: 'c2' }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
                <JqxGrid theme={'material-purple'} ref={this.myGrid}
                    // @ts-ignore
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    sortable={true} altrows={true} selectionmode={'multiplecellsadvanced'} />

                <div style={{ marginTop: '20px' }}>
                    <div style={{ float: 'left' }}>
                        <JqxButton theme={'material-purple'} onClick={this.excelBtnOnClick}>Export to Excel</JqxButton>
                        <br /><br />
                        <JqxButton theme={'material-purple'} onClick={this.xmlBtnOnClick}>Export to XML</JqxButton>
                    </div>
                    <div style={{ float: 'left', marginLeft: '10px' }}>
                        <JqxButton theme={'material-purple'} onClick={this.csvBtnOnClick}>Export to CSV</JqxButton>
                        <br /> <br />
                        <JqxButton theme={'material-purple'} onClick={this.tsvBtnOnClick}> Export to TSV</JqxButton>
                    </div>
                    <div style={{ float: 'left', marginLeft: '10px' }}>
                        <JqxButton theme={'material-purple'} onClick={this.htmlBtnOnClick}>Export to HTML</JqxButton>
                        <br /> <br />
                        <JqxButton theme={'material-purple'} onClick={this.jsonBtnOnClick}> Export to JSON</JqxButton>
                    </div>
                    <div style={{ float: 'left', marginLeft: '10px' }}>
                        <JqxButton theme={'material-purple'} onClick={this.pdfBtnOnClick}>Export to PDF</JqxButton>
                    </div>
                </div>
            </div>
        );
    }

    private excelBtnOnClick() {
        this.myGrid.current!.exportdata('xls', 'jqxGrid');
    };

    private xmlBtnOnClick() {
        this.myGrid.current!.exportdata('xml', 'jqxGrid');
    };

    private csvBtnOnClick() {
        this.myGrid.current!.exportdata('csv', 'jqxGrid');
    };

    private tsvBtnOnClick() {
        this.myGrid.current!.exportdata('tsv', 'jqxGrid');
    };

    private htmlBtnOnClick() {
        this.myGrid.current!.exportdata('html', 'jqxGrid');
    };

    private jsonBtnOnClick() {
        this.myGrid.current!.exportdata('json', 'jqxGrid');
    };

    private pdfBtnOnClick() {
        this.myGrid.current!.exportdata('pdf', 'jqxGrid');
    };
}

export default App;
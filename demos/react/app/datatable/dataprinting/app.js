import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';


class App extends React.Component {
    componentDidMount() {
        this.refs.printButton.on('click', () => {
            let gridContent = this.refs.myDataTable.exportData('html');
            let newWindow = window.open('', '', 'width=800, height=500'),
                document = newWindow.document.open(),
                pageContent =
                    '<!DOCTYPE html>' +
                    '<html>' +
                    '<head>' +
                    '<meta charset="utf-8" />' +
                    '<title>jQWidgets DataTable</title>' +
                    '</head>' +
                    '<body>' + gridContent + '</body></html>';
            document.write(pageContent);
            document.close();
            newWindow.print();
        });
    }
    render() {
        let data = generatedata(10);

        let source =
            {
                localdata: data,
                datatype: 'array',
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
                { text: 'First Name', dataField: 'firstname', width: 150 },
                { text: 'Last Name', dataField: 'lastname', width: 150 },
                { text: 'Product', dataField: 'productname', width: 200 },
                { text: 'Ship Date', dataField: 'date', width: 150, align: 'right', cellsAlign: 'right', cellsFormat: 'd' },
                { text: 'Quantity', dataField: 'quantity', width: 100, align: 'right', cellsAlign: 'right' },
                { text: 'Price', dataField: 'price', width: 100, cellsalign: 'right', align: 'right', cellsFormat: 'c2' }
            ];

        return (
            <div>
                <JqxDataTable ref='myDataTable'
                    width={850} source={dataAdapter} altRows={true} sortable={true}
                    exportSettings={{ fileName: null }} columns={columns}
                />
                <div style={{ marginTop: 20 }}>
                    <div style={{ marginLeft: 10, float: 'left' }}>
                        <JqxButton value='Print' ref='printButton' width={80} />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

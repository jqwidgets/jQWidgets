import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();

    constructor(props: {}) {
        super(props);
        this.btnOnClick = this.btnOnClick.bind(this);

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
            localdata: generatedata(10)
        };

        this.state = {
            columns: [
                { text: 'First Name', datafield: 'firstname', width: 120 },
                { text: 'Last Name', datafield: 'lastname', width: 120 },
                { text: 'Product', datafield: 'productname', width: 177 },
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
                    sortable={true} altrows={true} autoheight={true}
                    selectionmode={'multiplecellsadvanced'} />

                <div style={{ marginTop: '20px' }}>
                    <div style={{ float: 'left', marginLeft: '10px' }}>
                        <JqxButton theme={'material-purple'} onClick={this.btnOnClick}>Print</JqxButton>
                    </div>                
                </div>
            </div>
        );
    }

    private btnOnClick() {
        const gridContent = this.myGrid.current!.exportdata('html');
        const newWindow = window.open('', '', 'width=800, height=500');
        const document = newWindow!.document.open();
        const pageContent =
            '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<meta charset="utf-8" />\n' +
            '<title>jQWidgets Grid</title>\n' +
            '</head>\n' +
            '<body>\n' + gridContent + '\n</body>\n</html>';
        document.write(pageContent);
        document.close();
        newWindow!.print();
    };
}

export default App;
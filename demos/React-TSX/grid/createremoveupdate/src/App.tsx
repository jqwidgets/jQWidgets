import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();

    constructor(props: {}) {
        super(props);

        const source: any = { 
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
            datatype: 'local',
            localdata: this.generateData()
        };

        const rendertoolbar = (toolbar: any): void => {

            const addRowClick = () => {
                const datarow = this.generaterow();
                this.myGrid.current!.addrow(null, datarow);
            };

            const addMultipleRowsClick = () => {
                this.myGrid.current!.beginupdate();
                for (let i = 0; i < 10; i++) {
                    const datarow = this.generaterow();
                    this.myGrid.current!.addrow(null, datarow);
                }
                this.myGrid.current!.endupdate();
            } 

            const deleteRowClick = () => { 
                const selectedrowindex = this.myGrid.current!.getselectedrowindex();
                const rowscount = this.myGrid.current!.getdatainformation().rowscount;
                if (selectedrowindex >= 0 && selectedrowindex < parseFloat(rowscount!)) {
                    const id = this.myGrid.current!.getrowid(selectedrowindex);
                    this.myGrid.current!.deleterow(id);
                }
            }

            const updateRowClick = () => {
                const datarow = this.generaterow();
                const selectedrowindex = this.myGrid.current!.getselectedrowindex();
                const rowscount = this.myGrid.current!.getdatainformation().rowscount;
                if (selectedrowindex >= 0 && selectedrowindex < parseFloat(rowscount!)) {
                    const id = this.myGrid.current!.getrowid(selectedrowindex);
                    this.myGrid.current!.updaterow(id, datarow);
                    this.myGrid.current!.ensurerowvisible(selectedrowindex);
                }
            }

            ReactDOM.render(
                <div style={{ margin: '5px' }}>
                    <div id="buttonContainer1" style={{ float: 'left' }}>
                        <JqxButton theme={'material-purple'} onClick={addRowClick} width={105} value={'Add New Row'} />
                    </div>
                    <div id="buttonContainer2" style={{ float: 'left', marginLeft: '5px' }}>
                        <JqxButton theme={'material-purple'} onClick={addMultipleRowsClick} width={170} value={'Add Multiple New Rows'} />
                    </div>
                    <div id="buttonContainer3" style={{ float: 'left', marginLeft: '5px' }}>
                        <JqxButton theme={'material-purple'} onClick={deleteRowClick} width={150} value={'Delete Selected Row'} />
                    </div>
                    <div id="buttonContainer4" style={{ float: 'left', marginLeft: '5px' }}>
                        <JqxButton theme={'material-purple'} onClick={updateRowClick} width={155} value={'Update Selected Row'} />
                    </div>
                </div>,
                toolbar[0]
            );
        };

        this.state = {
            columns: [
                { text: 'First Name', datafield: 'firstname', width: 200 },
                { text: 'Last Name', datafield: 'lastname', width: 200 },
                { text: 'Product', datafield: 'productname', width: 180 },
                { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
            ],
            rendertoolbar,
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'} ref={this.myGrid}
                // @ts-ignore
                width={'100%'} height={350} source={this.state.source} columns={this.state.columns}
                showtoolbar={true} rendertoolbar={this.state.rendertoolbar} />
        );
    }   

    private generaterow(): any {

        const firstNames =
            [
                'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'
            ];

        const lastNames =
            [
                'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'
            ];

        const productNames =
            [
                'Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'
            ];

        const priceValues =
            [
                '2.25', '1.5', '3.0', '3.3', '4.5', '3.6', '3.8', '2.5', '5.0', '1.75', '3.25', '4.0'
            ];

        const row: any = {};
        const productindex = Math.floor(Math.random() * productNames.length);
        const price = parseFloat(priceValues[productindex]);
        const quantity = 1 + Math.round(Math.random() * 10);
        /* tslint:disable:no-string-literal */
        row['firstname'] = firstNames[Math.floor(Math.random() * firstNames.length)];
        row['lastname'] = lastNames[Math.floor(Math.random() * lastNames.length)];
        row['productname'] = productNames[productindex];
        row['price'] = price;
        row['quantity'] = quantity;
        row['total'] = price * quantity;
        return row;
    }

     private generateData(): any {
        const data: any = {};

        for (let i = 0; i < 10; i++) {
            const row = this.generaterow();
            data[i] = row;
        }
        return data;
     }
}

export default App;
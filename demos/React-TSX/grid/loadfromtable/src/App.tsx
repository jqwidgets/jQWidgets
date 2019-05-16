import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}> {

    private myTable = React.createRef<HTMLTableElement>();
    constructor(props: {}) {
        super(props);
        this.loadBtn = this.loadBtn.bind(this);
        this.generateData = this.generateData.bind(this);
    }

    public render() {
        return (
            <div>
                <table ref={this.myTable} style={{ width: '850px' }} cellSpacing={0} cellPadding={2}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Product</th>
                            <th>Available</th>
                            <th>Ship Date</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nancy</td>
                            <td>Vileid</td>
                            <td>Espresso con Panna</td>
                            <td>true</td>
                            <td>5/20/2012</td>
                            <td>9</td>
                            <td>$3.25</td>
                        </tr>
                        <tr>
                            <td>Elio</td>
                            <td>Nagase</td>
                            <td>Espresso con Panna</td>
                            <td>true</td>
                            <td>9/26/2012</td>
                            <td>6</td>
                            <td>$3.25</td>
                        </tr>
                        <tr>
                            <td>Cheryl</td>
                            <td>Nagase</td>
                            <td>Doubleshot Espresso</td>
                            <td>false</td>
                            <td>4/19/2012</td>
                            <td>9</td>
                            <td>$3.30</td>
                        </tr>
                        <tr>
                            <td>Regina</td>
                            <td>Devling</td>
                            <td>Caramel Latte</td>
                            <td>true</td>
                            <td>2/26/2012</td>
                            <td>11</td>
                            <td>$3.80</td>
                        </tr>
                        <tr>
                            <td>Michael</td>
                            <td>Winkler</td>
                            <td>Doubleshot Espresso</td>
                            <td>false</td>
                            <td>7/16/2012</td>
                            <td>4</td>
                            <td>$3.30</td>
                        </tr>
                        <tr>
                            <td>Mayumi</td>
                            <td>Burke</td>
                            <td>Caffe Americano</td>
                            <td>false</td>
                            <td>9/7/2012</td>
                            <td>1</td>
                            <td>$2.50</td>
                        </tr>
                        <tr>
                            <td>Andrew</td>
                            <td>Nagase</td>
                            <td>Caffe Espresso</td>
                            <td>true</td>
                            <td>4/15/2012</td>
                            <td>3</td>
                            <td>$3.00</td>
                        </tr>
                        <tr>
                            <td>Ian</td>
                            <td>Burke</td>
                            <td>Green Tea</td>
                            <td>false</td>
                            <td>11/16/2012</td>
                            <td>5</td>
                            <td>$1.50</td>
                        </tr>
                        <tr>
                            <td>Yoshi</td>
                            <td>Petersen</td>
                            <td>White Chocolate Mocha</td>
                            <td>false</td>
                            <td>7/26/2012</td>
                            <td>2</td>
                            <td>$3.60</td>
                        </tr>
                        <tr>
                            <td>Lars</td>
                            <td>Bjorn</td>
                            <td>Peppermint Mocha Twist</td>
                            <td>false</td>
                            <td>7/17/2012</td>
                            <td>11</td>
                            <td>$4.00</td>
                        </tr>
                        <tr>
                            <td>Guylene</td>
                            <td>Devling</td>
                            <td>Caramel Latte</td>
                            <td>true</td>
                            <td>8/9/2012</td>
                            <td>6</td>
                            <td>$3.80</td>
                        </tr>
                        <tr>
                            <td>Michael</td>
                            <td>Burke</td>
                            <td>Caffe Americano</td>
                            <td>false</td>
                            <td>9/10/2012</td>
                            <td>11</td>
                            <td>$2.50</td>
                        </tr>
                        <tr>
                            <td>Petra</td>
                            <td>Vileid</td>
                            <td>White Chocolate Mocha</td>
                            <td>false</td>
                            <td>8/21/2012</td>
                            <td>7</td>
                            <td>$3.60</td>
                        </tr>
                        <tr>
                            <td>Lars</td>
                            <td>Nodier</td>
                            <td>White Chocolate Mocha</td>
                            <td>false</td>
                            <td>7/16/2012</td>
                            <td>8</td>
                            <td>$3.60</td>
                        </tr>
                    </tbody>
                </table>

                <div style={{ marginTop: '10px' }} />
                <JqxButton theme={'material-purple'} onClick={this.loadBtn} width={180}>Load React Grid from Table</JqxButton>

                <div id="grid" style={{ marginTop: '10px' }} />
            </div>
        );
    }

    private loadBtn(): void {

        const source = {
            datafields: [
                { name: 'First Name', type: 'string' },
                { name: 'Last Name', type: 'string' },
                { name: 'Product', type: 'string' },
                { name: 'Available', type: 'string' },
                { name: 'Ship Date', type: 'date', format: 'MM/dd/yyyy' },
                { name: 'Quantity', type: 'number' },
                { name: 'Price', type: 'number' }
            ],
            datatype: 'array',
            localdata: this.generateData(),
        };

        const dataAdapter = new jqx.dataAdapter(source);

        const columns: IGridProps['columns'] = [
            { text: 'First Name', datafield: 'First Name', align: 'center', width: 130 },
            { text: 'Last Name', datafield: 'Last Name', align: 'center', width: 130 },
            { text: 'Product', datafield: 'Product', align: 'center', width: 170 },
            { text: 'Available', datafield: 'Available', columntype: 'checkbox', align: 'center', width: 90 },
            { text: 'Ship Date', datafield: 'Ship Date', align: 'center', cellsformat: 'd', width: 100 },
            { text: 'Quantity', datafield: 'Quantity', align: 'center', cellsalign: 'right', width: 100 },
            { text: 'Price', datafield: 'Price', align: 'right', cellsalign: 'right', cellsformat: 'c2' }
        ];

        ReactDOM.render(
            <JqxGrid theme={'material-purple'} width={850} source={dataAdapter} columnsresize={true}
                autoheight={true} sortable={true} columns={columns} />,
            document.getElementById('grid')
        );
    }

    private generateData(): any[] {
        const table = this.myTable.current!;
        const columns = table.children[0].getElementsByTagName('th');
        const rows = table.children[1].getElementsByTagName('tr');

        const data: any[] = [];

        Array.prototype.forEach.call(rows, (row: any) => {
            const datarow: any = {};
            for (let j = 0; j < columns.length; j++) {
                // Get column's title.
                const columnName = columns[j].innerHTML;
                // Get cell.
                const cell = row.children[j].innerHTML;
                datarow[columnName] = cell;
            }
            data[data.length] = datarow;
        });

        return data;
    }
}

export default App;
import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();
    private myWindow = React.createRef<JqxWindow>();
    private firstname = React.createRef<JqxInput>();
    private lastname = React.createRef<JqxInput>();
    private product = React.createRef<JqxInput>();
    private quantity = React.createRef<JqxNumberInput>();
    private price = React.createRef<JqxNumberInput>();

    private editrow: number = -1;

    constructor(props: {}) {
        super(props);
        this.saveBtn = this.saveBtn.bind(this);
        this.cancelBtn = this.cancelBtn.bind(this);

        const source: any = {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(200, false)
        };

        this.state = {
            columns: [
                { text: 'First Name', datafield: 'firstname', width: 200 },
                { text: 'Last Name', datafield: 'lastname', width: 200 },
                { text: 'Product', datafield: 'productname', width: 190 },
                { text: 'Quantity', datafield: 'quantity', width: 90, cellsalign: 'right' },
                { text: 'Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                {
                    buttonclick: (row: number): void => {
                        // get the data and append in to the inputs
                        this.editrow = row;
                        const dataRecord = this.myGrid.current!.getrowdata(this.editrow);
                        this.firstname.current!.val(dataRecord.firstname);
                        this.lastname.current!.val(dataRecord.lastname);
                        this.product.current!.val(dataRecord.productname);
                        this.quantity.current!.setDecimal(dataRecord.quantity);
                        this.price.current!.setDecimal(dataRecord.price);
                        // show the popup window.
                        this.myWindow.current!.open();
                    },
                    cellsrenderer: (): string => {
                        return 'Edit';
                    },
                    columntype: 'button', datafield: 'Edit', text: 'Edit'
                }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div>

                <JqxGrid theme={'material-purple'} ref={this.myGrid} className="grid"
                    // @ts-ignore
                    width={'100%'} source={this.state.source} pageable={true}
                    autoheight={true} columns={this.state.columns} />

                <JqxWindow theme={'material-purple'} ref={this.myWindow} width={250} height={230} resizable={false}
                    isModal={false} autoOpen={false} modalOpacity={'0.01'} position={{ x: 68, y: 368 }}>
                    <div>Edit</div>
                    <div style={{ overflow: 'hidden' }}>
                        <table>
                            <tbody>
                                <tr>
                                    <td align={'right'}>First Name:</td>
                                    <td align={'left'}>
                                        <JqxInput theme={'material-purple'} ref={this.firstname} width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Last Name:</td>
                                    <td align={'left'}>
                                        <JqxInput theme={'material-purple'} ref={this.lastname} width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Product:</td>
                                    <td align={'left'}>
                                        <JqxInput theme={'material-purple'} ref={this.product} width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Quantity:</td>
                                    <td align={'left'}>
                                        <JqxNumberInput theme={'material-purple'} ref={this.quantity}
                                            width={150} height={23} decimalDigits={0}
                                            min={0} spinButtons={true} spinMode={'simple'} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Price:</td>
                                    <td align={'left'}>
                                        <JqxNumberInput theme={'material-purple'} ref={this.price}
                                            width={150} height={23} symbol={'$'}
                                            min={0} spinButtons={true} spinMode={'simple'} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'} />
                                    <td style={{ paddingTop: '10px' }} align={'right'}>
                                        <JqxButton theme={'material-purple'} style={{ display: 'inline-block', marginRight: '5px' }} onClick={this.saveBtn} width={50}>
                                            Save
                                        </JqxButton>
                                        <JqxButton theme={'material-purple'} style={{ display: 'inline-block', marginRight: '5px' }} onClick={this.cancelBtn} width={50}>
                                            Cancel
                                        </JqxButton>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </JqxWindow>
            </div>
        );
    }

    private saveBtn(): void {
        if (this.editrow >= 0) {
            const row = {
                firstname: this.firstname.current!.getOptions('value'),
                lastname: this.lastname.current!.getOptions('value'),
                price: this.price.current!.getDecimal(),
                productname: this.product.current!.getOptions('value'),
                quantity: this.quantity.current!.getDecimal()
            };
            const rowID = this.myGrid.current!.getrowid(this.editrow);
            this.myGrid.current!.updaterow(rowID, row);
            this.myWindow.current!.hide();
        }
    }

    private cancelBtn(): void {
        this.myWindow.current!.hide();
    }
}

export default App;
import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxMenu from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';
import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();
    private myWindow = React.createRef<JqxWindow>();
    private firstName = React.createRef<JqxInput>();
    private lastName = React.createRef<JqxInput>();
    private product = React.createRef<JqxInput>();
    private quantity = React.createRef<JqxNumberInput>();
    private price = React.createRef<JqxNumberInput>();
    private myMenu = React.createRef<JqxMenu>();

    private editrow: number = -1;

    constructor(props: {}) {
        super(props);
        this.myGridOnRowClick = this.myGridOnRowClick.bind(this);
        this.myMenuOnItemClick = this.myMenuOnItemClick.bind(this);
        this.saveBtnOnClick = this.saveBtnOnClick.bind(this);
        this.cancelBtnOnClick = this.cancelBtnOnClick.bind(this);

        const source: any = {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' }
            ],          
            datatype: 'array',
            localdata: generatedata(25, false)
        };

        this.state = {
            columns: [
                { text: 'First Name', datafield: 'firstname', width: 200 },
                { text: 'Last Name', datafield: 'lastname', width: 200 },
                { text: 'Product', datafield: 'productname', width: 190 },
                { text: 'Quantity', datafield: 'quantity', width: 90, cellsalign: 'right' },
                { text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public componentDidMount() {
        document.addEventListener('contextmenu', event => event.preventDefault());
    }

    public render() {
        return (
            <div>
                <JqxGrid theme={'material-purple'} ref={this.myGrid}
                    onRowclick={this.myGridOnRowClick}
                    // @ts-ignore
                    width={'100%'} source={this.state.source} pageable={true}
                    autoheight={true} columns={this.state.columns} />

                <div style={{ marginTop: '30px' }}>
                    <div id="cellbegineditevent" />
                    <div style={{ marginTop: '10px' }} id="cellendeditevent" />
                </div>

                <JqxWindow theme={'material-purple'} ref={this.myWindow}
                    width={250} height={230} modalOpacity={'0.01'}
                    resizable={false} isModal={true} autoOpen={false}>
                    <div>Edit</div>
                    <div style={{ overflow: 'hidden' }}>
                        <table>
                            <tbody>
                                <tr>
                                    <td align={'right'}>First Name:</td>
                                    <td align={'left'}><JqxInput ref={this.firstName} width={150} height={23} /></td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Last Name:</td>
                                    <td align={'left'}><JqxInput ref={this.lastName} width={150} height={23} /></td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Product:</td>
                                    <td align={'left'}><JqxInput ref={this.product} width={150} height={23} /></td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Quantity:</td>
                                    <td align={'left'}>
                                        <JqxNumberInput theme={'material-purple'} ref={this.quantity}
                                            width={150} height={23} decimalDigits={0} spinButtons={true} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Price:</td>
                                    <td align={'left'}>
                                        <JqxNumberInput theme={'material-purple'} ref={this.price}
                                            width={150} height={23} symbol={'$'} spinButtons={true} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'} />
                                    <td style={{ paddingTop: '10px' }} align={'right'}>
                                        <JqxButton theme={'material-purple'} style={{ marginRight: '5px', float: 'left' }} onClick={this.saveBtnOnClick}>Save</JqxButton>
                                        <JqxButton theme={'material-purple'} style={{ float: 'left' }} onClick={this.cancelBtnOnClick}>Cancel</JqxButton>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </JqxWindow>

                <JqxMenu theme={'material-purple'} ref={this.myMenu} onItemclick={this.myMenuOnItemClick}
                    width={200} height={58} mode={'popup'} autoOpenPopup={false}>
                    <ul>
                        <li>Edit Selected Row</li>
                        <li>Delete Selected Row</li>
                    </ul>
                </JqxMenu>
            </div>
        );
    }

    private myGridOnRowClick(event: any): void | boolean {
        if (event.args.rightclick) {
            this.myGrid.current!.selectrow(event.args.rowindex);
            const scrollTop = window.scrollY;
            const scrollLeft = window.scrollX;
            this.myMenu.current!.open(parseInt(event.args.originalEvent.clientX, 10) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY, 10) + 5 + scrollTop);
            return false;
        }
    };

    private myMenuOnItemClick(event: any): void {
        const args = event.args;
        const rowindex = this.myGrid.current!.getselectedrowindex();
        if (args.innerHTML === 'Edit Selected Row') {
            this.editrow = rowindex;
            this.myWindow.current!.setOptions({ position: { x: 60, y: 60 } });
            // get the clicked row's data and initialize the input fields.
            const dataRecord = this.myGrid.current!.getrowdata(this.editrow);
            this.firstName.current!.val(dataRecord.firstname);
            this.lastName.current!.val(dataRecord.lastname);
            this.product.current!.val(dataRecord.productname);
            this.quantity.current!.setOptions({ decimal: dataRecord.quantity });
            this.price.current!.setOptions({ decimal: dataRecord.price });
            // show the popup window.
            this.myWindow.current!.open();
        }
        else {
            const rowid = this.myGrid.current!.getrowid(rowindex);
            this.myGrid.current!.deleterow(rowid);
        }
    };

    private saveBtnOnClick(): void {
        if (this.editrow >= 0) {
            const row = {
                firstname: this.firstName.current!.getOptions('value'),
                lastname: this.lastName.current!.getOptions('value'),
                price: this.price.current!.getDecimal(),
                productname: this.product.current!.getOptions('value'),              
                quantity: this.quantity.current!.getDecimal(),
            };
            const rowid = this.myGrid.current!.getrowid(this.editrow);
            this.myGrid.current!.updaterow(rowid, row);
            this.myWindow.current!.hide();
        }
    };

    private cancelBtnOnClick(): void {
        this.myWindow.current!.hide();
    };
}

export default App;
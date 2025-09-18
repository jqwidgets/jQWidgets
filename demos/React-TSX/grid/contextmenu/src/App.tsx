import * as React from 'react';

import { useEffect, useRef, useState } from 'react';
import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxMenu from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';
import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);
    const myWindow = useRef<JqxWindow>(null);
    const firstName = useRef<JqxInput>(null);
    const lastName = useRef<JqxInput>(null);
    const product = useRef<JqxInput>(null);
    const quantity = useRef<JqxNumberInput>(null);
    const price = useRef<JqxNumberInput>(null);
    const myMenu = useRef<JqxMenu>(null);

    const [columns] = useState<IGridProps['columns']>([
        { text: 'First Name', datafield: 'firstname', width: 200 },
        { text: 'Last Name', datafield: 'lastname', width: 200 },
        { text: 'Product', datafield: 'productname', width: 190 },
        { text: 'Quantity', datafield: 'quantity', width: 90, cellsalign: 'right' },
        { text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
    ]);
    const [source] = useState<any>(() => {
        const src: any = {
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
        return new jqx.dataAdapter(src);
    });

    const editrow = useRef<number>(-1);

    useEffect(() => {
        const handler = (event: Event) => event.preventDefault();
        document.addEventListener('contextmenu', handler);
        return () => document.removeEventListener('contextmenu', handler);
    }, []);

    const myGridOnRowClick = (event: any): void | boolean => {
        if (event.args.rightclick) {
            myGrid.current!.selectrow(event.args.rowindex);
            const scrollTop = window.scrollY;
            const scrollLeft = window.scrollX;
            myMenu.current!.open(
                parseInt(event.args.originalEvent.clientX, 10) + 5 + scrollLeft,
                parseInt(event.args.originalEvent.clientY, 10) + 5 + scrollTop
            );
            return false;
        }
    };

    const myMenuOnItemClick = (event: any): void => {
        const args = event.args;
        const rowindex = myGrid.current!.getselectedrowindex();
        if (args.innerHTML === 'Edit Selected Row') {
            editrow.current = rowindex;
            myWindow.current!.setOptions({ position: { x: 60, y: 60 } });
            const dataRecord = myGrid.current!.getrowdata(editrow.current);
            firstName.current!.val(dataRecord.firstname);
            lastName.current!.val(dataRecord.lastname);
            product.current!.val(dataRecord.productname);
            quantity.current!.setOptions({ decimal: dataRecord.quantity });
            price.current!.setOptions({ decimal: dataRecord.price });
            myWindow.current!.open();
        } else {
            const rowid = myGrid.current!.getrowid(rowindex);
            myGrid.current!.deleterow(rowid);
        }
    };

    const saveBtnOnClick = (): void => {
        if (editrow.current >= 0) {
            const row = {
                firstname: firstName.current!.getOptions('value'),
                lastname: lastName.current!.getOptions('value'),
                price: price.current!.getDecimal(),
                productname: product.current!.getOptions('value'),
                quantity: quantity.current!.getDecimal(),
            };
            const rowid = myGrid.current!.getrowid(editrow.current);
            myGrid.current!.updaterow(rowid, row);
            myWindow.current!.hide();
        }
    };

    const cancelBtnOnClick = (): void => {
        myWindow.current!.hide();
    };

    return (
        <div>
            <JqxGrid
                theme={'material-purple'}
                ref={myGrid}
                onRowclick={myGridOnRowClick}
                width={'100%'}
                source={source}
                pageable={true}
                autoheight={true}
                columns={columns}
            />

            <div style={{ marginTop: '30px' }}>
                <div id="cellbegineditevent" />
                <div style={{ marginTop: '10px' }} id="cellendeditevent" />
            </div>

            <JqxWindow
                theme={'material-purple'}
                ref={myWindow}
                width={250}
                height={230}
                modalOpacity={'0.01'}
                resizable={false}
                isModal={true}
                autoOpen={false}
            >
                <div>Edit</div>
                <div style={{ overflow: 'hidden' }}>
                    <table>
                        <tbody>
                            <tr>
                                <td align={'right'}>First Name:</td>
                                <td align={'left'}>
                                    <JqxInput ref={firstName} width={150} height={23} />
                                </td>
                            </tr>
                            <tr>
                                <td align={'right'}>Last Name:</td>
                                <td align={'left'}>
                                    <JqxInput ref={lastName} width={150} height={23} />
                                </td>
                            </tr>
                            <tr>
                                <td align={'right'}>Product:</td>
                                <td align={'left'}>
                                    <JqxInput ref={product} width={150} height={23} />
                                </td>
                            </tr>
                            <tr>
                                <td align={'right'}>Quantity:</td>
                                <td align={'left'}>
                                    <JqxNumberInput
                                        theme={'material-purple'}
                                        ref={quantity}
                                        width={150}
                                        height={23}
                                        decimalDigits={0}
                                        spinButtons={true}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td align={'right'}>Price:</td>
                                <td align={'left'}>
                                    <JqxNumberInput
                                        theme={'material-purple'}
                                        ref={price}
                                        width={150}
                                        height={23}
                                        symbol={'$'}
                                        spinButtons={true}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td align={'right'} />
                                <td style={{ paddingTop: '10px' }} align={'right'}>
                                    <JqxButton
                                        theme={'material-purple'}
                                        style={{ marginRight: '5px', float: 'left' }}
                                        onClick={saveBtnOnClick}
                                    >
                                        Save
                                    </JqxButton>
                                    <JqxButton
                                        theme={'material-purple'}
                                        style={{ float: 'left' }}
                                        onClick={cancelBtnOnClick}
                                    >
                                        Cancel
                                    </JqxButton>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </JqxWindow>

            <JqxMenu
                theme={'material-purple'}
                ref={myMenu}
                onItemclick={myMenuOnItemClick}
                width={200}
                height={58}
                mode={'popup'}
                autoOpenPopup={false}
            >
                <ul>
                    <li>Edit Selected Row</li>
                    <li>Delete Selected Row</li>
                </ul>
            </JqxMenu>
        </div>
    );
};

export default App;
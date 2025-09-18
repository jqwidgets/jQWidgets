import * as React from 'react';

import { useRef, useState, useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);
    const myWindow = useRef<JqxWindow>(null);
    const firstname = useRef<JqxInput>(null);
    const lastname = useRef<JqxInput>(null);
    const product = useRef<JqxInput>(null);
    const quantity = useRef<JqxNumberInput>(null);
    const price = useRef<JqxNumberInput>(null);
    const editrow = useRef<number>(-1);

    const source = useMemo(() => ({
        datafields: [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' }
        ],
        datatype: 'array',
        localdata: generatedata(200, false)
    }), []);

    const [columns] = useState<IGridProps['columns']>([
        { text: 'First Name', datafield: 'firstname', width: 200 },
        { text: 'Last Name', datafield: 'lastname', width: 200 },
        { text: 'Product', datafield: 'productname', width: 190 },
        { text: 'Quantity', datafield: 'quantity', width: 90, cellsalign: 'right' },
        { text: 'Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
        {
            buttonclick: (row: number): void => {
                editrow.current = row;
                const dataRecord = myGrid.current!.getrowdata(editrow.current);
                firstname.current!.val(dataRecord.firstname);
                lastname.current!.val(dataRecord.lastname);
                product.current!.val(dataRecord.productname);
                quantity.current!.setDecimal(dataRecord.quantity);
                price.current!.setDecimal(dataRecord.price);
                myWindow.current!.open();
            },
            cellsrenderer: (): string => {
                return 'Edit';
            },
            columntype: 'button',
            datafield: 'Edit',
            text: 'Edit'
        }
    ]);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const saveBtn = React.useCallback(() => {
        if (editrow.current >= 0) {
            const row = {
                firstname: firstname.current!.getOptions('value'),
                lastname: lastname.current!.getOptions('value'),
                price: price.current!.getDecimal(),
                productname: product.current!.getOptions('value'),
                quantity: quantity.current!.getDecimal()
            };
            const rowID = myGrid.current!.getrowid(editrow.current);
            myGrid.current!.updaterow(rowID, row);
            myWindow.current!.hide();
        }
    }, []);

    const cancelBtn = React.useCallback(() => {
        myWindow.current!.hide();
    }, []);

    return (
        <div>
            <JqxGrid
                theme={'material-purple'}
                ref={myGrid}
                className="grid"
                width={'100%'}
                source={dataAdapter}
                pageable={true}
                autoheight={true}
                columns={columns}
            />
            <JqxWindow
                theme={'material-purple'}
                ref={myWindow}
                width={250}
                height={230}
                resizable={false}
                isModal={false}
                autoOpen={false}
                modalOpacity={'0.01'}
                position={{ x: 68, y: 368 }}
            >
                <div>Edit</div>
                <div style={{ overflow: 'hidden' }}>
                    <table>
                        <tbody>
                            <tr>
                                <td align={'right'}>First Name:</td>
                                <td align={'left'}>
                                    <JqxInput theme={'material-purple'} ref={firstname} width={150} height={23} />
                                </td>
                            </tr>
                            <tr>
                                <td align={'right'}>Last Name:</td>
                                <td align={'left'}>
                                    <JqxInput theme={'material-purple'} ref={lastname} width={150} height={23} />
                                </td>
                            </tr>
                            <tr>
                                <td align={'right'}>Product:</td>
                                <td align={'left'}>
                                    <JqxInput theme={'material-purple'} ref={product} width={150} height={23} />
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
                                        min={0}
                                        spinButtons={true}
                                        spinMode={'simple'}
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
                                        min={0}
                                        spinButtons={true}
                                        spinMode={'simple'}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td align={'right'} />
                                <td style={{ paddingTop: '10px' }} align={'right'}>
                                    <JqxButton
                                        theme={'material-purple'}
                                        style={{ display: 'inline-block', marginRight: '5px' }}
                                        onClick={saveBtn}
                                        width={50}
                                    >
                                        Save
                                    </JqxButton>
                                    <JqxButton
                                        theme={'material-purple'}
                                        style={{ display: 'inline-block', marginRight: '5px' }}
                                        onClick={cancelBtn}
                                        width={50}
                                    >
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
};

export default App;
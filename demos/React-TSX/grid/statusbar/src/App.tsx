import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRef, useEffect, useCallback, useState, useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';

const dropDownSource: IDropDownListProps['source'] = [
    'First Name', 'Last Name', 'Product', 'Quantity', 'Price'
];

const columns: IGridProps['columns'] = [
    { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 120 },
    { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 120 },
    { text: 'Product', datafield: 'productname', width: 170 },
    { text: 'In Stock', datafield: 'available', columntype: 'checkbox', width: 125 },
    { text: 'Quantity', datafield: 'quantity', width: 85, cellsalign: 'right', cellsformat: 'n2' },
    { text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
];

const getAdapter = () => {
    const source: any = {
        datafields: [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'available', type: 'bool' }
        ],
        datatype: 'array',
        localdata: generatedata(15),
        updaterow: (rowid: number, rowdata: any, commit: any): void => {
            commit(true);
        }
    };
    return new jqx.dataAdapter(source);
};

const App = () => {
    const myGrid = useRef<JqxGrid>(null);
    const myDropDownList = useRef<JqxDropDownList>(null);
    const myInput = useRef<JqxInput>(null);
    const myWindow = useRef<JqxWindow>(null);
    const [source, setSource] = useState<any>(() => getAdapter());

    const reloadButtonClick = useCallback(() => {
        setSource(getAdapter());
    }, []);

    const addButtonClick = useCallback(() => {
        const datarow = generatedata(1);
        myGrid.current!.addrow(null, datarow[0]);
    }, []);

    const deleteButtonClick = useCallback(() => {
        const selectedrowindex = myGrid.current!.getselectedrowindex();
        const id = myGrid.current!.getrowid(selectedrowindex);
        myGrid.current!.deleterow(id);
    }, []);

    const searchButtonClick = useCallback(() => {
        myWindow.current!.open();
        myWindow.current!.move(60, 60);
    }, []);

    const findBtnOnClick = useCallback(() => {
        myGrid.current!.clearfilters();
        const searchColumnIndex = myDropDownList.current!.getSelectedIndex();
        let datafield = '';
        switch (searchColumnIndex) {
            case 0:
                datafield = 'firstname';
                break;
            case 1:
                datafield = 'lastname';
                break;
            case 2:
                datafield = 'productname';
                break;
            case 3:
                datafield = 'quantity';
                break;
            case 4:
                datafield = 'price';
                break;
        }
        const searchText = myInput.current!.getOptions('value');
        const filtergroup = new jqx.filter();
        const filterOrOperator = 1;
        const filtervalue = searchText;
        const filtercondition = 'contains';
        const filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtergroup.addfilter(filterOrOperator, filter);
        myGrid.current!.addfilter(datafield, filtergroup);
        myGrid.current!.applyfilters();
    }, []);

    const clearBtnOnClick = useCallback(() => {
        myGrid.current!.clearfilters();
    }, []);

    const renderstatusbar = useCallback((statusbar: any): void => {
        const style: React.CSSProperties = { float: 'left', marginLeft: '5px' };
        const buttonsContainer = (
            <div style={{ overflow: 'hidden', position: 'relative', margin: '5px' }}>
                <div id={'addButton'} style={style} />
                <div id={'deleteButton'} style={style} />
                <div id={'reloadButton'} style={style} />
                <div id={'searchButton'} style={style} />
            </div>
        );
        ReactDOM.render(buttonsContainer, statusbar[0]);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            ReactDOM.render(
                <JqxButton theme={'material-purple'} onClick={addButtonClick}
                    width={80} height={25} value={'Add'} imgSrc={'https://www.jqwidgets.com/react/images/add.png'}
                    imgPosition={'center'} textPosition={'center'} textImageRelation={'imageBeforeText'} />,
                document.getElementById('addButton')
            );
            ReactDOM.render(
                <JqxButton theme={'material-purple'} onClick={deleteButtonClick}
                    width={80} height={25} value={'Delete'} imgSrc={'https://www.jqwidgets.com/react/images/close.png'}
                    imgPosition={'center'} textPosition={'center'} textImageRelation={'imageBeforeText'} />,
                document.getElementById('deleteButton')
            );
            ReactDOM.render(
                <JqxButton theme={'material-purple'} onClick={reloadButtonClick}
                    width={80} height={25} value={'Reload'} imgSrc={'https://www.jqwidgets.com/react/images/refresh.png'}
                    imgPosition={'center'} textPosition={'center'} textImageRelation={'imageBeforeText'} />,
                document.getElementById('reloadButton')
            );
            ReactDOM.render(
                <JqxButton theme={'material-purple'} onClick={searchButtonClick}
                    width={80} height={25} value={'Find'} imgSrc={'https://www.jqwidgets.com/react/images/search.png'}
                    imgPosition={'center'} textPosition={'center'} textImageRelation={'imageBeforeText'} />,
                document.getElementById('searchButton')
            );
        });
    }, [addButtonClick, deleteButtonClick, reloadButtonClick, searchButtonClick]);

    return (
        <div>
            <JqxGrid
                theme={'material-purple'}
                ref={myGrid}
                // @ts-ignore
                width={'100%'}
                source={source}
                showstatusbar={true}
                renderstatusbar={renderstatusbar}
                columns={columns}
            />
            <JqxWindow
                theme={'material-purple'}
                ref={myWindow}
                width={210}
                height={180}
                autoOpen={false}
                resizable={false}
            >
                <div>Find Record</div>
                <div style={{ overflow: 'hidden' }}>
                    <div>Find what:</div>
                    <div style={{ marginTop: '5px' }}>
                        <JqxInput theme={'material-purple'} ref={myInput} width={194} height={23} />
                    </div>
                    <div style={{ marginTop: '7px', clear: 'both' }}>Look in:</div>
                    <div style={{ marginTop: '5px' }}>
                        <JqxDropDownList
                            theme={'material-purple'}
                            ref={myDropDownList}
                            width={200}
                            height={23}
                            selectedIndex={0}
                            source={dropDownSource}
                            autoDropDownHeight={true}
                        />
                    </div>
                    <div>
                        <JqxButton
                            theme={'material-purple'}
                            style={{ marginTop: '15px', marginLeft: '50px', float: 'left' }}
                            onClick={findBtnOnClick}
                            width={70}
                        >
                            Find
                        </JqxButton>
                        <JqxButton
                            theme={'material-purple'}
                            style={{ marginLeft: '5px', marginTop: '15px', float: 'left' }}
                            onClick={clearBtnOnClick}
                            width={70}
                        >
                            Clear
                        </JqxButton>
                    </div>
                </div>
            </JqxWindow>
        </div>
    );
};

export default App;
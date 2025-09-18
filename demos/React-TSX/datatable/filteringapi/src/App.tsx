import * as React from 'react';
import { useRef, useEffect, useState, useCallback } from 'react';
import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxListBox, { IListBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

interface IState extends IDataTableProps {
    dropDownListSource: IDropDownListProps['source'];
    listBoxSource: IListBoxProps['source'];
    displayMember: IListBoxProps['displayMember'];
}

const App = () => {
    const myDataTable = useRef<JqxDataTable>(null);
    const myDropDownList = useRef<JqxDropDownList>(null);
    const myListBox = useRef<JqxListBox>(null);
    const [handleCheckChange, setHandleCheckChange] = useState(true);

    const source = React.useMemo(() => ({
        dataFields: [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' }
        ],
        dataType: 'array',
        localData: generatedata(200, false),
    }), []);

    const [state, setState] = useState<IState>({
        columns: [
            { text: 'First Name', dataField: 'firstname', width: 190 },
            { text: 'Last Name', dataField: 'lastname', width: 190 },
            { text: 'Product', dataField: 'productname', width: 170 },
            { text: 'Quantity', dataField: 'quantity', cellsAlign: 'right' }
        ],
        displayMember: undefined,
        dropDownListSource: [
            { label: 'First Name', value: 'firstname' },
            { label: 'Last Name', value: 'lastname' },
            { label: 'Product', value: 'productname' },
            { label: 'Quantity', value: 'quantity' }
        ],
        listBoxSource: [],
        source: new jqx.dataAdapter(source)
    });

    const updateMyListBox = useCallback((dataField: string) => {
        myDataTable.current!.clearFilters();
        const myListBoxAdapter = new jqx.dataAdapter(source, {
            autoBind: true,
            uniqueDataFields: [dataField],
        });
        const uniqueRecords = myListBoxAdapter.records;
        uniqueRecords.splice(0, 0, '(Select All)');
        setState(prev => ({
            ...prev,
            displayMember: dataField,
            listBoxSource: uniqueRecords
        }));
        setTimeout(() => {
            myListBox.current!.checkAll();
        });
    }, [source]);

    const applyFilter = useCallback((dataField: string) => {
        myDataTable.current!.clearFilters();
        let filtertype = 'stringfilter';
        if (dataField === 'date') {
            filtertype = 'datefilter';
        }
        if (dataField === 'price' || dataField === 'quantity') {
            filtertype = 'numericfilter';
        }
        const filtergroup = new jqx.filter();
        const checkedItems = myListBox.current!.getCheckedItems();
        if (checkedItems.length === 0) {
            const filterOrOperator = 1;
            const filtervalue = 'Empty';
            const filtercondition = 'equal';
            const filter = filtergroup.createfilter(filtertype, filtervalue, filtercondition);
            filtergroup.addfilter(filterOrOperator, filter);
        } else {
            for (const item of checkedItems) {
                const filterOrOperator = 1;
                const filtervalue = item.label;
                const filtercondition = 'equal';
                const filter = filtergroup.createfilter(filtertype, filtervalue, filtercondition);
                filtergroup.addfilter(filterOrOperator, filter);
            }
        }
        myDataTable.current!.addFilter(dataField, filtergroup);
        myDataTable.current!.applyFilters();
    }, []);

    const listBoxOnCheckChange = useCallback((event: any) => {
        if (!handleCheckChange) {
            return;
        }
        if (event.args.label !== '(Select All)') {
            setHandleCheckChange(false);
            myListBox.current!.checkIndex(0);
            const checkedItems = myListBox.current!.getCheckedItems();
            const items = myListBox.current!.getItems();
            if (checkedItems.length === 1) {
                myListBox.current!.uncheckIndex(0);
            } else if (items.length !== checkedItems.length) {
                myListBox.current!.indeterminateIndex(0);
            }
            setTimeout(() => setHandleCheckChange(true));
        } else {
            setHandleCheckChange(false);
            if (event.args.checked) {
                myListBox.current!.checkAll();
            } else {
                myListBox.current!.uncheckAll();
            }
            setTimeout(() => setHandleCheckChange(true));
        }
    }, [handleCheckChange]);

    const dropDownListOnSelect = useCallback((event: any) => {
        myDropDownList.current!.setOptions({ selectedIndex: event.args.index });
        updateMyListBox(event.args.item.value);
    }, [updateMyListBox]);

    const applyFilterBtnOnClick = useCallback(() => {
        const dataField = myDropDownList.current!.getSelectedItem().value;
        applyFilter(dataField);
    }, [applyFilter]);

    const clearfilterBtnOnClick = useCallback(() => {
        myDataTable.current!.clearFilters();
    }, []);

    useEffect(() => {
        myDropDownList.current!.setOptions({ selectedIndex: 0 });
        updateMyListBox('firstname');
    }, [updateMyListBox]);

    useEffect(() => {
        if (myListBox.current && state.listBoxSource.length > 0) {
            myListBox.current!.checkAll();
        }
    }, [state.listBoxSource]);

    return (
        <div>
            <div style={{ float: 'left' }}>
                <div>Filter By:</div>
                <JqxDropDownList
                    theme={'material-purple'}
                    ref={myDropDownList}
                    onSelect={dropDownListOnSelect}
                    width={160}
                    height={25}
                    source={state.dropDownListSource}
                    autoDropDownHeight={true}
                />
                <JqxListBox
                    theme={'material-purple'}
                    ref={myListBox}
                    style={{ marginTop: '10px' }}
                    onCheckChange={listBoxOnCheckChange}
                    source={state.listBoxSource}
                    width={160}
                    height={250}
                    checkboxes={true}
                    displayMember={state.displayMember}
                />
                <div style={{ marginTop: '10px', marginRight: '5px' }}>
                    <JqxButton
                        theme={'material-purple'}
                        onClick={applyFilterBtnOnClick}
                    >
                        Apply Filter
                    </JqxButton>
                    <JqxButton
                        theme={'material-purple'}
                        onClick={clearfilterBtnOnClick}
                    >
                        Clear Filter
                    </JqxButton>
                </div>
            </div>
            <JqxDataTable
                theme={'material-purple'}
                ref={myDataTable}
                style={{ marginTop: '10px', marginLeft: '20px' }}
                // @ts-ignore
                width={'100%'}
                source={state.source}
                columns={state.columns}
                pageable={true}
                altRows={true}
                pagerButtonsCount={4}
            />
        </div>
    );
};

export default App;
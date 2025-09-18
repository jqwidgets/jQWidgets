import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import './App.css';
import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);
    const myPanel = useRef<JqxPanel>(null);
    const flag = useRef<boolean>(false);

    const source: any = React.useMemo(() => ({
        datafields: [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'date', type: 'date' },
            { name: 'quantity', type: 'number' }
        ],
        datatype: 'array',
        localdata: generatedata(500, false)
    }), []);

    const columns = React.useMemo(() => [
        { text: 'First Name', datafield: 'firstname', width: 200 },
        { text: 'Last Name', datafield: 'lastname', width: 200 },
        { text: 'Product', datafield: 'productname', width: 180 },
        { text: 'Order Date', datafield: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
        { text: 'Quantity', datafield: 'quantity', cellsalign: 'right' }
    ], []);

    const addfilter = useCallback((): void => {
        if (!myGrid.current) return;
        const filtergroup = new jqx.filter();
        const filterOrOperator = 1;
        let filtervalue = 'Beate';
        let filtercondition = 'contains';
        const filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtervalue = 'Andrew';
        filtercondition = 'contains';
        const filter2 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtergroup.addfilter(filterOrOperator, filter1);
        filtergroup.addfilter(filterOrOperator, filter2);
        myGrid.current.addfilter('firstname', filtergroup);
        myGrid.current.applyfilters();
    }, []);

    const updatefilterconditions = useCallback((type: string, defaultconditions: any): string[] => {
        const stringcomparisonoperators = ['CONTAINS', 'DOES_NOT_CONTAIN'];
        const numericcomparisonoperators = ['LESS_THAN', 'GREATER_THAN'];
        const datecomparisonoperators = ['LESS_THAN', 'GREATER_THAN'];
        const booleancomparisonoperators = ['EQUAL', 'NOT_EQUAL'];
        switch (type) {
            case 'stringfilter':
                return stringcomparisonoperators;
            case 'numericfilter':
                return numericcomparisonoperators;
            case 'datefilter':
                return datecomparisonoperators;
            case 'booleanfilter':
                return booleancomparisonoperators;
            default:
                return [];
        }
    }, []);

    const updatefilterpanel = useCallback((filtertypedropdown1: any, filtertypedropdown2: any, filteroperatordropdown: any, filterinputfield1: any,
        filterinputfield2: any, filterbutton: any, clearbutton: any, columnfilter: any, filtertype: any, filterconditions: any): void => {
        let index1 = 0;
        let index2 = 0;
        if (columnfilter != null) {
            const filter1 = columnfilter.getfilterat(0);
            const filter2 = columnfilter.getfilterat(1);
            if (filter1) {
                index1 = filterconditions.indexOf(filter1.comparisonoperator);
                const value1 = filter1.filtervalue;
                filterinputfield1.val(value1);
            }
            if (filter2) {
                index2 = filterconditions.indexOf(filter2.comparisonoperator);
                const value2 = filter2.filtervalue;
                filterinputfield2.val(value2);
            }
        }
        filtertypedropdown1.jqxDropDownList({ autoDropDownHeight: true, selectedIndex: index1 });
        filtertypedropdown2.jqxDropDownList({ autoDropDownHeight: true, selectedIndex: index2 });
    }, []);

    const ready = useCallback((): void => {
        setTimeout(() => {
            addfilter();
            const localizationObject = {
                filterbooleancomparisonoperators: ['equal', 'not equal'],
                filterdatecomparisonoperators: ['less than', 'greater than'],
                filternumericcomparisonoperators: ['less than', 'greater than'],
                filterstringcomparisonoperators: ['contains', 'does not contain']
            };
            if (myGrid.current) myGrid.current.setOptions({ localization: localizationObject });
        });
    }, [addfilter]);

    const [gridProps] = useState<IGridProps>({
        source: new jqx.dataAdapter(source),
        columns,
        ready,
        updatefilterconditions,
        updatefilterpanel
    });

    const myGridOnFilter = useCallback((event: any): void => {
        if (flag.current) {
            if (myPanel.current) myPanel.current.clearcontent();
            const filterinfo = myGrid.current!.getfilterinformation();
            for (const info of filterinfo) {
                const eventData = 'Filter Column: ' + info.filtercolumntext;
                if (myPanel.current) myPanel.current.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
            }
        }
        flag.current = true;
    }, []);

    const clearFilteringBtnOnClick = useCallback((): void => {
        if (myGrid.current) myGrid.current.clearfilters();
    }, []);

    const [filterBackgroundChecked, setFilterBackgroundChecked] = useState(true);

    const filterBackgroundOnChange = useCallback((event: any): void => {
        setFilterBackgroundChecked(event.args.checked);
        if (myGrid.current) myGrid.current.setOptions({ showfiltercolumnbackground: event.args.checked });
    }, []);

    const filterIconsOnChange = useCallback((event: any): void => {
        if (myGrid.current) myGrid.current.setOptions({ autoshowfiltericon: !event.args.checked });
    }, []);

    return (
        <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
            <JqxGrid
                theme={'material-purple'}
                ref={myGrid}
                onFilter={myGridOnFilter}
                // @ts-ignore
                width={'100%'}
                source={gridProps.source}
                columns={gridProps.columns}
                ready={gridProps.ready}
                sortable={true}
                filterable={true}
                autoshowfiltericon={true}
                updatefilterconditions={gridProps.updatefilterconditions}
                updatefilterpanel={gridProps.updatefilterpanel}
            />
            <div style={{ marginTop: '30px' }}>
                <div style={{ width: '200px', float: 'left', marginRight: '10px' }}>
                    <JqxButton theme={'material-purple'} onClick={clearFilteringBtnOnClick} width={100} height={20}>Remove Filter</JqxButton>
                    <JqxCheckBox theme={'material-purple'} onChange={filterBackgroundOnChange} height={25} checked={filterBackgroundChecked}>Filter Background</JqxCheckBox>
                    <JqxCheckBox theme={'material-purple'} onChange={filterIconsOnChange} height={25}> Show All Filter Icons</JqxCheckBox>
                </div>
                <div style={{ float: 'left' }}>
                    Event Log:
                    <JqxPanel theme={'material-purple'} ref={myPanel} width={300} height={80} />
                </div>
            </div>
        </div>
    );
};

export default App;
import * as React from 'react';
import { useMemo } from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const source = useMemo(() => ({
        datafields: [
            { name: 'Name', type: 'string' },
            { name: 'Berlin', type: 'string' },
            { name: 'Boston', type: 'string' },
            { name: 'London', type: 'string' }
        ],
        datatype: 'array',
        localdata: [
            { 'Name': 'Population', 'Berlin': '3560154', 'Boston': '3406829', 'London': '8174100' },
            { 'Name': 'Country', 'Berlin': 'Germany', 'Boston': 'United States', 'London': 'United Kingdom' },
            { 'Name': 'Capital', 'Berlin': 'true', 'Boston': 'false', 'London': 'true' }
        ],
        updaterow: (rowid: any, rowdata: any, commit: any) => {
            commit(true);
        },
    }), []);

    const createGridEditor = (row: number, cellValue: any, editor: any, cellText: any, width: any, height: any): void => {
        if (row === 0) {
            editor.jqxNumberInput({ decimalDigits: 0, inputMode: 'simple', width, height, spinButtons: true });
        } else if (row === 1) {
            editor.jqxDropDownList({ autoDropDownHeight: true, width, height, source: ['United States', 'Germany', 'United Kingdom'] });
        } else if (row === 2) {
            const divElement = document.createElement('div');
            divElement.tabIndex = 0;
            divElement.style.cssText = 'position: absolute; top: 50%; left: 50%; margin-top: -7px; margin-left: -10px;';
            editor.append(divElement);
        }
    };

    const initGridEditor = (row: number, cellValue: any, editor: any, cellText: any, width: any, height: any): any => {
        if (row === 0) {
            editor.jqxNumberInput({ decimal: parseInt(cellValue, 10) });
        } else if (row === 1) {
            editor.jqxDropDownList('selectItem', cellValue);
        } else if (row === 2) {
            const checkBoxHTMLElement = editor.find('div:first');
            checkBoxHTMLElement.jqxCheckBox({ checked: cellValue.toString() === "true" });
        }
    };

    const gridEditorValue = (row: number, cellValue: any, editor: any): any => {
        if (row === 2) {
            const checkBoxHTMLElement = editor.find('div:first');
            return checkBoxHTMLElement.val();
        }
        return editor.val();
    };

    const columns = useMemo<IGridProps['columns']>(() => [
        { text: 'Name', pinned: true, editable: false, datafield: 'Name', width: 150 },
        {
            columntype: 'custom',
            createeditor: createGridEditor,
            datafield: 'Boston',
            geteditorvalue: gridEditorValue,
            initeditor: initGridEditor,
            text: 'Boston',
            width: 150,
        },
        {
            columntype: 'custom',
            createeditor: createGridEditor,
            datafield: 'Berlin',
            geteditorvalue: gridEditorValue,
            initeditor: initGridEditor,
            text: 'Berlin',
            width: 150,
        },
        {
            columntype: 'custom',
            createeditor: createGridEditor,
            datafield: 'London',
            geteditorvalue: gridEditorValue,
            initeditor: initGridEditor,
            text: 'London'
        }
    ], []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxGrid
            theme="material-purple"
            width={600}
            source={dataAdapter}
            columns={columns}
            autoheight={true}
            editable={true}
            selectionmode="singlecell"
        />
    );
};

export default App;
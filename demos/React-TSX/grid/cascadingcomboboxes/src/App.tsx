import * as React from 'react';
import { useRef, useMemo } from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

function App() {
    const myGrid = useRef<JqxGrid>(null);

    const data = '[{ "Country": "Belgium", "City": "Brussels"}, {"Country": "France", "City": "Paris"}, {"Country": "USA", "City": "Washington" }]';

    const source = useMemo(() => ({
        datafields: [
            { name: 'Country', type: 'string' },
            { name: 'City', type: 'string' }
        ],
        datatype: 'json',
        localdata: data
    }), []);

    const columns = useMemo<IGridProps['columns']>(() => [
        {
            cellvaluechanging: (row: number, datafield: string, columntype: any, oldvalue: any, newvalue: any): void => {
                if (newvalue !== oldvalue) {
                    myGrid.current!.setcellvalue(row, 'City', 'Select a city...');
                }
            },
            columntype: 'combobox',
            datafield: 'Country',
            text: 'Country',
            width: 150
        },
        {
            columntype: 'combobox',
            datafield: 'City',
            initeditor: (row: number, cellvalue: any, editor: any, celltext: any, cellwidth: any, cellheight: any) => {
                const country = myGrid.current!.getcellvalue(row, 'Country');
                const city = editor.val();
                let cities: string[] = [];
                switch (country) {
                    case 'Belgium':
                        cities = ['Bruges', 'Brussels', 'Ghent'];
                        break;
                    case 'France':
                        cities = ['Bordeaux', 'Lille', 'Paris'];
                        break;
                    case 'USA':
                        cities = ['Los Angeles', 'Minneapolis', 'Washington'];
                        break;
                }
                editor.jqxComboBox({ autoDropDownHeight: true, source: cities });
                if (city !== 'Select a city...') {
                    const index = cities.indexOf(city);
                    editor.jqxComboBox('selectIndex', index);
                }
            },
            text: 'City',
            width: 150
        }
    ], []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxGrid
            theme={'material-purple'}
            ref={myGrid}
            width={300}
            source={dataAdapter}
            columns={columns}
            autoheight={true}
            editable={true}
            selectionmode={'singlecell'}
        />
    );
}

export default App;
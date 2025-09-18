import * as React from 'react';
import { useMemo } from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

function App() {
    const columns = useMemo<IGridProps['columns']>(() => [
        { text: 'Country Name', datafield: 'countryName', width: 200 },
        { text: 'City', datafield: 'name', width: 170 },
        { text: 'Population', datafield: 'population', cellsformat: 'f', width: 170 },
        { text: 'Continent Code', datafield: 'continentCode', minwidth: 110 }
    ], []);

    const source = useMemo(() => {
        const src: any = {
            datafields: [
                { name: 'countryName', type: 'string' },
                { name: 'name', type: 'string' },
                { name: 'population', type: 'float' },
                { name: 'continentCode', type: 'string' }
            ],
            datatype: 'jsonp',
            url: 'http://api.geonames.org/searchJSON'
        };
        return new jqx.dataAdapter(src, {
            formatData: (data: any): any => {
                data.featureClass = 'P';
                data.style = 'full';
                data.maxRows = 50;
                data.username = 'jqwidgets';
                return data;
            }
        });
    }, []);

    return (
        <JqxGrid
            theme="material-purple"
            width="100%"
            source={source}
            columns={columns}
            columnsresize={true}
        />
    );
}

export default App;
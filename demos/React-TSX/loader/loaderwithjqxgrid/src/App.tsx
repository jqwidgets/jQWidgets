import * as React from 'react';
import { useRef, useMemo } from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxLoader from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxloader';

const App = () => {
    const myLoader = useRef<JqxLoader>(null);

    const columns = useMemo<IGridProps['columns']>(() => [
        { text: 'Country Name', datafield: 'countryName', width: 200 },
        { text: 'City', datafield: 'name', width: 170 },
        { text: 'Population', datafield: 'population', cellsformat: 'f', width: 170 },
        { text: 'Continent Code', datafield: 'continentCode', minwidth: 110 }
    ], []);

    const source = useMemo(() => ({
        datafields: [
            { name: 'countryName', type: 'string' },
            { name: 'name', type: 'string' },
            { name: 'population', type: 'float' },
            { name: 'continentCode', type: 'string' }
        ],
        datatype: 'jsonp',
        url: 'http://api.geonames.org/searchJSON'
    }), []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source, {
        formatData: (data: any): any => {
            (Object as any).assign(data, {
                featureClass: "P",
                maxRows: 50,
                style: "full",
                username: "jqwidgets"
            });
            return data;
        },
        loadComplete: (): void => {
            myLoader.current && myLoader.current.close();
        },
        loadError: (_xhr: any, _status: any, error: any): void => { alert(error); }
    }), [source]);

    return (
        <div>
            <JqxLoader
                theme="material-purple"
                ref={myLoader}
                width={100}
                height={60}
                imagePosition="top"
                autoOpen={true}
            />
            <JqxGrid
                theme="material-purple"
                // @ts-ignore
                width="100%"
                height={400}
                source={dataAdapter}
                columnsresize={true}
                showdefaultloadelement={false}
                autoshowloadelement={false}
                columns={columns}
            />
        </div>
    );
};

export default App;
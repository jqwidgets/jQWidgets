import * as React from 'react';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

const App = () => {
    const source = React.useMemo(() => ({
        dataFields: [
            { name: 'countryName', type: 'string' },
            { name: 'name', type: 'string' },
            { name: 'population', type: 'float' },
            { name: 'continentCode', type: 'string' }
        ],
        dataType: 'jsonp',
        url: 'http://api.geonames.org/searchJSON'
    }), []);

    const columns = React.useMemo(() => [
        { text: 'Country Name', dataField: 'countryName', width: 200 },
        { text: 'City', dataField: 'name', width: 250 },
        { text: 'Population', dataField: 'population', cellsFormat: 'f', width: 250 },
        { text: 'Continent Code', dataField: 'continentCode' }
    ], []);

    const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source, {
        formatData(data: any): any {
            data.featureClass = 'P';
            data.style = 'full';
            data.username = 'jqwidgets';
            data.maxRows = 50;
            return data;
        }
    }), [source]);

    return (
        <JqxDataTable
            theme="material-purple"
            width="100%"
            source={dataAdapter}
            columns={columns}
            pageable={true}
            columnsResize={true}
            pagerButtonsCount={10}
        />
    );
};

export default App;
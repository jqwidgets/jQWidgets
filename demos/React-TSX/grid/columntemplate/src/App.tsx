import * as React from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const source = React.useMemo(() => ({
        datafields: [
            { name: 'title', type: 'string' },
            { name: 'link', type: 'string' },
            { name: 'pubDate', type: 'date' },
            { name: 'creator', map: 'dc\\:creator', type: 'string' }
        ],
        datatype: 'xml',
        record: 'item',
        root: 'channel',
        url: 'feed.xml'
    }), []);

    const linkrenderer = React.useCallback((row: number, column: any, value: any) => {
        if (value.indexOf('#') !== -1) {
            value = value.substring(0, value.indexOf('#'));
        }
        const format = { target: '"_blank"' };
        return jqx.dataFormat.formatlink(value, format);
    }, []);

    const columns = React.useMemo(() => [
        { text: 'Link', datafield: 'link', width: 550, cellsrenderer: linkrenderer },
        { text: 'Title', datafield: 'title', width: 200 },
        { text: 'Publish Date', datafield: 'pubDate', width: 250, cellsformat: 'D' },
        { text: 'Creator', datafield: 'creator', width: 200 }
    ], [linkrenderer]);

    const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxGrid
            theme={'material-purple'}
            // @ts-ignore
            width={'100%'}
            source={dataAdapter}
            columns={columns}
            pageable={true}
            autorowheight={true}
        />
    );
};

export default App;
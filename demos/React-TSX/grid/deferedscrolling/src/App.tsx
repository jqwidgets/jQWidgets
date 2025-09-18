import * as React from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

function App() {
    const products = [
        {
            label: 'Retro Rock T-shirt',
            pic: 'black-retro-rock-band-guitar-controller.png',
            price: 15
        },
        {
            label: 'Lucky T-shirt',
            pic: 'bright-green-gettin-lucky-in-kentucky.png',
            price: 18
        },
        {
            label: 'Loading T-shirt',
            pic: 'brown-loading-bar-computer-geek.png',
            price: 25
        },
        {
            label: 'Cool Story T-shirt',
            pic: 'cool-story-bro.png',
            price: 20
        },
        {
            label: 'The beard T-shirt',
            pic: 'fear-the-beard.png',
            price: 17
        },
        {
            label: "Don't care T-shirt",
            pic: 'honey-badger-don-t-care.png',
            price: 19
        },
        {
            label: 'Guitar T-shirt',
            pic: 'scott-pilgrim-red-rock-band.png',
            price: 24
        },
        {
            label: 'Dodgers T-shirt',
            pic: '2-sided-dodgers-bankrupt-t-shirt-ash.png',
            price: 21
        },
        {
            label: 'Misfits T-shirt',
            pic: 'misfits-sf-giants-white.png',
            price: 21
        }
    ];

    const source = React.useMemo(() => ({
        datafields: [
            { name: 'label', type: 'string' },
            { name: 'pic', type: 'string' },
            { name: 'price', type: 'number' }
        ],
        datatype: 'array',
        localdata: products
    }), [products]);

    const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source), [source]);

    const columns = React.useMemo(() => [
        {                  
            cellsrenderer: (row: number, column: any, value: any): string => (
                '<img src="https://www.jqwidgets.com/react/images/t-shirts/' + value + '"/>'
            ),
            datafield: 'pic',
            text: 'Image',
            width: 115
        },
        { text: 'Title', datafield: 'label', width: 250 },
        { text: 'Price', cellsformat: 'c2', datafield: 'price' }
    ], []);

    const scrollfeedback = React.useCallback((row: any): string => (
        '<table style="height: 150px;"><tr><td><img src="https://www.jqwidgets.com/react/images/t-shirts/' + row.pic + '"/></td></tr><tr><td>' + row.label + '</td></tr></table>'
    ), []);

    return (
        <JqxGrid
            theme="material-purple"
            width={600}
            height={380}
            source={dataAdapter}
            columns={columns}
            altrows={true}
            sortable={true}
            rowsheight={115}
            scrollmode="deferred"
            scrollfeedback={scrollfeedback}
        />
    );
}

export default App;
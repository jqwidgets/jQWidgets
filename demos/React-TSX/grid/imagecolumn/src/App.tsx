import * as React from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const generateData = (): any[] => [
    { Image: 'avatar.png', Title: 'Avatar', Year: 2009 },
    { Image: 'priest.png', Title: 'Priest', Year: 2006 },
    { Image: 'endgame.png', Title: 'End Game', Year: 2006 },
    { Image: 'unknown.png', Title: 'Unknown', Year: 2011 },
    { Image: 'unstoppable.png', Title: 'Unstoppable', Year: 2010 },
    { Image: 'twilight.png', Title: 'Twilight', Year: 2008 },
    { Image: 'kungfupanda.png', Title: 'Kung Fu Panda', Year: 2008 },
    { Image: 'knockout.png', Title: 'Knockout', Year: 2011 },
    { Image: 'theplane.png', Title: 'The Plane', Year: 2010 },
    { Image: 'bigdaddy.png', Title: 'Big Daddy', Year: 1999 }
];

const imagerenderer = (row: number, datafield: string, value: string): string =>
    '<img style="margin-left: 5px;" height="60" width="50" src="https://www.jqwidgets.com/react/images/' + value + '"/>';

const App = () => {
    const columns = React.useMemo(
        () => [
            { text: 'Image', datafield: 'Image', width: 60, cellsrenderer: imagerenderer },
            { text: 'Title', datafield: 'Title', width: 200 },
            { text: 'Year', datafield: 'Year' }
        ],
        []
    );

    const source = React.useMemo(
        () =>
            new jqx.dataAdapter({
                datatype: 'array',
                localdata: generateData()
            }),
        []
    );

    return (
        <JqxGrid theme="material-purple" width={400} source={source} columns={columns} rowsheight={60} />
    );
};

export default App;
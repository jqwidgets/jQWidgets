import React, { useRef, useEffect, useState } from 'react';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);
    const [source, setSource] = useState<any>(null);

    useEffect(() => {
        const sourceObj: any = {
            datatype: 'json',
            url: 'rows_and_columns.txt'
        };

        const dataAdapter = new jqx.dataAdapter(sourceObj, {
            autoBind: true,
            downloadComplete: (data: any): void => {
                const columns = data[0].columns;
                const rows = data[1].rows;
                const gridAdapter = new jqx.dataAdapter({
                    datafields: [
                        { name: 'id', type: 'number' },
                        { name: 'name', type: 'string' },
                        { name: 'type', type: 'string' },
                        { name: 'calories', type: 'int' },
                        { name: 'totalfat', type: 'string' },
                        { name: 'protein', type: 'string' }
                    ],
                    id: 'id',
                    localdata: rows
                });

                if (myGrid.current) {
                    myGrid.current.hideloadelement();
                    myGrid.current.beginupdate();
                    myGrid.current.setOptions({ source: gridAdapter, columns });
                    myGrid.current.endupdate();
                }
            }
        });

        setSource(dataAdapter);
    }, []);

    return (
        <JqxGrid
            theme="material-purple"
            ref={myGrid}
            // @ts-ignore
            width="100%"
            columnsresize={true}
        />
    );
};

export default App;
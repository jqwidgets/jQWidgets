import * as React from 'react';
 


import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}> {

    private myGrid = React.createRef<JqxGrid>();

    constructor(props: {}) {
        super(props);

        const source: any = {
            datatype: 'json',
            url: 'rows_and_columns.txt'
        };

        const dataAdapter = new jqx.dataAdapter(source, {
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

                this.myGrid.current!.hideloadelement();
                this.myGrid.current!.beginupdate();
                this.myGrid.current!.setOptions({ source: gridAdapter, columns });
                this.myGrid.current!.endupdate();
            }
        });

        this.state = {
            source: dataAdapter
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'} ref={this.myGrid}
                // @ts-ignore
                width={'100%'} columnsresize={true} />
        );
    }
}

export default App;
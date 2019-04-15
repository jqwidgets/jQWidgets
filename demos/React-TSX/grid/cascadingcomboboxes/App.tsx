import * as React from 'react';
 


import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();

    constructor(props: {}) {
        super(props);

        const data: string = '[{ "Country": "Belgium", "City": "Brussels"}, {"Country": "France", "City": "Paris"}, {"Country": "USA", "City": "Washington" }]';

        const source: any =
        {
            datafields: [
                { name: 'Country', type: 'string' },
                { name: 'City', type: 'string' }
            ],
            datatype: 'json',
            localdata: data
        };

        this.state = {
            columns: [
                {
                    cellvaluechanging: (row: number, datafield: string, columntype: any, oldvalue: any, newvalue: any): void => {
                        if (newvalue !== oldvalue) {
                            this.myGrid.current!.setcellvalue(row, 'City', 'Select a city...');
                        };
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
                        const country = this.myGrid.current!.getcellvalue(row, 'Country');
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
                        };
                        editor.jqxComboBox({ autoDropDownHeight: true, source: cities });
                        if (city !== 'Select a city...') {
                            const index = cities.indexOf(city);
                            editor.jqxComboBox('selectIndex', index);
                        }
                    },
                    text: 'City',
                    width: 150
                }
            ],
            source: new jqx.dataAdapter(source) 
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'} ref={this.myGrid}
                width={300} source={this.state.source} columns={this.state.columns}
                autoheight={true} editable={true} selectionmode={'singlecell'} />
        );
    }
}

export default App;
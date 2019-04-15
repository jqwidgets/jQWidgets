import * as React from 'react';
 


import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxListBox, { IListBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

export interface IState extends IGridProps {
    listBoxSource: IListBoxProps['source'];
}

class App extends React.PureComponent<{}, IState> {

    private myGrid = React.createRef<JqxGrid>();

    constructor(props: {}) {
        super(props);
        this.myListBoxOnCheckChange = this.myListBoxOnCheckChange.bind(this);

        const source: any = {
            datafields: [
                { name: 'name' },
                { name: 'type' },
                { name: 'calories', type: 'int' },
                { name: 'totalfat' },
                { name: 'protein' }
            ],
            datatype: 'json',
            id: 'id',
            url: 'beverages.txt'
        };

        this.state = {
            columns: [
                { text: 'Name', datafield: 'name', width: 100, hidden: true },
                { text: 'Beverage Type', datafield: 'type' },
                { text: 'Calories', datafield: 'calories' },
                { text: 'Total Fat', datafield: 'totalfat' },
                { text: 'Protein', datafield: 'protein' }
            ],
            listBoxSource: [
                { label: 'Name', value: 'name', checked: false }, { label: 'Beverage Type', value: 'type', checked: true },
                { label: 'Calories', value: 'calories', checked: true }, { label: 'Total Fat', value: 'totalfat', checked: true },
                { label: 'Protein', value: 'protein', checked: true }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div>
                <JqxListBox theme={'material-purple'} style={{ float: 'left' }} onCheckChange={this.myListBoxOnCheckChange}
                    width={200} height={200} source={this.state.listBoxSource} checkboxes={true} />

                <JqxGrid theme={'material-purple'} ref={this.myGrid} style={{ float: 'left', marginLeft: '20px' }}
                    width={600} source={this.state.source} columns={this.state.columns} columnsresize={true} />
            </div>
        );
    }

    private myListBoxOnCheckChange(event: any): void {
        this.myGrid.current!.beginupdate();
        if (event.args.checked) {
            this.myGrid.current!.showcolumn(event.args.value);
        }
        else {
            this.myGrid.current!.hidecolumn(event.args.value);
        }
        this.myGrid.current!.endupdate();
    };
}

export default App;
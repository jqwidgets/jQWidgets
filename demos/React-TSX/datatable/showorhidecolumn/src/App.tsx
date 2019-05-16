import * as React from 'react';
 


import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxListBox, { IListBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

export interface IState extends IDataTableProps {
    listSource: IListBoxProps['source'];
}

class App extends React.PureComponent<{}, IState> {

    private myDataTable = React.createRef<JqxDataTable>();

    constructor(props: {}) {
        super(props);
        this.listBoxOnCheckChange = this.listBoxOnCheckChange.bind(this);

        const source: any = {
            dataFields: [
                { name: 'name' },
                { name: 'type' },
                { name: 'calories', type: 'int' },
                { name: 'totalfat' },
                { name: 'protein' }
            ],
            dataType: 'json',
            id: 'id',
            url: 'beverages.txt'
        }

        this.state = {
            columns: [
                { text: 'Name', dataField: 'name', width: 200 },
                { text: 'Beverage Type', dataField: 'type', width: 200 },
                { text: 'Calories', dataField: 'calories', width: 200 }
            ],
            listSource: [
                { label: 'Beverage Type', value: 'type', checked: true },
                { label: 'Calories', value: 'calories', checked: true }
            ],
            source: new jqx.dataAdapter(source)
        };
    }

    public render() {
        return (
            <div>
                <JqxListBox theme={'material-purple'} style={{ float: 'left' }} onCheckChange={this.listBoxOnCheckChange}
                    width={150} height={200} source={this.state.listSource} checkboxes={true} />

                <JqxDataTable theme={'material-purple'} ref={this.myDataTable} style={{ float: 'left', marginLeft: '20px' }}
                    source={this.state.source} columns={this.state.columns} pageable={true}
                    columnsResize={true} pagerButtonsCount={10} />
            </div>
        );
    }  

    private listBoxOnCheckChange(event: any): void {
        this.myDataTable.current!.beginUpdate();
        if (event.args.checked) {
            this.myDataTable.current!.showColumn(event.args.value);
        }
        else {
            this.myDataTable.current!.hideColumn(event.args.value);
        }
        this.myDataTable.current!.endUpdate();
    }
}

export default App;
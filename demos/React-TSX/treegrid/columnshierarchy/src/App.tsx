import * as React from 'react';
 


import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

class App extends React.PureComponent<{}, ITreeGridProps> {
  private myTreeGrid = React.createRef<JqxTreeGrid>();

  constructor(props: {}) {
    super(props);

    const data: any[] = [
      { "budget": "1230000", "children": [{ "id": "2", "name": "Finance Division", "budget": "423000", "location": "San Antonio", "children": [{ "id": "3", "name": "Accounting Department", "budget": "113000", "location": "San Antonio" }, { "id": "4", "name": "Investment Department", "budget": "310000", "location": "San Antonio", "children": [{ "id": "5", "name": "Banking Office", "budget": "240000", "location": "San Antonio" }, { "id": "6", "name": "Bonds Office", "budget": "70000", "location": "San Antonio" }] }] }, { "id": "7", "name": "Operations Division", "budget": "600000", "location": "Miami", "children": [{ "id": "8", "name": "Manufacturing Department", "budget": "300000", "location": "Miami" }, { "id": "9", "name": "Public Relations Department", "budget": "200000", "location": "Miami" }, { "id": "10", "name": "Sales Department", "budget": "100000", "location": "Miami" }] }, { "id": "11", "name": "Research Division", "budget": "200000", "location": "Boston" }], "id": "1", "location": "Las Vegas", "name": "Corporate Headquarters" }
    ];

    const source: any = {
      dataFields: [
        { name: 'name', type: 'string' },
        { name: 'budget', type: 'number' },
        { name: 'id', type: 'number' },
        { name: 'children', type: 'array' },
        { name: 'location', type: 'string' }
      ],
      dataType: 'json',
      hierarchy:
      {
        root: 'children'
      },
      id: 'id',
      localData: data
    };

    const dataAdapter: any = new jqx.dataAdapter(source);

    this.state = {
      columnGroups: [{ align: 'center', name: 'JSTCorp', text: 'JST Corp.' }],
      columns: [
        { align: 'center', columnGroup: 'JSTCorp', dataField: 'name', text: 'Name', width: 300 },
        { align: 'center', cellsAlign: 'center', cellsFormat: 'c2', columnGroup: 'JSTCorp', dataField: 'budget', text: 'Budget', width: 250 },
        { align: 'center', cellsAlign: 'center', columnGroup: 'JSTCorp', dataField: 'location', text: 'Location', width: 250 }
      ],
      ready: (): void => {
        setTimeout(() => {
          this.myTreeGrid.current!.expandRow(1);
          this.myTreeGrid.current!.expandRow(2);
        });
      },
      source: dataAdapter
    }
  }

  public render() {
    return (
      <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid}
        source={this.state.source}
        altRows={true}
        columnsResize={true}
        columns={this.state.columns}
        columnGroups={this.state.columnGroups}
        ready={this.state.ready}
      />
    );
  }
}

export default App;

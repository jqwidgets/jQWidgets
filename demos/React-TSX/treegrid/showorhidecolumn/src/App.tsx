import * as React from 'react';
 


import JqxListBox, { IListBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

export interface IState extends ITreeGridProps {
  listSource?: IListBoxProps["source"];
}

class App extends React.PureComponent<{}, IState> {
  private myTreeGrid = React.createRef<JqxTreeGrid>();

  constructor(props: {}) {
    super(props);

    this.checkChange = this.checkChange.bind(this);

    const data: any[] = [
      {
        'budget': '1230000',
        'children':
          [
            {
              'budget': '423000',
              'children':
                [
                  {
                    'budget': '113000',
                    'id': '3',
                    'location': 'San Antonio',
                    'name': 'Accounting Department'
                  },
                  {
                    'budget': '310000',
                    'children': [
                      { 'budget': '240000', 'id': '5', 'location': 'San Antonio', 'name': 'Banking Office' },
                      { 'budget': '70000', 'id': '6', 'location': 'San Antonio', 'name': 'Bonds Office' }
                    ],
                    'id': '4',
                    'location': 'San Antonio',
                    'name': 'Investment Department'
                  }
                ],
              'id': '2',
              'location': 'San Antonio',
              'name': 'Finance Division'
            },
            {
              'budget': '600000',
              'children':
                [
                  { 'budget': '300000', 'id': '8', 'location': 'Miami', 'name': 'Manufacturing Department' },
                  { 'budget': '200000', 'id': '9', 'location': 'Miami', 'name': 'Public Relations Department' },
                  { 'budget': '100000', 'id': '10', 'location': 'Miami', 'name': 'Sales Department' }
                ],
              'id': '7',
              'location': 'Miami',
              'name': 'Operations Division'

            },
            { 'budget': '200000', 'id': '11', 'location': 'Boston', 'name': 'Research Division' }
          ],
        'id': '1',
        'location': 'Las Vegas',
        'name': 'Corporate Headquarters'
      }
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
      columns: [
        { align: "center", dataField: 'name', text: 'Name', width: 240 },
        { align: "center", cellsAlign: "center", cellsFormat: "c2", dataField: 'budget', text: 'Budget', width: 200 },
        { align: "center", cellsAlign: "center", dataField: 'location', text: 'Location', hidden: true, width: 200 }
      ],
      listSource: [{ label: 'Budget', value: 'budget', checked: true }, { label: 'Location', value: 'location', checked: false }],
      ready: (): void => {
        setTimeout(() => {
          this.myTreeGrid.current!.expandRow(1);
          this.myTreeGrid.current!.expandRow(2);
        }, 0);
      },
      source: dataAdapter
    }
  }

  public render() {
    return (
      <div>
        <JqxListBox theme={'material-purple'} style={{ float: 'left' }}
          onCheckChange={this.checkChange}
          source={this.state.listSource}
          width={120}
          height={200}
          checkboxes={true}
        />

        <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid} style={{ marginLeft: 20, float: 'left' }}
          source={this.state.source}
          altRows={true}
          columns={this.state.columns}
          ready={this.state.ready}
        />
      </div>
    );
  }

  // Event handling
  private checkChange(event: any): void {
    this.myTreeGrid.current!.beginUpdate();
    if (event.args.checked) {
      this.myTreeGrid.current!.showColumn(event.args.value);
    }
    else {
      this.myTreeGrid.current!.hideColumn(event.args.value);
    }
    this.myTreeGrid.current!.endUpdate();
  }
}

export default App;

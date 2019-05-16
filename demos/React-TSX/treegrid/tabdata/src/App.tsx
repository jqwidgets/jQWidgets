import * as React from 'react';
 


import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

class App extends React.PureComponent<{}, ITreeGridProps> {
  private myTreeGrid = React.createRef<JqxTreeGrid>();

  constructor(props: {}) {
    super(props);

    const source: any = {
      dataFields: [
        { name: "Id", type: "number" },
        { name: "Name", type: "string" },
        { name: "ParentID", type: "number" },
        { name: "Population", type: "number" }
      ],
      dataType: 'tab',
      hierarchy:
      {
        keyDataField: { name: 'Id' },
        parentDataField: { name: 'ParentID' }
      },
      id: 'EmployeeKey',
      url: 'locations.tsv'
    };

    const dataAdapter: any = new jqx.dataAdapter(source);

    this.state = {
      columns: [
        { align: 'center', dataField: 'Name', text: 'Location Name', width: '50%' },
        { align: 'center', dataField: 'Population', text: 'Population', width: '50%' }
      ],
      ready: (): void => {
          this.myTreeGrid.current!.expandRow(34);
      },
      source: dataAdapter
    }
  }

  public render() {
    return (
      <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid}
        // @ts-ignore
        width={'100%'}
        height={450}
        source={this.state.source}
        columns={this.state.columns}
        ready={this.state.ready}
      />
    );
  }
}

export default App;

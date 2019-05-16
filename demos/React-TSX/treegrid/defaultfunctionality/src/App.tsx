import * as React from 'react';
 


import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

class App extends React.PureComponent<{}, ITreeGridProps> {
  private myTreeGrid = React.createRef<JqxTreeGrid>();

  constructor(props: {}) {
    super(props);

    const source: any = {
      dataFields: [
        { name: 'EmployeeKey', type: 'number' },
        { name: 'ParentEmployeeKey', type: 'number' },
        { name: 'FirstName', type: 'string' },
        { name: 'LastName', type: 'string' },
        { name: 'Title', type: 'string' },
        { name: 'HireDate', type: 'date' },
        { name: 'BirthDate', type: 'date' },
        { name: 'Phone', type: 'string' },
        { name: 'Gender', type: 'string' },
        { name: 'DepartmentName', type: 'string' }
      ],
      dataType: "csv",
      hierarchy:
      {
        keyDataField: { name: 'EmployeeKey' },
        parentDataField: { name: 'ParentEmployeeKey' }
      },
      id: 'EmployeeKey',
      url: 'employeesadv.csv'
    };

    const dataAdapter: any = new jqx.dataAdapter(source);

    this.state = {
      columns: [
        { text: 'FirstName', dataField: 'FirstName', minWidth: 100, width: 200 },
        { text: 'LastName', dataField: 'LastName', width: 200 },
        { text: 'Department Name', dataField: 'DepartmentName', width: 150 },
        { text: 'Title', dataField: 'Title', width: 300 },
        { text: 'Birth Date', dataField: 'BirthDate', cellsFormat: 'd', width: 120 },
        { text: 'Hire Date', dataField: 'HireDate', cellsFormat: 'd', width: 120 },
        { text: 'Phone', dataField: 'Phone', cellsFormat: 'd', width: 120 }
      ],
      ready: (): void => {
        // expand row with 'EmployeeKey = 32'
        this.myTreeGrid.current!.expandRow(32);
      },
      source: dataAdapter
    }
  }

  public render() {
    return (
      <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid}
        // @ts-ignore
        width={'100%'} 
        height={'auto'}
        source={this.state.source}
        pageable={true}
        columns={this.state.columns}
        ready={this.state.ready}
      />
    );
  }
}

export default App;

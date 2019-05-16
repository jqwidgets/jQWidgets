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
      dataType: 'csv',
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
        { dataField: 'FirstName', text: 'FirstName', width: 200 },
        { dataField: 'LastName', text: 'LastName', width: 200 },
        { dataField: 'DepartmentName', text: 'Department Name', width: 200 },
        { dataField: 'Title', text: 'Title' }
      ],
      ready: (): void => {
          this.myTreeGrid.current!.expandRow(32);
          this.myTreeGrid.current!.expandRow(73);
      },
      source: dataAdapter
    }
  }

  public render() {
    return (
      <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid}
        // @ts-ignore
        width={'100%'}
        height={300}
        source={this.state.source}
        pageable={true}
        columnsResize={true}
        columns={this.state.columns}
        ready={this.state.ready}
      />
    );
  }
}

export default App;

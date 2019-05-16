import * as React from 'react';
 


import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

class App extends React.PureComponent<{}, ITreeGridProps> {
  private myTreeGrid = React.createRef<JqxTreeGrid>();

  constructor(props: {}) {
    super(props);

    const source: any = {
      dataFields: [
        { name: 'EmployeeID', type: 'number' },
        { name: 'ReportsTo', type: 'number' },
        { name: 'FirstName', type: 'string' },
        { name: 'LastName', type: 'string' },
        { name: 'City', type: 'string' },
        { name: 'Address', type: 'string' },
        { name: 'Title', type: 'string' },
        { name: 'HireDate', type: 'date' },
        { name: 'BirthDate', type: 'date' }
      ],
      dataType: 'xml',
      hierarchy:
      {
        keyDataField: { name: 'EmployeeID' },
        parentDataField: { name: 'ReportsTo' }
      },
      id: 'EmployeeID',
      record: 'Employee',
      root: 'Employees',
      url: 'employees.xml'
    };

    const dataAdapter: any = new jqx.dataAdapter(source);

    this.state = {
      columns: [
        { dataField: 'FirstName', text: 'FirstName', minWidth: 100, width: 200 },
        { dataField: 'LastName', text: 'LastName', width: 200 },
        { dataField: 'Title', text: 'Title', width: 300 },
        { dataField: 'Address', text: 'Address', width: 200 },
        { dataField: 'City', text: 'City', width: 150 },
        { cellsFormat: 'd', dataField: 'BirthDate', text: 'Birth Date', width: 120 },
        { cellsFormat: 'd', dataField: 'HireDate', text: 'Hire Date', width: 120 }
      ],
      ready: (): void => {
          this.myTreeGrid.current!.expandRow(2);
      },
      source: dataAdapter
    }
  }

  public render() {
    return (
      <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid}
        // @ts-ignore
        width={'100%'}
        source={this.state.source}
        columnsResize={true}
        columns={this.state.columns}
        ready={this.state.ready}
      />
    );
  }
}

export default App;

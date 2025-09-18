import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

const App = () => {
  const myTreeGrid = useRef<JqxTreeGrid>(null);

  const source: any = React.useMemo(() => ({
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
    hierarchy: {
      keyDataField: { name: 'EmployeeKey' },
      parentDataField: { name: 'ParentEmployeeKey' }
    },
    id: 'EmployeeKey',
    url: 'employeesadv.csv'
  }), []);

  const dataAdapter: any = React.useMemo(() => new jqx.dataAdapter(source), [source]);

  const columns: ITreeGridProps['columns'] = React.useMemo(() => [
    { dataField: 'FirstName', text: 'FirstName', width: 200 },
    { dataField: 'LastName', text: 'LastName', width: 200 },
    { dataField: 'DepartmentName', text: 'Department Name', width: 200 },
    { dataField: 'Title', text: 'Title' }
  ], []);

  const ready = useCallback((): void => {
    myTreeGrid.current?.expandRow(32);
    myTreeGrid.current?.expandRow(73);
  }, []);

  return (
    <JqxTreeGrid
      theme={'material-purple'}
      ref={myTreeGrid}
      width={'100%'}
      height={300}
      source={dataAdapter}
      pageable={true}
      columnsResize={true}
      columns={columns}
      ready={ready}
    />
  );
};

export default App;
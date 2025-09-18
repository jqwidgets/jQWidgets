import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

const App = () => {
  const myTreeGrid = useRef<JqxTreeGrid>(null);

  const source = useMemo(() => ({
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
    hierarchy: {
      keyDataField: { name: 'EmployeeKey' },
      parentDataField: { name: 'ParentEmployeeKey' }
    },
    id: 'EmployeeKey',
    url: 'employeesadv.csv'
  }), []);

  const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

  const columns = useMemo(() => [
    { text: 'FirstName', dataField: 'FirstName', minWidth: 100, width: 200 },
    { text: 'LastName', dataField: 'LastName', width: 200 },
    { text: 'Department Name', dataField: 'DepartmentName', width: 150 },
    { text: 'Title', dataField: 'Title', width: 300 },
    { text: 'Birth Date', dataField: 'BirthDate', cellsFormat: 'd', width: 120 },
    { text: 'Hire Date', dataField: 'HireDate', cellsFormat: 'd', width: 120 },
    { text: 'Phone', dataField: 'Phone', cellsFormat: 'd', width: 120 }
  ], []);

  const ready = useCallback(() => {
    myTreeGrid.current && myTreeGrid.current.expandRow(32);
  }, []);

  return (
    <JqxTreeGrid
      theme="material-purple"
      ref={myTreeGrid}
      width="100%"
      height="auto"
      source={dataAdapter}
      pageable={true}
      columns={columns}
      ready={ready}
    />
  );
};

export default App;
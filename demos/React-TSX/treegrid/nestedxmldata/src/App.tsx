import * as React from 'react';
import { useEffect, useRef, useMemo } from 'react';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

const App = () => {
  const myTreeGrid = useRef<JqxTreeGrid>(null);

  const source = useMemo(() => ({
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
    hierarchy: {
      record: 'Employee',
      root: 'Employees'
    },
    id: 'EmployeeID',
    record: 'Employee',
    root: 'Employees',
    url: 'employeesadv.xml'
  }), []);

  const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

  const columns = useMemo(() => [
    { dataField: 'FirstName', text: 'FirstName', minWidth: 100, width: 200 },
    { dataField: 'LastName', text: 'LastName', width: 200 },
    { dataField: 'Title', text: 'Title', width: 300 },
    { dataField: 'Address', text: 'Address', width: 200 },
    { dataField: 'City', text: 'City', width: 150 },
    { cellsFormat: 'd', dataField: 'BirthDate', text: 'Birth Date', width: 120 },
    { cellsFormat: 'd', dataField: 'HireDate', text: 'Hire Date', width: 120 }
  ], []);

  const ready = () => {
    myTreeGrid.current?.expandRow(2);
  };

  return (
    <JqxTreeGrid
      theme='material-purple'
      ref={myTreeGrid}
      width='100%'
      source={dataAdapter}
      columnsResize={true}
      columns={columns}
      ready={ready}
    />
  );
};

export default App;
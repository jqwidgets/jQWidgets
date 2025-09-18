import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
import JqxTreeGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

const App = () => {
  const myTreeGrid = useRef<JqxTreeGrid>(null);

  const source = useMemo(() => ({
    dataFields: [
      { name: "Id", type: "number" },
      { name: "Name", type: "string" },
      { name: "ParentID", type: "number" },
      { name: "Population", type: "number" }
    ],
    dataType: 'tab',
    hierarchy: {
      keyDataField: { name: 'Id' },
      parentDataField: { name: 'ParentID' }
    },
    id: 'EmployeeKey',
    url: 'locations.tsv'
  }), []);

  const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

  const columns = useMemo(() => [
    { align: 'center', dataField: 'Name', text: 'Location Name', width: '50%' },
    { align: 'center', dataField: 'Population', text: 'Population', width: '50%' }
  ], []);

  const ready = useCallback(() => {
    myTreeGrid.current?.expandRow(34);
  }, []);

  return (
    <JqxTreeGrid
      theme="material-purple"
      ref={myTreeGrid}
      // @ts-ignore
      width="100%"
      height={450}
      source={dataAdapter}
      columns={columns}
      ready={ready}
    />
  );
};

export default App;
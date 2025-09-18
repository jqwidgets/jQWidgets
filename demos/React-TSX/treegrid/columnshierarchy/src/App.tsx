import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

const App = () => {
  const myTreeGrid = useRef<JqxTreeGrid>(null);

  const data = useMemo(() => [
    { "budget": "1230000", "children": [{ "id": "2", "name": "Finance Division", "budget": "423000", "location": "San Antonio", "children": [{ "id": "3", "name": "Accounting Department", "budget": "113000", "location": "San Antonio" }, { "id": "4", "name": "Investment Department", "budget": "310000", "location": "San Antonio", "children": [{ "id": "5", "name": "Banking Office", "budget": "240000", "location": "San Antonio" }, { "id": "6", "name": "Bonds Office", "budget": "70000", "location": "San Antonio" }] }] }, { "id": "7", "name": "Operations Division", "budget": "600000", "location": "Miami", "children": [{ "id": "8", "name": "Manufacturing Department", "budget": "300000", "location": "Miami" }, { "id": "9", "name": "Public Relations Department", "budget": "200000", "location": "Miami" }, { "id": "10", "name": "Sales Department", "budget": "100000", "location": "Miami" }] }, { "id": "11", "name": "Research Division", "budget": "200000", "location": "Boston" }], "id": "1", "location": "Las Vegas", "name": "Corporate Headquarters" }
  ], []);

  const source = useMemo(() => ({
    dataFields: [
      { name: 'name', type: 'string' },
      { name: 'budget', type: 'number' },
      { name: 'id', type: 'number' },
      { name: 'children', type: 'array' },
      { name: 'location', type: 'string' }
    ],
    dataType: 'json',
    hierarchy: { root: 'children' },
    id: 'id',
    localData: data
  }), [data]);

  const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

  const columnGroups = useMemo(() => [
    { align: 'center', name: 'JSTCorp', text: 'JST Corp.' }
  ], []);

  const columns = useMemo(() => [
    { align: 'center', columnGroup: 'JSTCorp', dataField: 'name', text: 'Name', width: 300 },
    { align: 'center', cellsAlign: 'center', cellsFormat: 'c2', columnGroup: 'JSTCorp', dataField: 'budget', text: 'Budget', width: 250 },
    { align: 'center', cellsAlign: 'center', columnGroup: 'JSTCorp', dataField: 'location', text: 'Location', width: 250 }
  ], []);

  const ready = useCallback(() => {
    setTimeout(() => {
      myTreeGrid.current?.expandRow(1);
      myTreeGrid.current?.expandRow(2);
    });
  }, []);

  return (
    <JqxTreeGrid
      theme="material-purple"
      ref={myTreeGrid}
      source={dataAdapter}
      altRows={true}
      columnsResize={true}
      columns={columns}
      columnGroups={columnGroups}
      ready={ready}
    />
  );
};

export default App;
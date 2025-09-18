import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

const App = () => {
  const myTreeGrid = useRef<JqxTreeGrid>(null);

  const data = useMemo(() => [
    {
      'budget': '1230000',
      'children': [
        {
          'budget': '423000',
          'children': [
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
          'children': [
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
    hierarchy: {
      root: 'children'
    },
    id: 'id',
    localData: data
  }), [data]);

  const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

  const columns = useMemo<ITreeGridProps['columns']>(() => [
    { align: "center", dataField: 'name', text: 'Name', width: 350 },
    { align: "center", cellsAlign: "center", cellsFormat: "c2", dataField: 'budget', text: 'Budget', width: 300 },
    { align: "center", cellsAlign: "center", dataField: 'location', text: 'Location' }
  ], []);

  const ready = useCallback(() => {
    setTimeout(() => {
      myTreeGrid.current?.expandRow(1);
      myTreeGrid.current?.expandRow(2);
    }, 0);
  }, []);

  return (
    <JqxTreeGrid
      theme="material-purple"
      ref={myTreeGrid}
      width="100%"
      source={dataAdapter}
      altRows={true}
      checkboxes={true}
      columns={columns}
      ready={ready}
    />
  );
};

export default App;

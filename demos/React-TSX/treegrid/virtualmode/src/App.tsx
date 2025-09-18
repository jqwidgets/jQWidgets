import * as React from 'react';
import { useRef, useMemo } from 'react';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

function App() {
  const myTreeGrid = useRef<JqxTreeGrid>(null);

  const generateTasks = (rowsCounts?: number): any => {
    const rowsCount = !rowsCounts ? 1 + Math.floor(Math.random() * 5) : rowsCounts;
    const data = [];
    const generatekey = () => {
      const S4 = () => (((1 + Math.random()) * 0x10000) || 0).toString(16).substring(1);
      return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
    };
    for (let i = 0; i < rowsCount; i++) {
      const row: any = {};
      const tasks = ['Shopping', 'Housewares', 'Kitchen supplies', 'Groceries', 'Cleaning supplies', 'Office supplies', 'Remodeling', 'Paint bedroom', 'Paint wall', 'Fitness', 'Decorate living room', 'Fix lights', 'Fix front door', 'Clean kitchen'];
      const firstNames = ['Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'];
      const lastNames = ['Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'];
      row.id = generatekey();
      row.firstname = firstNames[Math.floor(Math.random() * firstNames.length)];
      row.lastname = lastNames[Math.floor(Math.random() * lastNames.length)];
      row.name = row.firstname + ' ' + row.lastname;
      const taskindex = Math.floor(Math.random() * tasks.length);
      row.task = tasks[taskindex];
      row.duration = 1 + Math.floor(Math.random() * 10);
      data.push(row);
    }
    return data;
  };

  const columns = useMemo(
    () => [
      { align: 'center', dataField: 'task', text: 'Task', width: 300 },
      { align: 'center', cellsAlign: 'center', dataField: 'name', text: 'Person Name', width: 300 },
      {
        aggregates: ['sum'],
        align: 'center',
        cellsAlign: 'center',
        cellsRenderer: (_row: number, _column: any, value: any) => {
          const hour = value > 1 ? ' hours' : ' hour';
          return value + hour;
        },
        dataField: 'duration',
        text: 'Duration'
      }
    ],
    []
  );

  const ready = React.useCallback((): void => {
    myTreeGrid.current?.expandRow(34);
  }, []);

  const virtualModeCreateRecords = React.useCallback((expandedRecord: any, done: any): void => {
    const source = {
      datafields: [
        { name: 'id', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'duration', type: 'number' },
        { name: 'task', type: 'number' }
      ],
      datatype: 'array',
      id: 'id',
      localdata: expandedRecord === null ? generateTasks(3000) : generateTasks()
    };
    const dataAdapter = new jqx.dataAdapter(source, {
      loadComplete: () => {
        done(dataAdapter.records);
      }
    });
    dataAdapter.dataBind();
  }, []);

  const virtualModeRecordCreating = React.useCallback((record: any) => {
    if (record.level === 2) {
      record.leaf = true;
    }
  }, []);

  return (
    <JqxTreeGrid
      theme="material-purple"
      ref={myTreeGrid}
      width="100%"
      virtualModeCreateRecords={virtualModeCreateRecords}
      virtualModeRecordCreating={virtualModeRecordCreating}
      columns={columns}
      altRows={true}
      pageable={true}
      ready={ready}
    />
  );
}

export default App;
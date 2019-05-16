import * as React from 'react';
 


import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

class App extends React.PureComponent<{}, ITreeGridProps> {
  private myTreeGrid = React.createRef<JqxTreeGrid>();

  constructor(props: {}) {
    super(props);

    const generateTasks = (rowsCounts?: number): any => {
      const rowsCount = !rowsCounts ? 1 + Math.floor(Math.random() * 5) : rowsCounts;
      const data = new Array();
      const generatekey = () => {
        const S4 = () => {
          return (((1 + Math.random()) * 0x10000) || 0).toString(16).substring(1);
        };
        return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
      };
      for (let i = 0; i < rowsCount; i++) {
        const row: any = {};
        const tasks = ['Shopping', 'Housewares', 'Kitchen supplies', 'Groceries', 'Cleaning supplies', 'Office supplies', 'Remodeling', 'Paint bedroom', 'Paint wall', 'Fitness', 'Decorate living room',
          'Fix lights', 'Fix front door', 'Clean kitchen'];
        const firstNames =
          [
            'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'
          ];
        const lastNames =
          [
            'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'
          ];
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

    this.state = {
      columns: [
        { align: 'center', dataField: 'task', text: 'Task', width: 300 },
        { align: 'center', cellsAlign: 'center', dataField: 'name', text: 'Person Name', width: 300 },
        {
          aggregates: ['sum'],
          align: 'center',
          cellsAlign: 'center',
          cellsRenderer: (row: number, column: any, value: any, rowData: any): string => {
            const hour = value > 1 ? ' hours' : ' hour';
            return value + hour;
          },
          dataField: 'duration',
          text: 'Duration'
        }
      ],
      ready: (): void => {
        this.myTreeGrid.current!.expandRow(34);
      },
      virtualModeCreateRecords: (expandedRecord: any, done: any): void => {
        // expandedrecord is equal to null when the  is initially called, because there is still no record to be expanded.
        // prepare the data
        const source =
        {
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
      },
      virtualModeRecordCreating(record: any): void {
        if (record.level === 2) {
          // by setting the record's leaf member to true, you will define the record as a leaf node.
          record.leaf = true;
        }
      }
    }
  }

  public render() {
    return (
      <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid}
        // @ts-ignore
        width={'100%'}
        virtualModeCreateRecords={this.state.virtualModeCreateRecords}
        virtualModeRecordCreating={this.state.virtualModeRecordCreating}
        columns={this.state.columns}
        altRows={true}
        pageable={true}
      />
    );
  }
}

export default App;

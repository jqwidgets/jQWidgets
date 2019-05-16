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
                { dataField: 'FirstName', minWidth: 100, text: 'FirstName', width: 200 },
                { dataField: 'LastName', text: 'LastName', width: 200 },
                { dataField: 'DepartmentName', text: 'Department Name', width: 150 },
                { dataField: 'Title', text: 'Title', width: 300 },
                { cellsFormat: 'd', dataField: 'BirthDate', text: 'Birth Date', width: 120 },
                { cellsFormat: 'd', dataField: 'HireDate', text: 'Hire Date', width: 120 },
                { cellsFormat: 'd', dataField: 'Phone', text: 'Phone', width: 120 }
            ],
            ready: (): void => {
                this.myTreeGrid.current!.expandRow(32);
                this.myTreeGrid.current!.expandRow(112);
            },
            source: dataAdapter
        }
    }

    public render() {
        return (
            <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid}
                // @ts-ignore
                width={'100%'}
                pageable={true}
                columnsResize={true}
                sortable={true}
                filterable={true}
                source={this.state.source}
                columns={this.state.columns}
                ready={this.state.ready}
            />
        );
    }
}

export default App;

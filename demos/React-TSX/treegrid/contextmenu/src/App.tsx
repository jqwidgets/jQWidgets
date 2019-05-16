import * as React from 'react';
 


import JqxMenu from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

class App extends React.PureComponent<{}, ITreeGridProps> {
    private myTreeGrid = React.createRef<JqxTreeGrid>();
    private myMenu = React.createRef<JqxMenu>();

    constructor(props: {}) {
        super(props);

        this.myTreeGridOnContextmenu = this.myTreeGridOnContextmenu.bind(this);
        this.myTreeGridOnRowClick = this.myTreeGridOnRowClick.bind(this);
        this.myMenuOnItemClick = this.myMenuOnItemClick.bind(this);

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
                { dataField: 'FirstName', minWidth: 100, text: 'FirstName', width: 180 },
                { dataField: 'LastName', text: 'LastName', width: 200 },
                { dataField: 'DepartmentName', text: 'Department Name', width: 200 },
                { dataField: 'Title', text: 'Title', width: 300 },
                { cellsFormat: 'd', dataField: 'BirthDate', text: 'Birth Date', width: 120 },
                { cellsFormat: 'd', dataField: 'HireDate', text: 'Hire Date', width: 120 },
                { dataField: 'Phone', text: 'Phone', width: 120 }
            ],
            ready: (): void => {
                // expand row with 'EmployeeKey = 32'
                this.myTreeGrid.current!.expandRow(32);
            },
            source: dataAdapter
        }
    }

    public render() {
        return (
            <div>
                <div onContextMenu={this.myTreeGridOnContextmenu}>
                    <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid}
                        onRowClick={this.myTreeGridOnRowClick}
                        // @ts-ignore
                        width={'100%'}
                        columnsResize={true}
                        source={this.state.source}
                        columns={this.state.columns}
                        ready={this.state.ready}
                    />
                </div>

                <JqxMenu theme={'material-purple'} ref={this.myMenu}
                    onItemclick={this.myMenuOnItemClick}
                    width={200}
                    height={58}
                    autoOpenPopup={false}
                    mode={'popup'}
                >
                    <ul>
                        <li>Edit Selected Row</li>
                        <li>Delete Selected Row</li>
                    </ul>
                </JqxMenu>
            </div>
        );
    }

    // Event handling
    private myTreeGridOnContextmenu(event: any): void {
        event.preventDefault();
    }

    private myTreeGridOnRowClick(event: any): void {
        const args = event.args;
        if (args.originalEvent.button === 2) {
            const scrollTop = window.scrollX;
            const scrollLeft = window.scrollY;
            this.myMenu.current!.open(parseInt(event.args.originalEvent.clientX, 10) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY, 10) + 5 + scrollTop);
            event.preventDefault();
        }
    }

    private myMenuOnItemClick(event: any): void {
        const args = event.args;
        const selection = this.myTreeGrid.current!.getSelection();
        const rowid = selection[0].uid;
        if (args.innerHTML === 'Edit Selected Row') {
            this.myTreeGrid.current!.beginRowEdit(rowid);
        } else {
            this.myTreeGrid.current!.deleteRow(rowid);
        }
    }
}

export default App;

import * as React from 'react';
 


import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();
    private eventLog = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.myGridOnCellSelect = this.myGridOnCellSelect.bind(this);
        this.myGridOnCellEndEdit = this.myGridOnCellEndEdit.bind(this);

        const employeesSource: any = {
            async: false,
            datafields: [
                { name: 'FirstName', type: 'string' },
                { name: 'LastName', type: 'string' }
            ],
            datatype: 'xml',
            id: 'EmployeeID',
            record: 'Employee',
            root: 'Employees',
            url: 'employees.xml'
        };

        const employeesAdapter: any = new jqx.dataAdapter(employeesSource, {
            autoBind: true,
            beforeLoadComplete: (records: any[]): any[] => {
                const data = [];
                // update the loaded records. Dynamically add EmployeeName and EmployeeID fields. 
                for (const record of records) {
                    const employee = record;
                    employee.EmployeeName = employee.FirstName + ' ' + employee.LastName;
                    employee.EmployeeID = employee.uid;
                    data.push(employee);
                }
                return data;
            }
        });

        const ordersSource: any = {
            datafields: [
                // name - determines the field's name.
                // value - the field's value in the data source.
                // values - specifies the field's values.
                // values.source - specifies the foreign source. The expected value is an array.
                // values.value - specifies the field's name in the foreign source. 
                // values.name - specifies the field's value in the foreign source. 
                // When the ordersAdapter is loaded, each record will have a field called 'EmployeeName'. The 'EmployeeName' for each record comes from the employeesAdapter where the record's 'EmployeeID' from orders.xml matches to the 'EmployeeID' from employees.xml. 
                { name: 'EmployeeName', value: 'EmployeeID', values: { source: employeesAdapter.records, value: 'EmployeeID', name: 'EmployeeName' } },
                { name: 'EmployeeID', map: 'm\\:properties>d\\:EmployeeID' },
                { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
                { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
                { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
                { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress' },
                { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
                { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
            ],
            datatype: 'xml',
            id: 'm\\:properties>d\\:OrderID',
            pager: (pagenum: any, pagesize: any, oldpagenum: any): void => {
                // callback called when a page or page size is changed.
            },
            record: 'content',
            root: 'entry',
            url: 'orders.xml'
        };

        this.state = {
            columns: [
                { text: 'Employee Name', datafield: 'EmployeeID', displayfield: 'EmployeeName', columntype: 'dropdownlist', width: 150 },
                { text: 'Ship City', datafield: 'ShipCity', width: 150 },
                { text: 'Ship Country', datafield: 'ShipCountry', width: 150 },
                { text: 'Ship Name', datafield: 'ShipName' }
            ],
            source: new jqx.dataAdapter(ordersSource)
        }
    }

    public render() {
        return (
            <div>
                <JqxGrid theme={'material-purple'} ref={this.myGrid}
                    onCellselect={this.myGridOnCellSelect} onCellendedit={this.myGridOnCellEndEdit}
                    // @ts-ignore
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    pageable={true} editable={true} autoheight={true} selectionmode={'singlecell'} />

                <div ref={this.eventLog} style={{ fontSize: '13px', fontFamily: 'Verdana', marginTop: '20px' }} />
            </div>
        );
    }

    private myGridOnCellSelect(event: any): void {
        const column = this.myGrid.current!.getcolumn(event.args.datafield);
        const value = this.myGrid.current!.getcellvalue(event.args.rowindex, column.datafield!);
        const displayValue = this.myGrid.current!.getcellvalue(event.args.rowindex, column.displayfield!);
        this.eventLog.current!.innerHTML = '<div>Selected Cell<br/>Row: ' + event.args.rowindex + ', Column: ' + column.text + ', Value: ' + value + ', Label: ' + displayValue + '</div>';
    };

    private myGridOnCellEndEdit(event: any): void {
        const column = this.myGrid.current!.getcolumn(event.args.datafield);
        const eventLog = this.eventLog.current!;

        if (column.displayfield !== column.datafield) {
            eventLog.innerHTML = '<div>Cell Edited:<br/>Index: ' + event.args.rowindex + ', Column: ' + column.text + '<br/>Value: ' + event.args.value.value + ', Label: ' + event.args.value.label
                + '<br/>Old Value: ' + event.args.oldvalue.value + ', Old Label: ' + event.args.oldvalue.label + '</div>';
        }
        else {
            eventLog.innerHTML = '<div>Cell Edited:<br/>Row: ' + event.args.rowindex + ', Column: ' + column.text + '<br/>Value: ' + event.args.value
                + '<br/>Old Value: ' + event.args.oldvalue + '</div>';
        }
    };
}

export default App;
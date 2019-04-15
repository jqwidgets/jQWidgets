import * as React from 'react';
 


import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    constructor(props: {}) {
        super(props);

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

        const ordersSource =
        {          
            datafields: [
                // name - determines the field's name.
                // values - specifies the field's values.
                // values.source - specifies the foreign source. The expected value is an array.
                // values.name - specifies the field's name in the foreign source. 
                // When the ordersAdapter is loaded, each record will have a field called 'EmployeeID'. The 'EmployeeID' for each record will come from the employeesAdapter where the record's 'EmployeeID' from orders.xml matches to the 'EmployeeID' from employees.xml. 
                { name: 'EmployeeID', map: 'm\\:properties>d\\:EmployeeID', values: { source: employeesAdapter.records, name: 'EmployeeName' } },
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
                { text: 'Employee Name', datafield: 'EmployeeID', width: 150 },
                { text: 'Ship City', datafield: 'ShipCity', width: 150 },
                { text: 'Ship Country', datafield: 'ShipCountry', width: 150 },
                { text: 'Ship Name', datafield: 'ShipName' }
            ],
            source: new jqx.dataAdapter(ordersSource)
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'} 
                // @ts-ignore
                width={'100%'} source={this.state.source} columns={this.state.columns}
                autoheight={true} pageable={true} selectionmode={'multiplecellsadvanced'} />
        );
    }
}

export default App;
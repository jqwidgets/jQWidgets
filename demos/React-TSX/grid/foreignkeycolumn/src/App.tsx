import * as React from 'react'
import { useMemo } from 'react'
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid'

function App() {
  const { columns, source } = useMemo(() => {
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
    }

    const employeesAdapter: any = new jqx.dataAdapter(employeesSource, {
      autoBind: true,
      beforeLoadComplete: (records: any[]): any[] => {
        const data = []
        for (const record of records) {
          const employee = record
          employee.EmployeeName = employee.FirstName + ' ' + employee.LastName
          employee.EmployeeID = employee.uid
          data.push(employee)
        }
        return data
      }
    })

    const ordersSource = {
      datafields: [
        {
          name: 'EmployeeID',
          map: 'm\\:properties>d\\:EmployeeID',
          values: { source: employeesAdapter.records, name: 'EmployeeName' }
        },
        { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
        { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
        { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
        { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress' },
        { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
        { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
      ],
      datatype: 'xml',
      id: 'm\\:properties>d\\:OrderID',
      pager: (pagenum: any, pagesize: any, oldpagenum: any): void => {},
      record: 'content',
      root: 'entry',
      url: 'orders.xml'
    }

    return {
      columns: [
        { text: 'Employee Name', datafield: 'EmployeeID', width: 150 },
        { text: 'Ship City', datafield: 'ShipCity', width: 150 },
        { text: 'Ship Country', datafield: 'ShipCountry', width: 150 },
        { text: 'Ship Name', datafield: 'ShipName' }
      ],
      source: new jqx.dataAdapter(ordersSource)
    }
  }, [])

  return (
    <JqxGrid
      theme="material-purple"
      width="100%"
      // @ts-ignore
      source={source}
      columns={columns}
      autoheight
      pageable
      selectionmode="multiplecellsadvanced"
    />
  )
}

export default App
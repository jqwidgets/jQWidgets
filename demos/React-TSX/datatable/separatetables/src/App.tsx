import * as React from 'react'
import { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable'

export interface IState extends IDataTableProps {
  detailsColumns: IDataTableProps['columns']
  detailsSource?: IDataTableProps['source']
}

const App = () => {
  const masterDataTable = useRef<JqxDataTable>(null)
  const detailsDataTable = useRef<JqxDataTable>(null)

  const employeesData = useMemo(() => {
    const source = {
      async: false,
      dataFields: [
        { name: 'EmployeeID', type: 'number' },
        { name: 'FirstName', type: 'string' },
        { name: 'LastName', type: 'string' },
        { name: 'Title', type: 'string' },
        { name: 'Address', type: 'string' },
        { name: 'City', type: 'string' }
      ],
      dataType: 'xml',
      id: 'EmployeeID',
      record: 'Employee',
      root: 'Employees',
      url: 'employees.xml'
    }

    const employeesAdapter = new jqx.dataAdapter(source, {
      autoBind: true,
      beforeLoadComplete: (records: any) => {
        for (const record of records) {
          record.EmployeeName = record.FirstName + ' ' + record.LastName
        }
        return records
      }
    })
    return employeesAdapter
  }, [])

  const ordersData = useMemo(() => {
    const ordersSource = {
      async: false,
      dataFields: [
        { name: 'EmployeeID', type: 'number' },
        { name: 'EmployeeName', value: 'EmployeeID', type: 'string', values: { source: employeesData.records, value: 'EmployeeID', name: 'EmployeeName' } },
        { name: 'ShipName', type: 'string' },
        { name: 'ShipAddress', type: 'string' },
        { name: 'ShipCity', type: 'string' },
        { name: 'ShipCountry', type: 'string' },
        { name: 'ShippedDate', type: 'date' }
      ],
      dataType: 'xml',
      record: 'Order',
      root: 'Orders',
      url: 'orderdetails.xml'
    }
    const ordersDataAdapter = new jqx.dataAdapter(ordersSource, { autoBind: true })
    const orders = ordersDataAdapter.records
    return orders
  }, [employeesData])

  const [state, setState] = useState<IState>({
    columns: [
      { text: 'First Name', dataField: 'FirstName', width: 250 },
      { text: 'Last Name', dataField: 'LastName', width: 250 },
      { text: 'Title', dataField: 'Title' }
    ],
    detailsColumns: [
      { text: 'Employee Name', dataField: 'EmployeeName', width: 300 },
      { text: 'Ship Name', dataField: 'ShipName', width: 300 },
      { text: 'Ship Address', dataField: 'ShipAddress', width: 300 },
      { text: 'Ship City', dataField: 'ShipCity', width: 150 },
      { text: 'Ship Country', dataField: 'ShipCountry', width: 150 },
      { text: 'Shipped Date', dataField: 'ShippedDate', cellsFormat: 'd', width: 200 }
    ],
    source: employeesData
  })

  const masterTableOnRowSelect = useCallback(
    (event: any) => {
      const key = event.args.key
      const filterGroup = new jqx.filter()
      const filterValue = key
      const filterCondition = 'equal'
      const filter = filterGroup.createfilter('stringfilter', filterValue, filterCondition)
      const ordersbyid = []
      for (const order of ordersData) {
        const result = filter.evaluate(order.EmployeeID)
        if (result) {
          ordersbyid.push(order)
        }
      }
      const detailsSource = {
        dataFields: [
          { name: 'EmployeeID', type: 'number' },
          { name: 'EmployeeName', type: 'string' },
          { name: 'ShipName', type: 'string' },
          { name: 'ShipAddress', type: 'string' },
          { name: 'ShipCity', type: 'string' },
          { name: 'ShipCountry', type: 'string' },
          { name: 'ShippedDate', type: 'date' }
        ],
        id: 'OrderID',
        localdata: ordersbyid
      }
      const detailsAdapter = new jqx.dataAdapter(detailsSource)
      detailsDataTable.current!.setOptions({ source: detailsAdapter })
    },
    [ordersData]
  )

  useEffect(() => {
    if (masterDataTable.current) {
      masterDataTable.current.selectRow(0)
    }
  }, [])

  return (
    <div>
      <h3>Employees</h3>
      <JqxDataTable
        theme="material-purple"
        ref={masterDataTable}
        onRowSelect={masterTableOnRowSelect}
        width="100%"
        source={state.source}
        columns={state.columns}
        pageable={true}
        sortable={true}
        pageSize={5}
      />
      <h3>Orders by Employee</h3>
      <JqxDataTable
        theme="material-purple"
        ref={detailsDataTable}
        width="100%"
        columns={state.detailsColumns}
        pageable={true}
        pageSize={5}
      />
    </div>
  )
}

export default App
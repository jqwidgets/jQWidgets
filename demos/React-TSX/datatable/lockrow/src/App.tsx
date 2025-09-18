import * as React from 'react';
import { useRef, useCallback, useMemo } from 'react';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

const App = () => {
  const myDataTable = useRef<JqxDataTable>(null);

  const source = useMemo(
    () => ({
      dataFields: [
        { name: 'OrderID', type: 'int' },
        { name: 'Freight', type: 'float' },
        { name: 'ShipName', type: 'string' },
        { name: 'ShipAddress', type: 'string' },
        { name: 'ShipCity', type: 'string' },
        { name: 'ShipCountry', type: 'string' },
        { name: 'ShippedDate', type: 'date' }
      ],
      dataType: 'xml',
      id: 'OrderID',
      record: 'Order',
      root: 'Orders',
      url: 'orderdetails.xml'
    }),
    []
  );

  const columns = useMemo<IDataTableProps['columns']>(
    () => [
      { text: 'Order ID', editable: false, dataField: 'OrderID', width: 250 },
      { text: 'Freight', dataField: 'Freight', cellsFormat: 'f2', cellsAlign: 'right', align: 'right', width: 250 },
      { text: 'Ship Country', dataField: 'ShipCountry', width: 150 },
      { text: 'Shipped Date', dataField: 'ShippedDate', cellsAlign: 'right', align: 'right', cellsFormat: 'dd/MM/yyyy' }
    ],
    []
  );

  const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

  const tableOnBindingComplete = useCallback(() => {
    if (myDataTable.current) {
      myDataTable.current.beginUpdate();
      myDataTable.current.lockRow(1);
      myDataTable.current.lockRow(3);
      myDataTable.current.lockRow(5);
      myDataTable.current.endUpdate();
    }
  }, []);

  return (
    <JqxDataTable
      theme="material-purple"
      ref={myDataTable}
      onBindingComplete={tableOnBindingComplete}
      width="100%"
      source={dataAdapter}
      columns={columns}
      pageable={true}
      editable={true}
      sortable={true}
      altRows={true}
      pagerButtonsCount={8}
    />
  );
};

export default App;
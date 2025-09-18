import * as React from 'react';
import { useRef, useCallback } from 'react';
import { generateordersdata } from './../public/generatedata';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxTreeGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

const dateSource = [
  'Short Date',
  'Long Date',
  'Long date, Short Time',
  'Long date, Long Time',
  'Month/Year',
  'Month/Day',
  'Custom'
];

const priceSource = [
  'n',
  'f1',
  'f2',
  'f3',
  'c1',
  'c2',
  'c3',
  'p',
  'p2',
  'p3'
];

const columnGroups = [{ align: 'center', name: 'JSTCorp', text: 'JST Corp.' }];

const columns = [
  { align: "center", dataField: "name", text: "Order Name", width: 220 },
  { align: "center", dataField: "customer", text: "Customer", width: 200 },
  { align: "center", cellsAlign: "right", cellsFormat: "c2", dataField: "price", text: "Price", width: 100 },
  { align: "center", cellsAlign: "right", cellsFormat: "d", dataField: "date", text: "Order Date" }
];

const source: any = {
  dataFields: [
    { name: 'name', type: 'string' },
    { name: 'quantity', type: 'number' },
    { name: 'id', type: 'number' },
    { name: 'parentid', type: 'number' },
    { name: 'price', type: 'number' },
    { name: 'date', type: 'date' },
    { name: 'customer', type: 'string' }
  ],
  dataType: 'array',
  hierarchy: {
    keyDataField: { name: 'id' },
    parentDataField: { name: 'parentid' }
  },
  id: 'id',
  localData: generateordersdata(200)
};

const dataAdapter: any = new jqx.dataAdapter(source);

function App() {
  const myTreeGrid = useRef<JqxTreeGrid>(null);

  const ready = useCallback(() => {
    setTimeout(() => {
      myTreeGrid.current?.expandRow(2);
    }, 0);
  }, []);

  const dateListOnChange = useCallback((event: any) => {
    const index = event.args.index;
    switch (index) {
      case 0:
        myTreeGrid.current?.setColumnProperty('date', 'cellsFormat', 'd');
        break;
      case 1:
        myTreeGrid.current?.setColumnProperty('date', 'cellsFormat', 'D');
        break;
      case 2:
        myTreeGrid.current?.setColumnProperty('date', 'cellsFormat', 'f');
        break;
      case 3:
        myTreeGrid.current?.setColumnProperty('date', 'cellsFormat', 'F');
        break;
      case 4:
        myTreeGrid.current?.setColumnProperty('date', 'cellsFormat', 'Y');
        break;
      case 5:
        myTreeGrid.current?.setColumnProperty('date', 'cellsFormat', 'M');
        break;
      case 6:
        myTreeGrid.current?.setColumnProperty('date', 'cellsFormat', 'yyyy-MM-dd HH:mm:ss');
        break;
    }
  }, []);

  const priceListOnChange = useCallback((event: any) => {
    const index = event.args.index;
    switch (index) {
      case 0:
        myTreeGrid.current?.setColumnProperty('price', 'cellsFormat', 'n');
        break;
      case 1:
        myTreeGrid.current?.setColumnProperty('price', 'cellsFormat', 'f1');
        break;
      case 2:
        myTreeGrid.current?.setColumnProperty('price', 'cellsFormat', 'f2');
        break;
      case 3:
        myTreeGrid.current?.setColumnProperty('price', 'cellsFormat', 'f3');
        break;
      case 4:
        myTreeGrid.current?.setColumnProperty('price', 'cellsFormat', 'c1');
        break;
      case 5:
        myTreeGrid.current?.setColumnProperty('price', 'cellsFormat', 'c2');
        break;
      case 6:
        myTreeGrid.current?.setColumnProperty('price', 'cellsFormat', 'c3');
        break;
      case 7:
        myTreeGrid.current?.setColumnProperty('price', 'cellsFormat', 'p');
        break;
      case 8:
        myTreeGrid.current?.setColumnProperty('price', 'cellsFormat', 'p2');
        break;
      case 9:
        myTreeGrid.current?.setColumnProperty('price', 'cellsFormat', 'p3');
        break;
    }
  }, []);

  const styleDivs: React.CSSProperties = {
    float: 'left',
    width: '300px'
  };

  return (
    <div>
      <JqxTreeGrid
        theme="material-purple"
        ref={myTreeGrid}
        // @ts-ignore
        width="100%"
        height={350}
        source={dataAdapter}
        columns={columns}
        altRows={true}
        columnsResize={true}
        columnGroups={columnGroups}
        ready={ready}
      />
      <div style={{ fontSize: '13px', fontFamily: 'Verdana', width: '600px', marginTop: '10px' }}>
        <div style={styleDivs}>
          <h4>Shipped Date</h4>
          <JqxDropDownList
            theme="material-purple"
            onChange={dateListOnChange}
            height={25}
            selectedIndex={0}
            autoDropDownHeight={true}
            source={dateSource}
          />
        </div>
        <div style={styleDivs}>
          <h4>Price</h4>
          <JqxDropDownList
            theme="material-purple"
            onChange={priceListOnChange}
            height={25}
            selectedIndex={5}
            autoDropDownHeight={true}
            source={priceSource}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
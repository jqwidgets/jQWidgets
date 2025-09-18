import * as React from 'react';
import { useRef, useCallback, useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxDropDownButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownbutton';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

function App() {
  const myDropDownButton = useRef<JqxDropDownButton>(null);
  const myGrid = useRef<JqxGrid>(null);

  const source = useMemo(
    () => ({
      datafields: [
        { name: 'firstname', type: 'string' },
        { name: 'lastname', type: 'string' },
        { name: 'productname', type: 'string' },
        { name: 'quantity', type: 'number' },
        { name: 'price', type: 'number' }
      ],
      datatype: 'array',
      localdata: generatedata(100, false)
    }),
    []
  );

  const columns = useMemo(
    () => [
      { text: 'First Name', columntype: 'textbox', datafield: 'firstname' },
      { text: 'Last Name', datafield: 'lastname', columntype: 'textbox' },
      { text: 'Product', columntype: 'dropdownlist', datafield: 'productname' },
      { text: 'Quantity', datafield: 'quantity', width: 70, cellsalign: 'right' },
      { text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
    ],
    []
  );

  const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

  const ready = useCallback(() => {
    setTimeout(() => {
      myGrid.current?.selectrow(0);
    });
  }, []);

  const myGridOnRowSelect = useCallback(
    (event: any) => {
      const args = event.args;
      const row = myGrid.current?.getrowdata(args.rowindex);
      if (row) {
        const dropDownContent =
          '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' +
          row.firstname +
          ' ' +
          row.lastname +
          '</div>';
        myDropDownButton.current?.setContent(dropDownContent);
      }
    },
    []
  );

  return (
    <JqxDropDownButton theme={'material-purple'} ref={myDropDownButton} width={150} height={25}>
      <JqxGrid
        theme={'material-purple'}
        ref={myGrid}
        onRowselect={myGridOnRowSelect}
        width={500}
        source={dataAdapter}
        columns={columns}
        ready={ready}
        pageable={true}
        columnsresize={true}
        autoheight={true}
      />
    </JqxDropDownButton>
  );
}

export default App;
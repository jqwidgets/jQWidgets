import * as React from 'react';
import { useRef, useState } from 'react';
import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

function App() {
  const myGrid = useRef<JqxGrid>(null);

  const [columns] = useState<IGridProps['columns']>([
    {
      columntype: 'textbox',
      datafield: 'name',
      filtertype: 'input',
      initeverpresentrowwidget: (datafield: string, htmlElement: any): void => {
        const input = htmlElement.find('input');
        input.attr('readonly', true);
        input.attr('disabled', true);
        htmlElement.addClass('jqx-fill-state-disabled');
      },
      text: 'Name',
      width: 215,
    },
    { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220 },
    { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
    { text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right' },
  ]);

  const [source] = useState(
    new jqx.dataAdapter({
      datafields: [
        { name: 'name', type: 'string' },
        { name: 'productname', type: 'string' },
        { name: 'available', type: 'bool' },
        { name: 'date', type: 'date' },
        { name: 'quantity', type: 'number' },
      ],
      datatype: 'array',
      localdata: generatedata(10, false),
    })
  );

  const topBtnOnChecked = () => {
    myGrid.current!.setOptions({ everpresentrowactions: 'add reset' });
  };

  const bottomBtnOnChecked = () => {
    myGrid.current!.setOptions({ everpresentrowactions: 'addBottom reset' });
  };

  return (
    <div>
      <JqxGrid
        theme="material-purple"
        ref={myGrid}
        width="100%"
        source={source}
        columns={columns}
        filterable
        showeverpresentrow
        editable
        everpresentrowposition="top"
        selectionmode="multiplecellsadvanced"
      />
      <br />
      <JqxRadioButton theme="material-purple" onChecked={topBtnOnChecked} checked>
        Add New Row to Top
      </JqxRadioButton>
      <JqxRadioButton theme="material-purple" onChecked={bottomBtnOnChecked}>
        Add New Row to Bottom
      </JqxRadioButton>
    </div>
  );
}

export default App;
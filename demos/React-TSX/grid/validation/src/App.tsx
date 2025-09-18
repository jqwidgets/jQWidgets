import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

const App = () => {
  const myGrid = useRef<JqxGrid>(null);

  const source: any = {
    datafields: [
      { name: 'name', type: 'string' },
      { name: 'productname', type: 'string' },
      { name: 'available', type: 'bool' },
      { name: 'date', type: 'date' },
      { name: 'quantity', type: 'number' }
    ],
    datatype: 'array',
    localdata: generatedata(10, false)
  };

  const validateFunc = useCallback((datafield: string, value: any) => {
    switch (datafield) {
      case 'name':
        if (value.length < 5) {
          return { message: 'Entered value should be more than 5 characters', result: false };
        }
        return true;
      case 'productname':
        if (value.length === 0) {
          return { message: 'Entered field should be more than 0 characters', result: false };
        }
        return true;
      case 'quantity':
        if (value < 0) {
          return { message: 'Entered quantity should be positive number', result: false };
        }
        return true;
      case 'date':
        if ((new Date(value).toString()) === 'Invalid Date') {
          return { message: 'Entered date should be valid', result: false };
        }
        return true;
      default:
        return true;
    }
  }, []);

  const [gridProps] = useState<IGridProps>({
    columns: [
      {
        columntype: 'textbox',
        datafield: 'name',
        filtertype: 'input',
        text: 'Name',
        validateeverpresentrowwidgetvalue: validateFunc,
        width: 215
      },
      {
        datafield: 'productname',
        filtertype: 'checkedlist',
        text: 'Product',
        validateeverpresentrowwidgetvalue: validateFunc,
        width: 220
      },
      {
        cellsalign: 'right',
        cellsformat: 'd',
        datafield: 'date',
        filtertype: 'range',
        text: 'Ship Date',
        validateeverpresentrowwidgetvalue: validateFunc,
        width: 210
      },
      {
        cellsalign: 'right',
        datafield: 'quantity',
        filtertype: 'number',
        text: 'Qty.',
        validateeverpresentrowwidgetvalue: validateFunc
      }
    ],
    source: new jqx.dataAdapter(source)
  });

  const topBtnOnChecked = useCallback(() => {
    myGrid.current?.setOptions({ everpresentrowactions: 'add reset' });
  }, []);

  const bottomBtnOnChecked = useCallback(() => {
    myGrid.current?.setOptions({ everpresentrowactions: 'addBottom reset' });
  }, []);

  return (
    <div>
      <JqxGrid
        theme="material-purple"
        ref={myGrid}
        // @ts-ignore
        width="100%"
        source={gridProps.source}
        columns={gridProps.columns}
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
};

export default App;
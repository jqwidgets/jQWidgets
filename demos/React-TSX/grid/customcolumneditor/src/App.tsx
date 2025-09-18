import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRef, useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

const App = () => {
  const myInput1 = useRef<JqxInput>(null);
  const myInput2 = useRef<JqxInput>(null);

  const source = useMemo(() => ({
    datafields: [
      { name: 'firstname', type: 'string' },
      { name: 'lastname', type: 'string' },
      { name: 'productname', type: 'string' },
      { name: 'available', type: 'bool' },
      { name: 'quantity', type: 'number' },
      { name: 'price', type: 'number' },
      { name: 'date', type: 'date' }
    ],
    datatype: 'array',
    localdata: generatedata(200, false),
    updaterow: (rowid: any, rowdata: any, commit: any): void => {
      commit(true);
    }
  }), []);

  const getEditorDataAdapter = (datafield: string): any => {
    return new jqx.dataAdapter(source, { uniqueDataFields: [datafield] });
  };

  const columns = useMemo(() => [
    {
      columntype: 'template',
      createeditor: (row: number, cellvalue: any, editor: any, cellText: any, width: any, height: any): void => {
        ReactDOM.render(
          <JqxInput
            theme="material-purple"
            ref={myInput1}
            width={width}
            height={height}
            displayMember="firstname"
            source={getEditorDataAdapter('firstname')}
          />,
          editor[0]
        );
      },
      datafield: 'firstname',
      geteditorvalue: (row: number, cellvalue: any, editor: any): void => {
        return myInput1.current!.getOptions('value');
      },
      initeditor: (row: number, cellvalue: any, editor: any, celltext: any, pressedkey: any): void => {
        if (pressedkey) {
          myInput1.current!.val(pressedkey);
        } else {
          myInput1.current!.val(cellvalue);
        }
        myInput1.current!.selectAll();
      },
      text: 'First Name',
      width: 80
    },
    {
      columntype: 'template',
      createeditor: (row: number, cellvalue: any, editor: any, cellText: any, width: any, height: any) => {
        ReactDOM.render(
          <JqxInput
            theme="material-purple"
            ref={myInput2}
            width={width}
            height={height}
            displayMember="lastname"
            source={getEditorDataAdapter('lastname')}
          />,
          editor[0]
        );
      },
      datafield: 'lastname',
      geteditorvalue: (row: number, cellvalue: any, editor: any): void => {
        return myInput2.current!.getOptions('value');
      },
      initeditor: (row: number, cellvalue: any, editor: any, celltext: any, pressedkey: any): void => {
        if (pressedkey) {
          myInput2.current!.val(pressedkey);
        } else {
          myInput2.current!.val(cellvalue);
        }
        myInput2.current!.selectAll();
      },
      text: 'Last Name',
      width: 80
    },
    {
      columntype: 'template',
      createeditor: (row: number, cellvalue: any, editor: any, cellText: any, width: any, height: any): void => {
        editor.jqxDropDownList({
          checkboxes: true,
          displayMember: 'productname',
          height,
          selectionRenderer: () => {
            return '<span style="top: 4px; position: relative;">Please Choose:</span>';
          },
          source: getEditorDataAdapter('productname'),
          valueMember: 'productname',
          width
        });
      },
      datafield: 'productname',
      geteditorvalue: (row: number, cellvalue: any, editor: any): void => {
        return editor.val();
      },
      initeditor: (row: number, cellvalue: any, editor: any, celltext: any, pressedkey: any): void => {
        const items = editor.jqxDropDownList('getItems');
        editor.jqxDropDownList('uncheckAll');
        const values = cellvalue.split(/,\s*/);
        for (const value of values) {
          for (let i = 0; i < items.length; i++) {
            if (items[i].label === value) {
              editor.jqxDropDownList('checkIndex', i);
            }
          }
        }
      },
      text: 'Products'
    },
    {
      columntype: 'custom',
      createeditor: (row: number, cellvalue: any, editor: any, cellText: any, width: any, height: any): void => {
        editor.css('margin-top', '2px');
        editor.jqxSlider({ step: 1, mode: 'fixed', showTicks: false, min: 0, max: 30, width, height });
      },
      datafield: 'quantity',
      geteditorvalue: (row: number, cellvalue: any, editor: any): void => {
        return editor.val();
      },
      initeditor: (row: number, cellvalue: any, editor: any, celltext: any, pressedkey: any): void => {
        let value = parseInt(cellvalue, 10);
        if (isNaN(value)) {
          value = 0;
        }
        editor.jqxSlider('setValue', value);
      },
      text: 'Quantity',
      width: 200
    }
  ], [myInput1, myInput2, source]);

  const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

  return (
    <JqxGrid
      theme="material-purple"
      width="100%"
      source={dataAdapter}
      columns={columns}
      editable={true}
      selectionmode="singlecell"
    />
  );
};

export default App;
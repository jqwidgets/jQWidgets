import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useRef, useMemo, useCallback, useState } from 'react'
import { generatedata } from './generatedata'
import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput'
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist'
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid'
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput'
import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput'
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton'

const App = () => {
  const myGrid = useRef<JqxGrid>(null)
  const myInput = useRef<JqxInput>(null)
  const myDropDownList = useRef<JqxDropDownList>(null)
  const myDateTimeInput = useRef<JqxDateTimeInput>(null)
  const myNumberInput = useRef<JqxNumberInput>(null)
  const [everpresentRowActions, setEverpresentRowActions] = useState<'add reset' | 'addBottom reset'>('add reset')

  const source = useMemo(() => ({
    datafields: [
      { name: 'name', type: 'string' },
      { name: 'productname', type: 'string' },
      { name: 'available', type: 'bool' },
      { name: 'date', type: 'date' },
      { name: 'quantity', type: 'number' }
    ],
    datatype: 'array',
    localdata: generatedata(10, false)
  }), [])

  const getSourceAdapter = useCallback((name: any) => {
    const widgetSource = {
      datafields: [
        { name: 'name', type: 'string' },
        { name: 'productname', type: 'string' }
      ],
      datatype: 'array',
      localdata: generatedata(10, false)
    }
    const fields = []
    fields.push(name)
    const dataAdapter = new jqx.dataAdapter(widgetSource, { autoBind: true, autoSort: true, uniqueDataFields: fields, autoSortField: name })
    return dataAdapter.records
  }, [])

  const columns = useMemo<IGridProps['columns']>(() => [
    {
      columntype: 'textbox',
      createeverpresentrowwidget: (datafield: string, htmlElement: HTMLElement, popup: any, addCallback: any): void => {
        const element = htmlElement as any
        ReactDOM.render(
          <JqxInput theme={'material-purple'} ref={myInput} style={{ border: 'none' }}
            width={'100%'} height={30} source={getSourceAdapter('name')}
            popupZIndex={999999} placeHolder={'Enter Name: '} displayMember={'name'} />,
          element[0],
          () => { element[0].getElementsByTagName('input')[0].style.border = 'none' }
        )
      },
      datafield: 'name',
      filtertype: 'input',
      geteverpresentrowwidgetvalue: (datafield: string, htmlElement: HTMLElement): any => {
        const value = myInput.current!.getOptions('value')
        return value
      },
      reseteverpresentrowwidgetvalue: (datafield: string, htmlElement: HTMLElement): void => {
        myInput.current!.setOptions({ value: '' })
      },
      text: 'Name',
      width: 215
    },
    {
      createeverpresentrowwidget: (datafield: string, htmlElement: HTMLElement, popup: any, addCallback: any): void => {
        const element = htmlElement as any
        ReactDOM.render(
          <JqxDropDownList theme={'material-purple'} ref={myDropDownList} style={{ border: 'none' }}
            width={'100%'} height={30} source={getSourceAdapter('productname')}
            popupZIndex={999999} placeHolder={'Enter Product: '} displayMember={'productname'} />,
          element[0]
        )
      },
      datafield: 'productname',
      geteverpresentrowwidgetvalue: (datafield: string, htmlElement: HTMLElement): any => {
        const selectedItem = myDropDownList.current!.getSelectedItem()
        if (!selectedItem) {
          return ''
        }
        const value = selectedItem.label
        return value
      },
      reseteverpresentrowwidgetvalue: (datafield: string, htmlElement: HTMLElement): void => {
        myDropDownList.current!.clearSelection()
      },
      text: 'Product',
      width: 220
    },
    {
      cellsalign: 'right',
      cellsformat: 'd',
      createeverpresentrowwidget: (datafield: string, htmlElement: HTMLElement, popup: any, addCallback: any): void => {
        const element = htmlElement as any
        ReactDOM.render(
          <JqxDateTimeInput theme={'material-purple'} ref={myDateTimeInput} style={{ border: 'none' }}
            width={'100%'} height={30} value={null}
            popupZIndex={999999} placeHolder={'Enter Date: '} />,
          element[0]
        )
      },
      datafield: 'date',
      filtertype: 'range',
      geteverpresentrowwidgetvalue: (datafield: string, htmlElement: HTMLElement): any => {
        const value = myDateTimeInput.current!.getOptions('value')
        return value
      },
      reseteverpresentrowwidgetvalue: (datafield: string, htmlElement: HTMLElement): void => {
        myDateTimeInput.current!.setOptions({ value: null })
      },
      text: 'Ship Date',
      width: 210
    },
    {
      cellsalign: 'right',
      createeverpresentrowwidget: (datafield: string, htmlElement: HTMLElement, popup: any, addCallback: any): void => {
        const element = htmlElement as any
        ReactDOM.render(
          <JqxNumberInput theme={'material-purple'} ref={myNumberInput} style={{ border: 'none' }}
            width={'100%'} height={30} decimalDigits={0} inputMode={'simple'} />,
          element[0]
        )
      },
      datafield: 'quantity',
      filtertype: 'number',
      geteverpresentrowwidgetvalue: (datafield: string, htmlElement: HTMLElement): any => {
        const value = myNumberInput.current!.val()
        return value
      },
      reseteverpresentrowwidgetvalue: (datafield: string, htmlElement: HTMLElement): void => {
        myNumberInput.current!.setOptions({ value: '' })
      },
      text: 'Qty.'
    },
    { text: '', datafield: 'addButtonColumn', width: 50 },
    { text: '', datafield: 'resetButtonColumn', width: 50 }
  ], [getSourceAdapter])

  const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source])

  const topRadioBtnOnChecked = useCallback(() => {
    setEverpresentRowActions('add reset')
    myGrid.current!.setOptions({ everpresentrowactions: 'add reset' })
  }, [])

  const bottomRadioBtnOnChecked = useCallback(() => {
    setEverpresentRowActions('addBottom reset')
    myGrid.current!.setOptions({ everpresentrowactions: 'addBottom reset' })
  }, [])

  return (
    <div>
      <JqxGrid
        theme={'material-purple'}
        ref={myGrid}
        width={'100%'}
        source={dataAdapter}
        columns={columns}
        filterable={true}
        showeverpresentrow={true}
        editable={true}
        everpresentrowposition={'top'}
        everpresentrowactionsmode={'columns'}
        everpresentrowactions={everpresentRowActions}
        selectionmode={'multiplecellsadvanced'}
      />
      <br />
      <JqxRadioButton theme={'material-purple'} onChecked={topRadioBtnOnChecked} checked={everpresentRowActions === 'add reset'}>
        Add New Row to Top
      </JqxRadioButton>
      <JqxRadioButton theme={'material-purple'} onChecked={bottomRadioBtnOnChecked} checked={everpresentRowActions === 'addBottom reset'}>
        Add New Row to Botton
      </JqxRadioButton>
    </div>
  )
}

export default App
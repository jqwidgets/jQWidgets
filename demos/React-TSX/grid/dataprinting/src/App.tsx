import * as React from 'react'
import { useRef, useMemo } from 'react'
import { generatedata } from './generatedata'
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons'
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid'

const App = () => {
  const myGrid = useRef<JqxGrid>(null)

  const columns: IGridProps['columns'] = useMemo(
    () => [
      { text: 'First Name', datafield: 'firstname', width: 120 },
      { text: 'Last Name', datafield: 'lastname', width: 120 },
      { text: 'Product', datafield: 'productname', width: 177 },
      { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67, cellsalign: 'center', align: 'center' },
      { text: 'Ship Date', datafield: 'date', width: 120, align: 'right', cellsalign: 'right', cellsformat: 'd' },
      { text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right' },
      { text: 'Price', datafield: 'price', cellsalign: 'right', align: 'right', cellsformat: 'c2' }
    ],
    []
  )

  const source = useMemo(() => {
    return new jqx.dataAdapter({
      datafields: [
        { name: 'firstname', type: 'string' },
        { name: 'lastname', type: 'string' },
        { name: 'productname', type: 'string' },
        { name: 'available', type: 'bool' },
        { name: 'date', type: 'date' },
        { name: 'quantity', type: 'number' },
        { name: 'price', type: 'number' }
      ],
      datatype: 'array',
      localdata: generatedata(10)
    })
  }, [])

  const btnOnClick = () => {
    const gridContent = myGrid.current!.exportdata('html')
    const newWindow = window.open('', '', 'width=800, height=500')
    const document = newWindow!.document.open()
    const pageContent =
      '<!DOCTYPE html>\n' +
      '<html>\n' +
      '<head>\n' +
      '<meta charset="utf-8" />\n' +
      '<title>jQWidgets Grid</title>\n' +
      '</head>\n' +
      '<body>\n' + gridContent + '\n</body>\n</html>'
    document.write(pageContent)
    document.close()
    newWindow!.print()
  }

  return (
    <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
      <JqxGrid
        theme='material-purple'
        ref={myGrid}
        width='100%'
        source={source}
        columns={columns}
        sortable
        altrows
        autoheight
        selectionmode='multiplecellsadvanced'
      />
      <div style={{ marginTop: '20px' }}>
        <div style={{ float: 'left', marginLeft: '10px' }}>
          <JqxButton theme='material-purple' onClick={btnOnClick}>
            Print
          </JqxButton>
        </div>
      </div>
    </div>
  )
}

export default App
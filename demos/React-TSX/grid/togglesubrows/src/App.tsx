import * as React from 'react'
import { useRef, useState } from 'react'
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons'
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid'
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput'

function App() {
  const myGrid = useRef<JqxGrid>(null)
  const myInput = useRef<JqxInput>(null)
  const expandedGroupLog = useRef<HTMLSpanElement>(null)
  const collapsedGroupLog = useRef<HTMLSpanElement>(null)

  const source: any = {
    datafields: [
      { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName', type: 'string' },
      { name: 'ContactName', map: 'm\\:properties>d\\:ContactName', type: 'string' },
      { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle', type: 'string' },
      { name: 'City', map: 'm\\:properties>d\\:City', type: 'string' },
      { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode', type: 'string' },
      { name: 'Country', map: 'm\\:properties>d\\:Country', type: 'string' }
    ],
    datatype: 'xml',
    id: 'm\\:properties>d\\:CustomerID',
    record: 'content',
    root: 'entry',
    url: 'customers.xml'
  }

  const [columns] = useState<IGridProps['columns']>([
    { text: 'Company Name', datafield: 'CompanyName', width: 250 },
    { text: 'City', datafield: 'City', width: 120 },
    { text: 'Country', datafield: 'Country' }
  ])
  const [dataAdapter] = useState(() => new jqx.dataAdapter(source))

  const expandBtnOnClick = () => {
    const groupnum = myInput.current?.getOptions('value')
    if (!isNaN(groupnum)) {
      myGrid.current?.expandgroup(groupnum)
    }
  }

  const collapseBtnOnClick = () => {
    const groupnum = myInput.current?.getOptions('value')
    if (!isNaN(groupnum)) {
      myGrid.current?.collapsegroup(groupnum)
    }
  }

  const expandAllBtnOnClick = () => {
    myGrid.current?.expandallgroups()
  }

  const collapseAllBtnOnClick = () => {
    myGrid.current?.collapseallgroups()
  }

  const myGridOnGroupExpand = (event: any) => {
    const args = event.args
    if (expandedGroupLog.current) {
      expandedGroupLog.current.innerHTML = 'Group: ' + args.group + ', Level: ' + args.level
    }
  }

  const myGridOnGroupCollapse = (event: any) => {
    const args = event.args
    if (collapsedGroupLog.current) {
      collapsedGroupLog.current.innerHTML = 'Group: ' + args.group + ', Level: ' + args.level
    }
  }

  return (
    <div>
      <JqxGrid
        theme={'material-purple'}
        ref={myGrid}
        onGroupexpand={myGridOnGroupExpand}
        onGroupcollapse={myGridOnGroupCollapse}
        // @ts-ignore
        width={'100%'}
        source={dataAdapter}
        columns={columns}
        groupable={true}
        groups={['Country', 'City']}
      />
      <div style={{ marginTop: '30px' }}>
        <div style={{ float: 'left', marginLeft: '20px' }}>
          <JqxButton theme={'material-purple'} onClick={expandBtnOnClick} width={125} height={20}>Expand Group</JqxButton>
          <br />
          <div style={{ marginTop: '10px', marginBottom: '10px' }} />
          <JqxButton theme={'material-purple'} onClick={collapseBtnOnClick} width={125} height={20}>Collapse Group</JqxButton>
          <br />
          <div style={{ marginTop: '10px' }}>
            <span>Group:</span>
            <JqxInput theme={'material-purple'} ref={myInput} style={{ marginLeft: '10px', marginTop: '10px' }} width={30} value={'0.0'} />
          </div>
        </div>
        <div style={{ float: 'left', marginLeft: '20px' }}>
          <JqxButton theme={'material-purple'} onClick={expandAllBtnOnClick} width={125} height={20}>Expand All</JqxButton>
          <br />
          <div style={{ marginTop: '10px', marginBottom: '10px' }} />
          <JqxButton theme={'material-purple'} onClick={collapseAllBtnOnClick} width={125} height={20}>Collapse All</JqxButton>
          <br />
        </div>
        <div style={{ float: 'left', marginLeft: '20px' }}>
          <div style={{ fontWeight: 'bold' }}>
            <span>Event Log:</span>
          </div>
          <div style={{ marginTop: '10px' }}>
            <span>Expanded Group:</span>
            <span ref={expandedGroupLog} />
          </div>
          <div style={{ marginTop: '10px' }}>
            <span>Collapsed Group:</span>
            <span ref={collapsedGroupLog} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
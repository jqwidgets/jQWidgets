import * as React from 'react'
import JqxTreeMap, { ITreeMapProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreemap'

const App = () => {
  const [source] = React.useState(() => {
    const data = [
      { id: '2', parentid: '1', text: 'Hot Chocolate', value: '$5.2' },
      { id: '3', parentid: '1', text: 'Peppermint Hot Chocolate', value: '$4.0' },
      { id: '4', parentid: '1', text: 'Salted Caramel Hot Chocolate', value: '$2.4' },
      { id: '5', parentid: '1', text: 'White Hot Chocolate', value: '$2.5' },
      { id: '1', parentid: '-1', text: 'Chocolate Beverage', value: '$1.1' },
      { id: '6', parentid: '-1', text: 'Espresso Beverage', value: '$0.9' },
      { id: '7', parentid: '6', text: 'Caffe Americano', value: '$1.2' },
      { id: '8', parentid: '6', text: 'Caffe Latte', value: '$3.3' },
      { id: '9', parentid: '6', text: 'Caffe Mocha', value: '$2.5' },
      { id: '10', parentid: '6', text: 'Cappuccino', value: '$1.5' },
      { id: '11', parentid: '6', text: 'Pumpkin Spice Latte', value: '$1.6' },
      { id: '12', parentid: '-1', text: 'Frappuccino' },
      { id: '13', parentid: '12', text: 'Caffe Vanilla Frappuccino', value: '$1.2' }
    ]
    const source: any = {
      dataFields: [
        { name: 'id' },
        { name: 'parentid' },
        { name: 'text' },
        { name: 'value' }
      ],
      dataType: 'json',
      id: 'id',
      localData: data
    }
    const dataAdapter: any = new jqx.dataAdapter(source, { autoBind: true })
    return dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label' }])
  })

  const renderCallbacks = React.useMemo<ITreeMapProps['renderCallbacks']>(() => ({
    '*': (element: any, value: any) => {
      if (!value.parent) {
        element.css({
          backgroundColor: '#fff',
          border: '1px solid #aaa'
        })
      } else {
        const nThreshold = 105
        const bgDelta = (value.rgb.r * 0.299) + (value.rgb.g * 0.587) + (value.rgb.b * 0.114)
        const foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White'
        element.css({
          color: foreColor
        })
      }
    }
  }), [])

  return (
    <JqxTreeMap
      theme="material-purple"
      width="100%"
      height={600}
      source={source}
      baseColor="#0afaaa"
      renderCallbacks={renderCallbacks}
    />
  )
}

export default App
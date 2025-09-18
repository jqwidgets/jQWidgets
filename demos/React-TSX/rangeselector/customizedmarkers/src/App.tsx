import * as React from 'react'
import JqxRangeSelector, { IRangeSelectorProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrangeselector'

const App = () => {
  const markersFormatFunction = React.useCallback((value: number, position: string): string => {
    let side
    if (position === 'left') {
      side = 'From'
    } else if (position === 'right') {
      side = 'To'
    }
    return side + ': <span>' + value + '</span>'
  }, [])

  return (
    <JqxRangeSelector
      theme="material-purple"
      width="100%"
      height={100}
      min={0}
      max={200}
      range={{ from: 10, to: 50 }}
      labelsOnTicks={false}
      majorTicksInterval={20}
      markersFormatFunction={markersFormatFunction}
    />
  )
}

export default App
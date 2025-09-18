import * as React from 'react'
import JqxRangeSelector from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrangeselector'

function App() {
    const myRangeSelector = React.useRef<JqxRangeSelector>(null)

    React.useEffect(() => {
        myRangeSelector.current?.setRange(30, 60)
    }, [])

    return (
        <JqxRangeSelector
            theme="material-purple"
            ref={myRangeSelector}
            width="100%"
            height={100}
            min={0}
            max={100}
            range={{ from: 40, to: 60 }}
            rtl={true}
            majorTicksInterval={10}
            minorTicksInterval={10}
        />
    )
}

export default App
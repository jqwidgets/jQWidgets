import * as React from 'react';
 


import JqxRangeSelector from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrangeselector';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxRangeSelector theme={'material-purple'}
                // @ts-ignore
                width={'100%'} height={100} min={1000} max={10000}
                range={{ from: 3000, to: 5000 }} labelsFormat={'c'} markersFormat={'c'}
                majorTicksInterval={1500} minorTicksInterval={100} />
        );
    }
}

export default App;

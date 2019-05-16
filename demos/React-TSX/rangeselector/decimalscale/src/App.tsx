import * as React from 'react';
 


import JqxRangeSelector, { IRangeSelectorProps, jqx} from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrangeselector';

class App extends React.PureComponent<{}, IRangeSelectorProps> {

    constructor(props: {}) {
        super(props);

        const formatFunction = (value: number): string => {
            return jqx.dataFormat.formatNumber(value, 'f1') + " mm";
        }

        this.state = {
            labelsFormatFunction: formatFunction,
            markersFormatFunction: formatFunction
        }
    }

    public render() {
        return (
            <JqxRangeSelector theme={'material-purple'}
                // @ts-ignore
                width={'100%'} height={100} min={0} max={10}
                range={{ from: 2, to: 5 }} labelsOnTicks={false} majorTicksInterval={2.5}
                minorTicksInterval={0.1} labelsFormatFunction={this.state.labelsFormatFunction}
                markersFormatFunction={this.state.markersFormatFunction} />
        );
    }
}

export default App;

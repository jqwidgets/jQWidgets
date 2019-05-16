import * as React from 'react';
 


import JqxRangeSelector, { IRangeSelectorProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrangeselector';

class App extends React.PureComponent<{}, IRangeSelectorProps> {

    constructor(props: {}) {
        super(props);

        this.state = {
            labelsFormat: 'hh:mm tt',
            majorTicksInterval: { hours: 4 },
            markersFormat: 'hh:mm tt',
            max: new Date(2014, 5, 1, 24, 0, 0),
            min: new Date(2014, 5, 1, 0, 0, 0),
            minorTicksInterval: { minutes: 30 },
            range: { from: new Date(2014, 5, 1, 4, 0, 0), to: new Date(2014, 5, 1, 12, 0, 0) }
        }
    }

    public render() {
        return (
            <JqxRangeSelector theme={'material-purple'} 
                // @ts-ignore
                width={'100%'} height={100} min={this.state.min}
                max={this.state.max} range={this.state.range} labelsFormat={this.state.labelsFormat}
                markersFormat={this.state.markersFormat} majorTicksInterval={this.state.majorTicksInterval}
                minorTicksInterval={this.state.minorTicksInterval} />
        );
    }
}

export default App;

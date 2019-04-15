import * as React from 'react';
 


import JqxRangeSelector, { IRangeSelectorProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrangeselector';

class App extends React.PureComponent<{}, IRangeSelectorProps> {

    constructor(props: {}) {
        super(props);

        this.state = {
            max: new Date(2014, 11, 31),
            min: new Date(2014, 0, 1),
            range: { from: new Date(2014, 3, 15), to: new Date(2014, 7, 29) }
        }
    }

    public render() {
        return (
            <JqxRangeSelector theme={'material-purple'}
                // @ts-ignore
                width={'100%'} height={100} min={this.state.min} max={this.state.max}
                range={this.state.range} labelsOnTicks={false} majorTicksInterval={'month'}
                minorTicksInterval={'day'} labelsFormat={'MMM'} markersFormat={'d'} />
        );
    }
}

export default App;

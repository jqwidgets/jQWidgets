import * as React from 'react';
 


import JqxRangeSelector, { IRangeSelectorProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrangeselector';

class App extends React.PureComponent<{}, IRangeSelectorProps> {

    constructor(props: {}) {
        super(props);

        this.state = {
            markersFormatFunction: (value, position): string => {
                let side;
                if (position === "left") {
                    side = "From";
                } else if (position === "right") {
                    side = "To";
                };
                return side + ": <span>" + value + "</span>";
            }
        }
    }

    public render() {
        return (
            <JqxRangeSelector theme={'material-purple'}
                // @ts-ignore
                width={'100%'} height={100} min={0} max={200}
                range={{ from: 10, to: 50 }} labelsOnTicks={false} majorTicksInterval={20}
                markersFormatFunction={this.state.markersFormatFunction} />
        );
    }
}

export default App;

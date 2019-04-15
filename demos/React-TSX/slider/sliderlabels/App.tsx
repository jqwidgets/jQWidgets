import * as React from 'react';
 


import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

class App extends React.PureComponent<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxSlider theme={'material-purple'} style={{ marginTop: 40 }}
                min={0}
                max={20}
                value={7}
                ticksFrequency={5}
                showMinorTicks={true}
                minorTicksFrequency={1}
                showTickLabels={true}
                height={60}
                width={370}
            />
        );
    }
}

export default App;

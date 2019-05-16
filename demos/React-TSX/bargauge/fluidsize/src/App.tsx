import * as React from 'react';
 


import './App.css';

import JqxBarGauge, { IBarGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge';

class App extends React.PureComponent<{}, IBarGaugeProps> {

    constructor(props: {}) {
        super(props);

        this.state = {
            values: [32, 11, 100, 49, 69, 20]
        };
    }

    public render() {
        return ( 
            <JqxBarGauge
                width={'75%'} height={'75%'}
                colorScheme={'scheme11'} values={this.state.values}
            />
        );
    }
}

export default App;

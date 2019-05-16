import * as React from 'react';
 


import JqxBarGauge, { IBarGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge';

class App extends React.PureComponent<{}, IBarGaugeProps> {

    constructor(props: {}) {
        super(props);

        this.state = {
            tooltip: {                
                formatFunction: (value: number): string => {
                    return ('Year: 2016<br/>Price Index:' + value);
                },
                visible: true  
            },
            values: [102, 115, 130, 137]
        };
    }

    public render() {
        return (
            <JqxBarGauge
                // @ts-ignore
                width={'100%'} max={150}
                colorScheme={'scheme02'} values={this.state.values} tooltip={this.state.tooltip}
            />
        );
    }
}

export default App;

import * as React from 'react';
 


import JqxBarGauge, { IBarGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge';

class App extends React.PureComponent<{}, IBarGaugeProps> {

    constructor(props: {}) {
        super(props);

        this.state = {
            labels: {  
                formatFunction: (value: number): string => {
                    return value + ' m';
                },
                indent: 15,
                precision: 1                
            },
            values: [12, -35, -14.78, 29.5, 23.124, 41]
        };
    }

    public render() {
        return (
            <JqxBarGauge
                // @ts-ignore
                width={'100%'} max={45}
                min={-45} baseValue={0} labels={this.state.labels} values={this.state.values} 
                startAngle={270} endAngle={90} animationDuration={0}
                relativeInnerRadius={0.2} colorScheme={'scheme02'}
            />
        );
    }
}

export default App;

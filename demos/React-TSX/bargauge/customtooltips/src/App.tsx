import * as React from 'react';
 


import './App.css';

import JqxBarGauge, { IBarGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge';

class App extends React.PureComponent<{}, IBarGaugeProps> {

    constructor(props: {}) {
        super(props);

        this.state = {
            labels: {  
                font: {
                    size: 12
                },
                formatFunction: (value: number): string => {
                    return value + ' pts';
                },
                indent: 10
            },
            title: {
                subtitle: {
                    text: '(boundary - 33 points)'
                },
                text: 'Ranking'
            },
            tooltip: {
                classname: 'myTooltip',
                formatFunction: (value: string) => {
                    const realVal = parseInt(value, 10);
                    const player = this.state.values!.indexOf(realVal) + 1; 
                    return 'Player ' + player + ': ' + realVal + ' points'; 
                },
                visible: true
            },
            values: [25, 46, 6, 55, 14, 22, 57, 40, 87, 20]
        };
    }

    public render() {
        return (
            <JqxBarGauge
                // @ts-ignore
                width={'100%'} max={90}
                labels={this.state.labels} values={this.state.values} baseValue={33}
                startAngle={180} endAngle={-65} title={this.state.title}
                colorScheme={'scheme04'} tooltip={this.state.tooltip}
            />
        );
    }
}

export default App;

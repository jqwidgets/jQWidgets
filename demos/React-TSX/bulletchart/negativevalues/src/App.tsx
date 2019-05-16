import * as React from 'react';
 

import JqxBulletChart, { IBulletChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbulletchart';

class App extends React.PureComponent<{}, IBulletChartProps> {

    constructor(props: {}) {
        super(props);

        this.state = {
            pointer: {
                color: 'Black',
                label: 'Profit',
                size: '25%',
                value: -20
            },
            ranges: [
                { color: '#000000', endValue: 150, opacity: 0.5, startValue: -50 },
                { color: '#000000', endValue: 200, opacity: 0.3, startValue: 150 },
                { color: '#000000', endValue: 250, opacity: 0.1, startValue: 200 }
            ],
            target: {
                color: 'Black',
                label: 'Target profit',
                size: 4,
                value: 200
            },
            ticks: {
                interval: 50,
                position: 'far',
                size: 10
            }
        }
    };

    public render() {
        return (
            <JqxBulletChart
                // @ts-ignore
                width={'100%'} height={80} barSize={'40%'} ranges={this.state.ranges}
                title={'Profit'} description={'(1000s)'} ticks={this.state.ticks} 
                pointer={this.state.pointer} target={this.state.target} showTooltip={true}
            />
        );
    }
}

export default App;

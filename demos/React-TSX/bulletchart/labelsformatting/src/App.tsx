import * as React from 'react';
 

import JqxBulletChart, { IBulletChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbulletchart';

class App extends React.PureComponent<{}, IBulletChartProps> {

    constructor(props: {}) {
        super(props);

        this.state = {
            description: 'on 28 May',
            labelsFormatFunction: (value: string, position: string): string => {
                const valueNum = parseFloat(value);
                let labelsColor;
                if (valueNum < 10) {
                    labelsColor = '#0099FF';
                }
                else if (valueNum < 15) {
                    labelsColor = '#006600';
                }
                else if (valueNum < 20) {
                    labelsColor = '#FF6600';
                }
                else {
                    labelsColor = '#FF4526';
                }
                if (position === 'near') {
                    return '<span style="color: ' + labelsColor + ';">' + (valueNum * 1.8 + 32) + '&deg;F</span>';
                }
                else {
                    return valueNum + '&deg;C';
                }
            },
            pointer: {
                color: '#181818',
                size: '25%',
                value: 11
            },
            ranges: [
                { color: '#0099FF', endValue: 10, opacity: 1, startValue: 0 },
                { color: '#006600', endValue: 15, opacity: 1, startValue: 10 },
                { color: '#FF6600', endValue: 20, opacity: 1, startValue: 15 },
                { color: '#FF4526', endValue: 25, opacity: 1, startValue: 20 }
            ],
            target: {
                color: '#181818',
                size: 4,
                value: 15
            },
            ticks: {
                interval: 5,
                position: 'both',
                size: 10
            },
            title: 'Temperature in Boston, Mass.',
            tooltipFormatFunction: (value: number, target: number): string => {
                return '<div>Temperature on May 28: <strong>' +
                    (value * 1.8 + 32) + '&deg;F</strong> (' + value +
                    '&deg;C)</div><div>Average temperature in May: <strong>' +
                    (target * 1.8 + 32) + '&deg;F</strong> (' + target + '&deg;C)</div>'
            }
        }
    };


    public render() {
        return (
            <JqxBulletChart
                width={150} height={500} barSize={'35%'} labelsFormat={'c'}
                title={this.state.title} description={this.state.description}
                showTooltip={true} labelsFormatFunction={this.state.labelsFormatFunction}
                tooltipFormatFunction={this.state.tooltipFormatFunction} ticks={this.state.ticks}
                ranges={this.state.ranges} pointer={this.state.pointer} target={this.state.target}
                orientation={'vertical'}
            />
        );
    }
}

export default App;

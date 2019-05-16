import * as React from 'react';
 

import JqxBulletChart, { IBulletChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbulletchart';

class App extends React.PureComponent<{}, IBulletChartProps> {

    constructor(props: {}) {
        super(props);

        this.state = {
            pointer: {
                color: '#1E90FF',
                label: 'Grade',
                size: '25%',
                value: 83
            },
            ranges: [
                { color: '#191970', endValue: 60, startValue: 0 },
                { color: '#191970', endValue: 70, startValue: 60 },
                { color: '#191970', endValue: 80, startValue: 70 },
                { color: '#191970', endValue: 90, startValue: 80 },
                { color: '#191970', endValue: 100, startValue: 90 }
            ],
            target: {
                color: '#00FFFF',
                label: 'Average grade',
                size: 4,
                value: 75
            },
            ticks: {
                interval: 10,
                position: 'far',
                size: 10
            },
            tooltipFormatFunction: (value: number, target: number): string => {
                const currentGrade = this.pointsToGrade(value);
                const averageGrade = this.pointsToGrade(target);
                return '<div>Grade: <strong>' + currentGrade + '</strong> (' + value +
                    ' points)</div><div>Average grade: <strong>' + averageGrade +
                    '</strong> (' + target + ' points)</div>';
            }
        }
    };

    public render() {
        return (
            <div>
                <label style={{ fontSize: '13px', fontFamily: 'Verdana' }}>
                    Hover over the pointer or target for more information.
                </label>
                <JqxBulletChart
                    // @ts-ignore
                    width={'100%'} height={100} barSize={'50%'} ranges={this.state.ranges} 
                    ticks={this.state.ticks} title={'Student grade'} description={'(in points)'}
                    pointer={this.state.pointer} target={this.state.target} showTooltip={true}
                    tooltipFormatFunction={this.state.tooltipFormatFunction} 
                />
            </div>
        );
    }

    private pointsToGrade(points: number): string {
        let grade;
        if (points < 60) {
            grade = 'E';
        }
        else if (points < 70) {
            grade = 'D';
        }
        else if (points < 80) {
            grade = 'C';
        }
        else if (points < 90) {
            grade = 'B';
        }
        else {
            grade = 'A';
        }
        return grade;
    };
}

export default App;

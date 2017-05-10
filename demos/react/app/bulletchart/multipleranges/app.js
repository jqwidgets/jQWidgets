import React from 'react';
import ReactDOM from 'react-dom';

import JqxBulletChart from '../../../jqwidgets-react/react_jqxbulletchart.js';

class App extends React.Component {
    pointsToGrade(points) {
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
    render() {
        let ranges =
            [
                { startValue: 0, endValue: 60, color: '#191970' },
                { startValue: 60, endValue: 70, color: '#191970' },
                { startValue: 70, endValue: 80, color: '#191970' },
                { startValue: 80, endValue: 90, color: '#191970' },
                { startValue: 90, endValue: 100, color: '#191970' }
            ];

        let pointer = { value: 83, label: 'Grade', size: '25%', color: '#1E90FF' };

        let target = { value: 75, label: 'Average grade', size: 4, color: '#00FFFF' };

        let ticks = { position: 'far', interval: 10, size: 10 };

        let tooltipFormatFunction = (value, target) => {
            let currentGrade = this.pointsToGrade(value);
            let averageGrade = this.pointsToGrade(target);
            return '<div>Grade: <strong>' + currentGrade + '</strong> (' + value +
                ' points)</div><div>Average grade: <strong>' + averageGrade +
                '</strong> (' + target + ' points)</div>';
        }

        return (
            <div>
                <label style={{ fontSize: 13, fontFamily: 'Verdana' }}>
                    Hover over the pointer or target for more information.
                </label>
                <JqxBulletChart
                    width={700} height={100} barSize={'50%'} ranges={ranges} ticks={ticks}
                    title={'Student grade'} description={'(in points)'} pointer={pointer}
                    target={target} showTooltip={true} tooltipFormatFunction={tooltipFormatFunction}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

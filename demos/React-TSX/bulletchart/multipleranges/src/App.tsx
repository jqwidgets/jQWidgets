import React, { useCallback } from 'react';
import JqxBulletChart, { IBulletChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbulletchart';

function pointsToGrade(points: number): string {
    if (points < 60) return 'E';
    if (points < 70) return 'D';
    if (points < 80) return 'C';
    if (points < 90) return 'B';
    return 'A';
}

const pointer = {
    color: '#1E90FF',
    label: 'Grade',
    size: '25%',
    value: 83
};

const ranges = [
    { color: '#191970', endValue: 60, startValue: 0 },
    { color: '#191970', endValue: 70, startValue: 60 },
    { color: '#191970', endValue: 80, startValue: 70 },
    { color: '#191970', endValue: 90, startValue: 80 },
    { color: '#191970', endValue: 100, startValue: 90 }
];

const target = {
    color: '#00FFFF',
    label: 'Average grade',
    size: 4,
    value: 75
};

const ticks = {
    interval: 10,
    position: 'far',
    size: 10
};

const App = () => {
    const tooltipFormatFunction = useCallback((value: number, targetValue: number): string => {
        const currentGrade = pointsToGrade(value);
        const averageGrade = pointsToGrade(targetValue);
        return (
            '<div>Grade: <strong>' + currentGrade + '</strong> (' + value +
            ' points)</div><div>Average grade: <strong>' + averageGrade +
            '</strong> (' + targetValue + ' points)</div>'
        );
    }, []);

    return (
        <div>
            <label style={{ fontSize: '13px', fontFamily: 'Verdana' }}>
                Hover over the pointer or target for more information.
            </label>
            <JqxBulletChart
                // @ts-ignore
                width={'100%'}
                height={100}
                barSize={'50%'}
                ranges={ranges}
                ticks={ticks}
                title={'Student grade'}
                description={'(in points)'}
                pointer={pointer}
                target={target}
                showTooltip={true}
                tooltipFormatFunction={tooltipFormatFunction}
            />
        </div>
    );
};

export default App;
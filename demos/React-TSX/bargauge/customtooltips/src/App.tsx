import * as React from 'react';
import './App.css';
import JqxBarGauge, { IBarGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge';

const App = () => {
    const values = [25, 46, 6, 55, 14, 22, 57, 40, 87, 20];

    const labels: IBarGaugeProps['labels'] = {
        font: {
            size: 12
        },
        formatFunction: (value: number): string => {
            return value + ' pts';
        },
        indent: 10
    };

    const title: IBarGaugeProps['title'] = {
        subtitle: {
            text: '(boundary - 33 points)'
        },
        text: 'Ranking'
    };

    const tooltip: IBarGaugeProps['tooltip'] = {
        classname: 'myTooltip',
        formatFunction: (value: string) => {
            const realVal = parseInt(value, 10);
            const player = values.indexOf(realVal) + 1;
            return 'Player ' + player + ': ' + realVal + ' points';
        },
        visible: true
    };

    return (
        <JqxBarGauge
            width={'100%'}
            max={90}
            labels={labels}
            values={values}
            baseValue={33}
            startAngle={180}
            endAngle={-65}
            title={title}
            colorScheme={'scheme04'}
            tooltip={tooltip}
        />
    );
};

export default App;
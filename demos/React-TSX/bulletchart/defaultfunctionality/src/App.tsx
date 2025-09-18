import * as React from 'react';
import JqxBulletChart, { IBulletChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbulletchart';

const App = () => {
    const [state] = React.useState<IBulletChartProps>({
        description: '(U.S. $ in thousands)',
        pointer: {
            color: 'Black',
            label: 'Revenue 2019 YTD',
            size: '25%',
            value: 270
        },
        ranges: [
            { color: '#000000', endValue: 200, opacity: 0.5, startValue: 0 },
            { color: '#000000', endValue: 250, opacity: 0.3, startValue: 200 },
            { color: '#000000', endValue: 300, opacity: 0.1, startValue: 250 }
        ],
        target: {
            color: 'Black',
            label: 'Revenue 2018 YTD',
            size: 4,
            value: 260
        },
        ticks: {
            interval: 50,
            position: 'both',
            size: 10
        },
        title: 'Revenue 2019 YTD'
    });

    return (
        <JqxBulletChart
            width={'100%'}
            height={80}
            barSize={'40%'}
            labelsFormat={'c'}
            showTooltip={true}
            title={state.title}
            description={state.description}
            ranges={state.ranges}
            pointer={state.pointer}
            target={state.target}
            ticks={state.ticks}
        />
    );
};

export default App;
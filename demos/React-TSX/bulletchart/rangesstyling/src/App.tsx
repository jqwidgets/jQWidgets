import * as React from 'react';
import JqxBulletChart, { IBulletChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbulletchart';

function App() {
    const pointer = {
        label: 'Revenue 2019 YTD',
        size: '25%',
        value: 270
    };

    const ranges = [
        { color: '#CC0000', endValue: 200, opacity: 1, startValue: 0 },
        { color: '#FFD633', endValue: 250, opacity: 1, startValue: 200 },
        { color: '#00CC00', endValue: 300, opacity: 1, startValue: 250 }
    ];

    const target = {
        label: 'Revenue 2018 YTD',
        size: 4,
        value: 260
    };

    const ticks = {
        interval: 50,
        position: 'far',
        size: 10
    };

    return (
        <JqxBulletChart
            // @ts-ignore
            width={'100%'}
            height={80}
            barSize={'40%'}
            ranges={ranges}
            title={'Revenue 2019 YTD'}
            description={'(U.S. $ in thousands)'}
            ticks={ticks}
            pointer={pointer}
            target={target}
            showTooltip={true}
            labelsFormat={'c'}
        />
    );
}

export default App;
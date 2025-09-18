import * as React from 'react';
import JqxBulletChart, { IBulletChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbulletchart';

const App = () => {
    const pointer: IBulletChartProps['pointer'] = {
        color: 'Black',
        label: 'Revenue 2019 YTD',
        size: '25%',
        value: 270
    };

    const ranges: IBulletChartProps['ranges'] = [
        { color: '#000000', endValue: 200, opacity: 0.5, startValue: 0 },
        { color: '#000000', endValue: 250, opacity: 0.3, startValue: 200 },
        { color: '#000000', endValue: 300, opacity: 0.1, startValue: 250 }
    ];

    const target: IBulletChartProps['target'] = {
        color: 'Black',
        label: 'Revenue 2018 YTD',
        size: 4,
        value: 260
    };

    const ticks: IBulletChartProps['ticks'] = {
        interval: 50,
        position: 'far',
        size: 10
    };

    return (
        <div style={{ marginLeft: '1em' }}>
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
                rtl={true}
            />
        </div>
    );
};

export default App;
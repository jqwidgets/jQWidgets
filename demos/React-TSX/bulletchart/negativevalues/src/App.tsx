import * as React from 'react';
import JqxBulletChart, { IBulletChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbulletchart';

function App() {
    const [pointer] = React.useState<IBulletChartProps['pointer']>({
        color: 'Black',
        label: 'Profit',
        size: '25%',
        value: -20,
    });

    const [ranges] = React.useState<IBulletChartProps['ranges']>([
        { color: '#000000', endValue: 150, opacity: 0.5, startValue: -50 },
        { color: '#000000', endValue: 200, opacity: 0.3, startValue: 150 },
        { color: '#000000', endValue: 250, opacity: 0.1, startValue: 200 },
    ]);

    const [target] = React.useState<IBulletChartProps['target']>({
        color: 'Black',
        label: 'Target profit',
        size: 4,
        value: 200,
    });

    const [ticks] = React.useState<IBulletChartProps['ticks']>({
        interval: 50,
        position: 'far',
        size: 10,
    });

    return (
        <JqxBulletChart
            // @ts-ignore
            width={'100%'}
            height={80}
            barSize={'40%'}
            ranges={ranges}
            title={'Profit'}
            description={'(1000s)'}
            ticks={ticks}
            pointer={pointer}
            target={target}
            showTooltip={true}
        />
    );
}

export default App;
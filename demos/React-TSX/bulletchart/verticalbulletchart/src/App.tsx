import * as React from 'react';
import JqxBulletChart, { IBulletChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbulletchart';

const App = () => {
    const [pointer] = React.useState({
        color: 'Black',
        label: 'Revenue 2019 YTD',
        size: '25%',
        value: 270
    });

    const [ranges] = React.useState([
        { color: '#000000', endValue: 200, opacity: 0.5, startValue: 0 },
        { color: '#000000', endValue: 250, opacity: 0.3, startValue: 200 },
        { color: '#000000', endValue: 300, opacity: 0.1, startValue: 250 }
    ]);

    const [target] = React.useState({
        color: 'Black',
        label: 'Revenue 2018 YTD',
        size: 4,
        value: 260
    });

    const [ticks] = React.useState({
        interval: 50,
        position: 'both',
        size: 10
    });

    return (
        <JqxBulletChart
            width={150}
            height={500}
            barSize={'35%'}
            ranges={ranges}
            ticks={ticks}
            title={'Revenue 2019 YTD'}
            description={'(U.S. $ in thousands)'}
            animationDuration={0}
            pointer={pointer}
            target={target}
            labelsFormat={'c'}
            showTooltip={true}
            orientation={'vertical'}
        />
    );
};

export default App;